const inquirer = require('inquirer');

async function getUserInput() {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'shape',
            message: 'Select a shape:',
            choices: ['Square', 'Circle', 'Triangle'],
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter shape color (keyword or hex):',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):',
            validate: (input) => {
                if (input.length > 3) {
                    return 'Text must be up to three characters.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'textColor',
            message: 'Enter text color (keyword or hex):',
        },
    ]);
}

module.exports = { getUserInput };