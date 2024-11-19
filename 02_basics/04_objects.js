// Singleton object declaration
// const tinderUser = new Object()

// object literal
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kitesh",
            lastname: "choudhary"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

const obj3 = { obj1, obj2 } // not recommended way one inside one
console.log(obj3)
const obj5 = Object.assign({}, obj1, obj2, obj4)

console.log(obj5);


const users = [
    {
        id: 1,
        email: "hy@gmail.com"
    },
    {
        id: 2,
        email: "hk@gmail.com"
    },
    {
        id: 3,
        email: "hl@gmail.com"
    },
]

console.log(users[1].email)
console.log(tinderUser);

console.log(Object.keys(tinderUser)); // keys of object
console.log(Object.values(tinderUser)); // values of object
console.log(Object.entries(tinderUser)); //both

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //checking is key present or not in object


const course = {
    coursename: "Python",
    price: "999",
    courseInstructor: "gitesh"
}

console.log(course.courseInstructor)

// object desctructor

const {courseInstructor}= course
console.log(courseInstructor);

const {courseInstructor: instructor} = course
console.log(instructor);

const {price, coursename}= course
console.log(price)
console.log(coursename)



