const Employee = require('./Employee')

class Engineer extends Employee {
   get defaults() {
       return {
            ...super.defaults,
            github: 'no github'
       };
   };
    getGithub() {
        return this.options.github;
    };
};



module.exports = Engineer