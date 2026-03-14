const month = 2

switch (month) {
    case 1:
        console.log("Janurary")
        break
    case 2:
        console.log("February")
        break
    case 3:
        console.log("March")
        break
    case 4:
        console.log("April")
        break
    case 5:
        console.log("May")
        break
    case 6:
        console.log("June")
        break
    default: 
       console.log("Invalid month")
}


const num1 = 3
const num2 = 4
let op = '-'

switch(op) {
    case '+':
        console.log(num1+num2)
        break
    case '-':
        console.log(num1-num2)
        break
    case '*':
        console.log(num1*num2)
        break
    case '/':
        console.log(num1/num2)
        break
    default:
        console.log('Invalid operation')
        break
}