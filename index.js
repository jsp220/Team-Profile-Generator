const inquirer = require("inquirer");
const fs = require("fs");
const employee = require("./lib/employee");
const manager = require("./lib/manager");

const joon = new employee ("Joon", 1, "a@b.com");
const drew = new manager ("Drew", 2, "ab@cd.com", "987-654-3210");

console.log(joon);
console.log(drew);

console.log(joon.getName());
console.log(joon.getId());
console.log(joon.getEmail());
console.log(joon.getRole());

console.log(drew.getName());
console.log(drew.getId());
console.log(drew.getEmail());
console.log(drew.getRole());