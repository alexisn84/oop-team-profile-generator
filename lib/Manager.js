const Employee = require('./Employee');

//manager extends employee constructor
class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        //call super
        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    //override role
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;