// variables in JS
const accountId = 2100
let accountEmail = "archit@gmail.com"
var accountPassword = "12345"
accountCity = "Mumbai" // allowed but not proficient
let accountData; // this will print the value as undefined

// accountId = 203 // You cannot change the value stored in the const variable it is declared only once

accountEmail = "lokhande@yahoo.com"
accountCity = "Jaipur"
accountPassword = "098765"

/* 
Prefer not to use var for declaring variables coz it does not follows 
something called as scope -->> block scope or functional scope
*/

console.log("This is account ID ", accountId)
console.log("This is account email ", accountEmail)
console.log("This is account password ", accountPassword)
console.log("This is account city ", accountCity)
console.log("This is account data ", accountData)

console.table([accountId, accountEmail, accountPassword, accountCity, accountData])
