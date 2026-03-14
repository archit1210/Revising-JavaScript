const user = {
    name: "archit",
    age: 22,
    welcomeMessage: function () {
        console.log(`Hello ${this.name}`)
        console.log(this)
    }
}

// this --> keyword refers to the current context
user.welcomeMessage()
user.name = "Rohit Sharma"
user.welcomeMessage()
// console.log(this)


// function demo () {
//     let username = "Virat Kohli"
//     console.log(this)
//     console.log(this.username) // --> this will not work inside function
// }

// demo()

// const demo = function () {
//     let username = "Virat Kohli"
//     console.log(this)
//     console.log(this.username) // --> this will not work inside function
// }

// demo()


// const demo = () => {
//     let username = "Virat Kohli"
//     console.log(this.username)
// }

// demo()


const addNumber = (num1, num2) => {
    return num1 + num2
}

const subtractNumber = (num1, num2) => (num1 - num2)


console.log(addNumber(3,4))
console.log(subtractNumber(3,4))