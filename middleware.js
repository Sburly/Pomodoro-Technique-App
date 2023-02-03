const { pomoSchema } = require("./schemas");

module.exports.validatePomodoro = (req, res, next) => {
    const { error } = pomoSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(",");
        console.log(msg);
    } else {
        next();
    };
};