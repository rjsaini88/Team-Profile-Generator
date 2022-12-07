const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./generateHTML");

//TODO - write your inquirer app here to gather information about the team members, and generate the HTML file using fs
const employees = [];

function newEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is the name of the employee?",
      },
      {
        type: "input",
        name: "id",
        message: "What is the id of the employee?",
      },
      {
        type: "input",
        name: "email",
        message: "What is the email of the employee?",
      },
      {
        type: "list",
        name: "position",
        message: "What position is this employee",
        choices: ["Engineer", "Intern", "Manager"],
      },
    ])
    .then(({ name, id, email, position }) => {
      switch (position) {
        case "Manager":
          inquirer
            .prompt([
              {
                type: "input",
                name: "officeNumber",
                message: "What is the office number?",
              },
            ])
            .then(({ officeNumber }) => {
              employees.push(new Manager(name, id, email, officeNumber));
              addAnother();
            });
          break;

        case "Intern":
          inquirer
            .prompt([
              {
                type: "input",
                name: "schoolName",
                message: "What is the name of of the school they attended?",
              },
            ])
            .then(({ schoolName }) => {
              employees.push(new Intern(name, id, email, schoolName));
              addAnother();
            });
          break;

        case "Engineer":
          inquirer
            .prompt([
              {
                type: "input",
                name: "gitHub",
                message: "What is thier github username?",
              },
            ])
            .then(({ gitHub }) => {
              employees.push(new Engineer(name, id, email, gitHub));
              addAnother();
            });
          break;
        default:
      }
    });
}

function addAnother() {
  return inquirer
    .prompt([
      {
        type: "confirm",
        name: "addMore",
        message: "Would you like to create another employee?",
      },
    ])
    .then(({ addMore }) => {
      if (addMore) newEmployee();
      else {
        console.log(employees);
        renderHTML();
      }
    });
}

newEmployee();

// const html = generateHTML(employees);
function renderHTML() {
  console.log(employees);
  fs.writeFileSync("./index.HTML", generateHTML(employees));
  
  //   ,(err) =>{
  //         if(err){
  //             console.log(err);
  //         }
}
// )
// /*html*/

// `
// <body>
// <header class="jumborton">
//     <h1 class="bg-danger">My Team</h1>

//  <ul>
//  ${employees.map((employee) => `
//  <li>${employee.getName()}</li>
//  <li>${employee.getId()}</li>
//  <li>${employee.getEmail()}</li>
// //  <li>${employee.getRole()}</li>

// //  `)}

//  </ul>

// `
//   )
// }
// function managerCard(manager){

// }
