let arr1 = [1,2,3,4,5]
// console.log(arr1)

let arr2 = new Array(1,2,3,4,5)
console.log(arr2)
arr2.push(6) // append at the end
arr2.push(7)
console.log(arr2)

arr2.shift() // removes the first element
arr2.pop() // removes the last value
console.log(arr2)

arr2.unshift(9) // appends the number at the first index
console.log(arr2)

console.log("New array ops")
const newArray = [10,20,30,40,50]
console.log(newArray.indexOf(10)) // gives index of element else -1
console.log(newArray.indexOf(40)) // returns bool value
console.log(newArray.join()) // covert the array into the string


const myArray1 = [1,2,3,4,5,6,7,8]
console.log("The original array \n", myArray1)

const myArray2 = myArray1.slice(0,3) // print from index 1 to n-1
console.log("The original array \n", myArray1) // keeps OG as it is
console.log("Array after slice", myArray2)

const myArray3 = myArray1.splice(1,3) // removes element from 1 to 3
console.log("The original array \n", myArray1) // manipulates teh OG
console.log("Array after splice", myArray3)