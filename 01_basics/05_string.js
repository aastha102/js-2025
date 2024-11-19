const name = "newyork" // cannot change in fute as declared as const
const Count = 50

// console.log(name + Count + " Value"); // op: newyork50 Value

// This is recommended coz we can use it with string- ${var name}
console.log(`Hello my name is ${name} and my count is ${Count}`) //; is optional

let gameName = new String('wollyball') //declaring as object
gameName2=new String(gameName)
console.log(gameName)
console.log(gameName2[3])

gameName3="bottle"

console.log(gameName3[2])
console.log(gameName3.split(','))

gameName2= "tennis"

console.log(gameName)
console.log(gameName2)



// // console.log(gameName[0]);
// // console.log(gameName.__proto__);


// // console.log(gameName.length);
// // console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

 // convert into substring till 3
// const newString = gameName.substring(0, 4) 
// console.log(newString);

// const anotherString = gameName.slice(-8, 4) //convert from -8 till 3 
// console.log(anotherString);

// const newStringOne = "   ngnix    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); //remove the extra spaces from both sides

// const url = "https://ngnix.com/ngnix%20decoder"

// console.log(url.replace('%20', '-'))

// console.log(url.includes('satellite')) //evaluates as true or false

// console.log(gameName.split('-'));

// Explanation:-

// let gameName = new String('wollyball');

/* This creates a String object using the String constructor.
The new String('wollyball') syntax explicitly creates an instance of the String object.
While the String object behaves like a primitive string in many contexts, it is not the same as a primitive string.*/

console.log(typeof gameName); // "object"
console.log(gameName === 'wollyball'); // false

//This approach is rarely used unless you specifically need a String object, which is uncommon.

gameName3 = "bottle";

/* This assigns a string primitive ("bottle") directly to the variable gameName3
It is the more common and preferred way to declare and use strings in JavaScript */
//Example:
let ket;
console.log(typeof gameName3); // "string"
console.log(gameName3 === "bottle"); // true