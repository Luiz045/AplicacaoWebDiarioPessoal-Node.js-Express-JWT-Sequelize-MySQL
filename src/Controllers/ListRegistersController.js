const Register = require("../models/Registers");

module.exports = {
    async handle(req, res) {

        const registers = await Register.findAll({ where: { user_id: global.CurrentUser } })
        return res.json(registers);
    }
};