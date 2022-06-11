// Define a function called multiplyBy10 that takes in one number argument and returns that number multiplied by 10. 
//Test the function with some numbers.

function multiplyBy10(a){
    console.log( a*= 10)
}
multiplyBy10(55)
// Define a function called sayGoodbye that uses a name parameter and returns a farewell message incorporating 
//that name.
 function sayGoodbye(name){
    console.log(`Asta la Vista...${name}!!`)
 }
 sayGoodbye('Baby')
// Define a function called evenNumbers that takes in an array as an argument and iterates over that array and 
//returns a new array with all the even numbers from that input array (Hint: you can use the modulus operator to 
    //check whether a number is even or not).
    // function evenNumbers
    function evenNumbers(arry){
        let evens =[]
        for(let i=0; i<arry.length; i++){
            if(arry[i] % 2 === 0){
                evens.push(arry[i])
            }
        }console.log(evens)
    }
evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

// Define a function called reverseWords that takes in a string and returns a string with the order of words
 //reversed.

 function reverseWords(text) {
     let rev = []
         for(let i=text.length-1; i>=0; i--){
            rev.push(text[i])
         }console.log(rev.join(''))
     
 }

reverseWords('dog')

// const greeting5 = (name)=> {
//     return `hello ${name}`
// }
// for(let i=0; i<=10; i==){
//     console.log[i]
// }
// console.log(greeting5('chanel'))

