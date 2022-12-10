// const readMeContent = require('../../index.js');
  import {readMeContent} from '../../index.js';
// console.log(readMeContent)
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
function generateMarkdown(answers) {
  `# ${readMeContent.title}

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description

${readMeContent.description}.

## Installation

${readMeContent.installation}.

## Usage

${readMeContent.usage}.

## License

${readMeContent.license}

## Contribution

${readMeContent.contribution}.

## Test

${readMeContent.tests}.

## Questions

For questions regarding this app reach out to:
Github: https://github.com/${readMeContent.username}
Email: ${readMeContent.email}`

  fs.writeFile('README.md', readMeContent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
          );
//   return `# ${data.title}

};

module.exports = generateMarkdown;


