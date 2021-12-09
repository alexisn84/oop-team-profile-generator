//create manager card
const generateManager = function (manager) {
    return `
    <div class= "col-4 mt-3">
        <div class = "card h-125">
            <div class = "card-header">
                <h3>${manager.name}</h3>
                <h4>Manager</h4><i class = "material-icons">assignment</i>
            </div>

            <div class="card-body">
                <p class= "id">ID: ${manager.id}</p>
                <p class = "email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                <p class = "office">Office Number: ${manager.officeNumber}</p>
            </div>
        </div>
    </div>
    `;
}

//create engineer card
const generateEngineer = function (engineer) {
    return `
    <div class= "col-4 mt-3">
        <div class = "card h-125">
            <div class = "card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class = "material-icons">developer_board</i>
            </div>

            <div class="card-body">
                <p class= "id">ID: ${engineer.id}</p>
                <p class = "email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class = "github">GitHub User: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

//create intern card
const generateIntern = function (intern) {
    return `
    <div class= "col-4 mt-3">
        <div class = "card h-125">
            <div class = "card-header">
                <h3>${intern.name}</h3>
                <h4>Manager</h4><i class = "material-icons">school</i>
            </div>

            <div class="card-body">
                <p class= "id">ID: ${intern.id}</p>
                <p class = "email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                <p class = "school">School Name: ${intern.school}</p>
            </div>
        </div>
    </div>
    `;
};

generateHTML = (data) => {
    //array to hold cards generated
    pageArray = [];

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = generateManager(employee);

            pageArray.push(managerCard);
        }

        //call engineer 
        if (role === 'Engineer') {
            const engineerCard = generateEngineer(employee);

            pageArray.push(engineerCard);
        }

        //call intern
        if (role === 'Intern') {
            const internCard = generateIntern(employee);

            pageArray.push(internCard);
        }
    }

    //bring cards together
    const employeeCards = pageArray.join('')

    //transfer to generated page
    const generateTeam = generateTeamPage(employeeCards)
    return generateTeam;
}

//generate HTML


//export to index
module.exports = generateHTML;