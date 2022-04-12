/*
 1. Assigment Operators
 2. Comparison Operators
 3. Arithmetic Operators
 4. Bitwise Operators
 5. Logical Operators
 6. String Operators
 7. Conditional (ternary) Operators
 8. Comma Operators
 9. Unary Operators
 10. Relational Operators
*/

//  1. Assigment Operators
let x = 10;
let y ;
y = x;
console.log(y);

// Compound Oprerators

let x1 = 10;
let y1 = 20;
x1 = x1+y1; // x1+=y1;
console.log(x1);

// Arithmetic Oprerators

let p = 10;
p =  p+1; // p++; p=11
p++; // 12
--p; // 11
p--; // 10
console.log(p);

// x^2 == x**2 in JavaScript.

let q=10;
q=q**3; // console.log(q**3);
console.log(q);

// Logical Oprerators work with bollean
// Logical AND (&&)

let happy = true  && true;
console.log(happy);
happy = true && false;
console.log(happy);

const inLogedIn = true;
const hasPermissions = false;
if(inLogedIn && hasPermissions)
{
  console.log('You can delete deta');
}else{
  console.log('You can\'t delete the deta');
}

// Also We can use like this

console.log('Cat' && 'Dog'); // output Dog
console.log('Dog' && 'Cat'); // output Cat

console.log('Cat' && false); // Output false
console.log( false && 'Cat'); // Output false

console.log('Cat' && true); // Output true
console.log(true && 'Cat'); // Output cat

// Logical OR ||

console.log();
let happy1 = true  || true;
console.log(happy1);
happy1 = true || false;
console.log(happy1);

const inLogedIn1 = true;
const hasPermissions1 = false;
if(inLogedIn1 || hasPermissions1)
{
  console.log('You can delete deta');
}else{
  console.log('You can\'t delete the deta');
}

// Also We can use like this

console.log('Book' || 'Dog'); // output Book
console.log('Dog' || 'Book'); // output Dog

console.log('Book' || false); // Output Book
console.log( false || 'Book'); // Output Book

console.log('Book' || true); // Output Book
console.log(true || 'Book'); // Output true

const happy2 = false;
console.log(!happy2); // true

const animal = 'Cat';
console.log(!animal); // false

// Conditionla  Operators ( ternary Operators)

const userRole = 'admin';

if(userRole ==='admin'){
  console.log('You are an admin');
}else{
  console.log('You are not an admin');
}

// condition ? 'true' : 'false'; (ternary Operators ? : )

userRole === 'admin' ? console.log('You are an admin') :  console.log('You are not an admin');








//exryctfuvygibuhnijomkl;xyctfvygbhlj
