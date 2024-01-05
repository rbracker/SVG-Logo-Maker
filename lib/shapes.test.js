const { Triangle, Circle, Square } = require('./shapes');

describe('Triangle', () => {
    test('should render a triangle SVG string with default color', () => {
        const triangle = new Triangle();
        expect(triangle.render()).toEqual(`<polygon points="10,190 100,10 190,190" fill="${triangle.color}" />`);
    });

    test('should render a triangle SVG string with a specified color', () => {
        const triangle = new Triangle();
        triangle.setColor('blue');
        expect(triangle.render()).toEqual(`<polygon points="10,190 100,10 190,190" fill="${triangle.color}" />`);
    });
});

describe('Circle', () => {
    test('should render a circle SVG string with default color', () => {
        const circle = new Circle();
        expect(circle.render()).toEqual(`<circle cx="150" cy="150" r="75" fill="${circle.color}" />`);
    });

    test('should render a circle SVG string with a specified color', () => {
        const circle = new Circle();
        circle.setColor('green');
        expect(circle.render()).toEqual(`<circle cx="150" cy="150" r="75" fill="${circle.color}" />`);
    });

});

describe('Square', () => {
    test('should render a square SVG string with default color', () => {
        const square = new Square();
        expect(square.render()).toEqual(`<rect x="50" y="50" width="100" height="100" fill="${square.color}" />`);
    });

    test('should render a square SVG string with a specified color', () => {
        const square = new Square();
        square.setColor('red');
        expect(square.render()).toEqual(`<rect x="50" y="50" width="100" height="100" fill="${square.color}" />`);
    });

});