let score = undefined
console.log(typeof score)
console.log(typeof (score)) // both the ways are same 

let valueInt = Number(score)
console.log(typeof valueInt)
console.log(valueInt) // output => NaN (Not a Number)

// "33" => 33
// "33abc" => NaN
// true => 1 and false => 0

let isLoggedIn = "an"
console.log(typeof Boolean(isLoggedIn))
console.log(isLoggedIn)

// "" => false --> empty string
// "abc" => true --> non-empty string

let rollNumber = 33
let rollNumberString = String(rollNumber)
console.log(typeof rollNumberString)



/******** Operations **********/
console.log("******** Operations **********")
console.log(2+2)
console.log(typeof (2+'2'))
console.log(typeof ('2'+2))
console.log("1" + 2 + 3)
console.log(2 + 2 + "3")
console.log(2 + 2 + "3" + 4)

let counter = 100
console.log(counter++)
console.log(counter)
