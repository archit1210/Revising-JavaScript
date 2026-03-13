// call by value and call by reference
let myAccoountId = 2303
let secondAccountId = myAccoountId
secondAccountId = 2024

console.log("My account ID ", myAccoountId)
console.log("Secondary account ID ",  secondAccountId)


let user1 = {
    name: "archit",
    email: "archit@gmail.com",
    upiId: "archit@ybl"
}

let user2 = user1
user2.email = 'archit1210@gmail.com'

console.log("User 1 ", user1)
console.log("User 2 ", user2)

// Primarily all primitive data types are stored in stack and ref types in heap
// in stack an another copy is created but in heap the reference is passed