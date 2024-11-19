
// *********************************************** Dates ****************************************************

"use strict"; // treat all JS code as newer version

// instance(object) of date
let myDate = new Date()
console.log (myDate) // universal date time
console.log(myDate.toString()); // universal date time in string
console.log(myDate.toDateString());  // only date (day month year)
console.log(myDate.toLocaleString()); // day month date year with time h:m:s pm/am
console.log(typeof myDate); //object

// Ouput:-
// 2024-11-19T12:47:27.862Z
// Tue Nov 19 2024 12:47:27 GMT+0000 (Coordinated Universal Time)
// Tue Nov 19 2024
// 11/19/2024, 12:47:27 PM
// object

let myCdate = new Date(2023, 0, 23) 
console.log(myCdate.toLocaleString())
let myCDate = new Date(2023, 0, 23, 5, 3) //date with time hrs min and sec=0
console.log(myCDate.toLocaleString())
let myCtDate = new Date("2023-01-14")
console.log(myCtDate.toLocaleString())
let myCreatedDate = new Date("01-14-2023")
console.log(myCreatedDate.toLocaleString());

//Output:-
// 1/23/2023, 12:00:00 AM
// 1/23/2023, 5:03:00 AM
// 1/14/2023, 12:00:00 AM
// 1/14/2023, 12:00:00 AM


let myTimeStamp = Date.now() //current Date

// console.log(myTimeStamp); // time in miliseconds
// console.log(myCreatedDate.getTime()); // current time
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate); // current date
console.log(newDate.getMonth() + 1); // print current month coz month starts from 0 in js
console.log(newDate.getDay()); // print day of the week, week starts from 0 to 6 

`${newDate.getDay()} and the time `

console.log(newDate.toLocaleString('default', {
    weekday: "long",
    month: "long"
    
})
)
// output:-
// 2024-11-19T13:03:05.681Z
// 11
// 2