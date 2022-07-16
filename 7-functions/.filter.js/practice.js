const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const longWords = words.filter(word => word.length > 6);

console.log(longWords);

const newArr = ['bee', 'cat', "monday", "yellow"]

const shorties = newArr.filter(str => str.length < 4)
console.log(shorties)


const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// 1.   Write a function to filter an array for all the numbers greater than 5
const great5 = nums.filter(num => num > 5)
console.log(great5)

// 2.   Write a function to filter an array for all the even numbers
const evenNums = nums.filter(num => num % 2 === 0)
console.log(evenNums)

// 3.   Write a function to filter an array for all the non number items
const arr2 = [9, "eight", 7, "six", 5, "four"]

const imposter = arr2.filter(num => typeof (num) !== "number")
console.log(imposter)

// 4.   Write a function to filter an array of objects for people over the age of 21 (inclusive)
const partyPeople = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]

const people = partyPeople.filter(peeps => peeps.age >= 21)
console.log(people)

// 5.   Write a function to filter out all letters from a string 
//      Hint: filter doesn't work on strings..

// .reduce

const array12 = [1, 2, 3, 4];

// 1 + 2 + 3 + 4
let output1 = (array12.reduce((accumulator, current) => accumulator + current));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
let output2 = (array12.reduce((accumulator, current) => accumulator + current, 5));
// expected output: 15

console.log(output1, output2)

// .reduce()

// 1.   Write a HOF to reduce an array of numbers to all the numbers added up
const numBers = [1, 2, 3, 4, 5]

let numsOutput = (numBers.reduce((acc, curr) =>
    acc + curr))
console.log(numsOutput)

// 2.   Write a HOF to reduce all numbers in an array to all numbers multiplied together
let numbMutliply = (numBers.reduce((acc, curr) =>
    acc * curr))
console.log(numbMutliply)

// 3.   Write a HOF to reduce all numbers in an array to the largest number 
const nums1 = [2, 8, 12, 98, 167, 3]

const arrMax = (nums1.reduce((acc, curr) =>
    Math.max(acc, curr)))
console.log(arrMax)

// 4.   Write a HOF to find the oldest person in a group
const partyPeopleS = [{ name: 'John', age: 25 }, { name: 'Jordan', age: 18 }, { name: 'Frank', age: 50 }, { name: 'Anna', age: 12 }]

const max = Math.max;
const posse = (partyPeopleS.reduce((acc, item) =>
    max(acc, item)))
console.log(posse)

food = { hot: true, fresh: true}
if (food.hot && food.fresh) {
    'This Food is delicious!'
} else if (food.hot) {
    'This food is too hot'
} else {
  ' This food is no good '
}
console.log(food)