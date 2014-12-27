var Joi = require('joi');

var schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8),
    email: Joi.string().email(),
    gender: [
        Joi.string().valid('male').insensitive(),
        Joi.string().valid('female').insensitive()
    ]
});

var result = Joi.validate({
    username: 'fred',
    password: '12345678',
    email: 'fred@mandice.com',
    gender: 'malea'
}, schema);

console.log(result.error);
