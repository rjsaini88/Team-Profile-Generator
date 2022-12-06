// const generateHTML = employees =>{}
const managerCard = (manager) => {
  return `
    <div class='card'>
    <div class ='card-header'>
    <h3 class='card-title'>${manager.name}</h3>
    </div>
    <div class='card-body'>
    <p class='card-text'>${manager.officeNumber}</p>
    </div>
    </div>
    `;
};
const engineerCard = (engineer) => {
  return `
    <div class='card'>
    <div class ='card-header'>
    <h3 class='card-title'>${engineer.name}</h3>
    </div>
    <div class='card-body'>
    <p class='card-text'>${engineer.gitHub}</p>
    </div>
    </div>
    `;
};
const internCard = (intern) => {
  return `
    <div class='card'>
    <div class ='card-header'>
    <h3 class='card-title'>${intern.name}</h3>
    </div>
    <div class='card-body'>
    <p class='card-text'>${intern.gitHub}</p>
    </div>
    </div>
    `;
};
function generateHTML(data) {
  const html = `
    <html lang="en">
    <!DOCTYPE html>
    <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
    <link rel="shortcut icon" href="#" />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans&display=swap" rel="stylesheet">

        <title>Team Profile Generator</title>
      </head>
      <body>
      <header class="jumborton">
      <h1 class="bg-danger">My Team</h1>
      </header>

      <div class='container'>
        <div class='row'>
         <div class='col-12'>
         ${data
           .map((employee) => {
             switch (employee.getRole()) {
               case "Manager":
                 return managerCard(employee);
               case "Engineer":
                 return engineerCard(employee);
               case "Intern":
                 return internCard(employee);
             }
           })
           .join("")}
    </div>
    </div>
    </div>
    </body>
    </html>
    `;
}

module.exports = generateHTML;
