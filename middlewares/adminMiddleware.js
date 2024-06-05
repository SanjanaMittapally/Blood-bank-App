const userModel = require('../models/userModel');

const adminMiddleware = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.body.userId);

        if (user?.role !== 'admin') {
            return res.status(401).send({
                success: false,
                message: "Auth Failed",
                error,
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error);
        return res.status(401).send({
            success: false,
            message: "Auth Failed, ADMIN API",
            error,
        });
    }
}

module.exports = adminMiddleware;