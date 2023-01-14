// Use strict
//added in ES 5
// use this for valina Javascript.
'use strict';

//2. Variable
// let (added in ES^)
let globalName = 'global name';
{
  let name = 'ellie';
  console.log(name);
  name = 'hello';
  console.log(name);
}
console.log(name);
console.log(globalName);

//var (don't ever use this!)
//var hoisting(이끌어주다) (move declaration from bottom to top)
{
  age = 4;
  var age;
}
console.log(age);

//3. Contants
//favor immutable date type always for a few reasons;
// - security
// - thread safety
// - reduce human mistakes
const daysInWeek = 7;
const maxNumber = 5;

//4. Variable types
//primitive, single item: number, string, boolean, null, undefiedn, symbol
//object, box container
//function, first-class- function
const count = 17; //integer
const size = 17.1; //decimal number

console.log(`value: ${count}, type: ${typeof count}`);
console.log(`value: ${size}, type: ${typeof size}`);

//number - speicla numeric values: infinity, -infinity, NaN
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;


//bigInt

//String
const char = 'c';
const brendan = 'brendan'

//boolean
//false: 0, null, undefined, NaN, ''
//true

// const showMessage = function (message, from = 'unknown') {
//   console.log(`${message} by ${from}`)
// }
//
// showMessage('hi!')
//
// function printAll(...args) {
//   for (let i = 0; i < args.length; i++) {
//     console.log(args[i]);
//   }
//   for (const arg of args){
//     console.log(arg);
//   }dkfjdakfajfds
//   args.forEach((arg) => console.log(arg));fddfasfdsa
// }
//
// printAll('draam', 'sky')
//
//
// //Arrow function
// // alwqys anonymous
//
// const simplePrint = () => console.log('simplePrint');
// simplePrint();
//
// const add = (a, b) => a+b;
// console.log(add(2, 3));
//
// const simpleMultiply = (a,b) => {
//   //do something more
//   return "simpleMultiply: " + a*b;
// }
// console.log(simpleMultiply(3,2));

//IIFE 함수 선언과 동시에 바로 호출
// (function hello(){
//   console.log('IIFE');
// })();

//class: template
//object: instance of a class
//JavaScript classes
//1. Class declarations
// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
//   speak() {
//     console.log(`${this.name}: hello!`);
//   }
// }
// const sky = new Person('sky', 20);
// console.log(sky.name);
// console.log(sky.age);
// sky.speak();
//
// //2. Getter and setters
// class User {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }
//
//   get age(){
//     return this._age;
//   }
//
//   set age(value) {
//     this._age = value;
//   }
//
// }
//
// const user1 = new User('Steve', 'job', -1);
// console.log(user1.age);
