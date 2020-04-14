const employee = require('./Employee')

class Engineer extends employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    };
    getGithub() {
        return this.github;
    };
};


module.exports = Engineer