const Employee = require('./Employee')

class Intern extends Employee {
    get defaults() {
        return {
            ...super.defaults,
            school: 'no school'
        };
    };
    getSchool() {
        return this.options.school
    };
};



module.exports = Intern