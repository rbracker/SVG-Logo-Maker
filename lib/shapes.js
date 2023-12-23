class Shape {
    constructor() {
      this.color = "black"; // Default color
    }
  
    setColor(color) {
      this.color = color;
    }
  }
  
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }

class Circle extends Shape {
    constructor(radius) {
      super();
      this.radius = radius || 50; // Default radius
    }
  
    setRadius(radius) {
      this.radius = radius;
    }
  
    render() {
      return `<circle cx="100" cy="100" r="${this.radius}" fill="${this.color}" />`;
    }
  }
  
  class Square extends Shape {
    constructor(sideLength) {
      super();
      this.sideLength = sideLength || 100; // Default side length
    }
  
    setSideLength(sideLength) {
      this.sideLength = sideLength;
    }
  
    render() {
      return `<rect width="${this.sideLength}" height="${this.sideLength}" fill="${this.color}" />`;
    }
}
  
  module.exports = { Triangle, Circle, Square };