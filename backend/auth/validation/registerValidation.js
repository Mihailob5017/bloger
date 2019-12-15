const Joi = require("@hapi/Joi");

module.exports = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  username: Joi.string()
    .required()
    .min(5)
    .max(255),
  email: Joi.string()
    .email()
    .required()
    .min(6)
    .max(255),
    password: Joi.string()
    .required()
    .min(6)
    .max(1024)
});
