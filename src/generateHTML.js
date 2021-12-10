//create manager card
const generateManager = function (manager) {
    return `
    <div class= "col-4 mt-3 mb-3">
        <div class = "card h-125" style="color: #ECF87F; background-color: #59981A">
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
    <div class= "col-4 mt-3 mb-3">
        <div class = "card h-125" style="color: #ECF87F; background-color: #59981A">
            <div class = "card-header">
                <h3>${engineer.name}</h3>
                <h4>Engineer</h4><i class = "material-icons">developer_board</i>
            </div>

            <div class="card-body" >
                <p class= "id">ID: ${engineer.id}</p>
                <p class = "email" style:"color: #ECF87F>Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                <p class = "github">GitHub User: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
            </div>
        </div>
    </div>
    `;
}

//create intern card
const generateIntern = function (intern) {
    return `
    <div class= "col-4 mt-3 mb-3">
        <div class = "card h-125" style="color: #ECF87F; background-color: #59981A">
            <div class = "card-header">
                <h3>${intern.name}</h3>
                <h4>Manager</h4><i class = "material-icons">school</i>
            </div>

            <div class="card-body" >
                <p class= "id">ID: ${intern.id}</p>
                <p class = "email" style:"color: #ECF87F>Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
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
const generateTeamPage = function (employeeCards) {
    return`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile</title>

        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
        <link rel="stylesheet" href="style.css">
    </head>

    <body>
        <main> 
            <header>
                <h1 class="title" style="text-align: center; color: #ECF87F; background-color:#59981A; margin: 0">Team Profile</h1>
            </header>

            <div class="container" style="background-color: #81B622">
                <div class="row justify-content-center" id="team-cards">
                ${employeeCards}
                </div>
            </div>
        </main>
    </body>
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js" integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI" crossorigin="anonymous"></script>
    </html>
    `;
}

//export to index
module.exports = generateHTML;