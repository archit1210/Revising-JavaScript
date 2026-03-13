const myObject = {
    name: "archit",
    "surname": "lokhande",
    age: 22,
    gender: "male",
    location: "Mumbai"
}

console.log(myObject.name)
console.log(myObject["surname"])
console.log(myObject["location"])

myObject.greeting1 = function () {
    console.log("Hello , good morning...!!")
}

myObject.greeting2 = function () {
    console.log(`Hello , good morning...!! , this is ${this.name}`)
}
console.log(myObject.greeting2())