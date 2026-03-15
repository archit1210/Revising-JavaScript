// reduce in js
const arr = [1,2,3,4,5,6,7,8,9,10]
let initialValue = 0

const sum = arr.reduce((acc, current) => acc + current, initialValue)

console.log(sum)

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const price = shoppingCart.reduce((acc,current) => acc + current.price, 0)
console.log("Total price is ", price)

