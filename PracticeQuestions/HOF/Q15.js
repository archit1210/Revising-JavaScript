const numbers = [10, 25, 5, 40, 15];

const maxNumber = numbers.reduce((acc, current) => Math.max(acc, current), 0)
console.log(maxNumber)