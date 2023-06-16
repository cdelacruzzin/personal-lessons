// Base class: Vehicle


//  The code starts by declaring a base class called Vehicle using the class keyword.
// Inside the class definition, we have a constructor method that takes make, model, and year as parameters. The constructor initializes the respective properties of the object using this.
// The class also defines two methods: start() and stop(), which log messages to the console.
class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    start() {
      console.log("Starting the vehicle...");
    }
  
    stop() {
      console.log("Stopping the vehicle...");
    }
  }

//   Next, we declare a subclass called Car using the extends keyword, indicating that it inherits from the Vehicle class.
// The Car class also has a constructor that takes additional parameter numDoors. It calls the super keyword, which references the parent class (Vehicle) constructor and passes the necessary arguments.
// Inside the constructor, the subclass sets the numDoors property.
// The class defines two methods specific to cars: accelerate() and brake(), which log messages to the console.



  // Subclass: Car
  class Car extends Vehicle {
    constructor(make, model, year, numDoors) {
      super(make, model, year);
      this.numDoors = numDoors;
    }
  
    accelerate() {
      console.log("Accelerating the car...");
    }
  
    brake() {
      console.log("Applying brakes to the car...");
    }
  }
  



//   Similarly, we declare another subclass called Motorcycle, also extending the Vehicle class.
//   The Motorcycle class has a constructor that calls the parent class constructor via super and passes the necessary arguments.
//   The class defines a single method, wheelie(), which logs a message to the console.

  // Subclass: Motorcycle
  class Motorcycle extends Vehicle {
    constructor(make, model, year) {
      super(make, model, year);
    }
  
    wheelie() {
      console.log("Performing a wheelie on the motorcycle!");
    }
  }


//   Finally, we create instances of the Car and Motorcycle classes using the new keyword and provide the necessary arguments to their constructors.
//   We then invoke various methods on the instances (start(), accelerate(), wheelie()) to test the inheritance and the specific functionality of each class.

  // Create instances and test the inheritance
  const car = new Car("Toyota", "Camry", 2022, 4);
  car.start(); // Output: Starting the vehicle...
  car.accelerate(); // Output: Accelerating the car...
  
  const motorcycle = new Motorcycle("Honda", "CBR500R", 2021);
  motorcycle.start(); // Output: Starting the vehicle...
  motorcycle.wheelie(); // Output: Performing a wheelie on the motorcycle!
  