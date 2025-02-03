// Template literal

const age = 20;
const fullName = "John Doe";

// String concatenation
console.log("Hello Mr" + fullName + " your age is: " + age);

// Template literal
console.log(`Hello Mr ${fullName} your age is: ${age}`);


// Print sum of 2 numbers
const a = 10;
const b = 20;

// output results in 1020 instead of 30 bcoz of string concatenation 
// in case of adding a number with a string
console.log("Sum of " + a + " and " + b + " is: " + a+b);


// Using Template Literal
console.log(`Sum of ${a} and ${b} is: ${a + b}`);
