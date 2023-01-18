const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const employeeList = [];

//Questions for Manager
function init() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the team manager's name?",
          name: "managerName",
        },
        {
          type: "input",
          message: "What is the team manager's employee Id?",
          name: "managerId",
        },
        {
          type: "input",
          message: "What is the team manager's email address?",
          name: "managerEmail",
        },
        {
          type: "input",
          message: "What is the team manager's office number?",
          name: "officeNum",
        },
      ])
      .then((res) => {
        let manager = new Manager(
          res.managerName,
          res.managerId,
          res.managerEmail,
          res.officeNum
        );
        console.log(manager);
        employeeList.push(manager);
        addMoreEmployee();
      })
      .catch((err) => console.log(err));
  }
  