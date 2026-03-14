let a = 10
const b = 20
var c = 30

if (true) {
    let c = 40
    console.log("Inside the braces" , c)
}

// These are the values in the global scope
// console.log("The value of a ", a)
// console.log("The value of b ", b)
console.log("The value of c outside the braces", c)


// Hoisting in JS
addOne(2)
function addOne(num) {
    return num+1
}

addtwo(4)
const addtwo = function (num){
    return num+2
}
