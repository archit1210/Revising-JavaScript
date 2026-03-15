const data = {
    js: 'javascript',
    rb: 'ruby',
    swift: 'swift by apple',
    cpp: 'c++',
}

for(const key in data){
    console.log(`${key} => ${data[key]}`)
    // console.log(key) --> prints the key 
    // console.log(data[key]) --> prints the value 
}

const arr = [1,2,3,4,4,5,]
for(const number in arr){
    console.log(arr[number])
}

// for in loop print the keys by default