function primeOrNot (num) {
    let cnt = 0;
    for(let i = 2; i<=num/2; i++){
        if(num % i == 0) {
            cnt++
        }
    }

    if(cnt) {
        console.log("not prime")
    } else {
        console.log("prime")
    }
}

primeOrNot(23)