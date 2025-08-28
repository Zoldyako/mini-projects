import Joi from "joi";

const userScheme = Joi.object({
    username: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required(),
});

const validateUser = (req, res, next) => {
    const { error } = userScheme.validate(req.body);

    if (error) {
        return res.status(400).json({
            status: 400,
            message: error.details[0].message,
        });
    }
    next();
};

export default validateUser;
