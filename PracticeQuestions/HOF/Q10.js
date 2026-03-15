const users = [
  {name:"Amit", age:17},
  {name:"Rahul", age:22},
  {name:"Neha", age:19}
];

const adults = users.filter((user) => user.age >= 18)
console.log(adults)