// function: a set of words that performs a task or calculates a value
function addTwo(x, y) {
    return x + y
}
// arguments
addTwo(3, 6)

const calculateThis = (num1, num2, func) => {
    const calculation = func(num1, num2);
    return calculation;
}

function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}

const divideTwoNumbers = (num1, num2) => {
    return num1 / num2;
}
// passing two numbers in function and applys numbers to function
console.log(calculateThis(5, 10, multiplyTwoNumbers));
console.log(calculateThis(15, 5, divideTwoNumbers));

// Practice
const greetUser = (user, func) => {
    console.log(func(user))
}

function hello(name) {
    console.log("Hello" + name)
}
greetUser(" Max", hello)

// Functions that return another function
const returnFunction = (func) => {
    return func;
}
// Practice
const holdfunc = returnFunction(divideTwoNumbers);

console.log(holdfunc(10, 2), "<-- holding...");

const giveMeTwo = (num1, num2, func) => {
    const solve = func(num1, num2);
    return solve
}

const mult2 = (num1, num2) => {
    return num1 * num2
}

// function sub1 (num1, num2){
// return num1 - num2;
// }
const sub1 = (num1, num2) => {
    return num1 - num2
}

// function expo (num1, num2){
// return Math.pow(num1, num2)
// }
const expo = (num1, num2) => {
    return Math.pow(num1, num2)
}

console.log(giveMeTwo(5, 8, mult2))
console.log(giveMeTwo(5, 8, expo))
console.log(giveMeTwo(20, 4, sub1))


// Abstraction
const anArray = [5, 3, 4, 2, 10, 11];

const multiplyBy5 = (num) => {
    return num * 5;
}

const mapOver = (arr, func) => {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        let currentValue = arr[i]
        newArray.push(func(currentValue));
    }
    return newArray;
}

// function multiplyBy5(num){
//     return num * 5
// }

console.log(mapOver(anArray, multiplyBy5));

const calculateAll1 = (num1, num2, num3, num4, num5, func) => {
    const answer = func(num1, num2, num3, num4, num5)
    return answer
}

const multiAll = (num1, num2, num3, num4, num5) => {
    return num1 * num2 * num3 * num4 * num5
}

const subAll = (num1, num2, num3, num4, num5) => {
    return num1 - num2 - num3 - num4 - num5
}

console.log(calculateAll1(1, 2, 3, 4, 5, multiAll))
console.log(calculateAll1(1, 2, 3, 4, 5, subAll))



function modify(str, func) {
    const newStr = func(str)
    return newStr.toString();
}

function yeller(str) {
    const yellerNew = str.toUpperCase()
    return yellerNew + "!!!"

}

console.log(modify("It's Thursday", yeller))


function code(str) {
    let codeNew = " "
    for (i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            codeNew += "-"
        } else {
            codeNew += str[i]
        }
    }
    return codeNew;
}
console.log(modify("It's Thursday", code))


function calculateAll2(func, ...args) {
    const calc3 = func(...args);
    return calc3;
}

function mutiply() {
    console.log(arguments)
    let product = 1
    for (let i = 0; i < arguments.length; i++) {
        product += arguments[i]
    }
    return product
}



function subtract() {
    console.log(arguments)
    let sum = arguments[0]
    for (let i = 0; i < arguments.length; i++) {
        sum -= arguments[i]
    }
    return sum
}

function add() {
    console.log(arguments)
    let sum = 0
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}

console.log(calculateAll2(mutiply, 3, 4, 5, 6, 7))
console.log(calculateAll2(subtract, 3, 4, 5, 6, 7))
console.log(calculateAll2(add, 3, 4, 5, 6, 7))


const ourArray = [4, 8, 9, 2, 1, 6];

// ourArray.forEach((ourArray) => console.log(ourArray * 2))

const changeNums = (arr, func) => {
    const newArr = []
    for (let i = 0; i < arr.length; i++) {
        let currentElement = arr[i]
        newArr.push(func(currentElement))
    }
    return newArr;
}
function doubler(n) {
    return n * 2
}

function halve(n) {
    return n / 2

}

function squared(n) {
    return n **= 2
}

console.log(changeNums(ourArray, doubler));
console.log(changeNums(ourArray, halve));
console.log(changeNums(ourArray, squared));


const ourString = "We are stronger when We listen and smarter when We share!"

function stringInfo(str, func) {
    return func(str);
}

function length(str) {
    return str.length;
}

const vowels = (str) =>{
    let vowelsCount = 0
    for (let i = 0; i< str.length; i++){
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u"){
            vowelsCount ++
    }
}
return vowelsCount
}

function capitals (str){
    let capsCount = 0
    for (let i = 0; i< str.length; i++){
        if (str[i] === str[i].toUpperCase()){
            capsCount += 1
        }
    }
return capsCount
}


console.log(stringInfo(ourString, length))
console.log(stringInfo(ourString, vowels))
console.log(stringInfo(ourString, capitals))

const numArr = [2, 3, 5, 8]

const minimizeNums = (arr, func) => {
    return func(arr)
}
function add(arr){
    let sum = 0
    for(let i = 0; i< arr.length; i++){
        sum += arr[i]
}
return sum
}
console.log(minimizeNums(numArr, add))

const nums = [5, 3, 4, 2, 10, 11];
  
const pow = cur => cur **2
const storePow = nums.map(pow)
console.log(storePow)

const strs = ["Hi", "Hola", "Ciao", "Bonjour"]

let capS = curr => curr.toUpperCase()
const storeCaps = strs.map(capS)
console.log(storeCaps)

const ppl = ["Sponge", "Patrick", "Squidward", "Krabs"]

function greet(el){
    return `Hello ${el} !`
}
const store = ppl.map(greet)

console.log(store)

const nums2 =  [1, 2, 3, 4, 5, 6]

function print(el){
    console.log(el)
}

nums2.forEach(print)

const ppL = ["Sponge", "Patrick", "Squidward", "Krabs"]

ppl.forEach(element => console.log("Goodbye " + element))


// 3.   Given an array of mixed values, log whether the value is undefined.

const arr3 = ["hi", 23, 56, 7, true, 0, [], "boo"]

arr3.forEach(element => console.log(typeof(element)))

// 4.   Given an array of strings, log the vowel count for each string.
// const arr4 = ["apple", "umbrella", "card", "mango"]

// function code(arr4) => {
//     let codeN = 0
//     for (i = 0; i < arr4.length; i++) {
//         for(j = 0; j< arr4[i].length; i++) (arr4[i] === "a" || arr4[i] === "e" || arr4[i] === "i" || arr4[i] === "o" || arr4[i] === "u") {
//             codeN += 0
//         }

//     }
//     console.log(codeN)
// }
// arr4.forEaxh(code)


// 5.   Given an array of numbers, double them and log them to the console. 
const vals = [2, 4, 6, 8, 10, 12]

vals.forEach(element => console.log(element * 2))

const movies = ["Lord of the Rings", "The Matrix", "Harry Potter", "Star Wars", "Terminator", "Final Destination"]
let favorite = movies[5]

console.log(favorite)

const meNums = ([8, 5, 7, 6, 9, 7,3])
const mean = meNums.reduce((a,b) => a + b, 0)/ meNums.length
console.log(mean)

