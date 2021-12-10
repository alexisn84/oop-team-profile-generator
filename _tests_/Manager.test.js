const { TestWatcher } = require('jest');
const Manager = require('../lib/Manager');

//create an object
test('creates an object for Manager', () => {
    const manager = new Manager('alexis', 84, 'alexis@', 2021);

    expect(manager.officeNumber).toEqual(expect.any(Number));
}) ;

//obtain role
test('gets role of employee', () => {
    const manager = new Manager('alexis', '84', 'alexis@hotmail.com');

    expect(manager.getRole()).toEqual("Manager");
    console.log(manager.getRole());
})