const marvel_heros = ['superman', 'batman', 'flash']
const dc_heros = ['iron_man', 'captain_america', 'spiderman']

console.log("This is marvel heros ", marvel_heros)
console.log("This is Dc heros ", dc_heros)

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][2]) // 3rd element ka 2nd element

const allHeros = marvel_heros.concat(dc_heros) // returns a new array
console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros)

const nestedArray = [1,2,3,4,[5,6,7],8,9,[1,2,3,[4,5]]]
console.log(nestedArray)

const flattenedArray = nestedArray.flat(Infinity) // will resolve the whole array
console.log(flattenedArray);

console.log(Array.from("Archit Lokhande"))


