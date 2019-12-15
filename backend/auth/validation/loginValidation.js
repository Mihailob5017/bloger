const Joi = require("@hapi/Joi");
module.exports = Joi.object({
  username: Joi.string()
    .min(5)
    .max(255),
  email: Joi.string()
    .min(6)
    .max(255),
  password: Joi.string()
    .min(6)
    .max(1024)
});
