// function that will generate the readme.md using the user input
function generateMarkdown(answers) {
// returns the filled out readmeto the index.js file
  return `# ${answers.title}
![License](https://img.shields.io/badge/License-${answers.license})

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description

${answers.description}.

## Installation

${answers.installation}.

## Usage

${answers.usage}.

## License

This project is licensed under ${answers.license} license

## Contribution

${answers.contribution}.

## Test

${answers.tests}.

## Questions

For questions regarding this app reach out to:
Github: https://github.com/${answers.username}
Email: ${answers.email}`
};

// modulate the generateMarkdown frunction so that it can be accessed in teh index.js file
module.exports = generateMarkdown;


