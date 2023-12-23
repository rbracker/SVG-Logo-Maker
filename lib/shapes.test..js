const { Triangle, Circle, Square } = require('./shapes');

test('Triangle render method', () => {
  const shape = new Triangle();
  shape.setColor("blue");

  const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
  
  expect(shape.render()).toEqual(expectedSVG);
});

test('Circle render method', () => {
  const shape = new Circle();
  shape.setColor("blue");

  const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
  
  expect(shape.render()).toEqual(expectedSVG);
});

test('Square render method', () => {
  const shape = new Square();
  shape.setColor("blue");

  const expectedSVG = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />';
  
  expect(shape.render()).toEqual(expectedSVG);
});