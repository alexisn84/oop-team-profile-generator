const Employee = require('./Employee');

//extend employee
class Intern extends Employee {
    constructor (name, id, email, school) {
        //call super
        super (name, id, email)

        this.school = school;
    }

    //get school
    getSchool() {
        return this.school;
    }

    //get role
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;