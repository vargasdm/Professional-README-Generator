// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// const generateMarkDownFunctions = require('./generateMarkdown.js')
const generateMarkdown = ({ title, description, installation, usage, license, contribution, tests, username, email }) =>
`# ${title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description

${description}.

## Installation

${installation}.

## Usage

${usage}.

## License

${license}.

## Contribution

${contribution}.

## Test

${tests}.

## Questions

For questions regarding this app reach out to:
Github: https://github.com/${username}
Email: ${email}`;

inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of this project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Input a description for your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Input installation instructions for your project.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Input the usage for your project.',
        },
        {
            type: 'list',
            message: 'What license is being used for this porject?',
            name: 'license',
            choices: ['MIT', 'Apache 2', 'BDS', 'no license']
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Input contribution instructions for your project.',
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Input test instructions for your project.',
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },
    ])
    .then((answers) => {
        console.log(answers);
        console.log(answers.license);
        const readMeContent = generateMarkdown(answers);
        console.log(generateMarkdown(answers));
        
        fs.writeFile('README.md', readMeContent, (err) =>
        err ? console.log(err) : console.log('Successfully created README.md!')
      );
  // return `# ${data.title}

})




// // TODO: Create an array of questions for user input
// const prompts = [
//     'What is the title of this project?',
//     'Input a description for your project.',
//     'Input installation instructions for your project.',
//     'Input the usage for your project.',
//     'What license is being used for this project?',
//     'Input contribution instructions for your project.',
//     'Input test instructions for your project.',
//     'What is your GitHub username?',
//     'What is your email address?'
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// }


// // const writeToFile = fs.writeFile('generatedREADME.md', readMeContent, (err) =>
// // err ? console.log(err) : console.log('Successfully created README!')
// // );


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
