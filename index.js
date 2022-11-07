// Include package needed for this application
const inquirer = require('inquirer');
//^ This usually means you have to install the package. The package here that we need to install is 'Inquirer'
  //https://www.npmjs.com/package/inquirer

// Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your README?',
      name: 'title',
    },
    {
        type: 'confirm',
        message: "Do you want to add a section?",
        name: 'wantSection',
    },
    {
        type: 'input',
        message: 'What is the name of your first section?',
        name: 'description', //each name has to be different so that it will run correctly in the terminal
    },
    {
        type: 'input',
        message: 'What is the name of your second section?',
        name: 'table-of-contents',
    },
    {
        type: 'input',
        message: 'What is the name of your third section?',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'What is the name of your fourth section?',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'What is the name of your fifth section?',
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is the name of your sixth section?',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'What is the name of your seventh section?',
        name: 'tests',
    },
    {
        type: 'input',
        message: 'What is the name of your eighth section?',
        name: 'questions',
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github-user',
    },
   
    {
      type: 'checkbox',
      message: "What type of license do you want?",
      choices: ["License preferred by the community", "MIT license", "GNU GPLv3"],
      name: "licenseType"
    }
  ])
  .then((response) => {
    console.log({response});

    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!');
  });



// Create a function to write README file
function writeToFile(fileName, data) {}

// Create a function to initialize app
function init() {}

// Function call to initialize app
init();