const { hash } = require('bcryptjs');
const User = require('../models/Users');


module.exports = {
    async handle(req, res) {
        const { name, email, password } = req.body;


        if (!email || !name || !password) {
            return res.status(400).json("fill all fields");
        }

        const user = await User.findOne({ where: { email: email } });

        if (user) {
            return res.status(400).json("email already registered")
        }

        const passwordHash = await hash(password, 8);
        const newuser = await User.create({ name, email, password: passwordHash });

        return res.json(newuser);
    }
};