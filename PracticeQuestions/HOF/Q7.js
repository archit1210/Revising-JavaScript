const prices = [100, 200, 300];

const taxPrices = prices.map((price) => {
    return price + price*18/100
})

console.log(taxPrices)