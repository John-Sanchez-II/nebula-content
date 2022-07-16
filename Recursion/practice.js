function reverseStr(str) {
    let rev = []

    for (let i = str.length - 1; i > str.length, i >= 0; i--) {
        rev.push(str[i])

    }

    let joinedRev = rev.join('')
    console.log(joinedRev)
}

reverseStr("Saturday")



function reverseString(str) {
    if (str === '') {
        return '';
    } else {
        return reverseString(str.slice(1)) + str[0];
    }
}

console.log(reverseString('ants')); // Returns 'stna'

// recursice check for palindrome
function isPalindrome(str) {
    const len = str.length;
    if (len <= 1) return true;
    if (str[0] !== str[len - 1]) return false;
    return isPalindrome(str.slice(1, len - 1));
}

console.log((isPalindrome)("kayak"))

// recursive factoriate
//  4! --> 4*3*2*1= 24
function factorial(num) {

    if (num === 0) {
        return 1
    } else
        return num * factorial(num - 1)

}
console.log(factorial(3))

// Practice
// 1. wrtie a recursive function to compute the sum of an array of integers

function arraySum(arr) {
    if (arr.length === 1) {
        return arr[0]
    } else {
        return arr.pop() + arraySum(arr)
    }
}

console.log(arraySum([1, 2, 3, 4, 5]))

//  2. Refactor the following recursive function to check for even numbers
function isEven(num) {
    return num === 0 ? true : num <= 1 ? false : isEven(num - 2);
}

console.log(isEven(8));



function maybeEven(num) {
    if (num === 0) {
        return true
    }
    if (num === 1) {
        return false
    } else {
        num = num - 2
        return maybeEven(num)
    }
}

console.log(maybeEven(6))
// 3. write a function tto print the ranhe of numbers between x and y 

// function numRange(start, end){
//     if(end- start === 2){
//         return start +1
//     }else {
//         let list =
//         return numRange(start, end-1)
//         list.push(end-1)
//     }
// }
