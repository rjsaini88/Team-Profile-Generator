// const generateHTML = (employees) =>{
//    const test =  `${employees.map((employee) => `
//     ${employee.getName()}`)}`
//     console.log(test)
//     return test;
// }

const managerCard = (manager) => {
  return `
    <div class="card col-3">
    <div class="card-header bg-primary text-white">
    <h3 class="card-title">${manager.name}</h3>
    <i class="fa-solid fa-beer-mug-empty"> </i> ${manager.role}
    </div>
    <div class="card-body bg-light">
    <p class="card-text">Id:${manager.id}</p>
    <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
    <p class="card-text">Office Number: ${manager.officeNumber}</p>
    </div>
    </div>
    `;
};
const engineerCard = (engineer) => {
  return `
    <div class="card col-3">
    <div class="card-header bg-primary text-white">
    <h3 class="card-title">${engineer.name}</h3>
    <i class="fa-solid fa-glasses"> </i> ${engineer.role}
    </div>
    <div class="card-body bg-light">
    <p class="card-text">Id: ${engineer.id}</p>
    <p class="card-text">Email:<a href="mailto: ${engineer.email}">${engineer.email}</a></p>
    <p class="card-text">Github: <a href="https:github.com/${engineer.gitHub}" target="_blank">${engineer.gitHub}</a></p>
    </div>
    </div>
    `;
};
const internCard = (intern) => {
  return `
    <div class="card col-3">
    <div class="card-header bg-primary text-white">
    <h3 class="card-title">${intern.name}</h3>
    <i class="fa-solid fa-graduation-cap"> </i> ${intern.role}
    </div>
    <div class="card-body bg-light">
    <p class="card-text">Id: ${intern.id}</p>
    <p class="card-text">Email:<a href="mailto:${intern.email}">${intern.email}</a></p>
    <p class="card-text">School: ${intern.schoolName}</p>
    </div>
    </div>
    `;
};
const moreEmployee = [];

function generateHTML(data) {
  return ` 
  
    <html lang="en">
    <!DOCTYPE html>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <script src="https://kit.fontawesome.com/30f7095b9b.js" crossorigin="anonymous"></script>
    <link rel="shortcut icon" href="#" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="Assets/style.css">

        <title>Team Profile Generator</title>
      </head>
      <body>
      <header class="jumbotron bg-danger mb-10 d-flex justify-content-center align-items-center text-white"> <h3>My Team</h3>
    </header>

      <div class="container">
      <div class="row justify-content-center">
         ${data
           .map((employees) => {
             switch (employees.getRole()) {
               case "Manager":
                 return managerCard(employees);
               case "Engineer":
                 return engineerCard(employees);
               case "Intern":
                 return internCard(employees);
             }
           })
           .join("")}
    
    </div>
    </div>
    </body>
    </html>
    `;
}

module.exports = generateHTML;

/* <body>
<header
  class="jumbotron bg-danger mb-10 d-flex justify-content-center align-items-center text-white"
>
  <h3>My Team</h3>

</header>

<div class="container">
  <div class="row justify-content-center">
    <div class="card col-3">
      <div class="card-header bg-primary text-white">
        <h3 class="card-title">Rj</h3>
        <i class="fa-solid fa-glasses"> </i> Engineer
      </div>
      <div class="card-body bg-light">
        <p class="card-text">Id: adfasdfas</p>
        <p class="card-text">
          Email:<a href="mailto: dsfasdfasdf">dsfasdfasdf</a>
        </p>
        <p class="card-text">
          Github:
          <a href="https:github.com/adfasdf" target="_blank">adfasdf</a>
        </p>
      </div>
    </div> */