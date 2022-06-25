const nums = [1,2,3,4,5,6,7,8,9]

function quadraticTimeExample(arr){

    console.time("myTimer");

    const holdPairs = [];
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            if(i !== j) holdPairs.push([arr[i], arr[j]]);
        }
    }

    console.timeEnd("myTimer");
    console.log(holdPairs)
    return holdPairs;
}

quadraticTimeExample(nums)
// linear time
function linearTimeExample(arr){
    // Getting sum of array of numbers
    let output = 0;
    for(let i = 0; i < arr.length; i++){
        output += arr[i];
    }
    return output;
}

let searchValue = 10;
const isValueThere = Object.values({someKey: 9, anotherKey: 10}).some(cur => cur === searchValue);
console.log(isValueThere)

function logarithmicTimeExample(num) {
    // Sample input -> 8
    // Sample output -> [1, 2, 4, 8]
    const logStepsToN = [];
    for (let i = 1; i < num; i*=2) {
        logStepsToN.push(i);
    }
    return logStepsToN;
}

console.log(logarithmicTimeExample(24))

// 1.   Either by hand, paint, or whatever you prefer draw the following complexities
//      O(1)
//      O(log n)
//      O(n)
//      O(n^2)
//      O(n^3)

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function loopAndPrint(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i]);
    }
}
// O(n) is answer



// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function findMax(arr){
    let max = arr[0];

    for(let i = 1; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        }
    }

    return max;
}
// 
// finding max index of an array starting at 1

// 2.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function printLast(arr){
    console.log(arr[arr.length-1]);
}
0(1)


// 3.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.
function everyOther(str){
    let newStr = '';

    for(let i = 0; i < str.length; i+=2){
        newStr += str[i]
    }

    return newStr;
}
// o(n) 

// 4.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function doubled(num) {
    return 2 * num
}
// O(1) constant time
// 5.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multipleSteps(num) {
    let final = 4 * num
    return final * 3
}
// O of 1 constant
// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function backwardsArr(arr) {
    let arrReversed = []
    for (let i = arr.length - 1; i >= 0; i--) {
      arrReversed.push(arr[i])
    }
    return arrReversed
}
// 6.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function multiplyAll(arr1, arr2) {
    if (arr1.length !== arr2.length) return undefined
    let total = 0
    for (let i of arr1) {
      for (let j of arr2) {
        total += i * j
      }
    }
    return total
}
// 7.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let numbs = [10,20,30,40];
nums.push(50);
// giO of 1
// 8.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

let nums2 = [10,20,30,40];
nums.unshift(0);

// 9.   What is the big O of the following function
//      Describe what the function does and use that as the reasoning for your answer.

function logTime(arr) {
    let numberOfLoops = 0
    for (let i = 1; i < arr.length; i *= 2) {
      numberOfLoops++
    }
    return numberOfLoops
}

function exampleFunction(arr){
    let total = 0;
    for(let i = 0; i < arr.length; i++){
        total += arr[i];
    }

    for(let i = 0; i < arr.length; i++){
        if(arr[i] / 2 < i){
            total -= arr[i] / 2;
        }
    }
    
    return total;
}


function binarySearch(arr, key){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        if(arr[middle] === key){
            return key + ' is at index ' + middle;
        }else if(arr[middle] < key){
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return -1;
}

console.log(binarySearch(nums, 3))