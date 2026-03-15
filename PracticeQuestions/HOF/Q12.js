const products = [
 {name:"Laptop", price:50000},
 {name:"Mouse", price:500},
 {name:"Phone", price:20000}
];

const expensive = products.filter((product) => {
    return product.price >= 2000
})

console.log(expensive)