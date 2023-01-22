const { pomoSchema } = require("./schemas");

module.exports.validatePomodoro = (req, res, next) => {
    const { err } = pomoSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
    } else {
        next();
    };
};