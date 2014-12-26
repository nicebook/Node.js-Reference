var Joi = require('joi');

var schema = Joi.string().min(10);

var result = Joi.validate('12345', schema);

console.log(result.error);
