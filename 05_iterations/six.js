// const coding = ['java', 'js', 'swift', 'node', 'react']

// const data = coding.forEach((item) => {
//     // console.log(item)
//     return item
// })

// console.log(data)

// this loop ^^ wont work when want performing operations on the values in the array

// map, filter and reduce
const arr = [1,2,3,4,5,6,7,22,34,56,45,78,90]

const evenNumbers = arr.filter((num) => num % 2 === 0)
console.log(evenNumbers)

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const newbooks = books.filter((book) => book.edition >= 2005)
console.log(newbooks)

console.log("Books published after 2000")
const latestbooks = books.filter((book) => book.publish >= 1995 && book.genre === 'History')
console.log(latestbooks)