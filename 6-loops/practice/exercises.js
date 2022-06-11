// let arr_1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276
// let arr_2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

// let total = (arr_1.concat(arr_2))
// console.log(total)
// let sum = 0
// for(let i = 0; i < total.length; i++){
   
//     sum += i 
    
// }
// console.log(sum)

// for(let i=0; i < arr_1length; i++){
//     // for(let k = 0; k < arr_2.length; k++){

//     let sum = 0 }
//         sum += 
    
// }







// let arr = [43, "what", 9, true, "cannot", false, "be", 3, true];

// let reverse =[]

// for(let i= arr.length-1; i >= 0; i --){
//     reverse.push(`${arr[i]}`)
// }
// console.log(reverse)


let string1 = ['horse', 'ox', 'dragon', 'tiger']
let string2 = ['year', 'super', 'angry', 'friendly']

// console.log(string2[3].concat (string1[3]))

let reverse = []
let back = []
for(let i = string1.length -1; i >= 0; i--){ //reversing in a for loop method
    reverse.push(`${string1[i]}`)
}
console.log(reverse)

for(let i=string2.length - 1; i >= 0; i--){ //reversing in a for loop method
    back.push(`${string2[i]}`)
}
console.log(back)