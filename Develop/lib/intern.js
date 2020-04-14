const employee = require('./Employee')

class Intern extends employee {
    get defaults() {
        return {
            ...super.options,
            school: 'no school'
        };
    };
    getSchool() {
        return this.options.school
    };
};



module.exports = Intern