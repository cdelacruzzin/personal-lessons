// Exercise 1: Animal Hierarchy
// Create a module called "animals.js" that exports a base class called "Animal" with properties like "name" and methods like "speak" that logs a generic message. Implement two subclasses, "Dog" and "Cat," that inherit from the "Animal" class. Each subclass should have its own implementation of the "speak" method that logs a species-specific message. Import the classes into a "main.js" file and create instances of both "Dog" and "Cat" classes, calling their respective "speak" methods.

class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return ('woof')
  }
}

class Dog extends Animal{
  constructor(name){
    super(name);
  }
  speak(){
    
    return super.speak();
  }
}

class Cat extends Animal{
  constructor(name){
    super(name);
  }
  speak(){
    return 'meow';
  }
}

module.exports ={
  Animal, Dog, Cat
}

