// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkDownFunctions = require('./generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file



const writeToFile = fs.writeFile('generatedREADME.md', readMeContent, (err) =>
err ? console.log(err) : console.log('Successfully created README!')
);


// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
