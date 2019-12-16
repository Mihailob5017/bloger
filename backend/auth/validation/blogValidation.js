const Joi = require("@hapi/joi");

module.exports = Joi.object({
  username: Joi.string()
    .required()
    .min(5)
    .max(255),
  header: Joi.string()
    .required()
    .max(255),
  body: Joi.string()
    .required()
    .max(2048)
});
