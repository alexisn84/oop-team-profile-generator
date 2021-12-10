const Engineer = require('../lib/Engineer');

//create object
test('this creates object for engineer', () => {
    const engineer = new Engineer('alexis', 84, 'alexis@gmial.com', 'alexisn84');

    expect(engineer.github).toEqual(expect.any(String));
});

//get github
test('gets github user name for engineer', () => {
    const engineer = new Engineer('alexis', 84, 'alexis@gmial.com', 'alexisn84');

    expect(engineer.getGitHub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

//get role
test('gets role for engineer', () => {
    const engineer = new Engineer('alexis', 84, 'alexis@gmial.com', 'alexisn84');

    expect(engineer.getRole()).toEqual("Engineer");
});