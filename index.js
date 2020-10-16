// setting up requires
const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path")
const generate = require("./utils/generateMarkdown")

// array of questions for user
const questions = [
    {
        type:"input",
        name: "titleName",
        message: "What is the Title of your Project?"
    },
    {
        type:"input",
        name:"descriptionName",
        message:"Please describe your Project."
    },
    {
        type:"input",
        name: "installName",
        message: "Please enter your installation instructions."
    },
    {
        type:"input",
        name: "usageName",
        message: "Please enter usage information."
    },
    {
        type:"list",
        name:"licenseName",
        message:"Please choose your license.",
        choices: ["MIT", "BSD3", "APACHE2.0", "None"]
    },
    {
        type:"input",
        name: "contriName",
        message: "Who were the contributors?"
    },
    {
        type:"input",
        name: "testsName",
        message: "What are your test instructions?"
    },
    {
        type:"input",
        name: "gitName",
        message: "What is your github username?"
    },
    {
        type:"input",
        name: "emailName",
        message: "What is your email address?"
    }
];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName),data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(response => {
        console.log(response)
        writeToFile("newREADME.md", generate(response));
    })
}

// function call to initialize program
init();
