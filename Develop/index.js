// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// console.log(generateMarkDownFunctions);

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
        readMeContent = answers;
        console.log(readMeContent);
})

function writeToFile(fileName, data) {
    fs.writeFile('README.md', generateMarkdown(readMeContent), (err) =>
    err ? console.log(err) : console.log('Successfully created README!')
    )}

//     writeToFile('README.md', readMeContent);


// // TODO: Create an array of questions for user input
// const questions = [
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




// TODO: Create a function to initialize app
// function init() {
    // inquirer.prompt(questions).then(inquirerResponses => {
    //     // console.log('Generating README...');
    //     // writeToFile('README.md', generateMarkdown({...inquirerResponses}))
    // })
// }

// Function call to initialize app
// init();
