// this keyword is used to refer current context

const user = {
    username: "esh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);// here current contxt is esh
        console.log(this); // compete current context
    }

}

// user.welcomeMessage() // calling function and this.username refer to esh
// user.username = "sam"
// user.welcomeMessage() // calling function and this.username refer to esh coz correct context has changed

// console.log(this); // complete correct context: username is same

function fun1(){
    let username = "denny"
    console.log("checking")
    console.log(this.username); //op: undefined // here this is referring to current username denny // this keyword is not working inside function
}

// [Note: this keyword is not working inside functions]
fun1()

const obj1 = function () {
    let username = "hitech"
    console.log(username);
}
console.log(obj1)
console.log(obj1.username) // undefined coz it is inside function
//console.log(obj1.function()) //error
console.log("functions")
console.log(obj1())
console.log(obj1())

/* Arrow function is like annonymous function which means no name */

const func2 =  () => {
    let username = "hitech"
    console.log(this); //op: {}
}
func2 ()

console.log("Different ways of arrow functions")

/* Different ways to use arrow function */

// 1. heere no need to give function name
const addTwo = (num1, num2) => {
    return num1 + num2
} 
console.log(addTwo(1, 2))

// 2. here no need to give function name and return keyword coz return is there (Implicit Return)
const addThree = (num1, num2, num3) =>  num1 + num2 + num3
console.log(addThree(1, 2, 3))

const add3 = (num1, num2, num3) =>  console.log(num1 + num2 + num3) // if console.log is not there it means return
add3(1, 2, 3)
console.log(add3(3, 4, 7)) //op: undefined

/* If we wrap in curly braces, return should be write explicitly else return is implicit */

const add2 = (num1, num2) => ( num1 + num2 )
console.log(add2(20, 30))

// object return
// const add2o = (num1, num2) => {username: "hitesh"} //invalid
const addG = (num1, num2) => ({username: "hitech"})
console.log(addG(20, 30))
console.log(addG(20, 30).username)

const myArray = [2, 5, 3, 7, 8]

