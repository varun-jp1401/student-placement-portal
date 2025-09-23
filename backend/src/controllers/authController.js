const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class AuthController {
    constructor(StudentModel, StaffModel) {
        this.StudentModel = StudentModel;
        this.StaffModel = StaffModel;
    }

    async signupStudent(req, res) {
        const { name, email, password, rollNumber, department, year, cgpa } = req.body;
        
        try {
            // Check if student already exists
            const existingStudent = await this.StudentModel.findOne({ 
                $or: [{ email }, { rollNumber }] 
            });
            
            if (existingStudent) {
                return res.status(400).json({ 
                    message: 'Student with this email or roll number already exists' 
                });
            }

            // Hash password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            const newStudent = await this.StudentModel.create({ 
                name, 
                email, 
                password: hashedPassword,
                rollNumber,
                department,
                year,
                cgpa: parseFloat(cgpa)
            });

            // Remove password from response
            const studentResponse = newStudent.toObject();
            delete studentResponse.password;

            res.status(201).json({ 
                message: 'Student registered successfully', 
                student: studentResponse 
            });
        } catch (error) {
            console.error('Student signup error:', error);
            res.status(500).json({ 
                message: 'Error registering student', 
                error: error.message 
            });
        }
    }

    async loginStudent(req, res) {
        const { email, password } = req.body;
        
        try {
            const student = await this.StudentModel.findOne({ email }); // Remove isActive: true
            
            if (!student) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Compare password
            const isPasswordValid = await bcrypt.compare(password, student.password);
            
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { 
                    id: student._id, 
                    email: student.email, 
                    type: 'student' 
                },
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '24h' }
            );

            // Remove password from response
            const studentResponse = student.toObject();
            delete studentResponse.password;

            res.status(200).json({ 
                message: 'Login successful', 
                student: studentResponse,
                token 
            });
        } catch (error) {
            console.error('Student login error:', error);
            res.status(500).json({ 
                message: 'Error logging in', 
                error: error.message 
            });
        }
    }

    async signupStaff(req, res) {
        const { name, email, password, employeeId, designation, department } = req.body;
        
        try {
            // Check if staff already exists
            const existingStaff = await this.StaffModel.findOne({ 
                $or: [{ email }, { employeeId }] 
            });
            
            if (existingStaff) {
                return res.status(400).json({ 
                    message: 'Staff with this email or employee ID already exists' 
                });
            }

            // Hash password
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(password, saltRounds);

            // Set default permissions based on department
            let permissions = ['view_analytics'];
            if (department === 'placement') {
                permissions = ['manage_students', 'manage_companies', 'schedule_interviews', 'view_analytics'];
            }

            const newStaff = await this.StaffModel.create({ 
                name, 
                email, 
                password: hashedPassword,
                employeeId,
                designation,
                department,
                permissions
            });

            // Remove password from response
            const staffResponse = newStaff.toObject();
            delete staffResponse.password;

            res.status(201).json({ 
                message: 'Staff registered successfully', 
                staff: staffResponse 
            });
        } catch (error) {
            console.error('Staff signup error:', error);
            res.status(500).json({ 
                message: 'Error registering staff', 
                error: error.message 
            });
        }
    }

    async loginStaff(req, res) {
        const { email, password } = req.body;
        
        try {
            const staff = await this.StaffModel.findOne({ email, isActive: true });
            
            if (!staff) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Compare password
            const isPasswordValid = await bcrypt.compare(password, staff.password);
            
            if (!isPasswordValid) {
                return res.status(401).json({ message: 'Invalid email or password' });
            }

            // Generate JWT token
            const token = jwt.sign(
                { 
                    id: staff._id, 
                    email: staff.email, 
                    type: 'staff' 
                },
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '24h' }
            );

            // Remove password from response
            const staffResponse = staff.toObject();
            delete staffResponse.password;

            res.status(200).json({ 
                message: 'Login successful', 
                staff: staffResponse,
                token 
            });
        } catch (error) {
            console.error('Staff login error:', error);
            res.status(500).json({ 
                message: 'Error logging in', 
                error: error.message 
            });
        }
    }
}

module.exports = AuthController;