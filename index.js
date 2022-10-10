// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const {renderLicenseBadge, renderLicenseLink} = require('./utils/generateMarkdown');

// TODO: Create a function to generate markdown for README
const generateReadme = ({title, description, installation, usage, credits, license, contributors, questions, username, email}) =>
    `
# ${title}

${renderLicenseBadge(license)}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Contributors](#contributors)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

## Credits
${credits}

## License
${license}<br>
${renderLicenseBadge(license)}<br>
${renderLicenseLink(license)}

## Contributors
${contributors}

## Questions
${questions}<br>
Find me on GitHub: [${username}](https://github.com/${username})<br>
Send me an email: ${email}

##### <p align="center">This readme file was created with ✨ by ${username}</p>
`;

// TODO: Create an array of questions for user input
inquirer
    .prompt([
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
            message: 'What are the steps required to install your project?',
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
                'Apache',
                'GNU',
                'ISC',
                'MIT',
                'N/A',
            ]
        },
        {
            type: 'input',
            name: 'contributors',
            message: 'Provide any guidelines for external contributors: ',
        },
        {
            type: 'input',
            name: 'questions',
            message: 'Provide information on how people can submit questions: ',
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
    // TODO: Create a function to write README file
    .then((data) => {
        const readmePageContent = generateReadme(data);

        fs.writeFile('./gen/README.md', readmePageContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
        );
    });