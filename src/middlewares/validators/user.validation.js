const Joi = require('joi');

exports.validate = function (data) {
    const userSchemaValidation = Joi.object({
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        email: Joi.string().email().required(),
        isAdmin: Joi.boolean().required(),
        age: Joi.number().required(),
        password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/)
    });
    return userSchemaValidation.validate(data);
      
}
