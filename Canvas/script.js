// Here I am getting a reference to the HTML <canvas> element.
// const canvas = document.getElementById('canvas');

// // From the above reference, I now get the elements context - this is what we'll be drawing on.
// const ctx = canvas.getContext('2d');

// /* I'm using built-in methods and properties here to style my canvas as a rectangle and fill it with the color
//  green */
// ctx.transform(1, 0.5, -0.5, 1, 30, 10)
// ctx.fillStyle = '#b10c29';
// ctx.fillRect(60, 60, 40, 40);

// ctx.fillStyle = 'green';
// ctx.fillRect(20, 20, 50, 50);

// ctx.fillStyle = 'purple';
// ctx.fillRect(5, 5, 30, 30);

/* the fillRect() method creates a rectangle starting from an x - y coordinate (10, 10) and then sizing it 150 units wide
 and 100 tall. */
//  fills 4 parameters The first 2 are x/t coordinates. The next two are width and height

// Delete the rectangle so that we can re-draw it based on where you want this rectangle to move
// clearRect(x, y, width, height)

// ctx.clearRect(20, 20, 50, 50)

// function draw() {
//     var canvas = document.getElementById('canvas'); // connecting our canvas html element to our js file
//     if (canvas.getContext) {// checking that the getContext method is available to our canvas
//         var ctx = canvas.getContext('2d');// storing the canvas context in a variable 
//         ctx.fillStyle = 'teal'// fills in the color of the shape
//         ctx.beginPath();// to begin our line or shape on canvas. our drawing commands build this path
//         ctx.moveTo(75, 50);// directing our line to start at these point on the x and y axis
//         ctx.lineTo(75, 100);// draws a straight line from the current drawing position(set my moveTo)
//         ctx.lineTo(25, 75);// draws another line from thr same x starting pount but ends at a diff. y axis point
//         ctx.fill();//drawing the colored shape based on the path specified in the drawing commands

//     }
// }

// draw();

// function draw() {
//     var canvas = document.getElementById('canvas');// connecting our canvas html element to our js file
//     if (canvas.getContext) {// checking that the getContext method is available to our canvas
//        var ctx = canvas.getContext('2d');// storing the canvas context in a variable 
// //   drawing paths
//       ctx.beginPath();// to begin our line or shape on canvas. our drawing commands build this path
//     //   arc (x,y,, radius, startangle, endangle, counterclockwise)
//       ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle 
//       //creating a cicle from a center point of first two parameters, which are x & y
//       // default: clockwise/false
//       ctx.moveTo(110, 75);// directing our arc to start at these points on the x and y axis
//       ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
//       ctx.moveTo(65, 65);
//       ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
//       ctx.moveTo(95, 65);
//       ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
//     //   will not display if not logged
//       ctx.stroke(); // draws the outline 
     
//     }
//   }

//   draw()
  

//   const canvas = document.getElementById('canvas');
// const ctx = canvas.getContext('2d');
// console.log(canvas.height)
// console.log(canvas.width)
// function draw(){
//     ctx.fillStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`;
//     ctx.fillRect((canvas.width/2)-25, (canvas.height/2)-25, 50, 50);
// }
// /*
//     Method setInterval (that exists on our browsers window interface) 
//     that tells our browser to run our draw() function 
//     every x number of miliseconds
//     I chose 500 (.5 second).
// */
// window.setInterval(draw, 500);


const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let dx = 2;
let dy = -2;
let x = 25;
let y = 25;

ctx.fillStyle = 'orange';

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(x, y, 50, 50);

    
    if(x + dx > canvas.width-50 || x + dx < 0) {
        dx = -dx;
    }
    if(y + dy > canvas.height-50 || y + dy < 0) {
        dy = -dy;
    }
    
    x += dx;
    y += dy;
}

setInterval(draw, 30);
