
// Immediately Invoked Function Expressions (IIFE)

// global scope polution need to neglect


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('tech')
