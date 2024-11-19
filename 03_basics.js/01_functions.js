
function sayMyName(){
    console.log("A");
    console.log("A");
    console.log("S");
    console.log("T");
    console.log("H");
    console.log("A");

    return "AASTHA"
}

console.log(sayMyName())

function addTwoNumbers(number1, number2){

    console.log(number1 + number2);}


function addTwoNumbers(number1, number2){

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)

console.log("Result: ", result);


function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

console.log(loginUserMessage("gitesh"))
console.log(loginUserMessage("jitesh"))


function calculateCartPrice(val1, val2, ...num1){
    return num1 // val1 and val2 are two first values then remaning treated as num1
}

console.log(calculateCartPrice(200, 400, 500, 2000, 700))

const user = {
    username: "gitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.prices}`);
}

handleObject(user)
handleObject({
    username: "sam",
    prices: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));