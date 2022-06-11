// COUNTER EXERCISE

// Select the body element from index.html
const bod = document.querySelector('body')
console.log(bod)
// const bod = document.body alternative


// Set an attribute of 'style' to the body tag and add a background color of anything other than white
// set attribute(id or class, value)

bod.setAttribute("style", 'background-color: purple' )

/* -------------------------------------------------------------------------- */

// Create an h1 element
let h1El = document.createElement('h1')
document.body.appendChild(h1El)
// Append a new h1 element to the body element as a child
// const bod = document.querySelector('body');
const body = document.body;
console.log(body)

// Set an attribute of 'style' to the body tag and add a background color of anything other than white
body.setAttribute('style', 'background-color: lightgreen')
/* -------------------------------------------------------------------------- */

// Create an h1 element
let h1Element = document.createElement('h1')
// Append a new h1 element to the body element as a child
body.appendChild(h1Element)
// Add text to the h1 element 
h1Element.innerText = '0'


// Add text to the h1 element 
h1El.innerText = "Yay I did it"
// Assign the background color of this element to something unique
h1El.setAttribute("style", 'background-color: white')

// Set a new style attribute to the h1 element


// Add font size to the h1Element
h1El.setAttribute("style", "font-size: 55px")

// Set the default text to the number zero
h1El.innerText = 0
/* -------------------------------------------------------------------------- */

// Create a button element to increment the h1 text
let btn = document.createElement('button')
// Append the button element to the body element
document.body.appendChild(btn)
// Add text to the boxButton
btn.innerText = 'Increment Button'
// Add a class attribute to boxButton
btn.setAttribute('class', 'boxButton' )

/* -------------------------------------------------------------------------- */

// Create another button element to decrement the h1 text
let down = document.createElement('decrement')
// Add the button element to the body element
document.body.appendChild(down)
// Add text to the button element
down.innerText = 'Going Down -'
// Add a class attribute of style to the button element
down.setAttribute('style', 'background-color: teal' )
/* -------------------------------------------------------------------------- */
// ADD BUTTON FUNTION
// Create functionality that, when you click this button it increases the h1 value

// document.addEventListener("click", (e) => {
// h1El.count+=1; 
// btn.innerHTML = "Increment Button: ";
// });
let clicks = 0
// btn.setAttribute('onclick', 'increaseCount()')

function increaseCount() {
        clicks += 1
        h1Element.innerText = clicks;
}
btn.addEventListener('click', increaseCount)
// Create functionality that, when you click this button it decreases the h1 value
// btn2.setAttribute('onclick', 'decreaseCount()')

function decreaseCount() {
    clicks -= 1
    h1Element.innerText = clicks;
}



/* -------------------------------------------------------------------------- */
// DELETE BUTTON FUNCTION 
btn2.removeEventListener('click', decreaseCount)