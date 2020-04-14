
class Employee {
    constructor(options) {
       this.options = {};
       Object.keys(this.defaults).forEach(key => this.options[key] = options[key] || this.defaults[key]);
    };
    get defaults() {
        return {
            name: 'no name',
           id: 'no ID',
           email: 'no email'
        };
    };
    getName() {
        return this.options.name;
    };
    getId() {
        return this.options.id;
    };
    getEmail() {
        return this.options.email;
    };
    getRole() {
        return this.constructor.name;
    };
};



module.exports = Employee