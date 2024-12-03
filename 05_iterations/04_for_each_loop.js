const coding = ["js", "ruby", "java", "python", "cpp"]

// forEach loop with callback function - no name function,  val represents every values of arra,function used in array

// coding.forEach( function (val){
//     console.log(val);
// } )

// forEach with arrow function 

coding.forEach( (item) => {
    console.log(item);
} )
 
// function reference passed as parameter to ForEach loop

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) 

 // we can pass all this as parameter to forEach 
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
} )

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
    console.log(item.languageFileName);
    console.log(item)

    // here item represents every item of array
    //3 objects inside array
    // backstick used for value with string

    console.log(` Language name is ${item.languageName}`)
} )