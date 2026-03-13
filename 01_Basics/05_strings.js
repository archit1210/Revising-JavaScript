const name = "Archit Lokhande"
let repoCount = 20

// This is known as string interpolation
console.log(`My name is ${name} and my github repo count is ${repoCount}`)
console.log(name.includes('archi'))

const gameName = new String("architLokhande")
let index = 3
console.log(`Character at ${index} is ${gameName.charAt(2)}`)
console.log(`Length of the string is ${gameName.length}`)
console.log(`This is the string in uppercase ${gameName.toUpperCase()}`)
console.log(`This is the string in lowercase ${gameName.toLocaleLowerCase()}`)
console.log(`Occurance of d appears at ${gameName.indexOf('d')}th index`)

const newString = gameName.substring(0,7)
console.log(`New string value is ${newString}`)


const password = "    Archit Lokhande.  "
console.log(password.trim()) // this removes the extra white space in the string
console.log(password.length)
console.log(password)  

const url = "https://wwww.archit%20lokhande.com"
console.log(`Before using replace url is ${url}`)
console.log(`After using replace url is ${url.replace('%20', '-')}`)
