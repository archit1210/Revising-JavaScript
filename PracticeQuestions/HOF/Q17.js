const cart = [
 {item:"Laptop", price:50000},
 {item:"Mouse", price:500},
 {item:"Keyboard", price:1500}
];

const totalPrice = cart.reduce((acc, current) => acc+current.price, 0)
console.log(totalPrice)