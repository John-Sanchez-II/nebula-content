// For each exercise you'll want to log the result to the console to check your work

// 1. Concatenate "hello" with "goodbye"
console.log("hello "+"goodbye")
 
// 2. Save the substring "Friend" from the string "Hello Friend"
const greeting = "Hello Friend"
console.log(greeting.slice(6,12))


// 3. Using 5 or more of the following words, create a template literal that makes a legible sentence.
//    Do not create your own words, use the existing ones below!
const word1 = "hello"; 
const word2 = "horror";
const word3 = "peace";
const word4 = "world"
const word5 = "dislike"; 
const word6 = "umbrella"; 
const word7 = "car"; 
const word8 = "pasta"; 
const word9 = "pizza"; 
const word10 = "movies";
const word11 = "football"; 
const word12 = "soccer"; 
const word13 = "eat"; 
const word14 = "cookie"; 
const word15 = "favorite";
const word16 = "makeup"; 
const word17 = "I"; 
const word18 = "to"; 
const word19 = "my";
const word20 = "is";
const word21 = "and";
const word22 = "also";
const word23 = "like"; 

const savedTemplateLiteral = `${word17} ${word23} ${word11}, ${word21} ${word22} ${word12}`

console.log(savedTemplateLiteral)
// 4. Given the string of your full name get your initials.
const fName= "Juan Sanchez"

console.log(fName[0] + fName[5])
// 5. Get the 5th character from the following string: 'Hello World'
const x = "Hello World"
console.log(x[6])
// 6. Find the index of the dash from 'Coding-Time!'
const dex = "Coding-Time"
console.log(dex.indexOf('-'))

// 7. Write code to grab the final letter from a any string.
const food = 'Mashed Potatoes';
const lastC = food[food.length-1]
console.log(lastC)
// 8. Write code to grab the first 3 letters from a string. 
const animal = "elephant"
console.log(animal.slice(0,3))

// 9. Turn the following string into an array of words: 'This-is-a-sentence';
const phrase ="This-is-a-senetence"
const arr = phrase.split('-')
console.log(arr)

// 10. Make the string of 12 from the following two numbers:
let one = 1;
let two = "2";
console.log(one + two)
// Bonus Given the string of ANY first and last name get the initials. 
// This code needs to be dynamic, no matter the length of the names this code should work.
  // Ex: 
    // Brad Pitt: BP
    // Buzz Lightyear: BL 
    // Rick Grimes: RG
