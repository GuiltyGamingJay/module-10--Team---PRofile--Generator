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
//Question to add more employee
function addMoreEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "Would you like to add another employee?",
          choices: ["yes", "no"],
          name: "addEmployee",
        },
      ])
      .then((res) => {
        if (res.addEmployee === "yes") {
          typeofEmployee();
        } else {
          const html = getHtml();
          fs.writeFile("./dist/my-team.html", html, (err) =>
            err
              ? console.log(err)
              : console.log("Your team profile has been created")
          );
        }
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  
  //Question to add a specific type of employee
  function typeofEmployee() {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What kind of employee would you like to add?",
          choices: ["Manager", "Engineer", "Intern"],
          name: "jobTitle",
        },
      ])
      .then((res) => {
        if (res.jobTitle === "Manager") {
          init();
        } else if (res.jobTitle === "Engineer") {
          addEngineer();
        } else if (res.jobTitle === "Intern") {
          addIntern();
        }
      });
  }
  
  //Questions for Engineer Role
  function addEngineer() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is the engineer's employee Id?",
          name: "engineerId",
        },
        {
          type: "input",
          message: "What is the engineer's email address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is the engineer's Github username?",
          name: "engineerGithub",
        },
      ])
      .then((res) => {
        let engineer = new Engineer(
          res.engineerName,
          res.engineerId,
          res.engineerEmail,
          res.engineerGithub
        );
        console.log(engineer);
        employeeList.push(engineer);
        addMoreEmployee();
      })
      .catch((err) => console.log(err));
  }
  
  //Questions for Intern Role
  function addIntern() {
    inquirer
      .prompt([
        {
          type: "input",
          message: "What is the intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is the intern's employee Id?",
          name: "internId",
        },
        {
          type: "input",
          message: "What is the intern's email address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What is the intern's school?",
          name: "internSchool",
        },
      ])
      .then((res) => {
        let intern = new Intern(
          res.internName,
          res.internId,
          res.internEmail,
          res.internSchool
        );
        console.log(intern);
        employeeList.push(intern);
        addMoreEmployee();
      })
      .catch((err) => console.log(err));
  }
  
