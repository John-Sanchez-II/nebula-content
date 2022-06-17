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

// const calculateAll2 = (func, arguments) => {
// return ansa = 
// }

function modify(str, func) {
    const newStr = func(str)
    return newStr.toString();
}

function yeller(str) {
const yellerNew = str.toUpperCase()
return yellerNew + "!!!"

}

console.log(modify("It's Thursday", yeller))


function code (str){
    let codeNew = " "
    for (i=0; i < str.length; i++){
        if (str[i] === "a" || str[i] === "e"|| str[i] === "i"|| str[i] === "o"|| str[i] === "u"){
            codeNew += "-"
        }else{
            codeNew += str[i]
        }
    }
    return codeNew;
}
console.log(modify("It's Thursday", code))

