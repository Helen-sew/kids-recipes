const ajv = require('ajv');   //require ajv - json schema validator library 
const Ajv = new ajv( {
    useDefaults: true,
    coerceTypes: true,
    allErrors: true,
});
const User = require('./schema/users');
const validator = Ajv.compile(User); 
const ValidationError = require('../exceptions/ValidationError');

//to make validation function 
module.exports = {
    validate(data) {
        const isValid = validator(data);
        if(!isValid) {
            throw new ValidationError(validator.errors);
        }
        //add default values for createdAt and updatedAt 
        data.createdAt = data.createdAt ? new Date(data.createdAt) : new Date();
        data.updatedAt = data.updatedAt ? new Date(data.updatedAt) : new Date();
        console.log(data.createdAt)
        console.log(data.updatedAt)

        return isValid;
    }
};
