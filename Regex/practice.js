function hasSubstr(str){
    let letter = 'a'
    let re = new RegExp(letter, 'g');
    console.log(re) // output: /a/g
    return str.match(re)?.length
}
console.log(hasSubstr('thursday'))


// 1.   Write a function that tests if a string contains the string of '123' within it
function containsNums(str){
let re = new RegExp("123", "g")
console.log(re)
return str.match(re)
}
console.log(containsNums('abc123def456ghi1234'))

// 2.   Write a function that tests if a string contains the letter 'a' then the letter 'c' at any point afterward
//      ex: 'abc' => true
//      ex: 'aTc' => true
//      ex: 'a113412341234c' => true
//      ex: 'ac'  => true
//      ex: 'abd' => false
//      ex: 'ca'  => false
function aThenC (str){
    return !!str.match(/a.*c/)
}
console.log(aThenC('a1131234123c'))

// 3.   Write a function that reports how many instances of a given string there are 
//      This function should take in a string and a substring to look for 
//      Input: 'this is a test', 't'
//      Output: '3'

function hasSubstr(str, sub){
    let = new RegExp(sub, 'g')
    return str.match(sub)?.length
}
console.log(hasSubstr('this is a test', 't'))

// 4.   Write a function that checks if all characters in a string are lowercase letters
const isLowercaseOnly = (string) => {
    const lowercaseOnly = /^[a-z]+$/g
    return lowercaseOnly.test(string)
}
console.log(isLowercaseOnly('friday'))

// 5.   Write a function that checks if a string has an uppercase letter
const isUppercaseOnly = (string) => {
    const uppercaseOnly = /^[a-z]+$/g
    return uppercaseOnly.test(string)
}
console.log(isUppercaseOnly('FridaY'))


// 6.   Write a function that checks if a string contains a dash or underscore 


// 7.   Write a function that utilizes regex to check if a string contains '.com' at the end


// 8.   Write a function that utilizes regex to check if a string contains 'http://' or 'https://' at the beginning


// 9.   Write a function that utilizes regex to indicate if a string's first letter is uppercase or not


// 10.   Write a function that utlizes regex to replicate the functionality of '  string  '.trim()
