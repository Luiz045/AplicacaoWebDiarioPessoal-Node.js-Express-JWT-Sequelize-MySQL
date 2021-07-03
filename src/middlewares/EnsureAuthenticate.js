const { verify } = require("jsonwebtoken");
const User = require('../models/Users');


module.exports = {
    async verify(req, res, next) {
        const authToken = req.headers.authorization;

        if (!authToken) {
            return res.status(401).end();
        }

        const [, Token] = authToken.split(" ");

        try {
            const encode = verify(Token, "68a4c9cdd5f6f58468df4dcb96nocfa0")
            const user = await User.findOne({ where: { email: encode["sub"] } });
            global.CurrentUser = user.id
            next();

        } catch (err) {
            return res.status(401).end();
        }

    }
}