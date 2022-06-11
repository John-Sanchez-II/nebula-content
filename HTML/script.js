let dynamicH1 = document.querySelector('.dynamicH1');
let clicked = true;

document.addEventListener("click", (e) => {
    if(e.target === dynamicH1 && clicked){
        dynamicH1.style.backgroundColor = "purple";       
        dynamicH1.style.color = "teal";   
        clicked = false;
        console.log(e.target)
    } else if(e.target === dynamicH1 && !clicked){
        dynamicH1.style.backgroundColor = "pink";       
        dynamicH1.style.color = "red";
        clicked = true;       
    }
})

const square = document.createElement('div');
square.className = 'square';

document.body.appendChild(square);

if(e.target === square && clickedsquare){
    dynamicH1.style.backgroundColor = "blue";       
    dynamicH1.style.color = "teal";   
    clicked = false;
    console.log(e.target)
} else if(e.target === dynamicH1 && !clicked){
    dynamicH1.style.backgroundColor = "black";       
    dynamicH1.style.color = "red";
    clicked = true;       
}

// appending (adding) and element to the document



// const newParagraph = document.createElement('p')

// newParagraph.innerText = (' Hello All!')

// document.body.appendChild(newParagraph)