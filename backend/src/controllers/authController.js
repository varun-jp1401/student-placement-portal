class AuthController {
    constructor(StudentModel, StaffModel) {
        this.StudentModel = StudentModel;
        this.StaffModel = StaffModel;
    }

    async signupStudent(req, res) {
        const { name, email, password } = req.body;
        try {
            const newStudent = await this.StudentModel.create({ name, email, password });
            res.status(201).json({ message: 'Student registered successfully', student: newStudent });
        } catch (error) {
            res.status(500).json({ message: 'Error registering student', error });
        }
    }

    async loginStudent(req, res) {
        const { email, password } = req.body;
        try {
            const student = await this.StudentModel.findOne({ email, password });
            if (student) {
                res.status(200).json({ message: 'Login successful', student });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }

    async signupStaff(req, res) {
        const { name, email, password } = req.body;
        try {
            const newStaff = await this.StaffModel.create({ name, email, password });
            res.status(201).json({ message: 'Staff registered successfully', staff: newStaff });
        } catch (error) {
            res.status(500).json({ message: 'Error registering staff', error });
        }
    }

    async loginStaff(req, res) {
        const { email, password } = req.body;
        try {
            const staff = await this.StaffModel.findOne({ email, password });
            if (staff) {
                res.status(200).json({ message: 'Login successful', staff });
            } else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error logging in', error });
        }
    }
}

module.exports = AuthController;