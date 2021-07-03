const Register = require("../models/Registers");

module.exports = {
    async handle(req, res) {
        const { contents } = req.body;

        if (!contents) {
            return res.status(400).json("fill all fields");
        }

        const register = await Register.create({ contents, user_id: global.CurrentUser });

        return res.json(register);
    }
};