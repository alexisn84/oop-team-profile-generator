//constructor for employee info
class Employee {
    constructor (name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    //get user input for name
    getName() {
        return this.name;
    }

    //get user input for employee id
    getID() {
        return this.id;
    }

    //get user input for email
    getEmail() {
        return this.email;
    }

    //add role type
    getRole() {
        return 'Employee';
    }
};

module.exports = Employee;