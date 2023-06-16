// Base class
class Shape {
    constructor(color, size) {
      this.color = color;
      this.size = size;
    }
  
    displayColor() {
        return(`Color: ${this.color}`);
    }

    displayInfo() {
        return (`Colour: ${this.color}`);
    }
  }
  
  // Subclass Circle
  class Circle extends Shape {
    constructor(color, radius) {
      super(color);
      this.radius = radius;
    }
  
    calculateArea() {
        var expression = Math.PI * this.radius ** 2;
      return Math.round(expression*100)/100;
    }
    displayInfo() {
        
        return(`${super.displayInfo()}, Cricle area: ${this.calculateArea()}`);
    }
  }
  
  // Subclass Rectangle
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    calculateArea() {
      return this.width * this.height;
    }
    displayInfo() {
        super.displayColor();
        return(`Rectangle area: ${this.calculateArea()}`);
    }
  }


  class Triagle extends Shape{
    constructor(color, base, height) {
        super(color);
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        var expression = (this.base * this.height) /2;
        return Math.round(expression *100)/100;
    }
    displayInfo() {
        super.displayColor();
        return(`Triangle area: ${this.calculateArea()}`);
    }
  }

  class Square extends Shape {
    constructor(color, length, width) {
        super(color);
        this.length = length;
        this.width = width;
    }
    calculateArea() {
        var expression = this.length * this.width;
        return Math.round(expression *100) /100;
    }
    displayInfo() {
        super.displayColor();
        return(`Square area: ${this.calculateArea()}`);
    }
  }

  module.exports = {
    Shape, Circle, Rectangle, Triagle, Square
  }

  // Creating objects
//   const redCircle = new Circle("red", 5);
//   const blueRectangle = new Rectangle("blue", 4, 6);
  
//   // Accessing properties and methods
//   redCircle.displayColor(); // Output: Color: red
//   console.log(redCircle.calculateArea()); // Output: 78.53981633974483
  
//   blueRectangle.displayColor(); // Output: Color: blue
//   console.log(blueRectangle.calculateArea()); // Output: 24
  