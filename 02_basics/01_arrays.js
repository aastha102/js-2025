// array

// index starting from 0
const myArr = [0, 1, 2, 3, 4, 5]
const myString = ["sparrow", "parrot"]

/* This uses array literal syntax to create the array.
It directly creates an array with the specified elements (0, 1, 2, 3, 4, 5).
It is the most common and concise way to create arrays in JavaScript.
Type: The resulting variable myArr is an Array object. */

const myArr2 = new Array(1, 2, 3, 4)
/* This uses the Array constructor to create the array.
The new keyword explicitly invokes the Array constructor to create an array instance.
In this case, the elements (1, 2, 3, 4) are passed as arguments to the constructor, and they become the contents of the array. */

// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

myArr.unshift(9) // place 9 in first position and shifts other elements
// myArr.shift()

// console.log(myArr.includes(9)); //1 if present else -1
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()// convert to string

// console.log(myArr);
// console.log( newArr);


/* Difference between slice and splice */

/* slice()
Purpose: Extracts a portion of an array without modifying the original array.

Syntax:

array.slice(startIndex, endIndex);
startIndex: The index where extraction begins (inclusive).
endIndex: The index where extraction ends (exclusive). If omitted, it extracts until the end of the array.
Returns: A new array containing the selected elements.

Does Not Modify the Original Array.*/

/* splice()
Purpose: Adds, removes, or replaces elements in an array by modifying the original array.

Syntax:

array.splice(startIndex, deleteCount, item1, item2, ...);
startIndex: The index where changes start.
deleteCount: Number of elements to remove. If 0, no elements are removed.
item1, item2, ...: Optional. The elements to add at startIndex.
Returns: An array containing the removed elements (if any).

Modifies the Original Array. */

const arr = [1, 2, 3, 4, 5];

// Remove 2 elements starting at index 1
const removed = arr.splice(1, 2);

console.log(removed); // Output: [2, 3]
console.log(arr);     // Output: [1, 4, 5] (modified)

const arr1 = [1, 2, 3, 4, 5];

// Add 6 and 7 at index 2
arr1.splice(2, 0, 6, 7);

console.log(arr1); // Output: [1, 2, 6, 7, 3, 4, 5]

const arr3 = [1, 2, 3, 4, 5];

arr.splice(2, 0, 6, 7);
/* Parameters:

2: The startIndex where changes will occur (i.e., at index 2, before the current element 3).
0: The deleteCount, indicating how many elements should be removed (in this case, 0 means no elements are removed).
6, 7: The elements to be added starting at startIndex.
Resulting Action:

At index 2, the elements 6 and 7 are inserted into the array.
No elements are removed because deleteCount is 0. */

// Replace 2 elements starting at index 1 with 8 and 9

arr3.splice(1, 2, 8, 9);

console.log(arr3); // Output: [1, 8, 9, 4, 5]


console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // index 1 to 3-1 // it does not impact on original one

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) //index 1 to 3 // it removes 1 index to 3 from origianal array
console.log("C ", myArr);
console.log(myn2);