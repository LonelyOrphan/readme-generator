console.log("Hi from node JS");

//Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const { cpuUsage } = require("process");
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
    {
      type: "input",
      message: "What is your project title?",
      name: "title",
    },
    {
      type: "input",
      message: "Enter your project description",
      name: "description",
    },
    {
      type: "input",
      message: "How does the user install your app?",
      name: "installation",
    },
    {
      type: "input",
      message: "Enter the usage instructions for this app",
      name: "usage",
    },
    {
      type: "list",
      message: "What license(s) is this app using?",
      choices: ["MIT", "Apache", "GNU"],
      name: "license",
    },
    {
      type: "input",
      message: "How can people contribute to this project?",
      name: "contributing",
    },
    {
      type: "input",
      message: "How do you run tests on this app?",
      name: "tests",
    },
    {
      type: "input",
      message: "What is your email address?",
      name: "email",
    },
    {
      type: "input",
      message: "What is your github profile URL?",
      name: "github",
    },
  ]);
};

// TODO: Create a function to write README file
const saveReadme = (data) => {
  console.log(data);
  fs.writeFile("README.md", data, function (err) {
    if (err) throw err;
    console.log("Readme saved.");
  });
};

// TODO: Create a function to initialize app
function init() {
  questions().then((answers) =>
    generateMarkdown(answers).then((data) => saveReadme(data))
  );
}

// Function call to initialize app
init();
