const employee = require('./Employee')

class Manager extends employee {
    get defaults() {
        return {
            ...super.defaults,
            officeNumber: 'no office number'
        }
    };
    getOfficeNumber() {
        return this.options.officeNumber
    };
};



module.exports = Manager