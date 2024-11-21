// if statement

/*   ------------------------------------------------------------- Note ---------------------------------------------

== (Equality Operator)
Compares values for equality.
Performs type coercion: If the operands are of different types, it attempts to convert them to the same type before comparing.
Example:
javascript
Copy code
console.log(5 == '5');   // true (string '5' is converted to number 5)
console.log(true == 1);  // true (true is converted to 1)
console.log(null == undefined); // true (special case)

=== (Strict Equality Operator)
Compares both value and type for equality.
Does not perform type coercion: If the operands are of different types, it returns false without trying to convert.

*/

const isUserloggedIn = true
const temperature = 41

if ( temperature === 40 ){
    console.log("less than 50");
} else {
    console.log("temperature is greater than 50");
}

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !== 

const score = 200

if (score > 100) {
    let power = "fly"
    console.log(`User power: ${power}`);
}

// console.log(`User power: ${power}`); 

const balance = 1000

if (balance > 500) console.log("test"), console.log("test2");

/* console.log("test"), console.log("test2")):

The comma operator executes multiple expressions from left to right and returns the result of the last expression.
In this case:
console.log("test") is executed first.
Then, console.log("test2") is executed.
Both statements are executed when the condition is true. */

console.log("balance")

if (balance < 500) console.log("test"), console.log("test2");

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 750");    
} else if (balance < 900) {
    console.log("less than 750");    
} else {
    console.log("less than 1200");
}

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) { 
    // true and true and false -> false
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) { 
    // true or false -> false
    console.log("User logged in");
}
