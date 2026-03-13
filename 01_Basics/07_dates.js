let myDate = new Date()
console.log(myDate)
console.log("The date is in string format -> ", myDate.toString())
console.log("The date is in string JSON -> ", myDate.toJSON())
console.log("The date is in toLocaleDateString -> ", myDate.toLocaleDateString())
console.log("The date is in toLocaleString -> ", myDate.toLocaleString())
console.log("The date is in toLocaleTimeString -> ", myDate.toLocaleTimeString())
console.log("The date is in toDateString format -> ", myDate.toDateString())


let customDate = new Date(2024, 9, 12)
console.log("It is my birthday ", customDate.toDateString())

console.log(Date.now())

let newDate = new Date()
console.log("Current date is ", newDate.getDate())
console.log("Current date day ", newDate.getDay())
console.log("Current month is", newDate.getMonth())
console.log("Current year is ", newDate.getFullYear())

// Using properties of toLocaleString
console.log(newDate.toLocaleString("default", {
    weekday: "long"
}))

