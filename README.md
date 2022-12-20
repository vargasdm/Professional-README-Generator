# Professional README Generator
![License](https://img.shields.io/badge/License-MIT)

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contribution)
- [Test](#test)
- [Questions](#questions)

## Description

the motivation of this application is the help developers like myself. The purpose of this application is to generate a README file using input from the user so that the user can spend less time creating one and more time perfecting their projects. The user will be given prompts to answerand the input will be used in the generated README file. During this project I learned: how to add files to a.gitignore file, creating a package.json file, how to install dependecies for necessary packages, using back ticks and string literals, using inquirer, using .then, modulation of functions, and using fs to create files.

## Installation

First, you will need to clone this repository to your local machine. The repository should already contain the package.json file as well as the package-lock.json file. This application requires you to have node.js version 16.18 and you can read how to install the correct version at https://coding-boot-camp.github.io/full-stack/nodejs/how-to-install-nodejs. THis application also requires the thrid-party package inquirer version 8.2.4 and the fs module that is built into node.js. fs does not need to be installed but inquirer does. It can be installed by opening the index.js terminal and entering npm i inquirer@8.2.4. You will be able to check the package.jason file and find the inquirer dependency. After teh required packages are installed, the user can open the terminal in the index.js file, and enter node index.js. They will be presented with a series of prompts where they will enter information about their project that will be used to generate their README file.

## Usage

This application can be used to generate a professional README file. The user will be prompted about the title, description, installation instructions, usage, license, contribution instructions, tests that can be run, their GitHub username and their email. THe data they entered will fill the generated README file and the console will log "We have successfully created your README!" The users new README will then be available for them to edit adn use.

You can see a demo of the app here: https://drive.google.com/file/d/1o2hP80pJTP5gYI_gN9FLKW1y3iIhA0ny/view

## License

This project is licensed under N/A license

## Contribution

if you would like to contribute to this project you can learn more about how to fork this repository at https://docs.github.com/en/get-started/quickstart/fork-a-repo.

## Questions

For questions regarding this app reach out to:
Github: https://github.com/vargasdm
Email: vargasdm21@gmail.com

## Credits

I used the following sources in the completion of this project:

- https://www.npmjs.com/package/inquirer
- https://shields.io/category/license
- https://www.w3schools.com/nodejs/nodejs_filesystem.asp
- https://nodejs.org/en/docs/

