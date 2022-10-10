// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description explaining the what, why, and how of your project: ', 
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide any instructions and examples for use: ',
        },
        {
            type: 'input',
            name: 'credits',
            message: 'List your collaborators, if any: ',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Select the applicable license for this project: ',
            choices: [
                'Academic',
                'Apache',
                'GNU',
                'ISC',
                'MIT',
                'Open',
            ]            
        },
        {
            type: 'contributing',
            name: 'contributors',
            message: 'Provide any guidelines for external contributors: ',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide information on how people can submit questions: '
        },
        {
            type: 'input', 
            name: 'username',
            message: 'Please provide your GitHub username: ',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please provide your email address: ',

        },
    ])
];

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, data) {
    const readmePageContent = questions(data)
    fs.writeToFile('./gen/README.md', readmePageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
    );
}

// // TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// // Function call to initialize app
init();
