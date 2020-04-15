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
    renderInfo() {
        return `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card text-dark" style="width: 18rem;">
                <div class="card-body">
                <h4 class="card-title">${this.getName()}</h4>
                <h5 class="card-subtitle mb-2 text-muted">${this.getRole()}</h5>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item">Email: ${this.getEmail()}</li>
                    <li class="list-group-item">ID: ${this.getId()}</li>
                    <li class="list-group-item">School: ${this.getSchool()}</li>
                </ul>
                </div>
            </div>
        </div>    
      `;
    };
};



module.exports = Intern