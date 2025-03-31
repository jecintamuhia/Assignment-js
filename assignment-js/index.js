// convert the first letter of a string to uppercase
let string ="The child walked to the market";
let result =string.charAt(0).toUpperCase() + string.slice(1);
console.log(result);

// add a character at the third index
let str = "The child walked to the market";
let charToAdd = 'X'; 
let newStr = str.slice(0, 3) + charToAdd + str.slice(3);
console.log(newStr);
// a program to count the occurence of `hello`
let message = "hello world, hello JavaScript!";
let count = (message.match(/hello/gi) || []).length;
console.log(count);

// get the first three characters in a string


let firstThreeChars = str.slice(0, 3);
console.log(firstThreeChars );

// get the last three characters in a string
 let lastthreeChars = str.slice(-3);
 console.log(lastthreeChars);

//  sort charcters in ascending order
let sortedStr= str.split('').sort().join('');
console.log(sortedStr);

// remove all spaces in a string
let noSpaceStr = str.replace(/\s+/g, '');
console.log(noSpaceStr);
// find the index of t in greeting

let greeting = "greeting";
let indexOff= greeting.indexOf('t');
console.log(indexOff);

// delete the first two characters in a string
let modifierStr =str.slice(2);
console.log(modifierStr);
// delete the last two characters
let modifiedstr = str.slice(0, -2);
console.log(modifiedstr);