const { Square, Circle, Triangle } = require('./lib/shapes');
const { getUserInput } = require("./lib/userInput");
const generateSVG = require('./lib/svgGenerator');
const fs = require('fs');
const inquirer = require('inquirer');
const path = require('path');

async function main() {
    const shapeChoices = ['Square', 'Circle', 'Triangle'];

    const { shapeType, color, shapeColor, text } = await inquirer.prompt([
        {
            type: 'list',
            name: 'shapeType',
            message: 'Select a shape:',
            choices: shapeChoices,
        },
        {
            type: 'input',
            name: 'color',
            message: 'Enter text color (keyword or hex):',
        },
        {
            type: 'input',
            name: 'shapeColor',
            message: 'Enter shape color (keyword or hex):',
        },
        {
            type: 'input',
            name: 'text',
            message: 'Enter text for the logo (up to three characters):',
            validate: function (input) {
                return input.length <= 3 || 'Please enter up to three characters.';
            },
        },
    ]);

    let selectedShape;
    switch (shapeType) {
        case 'Square':
            selectedShape = new Square();
            break;
        case 'Circle':
            selectedShape = new Circle();
            break;
        case 'Triangle':
            selectedShape = new Triangle();
            break;
        default:
            console.error('Invalid shape type');
            process.exit(1);
    }

    selectedShape.setColor(color);
    selectedShape.setText(text);

    // Generate SVG string using the common function
    const svgContent = generateSVG(selectedShape, shapeColor);

    // Define fileName and filePath here
    const fileName = `logo_${shapeType.toLowerCase()}_${text.toLowerCase()}.svg`;
    const filePath = path.join(__dirname, 'examples', fileName);

    fs.writeFile(filePath, svgContent, (err) => {
        if (err) {
            console.error('Error writing SVG file:', err);
            return;
        }

        console.log('User input:', { shapeType, color, shapeColor, text });
    });
}

main();