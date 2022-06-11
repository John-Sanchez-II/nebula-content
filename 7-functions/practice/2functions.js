// 1. Write a function that takes in 1 number and returns that number + 1
let num = 42
num = addOne(num)
console.log(num)
function addOne(numb){
    return numb +1
}

// 2. Write a function that takes in a name and outputs a sentence saying goodnight to that name.
function greetings(name){
    console.log(`Goodnight ${name}`)
}
greetings("Owl")
// 3. Write a function that takes in an array of numbers. If that array includes the number 0 return 'This array has the number zero in it'
//randomArr=[23, 4, 6, 9, 5,]




// 4. Write a function that console logs 'hello world' 10 times to the console. 
function helloTen(text){
    for(let i=1; i <=10; i++){
        console.log(text)
    }
}
helloTen('Hello World')

// 5. Write the prior function utilizing a 'fat arrow' function
const hello10 = (text) => {
    for(let i=1; i <=10; i++){
        console.log(text)
    }
}
hello10('herro')

// 6. Write a function that multiplies 3 input numbers together.

function three(a, b, c) {
    console.log((a * b * c))
}
three(5, 8, 4)

// 7. Write a function that takes in a number and logs all odd numbers leading up to that number
function odds (number){
    let b4 = []
for(let i = 1; i <= 25; i+=2) 
if(i%2; !===1)
console.log(i)
}
// 8. Write a function that takes in a list of names and returns a list of initials. The names will be formatted: 'Peter Parker'. 
function peterParker = []


// 9. Write a function which takes in two numbers and a mathematical operator and performs Math on those two numbers utilizing that operator

//10. Write a function which takes in two arrays and returns those arrays combined together. 