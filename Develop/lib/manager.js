const Employee = require('./Employee')

class Manager extends Employee {
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