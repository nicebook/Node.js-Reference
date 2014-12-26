var Joi = require('joi');

var schema = Joi.string().min(10);

var result = Joi.validate('1234567890', schema);

console.log(result.error);
