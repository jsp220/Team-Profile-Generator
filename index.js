const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

let team = [];

function init() {
    console.clear();
    
    console.log(`\x1b[36m### Team Profile Generator ###\x1b[0m\n`)

    addManager();
}

function addManager () {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "Please enter the name of the manager.",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the manager's employee ID number.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the manager's email address.",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter the manager's office number.",
                name: "officeNumber",
            }
        ]).then(data => {
            const {name, id, email, officeNumber} = data;
            const mgr = new Manager(name, id, email, officeNumber);
            team.push(mgr);
            // console.log(team);
            addTeamPrompt();
        })
}

function addTeamPrompt() {
    console.clear();
    
    console.log("So far you have added:");
    for (let i in team) {
        console.log(`${team[i].getRole()}: ${team[i].getName()}  ID: ${team[i].getId()}`);
    }
    inquirer
        .prompt([{
            type: "list",
            message: "Would you like to add more team members?",
            name: "addMore",
            choices: ["Yes", "No"],
        }]).then(data => {
            if (data.addMore == "Yes") {
                addTeamMember();
            } else {
                createHtml();
            };
        });
}

function addTeamMember () {
    inquirer
        .prompt([{
            type: "list",
            message: "Please select the type of employee you would like to add.",
            name: "employeeType",
            choices: ["Engineer", "Intern", "I am done"],
        }])
        .then(data => {
            switch(data.employeeType) {
                case "Engineer":
                    addEngineer();
                    break;
                case "Intern":
                    addIntern();
                    break;
                default:
                    createHtml();
                    break;
            }
        })
}

function addEngineer () {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "Please enter the name of the engineer.",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the engineer's employee ID number.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the engineer's email address.",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter the engineer's GitHub username.",
                name: "github",
            }
        ]).then(data => {
            const {name, id, email, github} = data;
            const eng = new Engineer(name, id, email, github);
            team.push(eng);
            // console.log(team);
            addTeamPrompt();
        })
}

function addIntern () {
    inquirer
        .prompt ([
            {
                type: "input",
                message: "Please enter the name of the intern.",
                name: "name",
            },
            {
                type: "input",
                message: "Please enter the intern's employee ID number.",
                name: "id",
            },
            {
                type: "input",
                message: "Please enter the intern's email address.",
                name: "email",
            },
            {
                type: "input",
                message: "Please enter the name of the intern's school.",
                name: "school",
            }
        ]).then(data => {
            const {name, id, email, school} = data;
            const int = new Intern(name, id, email, school);
            team.push(int);
            // console.log(team);
            addTeamPrompt();
        })
}

function createHtml() {
    const html = template(team);
    let dir = "./dist";
    if (!fs.existsSync(dir)) fs.mkdirSync(dir);

    fs.writeFile(`${dir}/team.html`, html, (err) => 
        err ? console.log(err) : console.log("team.html has successfully been generated in /dist."));

    fs.writeFile(
        `${dir}/style.css`, 
`.gray {
    background-color: lightgray;
}`,
        err => err ? console.log(err) : console.log("style.css has successfully been generated in /dist."))

}

init();