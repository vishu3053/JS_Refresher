// we can destructing in array and object

const arr = [1,2,3,4,5];

console.log(arr[1]);
console.log(arr[2]);

// destructing in array
const [p,q,r,s,t] = arr;

console.log(p);
console.log(q);
console.log(r);

// Object destructing
const person = {
    fname: "John Doe",
    age: 25,
    gender: "male",
    country: "Norway"
}

// access values

// 1) using dot notation
console.log(person.fname);

// 2) bracket notation
console.log(person["gender"]);
console.log(person["age"]);

// 3) Destructing 
const {fname, country} = person;
console.log("Name: ", fname);
console.log("Location: ", country);


