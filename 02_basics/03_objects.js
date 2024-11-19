// singleton
const obj1=new Object()

//declaration of symbol
const mySym = Symbol("key1") 

// It is treating keys as string
// We can access key by object name with .
// for access string declare by object []

// object literals
const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // declaration of symbol
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // accessing of value by key
console.log(JsUser["email"])
console.log(JsUser["full name"]) // we cannot use JsUser."full name"
console.log(JsUser[mySym]) // access symbol only like this

JsUser.email = "gitesh@chatgpt.com"
// freezing the object means we can change the value of any key but it won't change
// Object.freeze(JsUser) 
JsUser.email = "hitesh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function vet(){
    console.log("Hello JS user");
}
JsUser.last_name='peter'
console.log(JsUser)

// by using this keyword access name JsUser
JsUser.greetingTwo = function(){
    console.log('Hello JS user, ${this.name}');
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());