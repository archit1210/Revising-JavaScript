const arr = [1,2,3,4,5]

for(let i = 0; i<arr.length; i++){
    console.log(arr[i])
}


for(let i = 1; i<=10; i++) {
    for(let j = 1; j<=10; j++) {
        console.log(`${i}*${j} = ${i*j}`)
    }
}


const superHeros = ['batman', 'superman', 'flash', 'aquaman']
for(let i = 0; i<superHeros.length; i++) {
    console.log(superHeros[i])
}

console.log("All the multiples of 3 in range of 1 to 50")
for(let i = 1; i<=50; i++) {
    if(i % 3 != 0) {
        continue;
    }
    console.log(i)
}