// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
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
  // return `# ${data.title}
;
})

module.exports = generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection;
