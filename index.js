const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const manager = require("./lib/manager");
const engineer = require("./lib/engineer");
const intern = require("./lib/intern");

// const joon = new employee ("Joon", 1, "a@b.com");
// const joon = new manager ("Joon", 2, "ab@cd.com", "987-654-3210");
// const joon = new engineer ("Joon", 2, "ab@cd.com", "jsp220");
const joon = new intern ("Joon", 2, "ab@cd.com", "UCSD");

// console.log(joon);

console.log(joon.getName());
console.log(joon.getId());
console.log(joon.getEmail());
// console.log(joon.getOfficeNumber());
// console.log(joon.getGithub());
console.log(joon.getSchool());
console.log(joon.getRole());