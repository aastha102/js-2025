// Declaration of variable

const accountId = 144553
let accountEmail = "jitin@gmail.com"
var accountPassword = "12365" 
accountCity= "jaipur" // Not recommended
let accountState // ; is optional

// accountId =2 // not allowed coz it is constant

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

accountEmail = "gitin@gmail.com"
accountPassword = "31241265"
accountCity = "Bengalore"

console.log(accountEmail) // if value is not given, it is taking as undefined

// Printing in table format
console.log(accountState)
console.table([accountId, accountEmail, accountPassword, accountCity])

