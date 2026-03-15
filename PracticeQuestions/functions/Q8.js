const tempreture = (currentTempreture) => {
    let result = (currentTempreture * 9/5) + 32
    return result
}

console.log(tempreture(23))