// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
            name: 'email',
            message: 'What is your email?',
        },
        {
            type: 'input',
            name: 'question',
            message: 'How can we reach out to you with additional questions?',
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is your project called?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please add installing instructions if any',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please input any usage info if any',
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Please add who contributed to this project if any!',
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How should we test run your project?',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Which license are you using?',
            choices: [
                "None", "Apache 2.0", "MIT"
            ]
        },
];

// // TODO: Create a function to write README file

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then(function(response) {
        console.log(response);
        console.log(generateMarkdown(response))
    
    let newFile = generateMarkdown(response);

    fs.writeFile("./here/README.md", newFile, (err) =>
    err ? console.log(err) : console.log("CONGRATS! Your README file has been created. Check it out in the here folder.")
    )
});
};

// Function call to initialize app
init();

