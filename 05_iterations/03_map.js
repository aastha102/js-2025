// for of loop

// ["", "", ""]

// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]
//here obj is arr means we are looping into object
for (const num of arr) {
    console.log(num);
}

const greetings = "Hello world!"
// here object is string
for (const greet of greetings) {
    if(greet==" "){
        continue;}
    console.log(`Each char is ${greet}`)
}

// Maps
// Map is key value pair

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}

// const myObject = {
//     game1: 'NFS',
//     game2: 'Spiderman'
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);   
// }

// for of loop is not applicable in oject

const myObject1 = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

// for in loop in object

for (const key in myObject1) {
    console.log(`${key} shortcut is for ${myObject1[key]}`);
}

// for in loop in arrays
const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(programming[key]);
}

// for in loop is not applicable in map
const map1 = new Map()
map1.set('IN', "India")
map1.set('USA', "United States of America")
map1.set('Fr', "France")
map1.set('IN', "India")

for (const key in map1) {
    console.log(key);
}
// for of
for (const key of map1) {
    console.log(key);
}