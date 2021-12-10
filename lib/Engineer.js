const Employee = require('./Employee');

//extend employee
class Engineer extends Employee {
    constructor (name, id, email, github) {
        //call super
        super (name, id, email);

        this.github = github;
    }

    //get github
    getGitHub () {
        return this.github;
    }

    //override role
    getRole () {
        return "Engineer";
    }
}

module.exports = Engineer;