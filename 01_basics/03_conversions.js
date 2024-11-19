// No need to declare data type of var
let score = "20"

//console.log(typeof score); // data type of score
//console.log(typeof(score));

let valueInNumber = Number(score) // converting string to number
//console.log(typeof valueInNumber);
//console.log(valueInNumber);


// "33" => 33 // Converting to number
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "ameerica"

let booleanIsLoggedIn = Boolean(isLoggedIn) // converting to boolean then storing into variables
//  console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false // empty string
// "any name" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = "america"

let str3 = str1 + str2 // concatenate and storing into str3
// console.log(str3);

// console.log("1" + 2); //output 12
// console.log(1 + "2"); //op:- 12
// console.log("1" + 2 + 2); //op:- 122
// console.log(1 + 2 + "2"); //op: - 32
console.log("1" + (2+2)) // op:- 14

// console.log( (3 + 4) * 5 % 3); //satndarderized way

// console.log(+true); // op: 1 conversion
// console.log(+""); //op:0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2 //not recommended

let gameCounter = 100
++gameCounter; // increment counter
console.log(gameCounter);

// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion