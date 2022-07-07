// 1.Which cohort are you in?
// Melissa Jeremie

// 2.What is a function and why is it useful?

// reusable chunks of code that offer a way to structure your code, once a function is created, it can be looked at as a mini program that is ready to be executed at any time and helps to break down a complicated program into smaller manageable parts to make a program less complicated 

// 3.Explain a parameter and an argument 
// a parameter is a placeholder for an input
// arguments are the real values passed to the function

// 4.Write a function declaration, a function expression, and an arrow function
function announcement (){
    console.log("Hear Yee Hear YEE, I Declare this a Function!")
}
announcement()

const notice = function(){
    console.log("I express this variable to be a Function!")
}
notice()

const confusion = () => 'What is all this hugger-mugger you keep spreading in the marketplace '

console.log(confusion())

// 5.What is a higher order function and why do we use them?
// they are functions that perform operations on others functions
// we use them to decrease the length of code, and increase the readability

// 6. Declare an object that a school system may use to represent a student
const student = {
    name: "Hughie",
    age: "10",
    sex: "Male",
    grade: "Fourth",

}
console.log(student)

// 7.What is a property and what is a method in relation to objects?
// a properties describe the object
// methods are actions that can be preformed on objects

// 8.Describe a key-value pair
// a key value pair is when 2 or more items are linked together, one being the "key" and the other being the "value"

// 9.Create an object with at least 5 key pairs and then access 3 of those keys
const burger ={
    bun: "sesame",
    condiment: "mayonaise",
    protein: "beef",
    rarity: "medium rare",
    vegetables:["lettuce", "grilled onions", "grilled mushrooms"], 
    // #10
    orderUp: function(){
        return console.log("CHEF, I need this burger made asap")
    }
}
console.log(burger.bun)
console.log(burger.protein)
console.log(burger.vegetables)
// #10
burger.orderUp()
// 10.Create a method using your object


// 11.Create a function that allows you to add new properties to your object
// could not figure out

