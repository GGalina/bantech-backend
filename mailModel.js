const Joi = require('joi');

const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

const emailSchema = Joi.object({
    name: Joi.string().min(2).max(32).required(),
    email: Joi.string().email().pattern(emailPattern).required(),
    subject: Joi.string().allow('').optional(),
    message: Joi.string().min(6).required(),
});

module.exports = {
  emailSchema,
};
