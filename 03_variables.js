// Variables (3 types of Variables)
// var, let, const

let language = 'JavaScript';

console.log(language);
language = 'JAVA';
console.log(language);
// or we ce do like this
// let variable is a bolck scope
let name;
name = 'KUNTAL OJHA';
console.log(name);

// const of you use const then you can't change the value.

const secondsInMinute = 60;
console.log(secondsInMinute);
// secondsInMinute = 70; we can't change this.

//  var is a function scope.

var languages = 'English';

if(true)
{
  let age = 25;
  var book = 'Bangali';
  const pi= 3.1416;
}

// console.log(age);  we can't do this ( let is a block scope)
console.log(book); // this is function scop not block scop.
// console.log(pi);   we can't do this ok. (const is a block scope)

// assign object
const myName = {
  myage: 23
}

const yourAge = 60;

console.log(myName.myage);

console.log(yourAge);

// Hoisting
console.log(greeting); // It's shows error undefined
var greeting = 'Hello';

// We should declar let variable   before use it.
// console.log(kuntal);

// let kuntal = 'KUNTAL';
// We can't do this in let verible it's show error

// console.log(kuntal);

// const kuntal = 10;

// We also can't do this .
