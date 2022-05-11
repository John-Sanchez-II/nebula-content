 const myArray = [1,2, 3, 4, 50]

 function minNum(arr){
     let minimum = Math.min(...arr)
     console.log(minimum)
 }
minNum(myArray)


function repeatStr(num, str){
    for(let i=0; i<num; i++){
        console.log(str)
    }

}
repeatStr("way")

// // 1.   Declare a for loop that starts at 0, goes until 30, and increments by 1
// //      Each loop it should log to the console 'the current index is _'
// for(let i=0; i <= 30; i++){ // i+=1 i = i+1 
//     console.log('the current index is ' + i);
// }
// // 2.   Declare a for loop that starts at 1, goes until 10, and increments by 2
// //      Each loop it should log to the console the current index

// for(let i =1; i <=10; i+=2){
//     console.log('the current index is ' + i)
// }
// // 3.   Create an array with your top 5 celebrity names in it. 
// //      Be sure each element is a first & last name, ex: ['Martha Stewart', 'David Beckham', ...]
const celebs = ['Viola Davis', 'David Beckham', 'Kanye West', 'Martha Stewart', 'Constance Wu','Tom Holland' ];

// //      Loop over the array and log each celebrity's full name to the console.
// for (let i=0; i<celebs.length;i++){
//     console.log(celebs[i]);
// }
// 4.   Loop over your celebrity list and 
//      If a celebrity's full name has an even number of characters log it to the console
// for(let i=0; i<celebs.length; i++){
//     if(i.length % 2 === 0){
//         console.log(i)
//     } else continue;
// }


// 5.   Use your celebrity array for this question
//      Create a for loop which will iterate over each element and output a new array of only first names
const fNames = []
for(let i = 0; i < celebs.length; i++){

    fNames.push(celebs[i].split(" ")[0])  
}
console.log(fNames)

// 6.   Use your celebrity array for this question
//      Create a for loop which will output two separate arrays, one with only initials, one with only last names

// const initials = []
// for(let i=0; i<celebs.length; i++){
//     for(let j=0; j<celebs[i].length; j++){
//         if(celebs[i][j] === [0]){
//             initials.push(`${celebs[i][j]}`)
//         }
//     }
// }

// for(let i = 0; i<celebs.length; i++){
//    let spNames = celebs[i].split('')
//    names.push(spNames);
//     }
const lNames = []
 for(let i = 0; i < celebs.length; i++){
    lNames.push(celebs[i].split(" ")[1])  
}
console.log(lNames)


// 7.   Loop over the celebrity list and then loop through each name. 
//      If a letter is a vowel, log it to the console
for(let i=0; i <celebs.length; i++){
    for(let j=0; j<celebs[i].length; j++){
        if(celebs[i][j] === "a"|| celebs[i][j] === "e"|| celebs[i][j] === "i" || celebs[i][j]==="o" || celebs[i][j] === "u"){
            console.log(celebs[i][j])
        } else continue;
    }
}
// // 8.   Loop over the celebrity list and then loop through each name. 
// //      If a letter is uppercase, log it to the console
for(let i = 0; i <celebs.length; i++){
    for(let j = 0; j < celebs[i].length; j++){
        if(celebs[i][j] === celebs[i][j].toUpperCase()){
            console.log(celebs[i][j])
        }
    }
}

// // 9.   Convert your celebrity array to all caps and no spaces:
// //      Ex:
// //        Input:  ['Martha Stewart', 'David Beckham', etc..] 
// //        Output: ['MARTHA-STEWART', 'DAVID-BECKHAM', etc..]
let celebSlice = []
let celebsCap = celebs.join("-").toUpperCase()
console.log(celebsCap)


// 10.  Index your array to find your favorite celebrity. 
//      Save that name to a variable
//      Loop over the array until you find that individual
//      Log that name to the console and break out of the loop
let faveCeleb = celebs[1];
for (let i =0; i < celebs.length; i++){
    if( celebs[i] === faveCeleb){
        console.log(faveCeleb)
        break;
    }
}


//BONUS:
//      Write a loop that iterates from zero until 30
//      If an index is divisible by 2 log 'fizz'
//      If an index is divisible by 3 log 'buzz'
//      If an index is divisible by both 2 & 3, log 'fizz-buzz'
//      Otherwise print the index to the console
