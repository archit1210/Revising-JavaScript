 console.log("Functions...!!!")

 function addNumber (num1, num2) { // parameters
    return num1 + num2
 }

 console.log(`Sum : ${addNumber(2,6)}`) // these are known as arguments


 function userLoginMessage(username = "Nucleya") {
    return `${username} just logged In..!!`
 }

//  console.log(userLoginMessage("Archit"))
 console.log(userLoginMessage())


 function calculatePrice(val1,val2,...num1) { // rest operator in js
    return num1
 }


 console.log(calculatePrice(200,300,400,500,600))

 // Passing objects in the function as a parameter
 function getUserDetails (userObject) {
    console.log(`Username ${userObject.name}, age is ${userObject.age}`)
 }

 getUserDetails({name: "Archit Lokhande", age: 22})