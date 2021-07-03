const { compare } = require("bcryptjs");
const { sign } = require("jsonwebtoken");
const User = require("../models/Users");

module.exports = {
    async handle(req, res) {
        const { email, password } = req.body

        if (!email || !password) {
            return res.status(400).json("fill all fields");
        }

        const user = await User.findOne({ where: { email: email } });

        if (!user) {
            return res.status(401).json("E-mail or password incorrects");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            return res.status(401).json("E-mail or password incorrects");
        }

        const token = sign({ email: user.email }, "68a4c9cdd5f6f58468df4dcb96nocfa0", { subject: user.email, expiresIn: "1d" });

        return res.json(token);
    }
}