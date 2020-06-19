module.exports = class ValidationError extends Error {
    constructor(errors) {
        super('Error validation logs');
        this.status = 400;
        this.data = errors;
    }

};