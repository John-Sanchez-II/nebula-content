// 1.   Create an array that contains two of your favorite things to do
const hobbies = ["reading", "gardening"]

// 2.   Using an array method, add another thing you like to do to that list
hobbies.push("cooking")

console.log(hobbies)

// 3.   Reverse the order of the array (remember, if needed use MDN)
hobbies.reverse()
console.log(hobbies)

//      Use this array for questions 4-11: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
// 4.   log the length of the array
const week = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

console.log(week.length)
// 5.   log the 4th element in the array
console.log(week[3])


// 6.   Remove the first element in the array. Log the new array and the element removed from the array

week.shift()
console.log(first)
// 7.   Put 'Sunday' back at the beginning of the array and log the new array
week.unshift("Sunday")
console.log(week)
// 8.   Remove the last element in the array. Log the new array and log the element removed
week.pop()
console.log(week)

// 9.   Add 'Saturday' back to the end of the array and log the new array
week.push("Saturday")
console.log(week)
//10.   Replace 'Thursday' with 'Friday Junior'
week[4] = "Friday Junior"
console.log(week)
//11.   Extract your favorite day from the array and log the string: 'My favorite day of the week is (day)'
const fDayW = week[week.length-1]
console.log(`My favorite day of the week is ${fDayW}`)

//12.   Combine these two arrays together
let phone = ['iphone', 'android ']
let laptop = ['MacBook', ' HP', 'Dell']
console.log(phone +  laptop)

//13.   Write a line of code to test if something is an array or not
console.log(Array.isArray(week))