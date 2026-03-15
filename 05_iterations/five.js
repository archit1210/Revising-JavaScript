// for each loop

const coding = ['java', 'js', 'swift', 'node', 'react']

// using normal function
coding.forEach(function (item) {
    console.log(item)
})

// using arrow function
coding.forEach((data) => console.log(data))


// passing function as a parameter
function printNums (data) {
    console.log(data)
}
coding.forEach(printNums)


coding.forEach((num, index, arr) => {
    console.log(num,index,arr)
})


const languageData = [
    {
        language: "C++",
        extension: "cpp"
    },
    {
        language: "Javascript",
        extension: "js"
    },
    {
        language: "python",
        extension: "py"
    },
    {
        language: "typescript",
        extension: "ts"
    },
    {
        language: "html",
        extension: "html"
    }
]

languageData.forEach((data) => console.log(data.extension))