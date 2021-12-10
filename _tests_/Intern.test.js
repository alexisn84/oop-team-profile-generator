const { TestWatcher } = require('jest');
const Intern = require('../lib/Intern');

//create object
test('this creates object for Intern', () => {
    const intern = new Intern('alexis', 84, 'alexisn@gmail.com', 'UCF');

    expect(intern.school).toEqual(expect.any(String)); 
    console.log(intern.school);
});

//get school
test('this gets intern school', () => {
    const intern = new Intern('alexis', 84, 'alexisn@gmail.com', 'UCF');

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
    console.log(intern.getSchool());
});

//get role
test('gets intern role', () => {
    const intern = new Intern('alexis', 84, 'alexisn@gmail.com', 'UCF');

    expect(intern.getRole()).toEqual("Intern");
    console.log(intern.getRole());
});

