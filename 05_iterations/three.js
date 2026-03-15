// Array specific loops

// for of loop --> same as for each loop in cpp

const arr = [1,2,3,4,5,6]
for (const num of arr) {
    // console.log(num)
}

const greeting = "Hello world"
for(const letter of greeting){
    // console.log(letter)
}

const map = new Map()
map.set("IN", "India")
map.set("US", "USA")
map.set("UK", "United Kingdom")
map.set("DXB", "Dubai")

for(const [key, value] of map) {
    console.log(`${key} :- ${value}` )
}


/* 
for of loop is not valid for object
const user = {
    name: 'Archit',
    age: 22,
    location: 'Mumbai',
    gender: 'male'
}

for(const data of user){
    console.log(data)
}
*/