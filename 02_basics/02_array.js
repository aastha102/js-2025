
const arr1 = ["the", "In", "man", 1, 2]
console.log(arr1)
const arr2  = ["super", "flash", "switch"]

arr1.push(3)
console.log(arr1)
console.log(arr2)
arr1.push(arr2) // appending complete array

console.log(arr1);
console.log(arr1[6][1]); //flash
arr1.concat(arr2)
console.log(arr1)
const arr3 = arr2.concat(arr1)
console.log(arr3)


const new_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const another_array = new_array.flat()
const another_array2=new_array.flat(Infinity) //convert into flat array
const another_array3=new_array.flat(2) //depth 2
console.log(another_array);
console.log(another_array2)
console.log(another_array3)


console.log(Array.isArray("Hitesh")) //checking is it array true if yes
console.log(Array.from("Hitesh")) // forming array
console.log(Array.from({name: "hitesh"})) // op; [] coz consfused with key and values

let score1 = 100
let score2 = 200
let score3 = 300

// Formation of array
console.log(Array.of(score1, score2, score3));