// modules needed for this app to function
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// prompts that will be presented to the user
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
            message: 'What license is being used for this project?',
            name: 'license',
            choices: ['MIT', 'APACHE 2.0', 'BDS 3.0', 'GPL3.0', 'N/A'],
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
    // uses answers, passes them into generateMarkdwn function and and returns the results
    .then((answers) => {
        const readme = generateMarkdown(answers);
        // creates the readme.md file and fills it with the returned data 
        fs.writeFile('README.md', readme, (err) =>
            err ? console.log(err) : console.log('We have successfully created your README!')
        )
    })

