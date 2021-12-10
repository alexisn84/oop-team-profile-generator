//connect to employee.js to trigger constructor
const Employee = require('../lib/Employee');

//create object for employee
test('create object for employee', () => {
    const employee = new Employee('alexis', 84, 'alexis@hotmail.com');

    expect(employee.name).toEqual(expect.any(String));
    //console.log(employee.name);
    expect(employee.id).toEqual(expect.any(Number));
    //console.log(employee.id);
    expect(employee.email).toEqual(expect.any(String));
    //console.log(employee.email);
});

//get name
test('gets employee name', () => {
    const employee = new Employee('alexis', 84, 'alexis@hotmail.com');

    expect(employee.getName()).toEqual(expect.any(String));
    console.log(employee.getName());
});

//get id
test('gets employee id', () => {
    const employee = new Employee('alexis', 84, 'alexis@hotmail.com');

    expect(employee.getID()).toEqual(expect.any(Number));
});

//get email
test('gets employee email', () => {
    const employee = new Employee('alexis', 84, 'alexis@hotmail.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

//get employee role
test('gets employee role', () => {
    const employee = new Employee('alexis', 84, 'alexis@hotmail.com');

    expect(employee.getRole()).toEqual("Employee");
});

