var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    console.log("INNER: ", a);
    
}

console.log(a);
// console.log(b); // not accessible
console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

one()

if (true) {
    const username = "gitesh"
    if (username === "gitesh") {
        const website = " youtube"
        console.log(username + website);
    }
    // console.log(website);// can't access here
}

// console.log(username); can't access here



function addone(num){
    return num + 1
}
console.log(addone(5))

/*
console.log(addTwo(6)) // we cannt access before declaration
const addTwo = function(num){
    return num + 2
}
*/
