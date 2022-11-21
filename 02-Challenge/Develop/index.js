// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('.../utils/generateMarkdowwn');

// TODO: Create an array of questions for user input
const questions = [
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please provide the url to your github profile',
        },
        {
            type: 'input',
            name: 'additional questions',
            message: 'How can we reach out to you with additional questions?',
        },
        {
            type: 'input',
            name: 'Title of Project',
            message: 'What is your project called?',
        },
        {
            type: 'input',
            name: 'Description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'Installation instructions',
            message: 'Please add installing instructions if any',
        },
        {
            type: 'input',
            name: 'Usage information',
            message: 'Please input any usage info if any',
        },
        {
            type: 'input',
            name: 'Contribution guidelines',
            message: 'Please add who contributed to this project if any!',
        },
        {
            type: 'input',
            name: 'Test instructions',
            message: 'How should we test run your project?',
        },
        {
            type: 'input',
            name: 'License type',
            message: 'Which license are you using?',
        },
];


// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(response => console.log(response))
};
// Function call to initialize app
init();

