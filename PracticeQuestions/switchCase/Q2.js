let number1 = 12
let number2 = 13
const op = '-'
let result;

switch(op) {
    case '+':
      result = number1+number2
      break
    case '-':
      result = number1-number2
      break
    case '*':
      result = number1*number2
      break
    case '/':
      result = number1/number2
      break
    default:
      console.log("Invalid operation.!!")
      break
}

console.log(`Result is ${result}`)