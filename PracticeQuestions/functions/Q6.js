const factorial = (num) => {
    let temp = 1
    for(let i = 1; i<=num; i++){
        temp*=i
    }
    return temp
}

console.log(factorial(5))