const collatz = require ('./collatz');
let collatz1 = new collatz(process.argv[2]);
// console.log(collatz1.getcollatz());


const car = require('./car');
const car1 = new car("f150", 2002, 'ford');
car1.setModel('extra cool')
// console.log(car1);


const {Circle, Square} = require('./inheritence/shape');
const redCircle = new Circle("red", 5);
// console.log(redCircle.displayInfo());


const {Dog, Cat} = require('./inheritence/animal');
const dog1 = new Dog('bubba')
// console.log( dog1.name, 'says ',   dog1.speak());
const cat1 = new Cat('henry');
// console.log( cat1.name, 'says ',   cat1.speak());