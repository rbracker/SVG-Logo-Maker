const { Triangle, Circle, Square } = require('./lib/shapes');
const inquirer = require('inquirer');

const chooseShapeType = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'list',
      name: 'shapeType',
      message: 'Choose a shape:',
      choices: ['Triangle', 'Circle', 'Square'],
    },
  ]);
  return answers.shapeType;
};

const setColor = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'color',
      message: 'Enter color:',
      default: 'black',
    },
  ]);
  return answers.color;
};

const setAdditionalProperties = async (shape) => {
  if (shape instanceof Circle) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'radius',
        message: 'Enter radius:',
        default: 50,
      },
    ]);
    shape.setRadius(parseInt(answers.radius, 10));
  } else if (shape instanceof Square) {
    const answers = await inquirer.prompt([
      {
        type: 'input',
        name: 'sideLength',
        message: 'Enter side length:',
        default: 100,
      },
    ]);
    shape.setSideLength(parseInt(answers.sideLength, 10));
  }
};

const main = async () => {
  const shapeType = await chooseShapeType();
  let shape;

  switch (shapeType) {
    case 'Triangle':
      shape = new Triangle();
      break;
    case 'Circle':
      shape = new Circle();
      break;
    case 'Square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape type');
      process.exit(1);
  }

  const color = await setColor();
  shape.setColor(color);

  await setAdditionalProperties(shape);

  console.log(`SVG Code for the ${shapeType}:`);
  console.log(shape.render());
};

main();