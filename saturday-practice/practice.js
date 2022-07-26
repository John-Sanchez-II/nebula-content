


// function capitalOnly(str){

//     let output = '';

//     for (let i = 0; i < str.length; i++){
// letcurrentLetter.toUpperCase
// let currentLetter = str[i]

//         // toUpperCase
// console.log(output + currentLetter)


//     }
// }

// write a function that mutliplies all the numbers in an array

// write a function that removes any spaces from a string

function spaceBeGone(str) {

    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        // check current letter if it is space
        // update our new string id current letter is not a space
        // return our new string
        let curr = str[i]
        if (curr !== " ") {
            newStr += curr
            // accumalator
        }
    }
    return newStr
}
console.log(spaceBeGone("hello world"))





// write a function that reamoves all odd numbers from an array

// write a function that removes all numbers from a string