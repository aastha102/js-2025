const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values

// "0", 'false', " ", [], {}, function(){}
// string 

if (userEmail.length === 0) {
    console.log("Array is empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null undefined
/* The ?? operator evaluates the left-hand side and:

If the value is not null or undefined, it returns the left-hand side.
If the value is null or undefined, it returns the right-hand side. */

// ex: 

let username = null;
let defaultName = "Guest";

let finalName = username ?? defaultName;
console.log(finalName); // Output: "Guest"

let val1;
val1 = 5 ?? 10
console.log(val1)
val2 = null ?? 10
console.log(val2)
val3 = undefined ?? 15
console.log(val3)
val4 = null ?? 10 ?? 20
console.log(val4)

// Terinary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")
console.log(iceTeaPrice)