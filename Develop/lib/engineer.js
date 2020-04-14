const employee = require('./Employee')

class Engineer extends employee {
   get defaults() {
       return {
            ...super.options,
            github: 'no github'
       };
   };
    getGithub() {
        return this.options.github;
    };
};



module.exports = Engineer