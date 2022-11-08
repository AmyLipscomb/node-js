// Include package needed for this application
const fs = require('fs');
const path= require('path');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
//^ This usually means you have to install the package. The package here that we need to install is 'Inquirer'
  //https://www.npmjs.com/package/inquirer

// Create an array of questions for user input
const questions=[
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
        type: 'input',
        message: 'What is the description of your project?',
        name: 'description',
      },
      {
        type: 'input',
        message: 'What packages were installed?',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Give details on your project usage.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Who contributed to this project?',
        name: 'contribution',
      },
      {
        type: 'input',
        message: 'What are some of the tests performed in your project?',
        name: 'tests',
      },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
   
    {
      type: 'list',
      message: "What type of license do you want?",
      choices: ["Apache 2.0 ", "MIT", "GNU GPLv3", "none"],
      name: "licenseType"
    }
  ];



// Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(fileName),data)
    
};

// Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("./output/README.md",generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();