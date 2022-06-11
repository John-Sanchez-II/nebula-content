// 1.   Create an object for a celebrity and save it to a variable
const celebrity = {
    name : 'Steven Segel',
    height : '6,1',
    hair : 'black',
}

celebrity.age = '60';
celebrity['name'] = 'Jeane Claude Van Dam'
celebrity.eyes = 'brown'
// 2.   Using dot-notation add 3 key-value pairs to the celebrity

// 3.   Using bracket-notation add 3 key-value pairs to the celebrity
celebrity['nationality'] = "unknown"

// 4.   Write a function that allows us to add or update 3 properties
//function update = 
function addThree (object, propertyName, value,){
    object[propertyName] = value
    return object
}
addThree(celebrity, 'hair', 'white' )
console.log(celebrity)
// 5.   Using a loop - log all the celebrities properties to the console

for(let fan in celebrity) {
    console.log(`${fan}: ${celebrity[fan]}`)
}



const family = {
    brother1: "Daniel",
    brother2: "Franki",
    sister1: "Sarah",
    sister2: "Naomi",
    dog: "Teddy"

};