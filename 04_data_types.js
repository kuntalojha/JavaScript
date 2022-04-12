// Date Types
// JavaScript is a loosely Types Language.

let myAge = 20;
console.log(myAge);
myAge = 'Twenty';
console.log(myAge);
// We can also use const or var Hrer I use let
// (i) Primitive dat atypes
// 1. Number

let Age = 25;
let temp = -25;
let price = 50.50;

console.log(Age,temp,price);
console.log();
console.log(Age);
console.log(temp);
console.log(price);

// 2. String
let name = 'Kuntal'; // or let name = "Kuntal";

// Boolean
// true / false
let  islogedIn = true;
console.log(islogedIn);
let hasPermission = false;
console.log(hasPermission);

 // 4. Undefined is a data type.

let dAge; // if I use const it's shows error and if I use var It's gives us Undefined
console.log(dAge);

// 5. BigInt

// Number.MAX_SAFE_INTEGER value

console.log(2**53-1);
// Here I print the Number.MAX_SAFE_INTEGER
let numbers= Number.MAX_SAFE_INTEGER;
console.log(numbers);

// 6. Symble
// Unique use

// (ii) Structural Types
// 1. Object
  //  1.1 Function
  //  Non-data structure
  //  callable

  //  1.2 Arrays
  // Collection of values
   const Array = [2,3,4,'JavaScript','Python',{name:'Kuntal'}];
   let Array1  = [2,3,4,'JavaScript','Python',{name:'Kuntal'}];
   var Array2  = [2,3,4,'JavaScript','Python',{name:'Kuntal',title:'Ojha'},'Look at me my love'];
   console.log(Array[0],Array1[4],Array2[5].name,Array2[6],Array2[5].title);
console.log(Array);
  //  1.3 Maps
  //  1.4 Set
  //  1.5 Date
  console.log('\n'); // Use for new line
  console.log(Date());

//(iii). Structural root
  // 1 null (empty value ) null data Types
