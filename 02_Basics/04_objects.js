const tinderUser = new Object()
tinderUser.name = "archit"
tinderUser.age = 22
tinderUser.isLoggedIn = false
console.log(tinderUser)


const nestedObject = {
    email: 'archit@gmail.com',
    fullname: {
        username: {
            firstname: 'archit',
            lastname: 'lokhande'
        }
    },
    location: {
        city: 'Mumbai',
        street: 'VN',
        pincode: 40022
    }
}

console.log(nestedObject) // prints the whole object
console.log(nestedObject.fullname.username)

const obj1 = {1: "a", 2: 'b'}
const obj2 = {3: "c", 4: 'd'}
const obj3 = Object.assign({}, obj1, obj2) // merges into new obj and assign it to obj3
// const obj3 = {...obj1, ...obj2} -->> this is spread operator
console.log(obj3)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) // returns an array of keys
console.log(Object.values(tinderUser)) // returns an array of values
console.log(Object.entries(tinderUser)) // nested array key and the value
console.log(tinderUser.hasOwnProperty('name'))


// destructuring in JS -> extract the value from the objects
const course = {
    name: "JavaScript",
    price: "999",
    lang: "english"
}

const {name: courseName} = course
console.log("Course name is", courseName)