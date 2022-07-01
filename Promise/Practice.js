// promises are asyncronous
// "new" is an object



// console.log(cleanedDishes)
// setTimeout(() => { console.log(cleanedDishes)}, 5001)


// you and a friend want to have dinner
// you're going to make soup but you also want tacos
// it makes more sense to make the soup While your friend gets tacos, not after
// your friend is the promise
// fulfilled: got tacos, omw



// 1.   What is the order of output?
setTimeout(() => {
    console.log('a');
}, 1);
console.log('b');

new Promise( (res,rej) => {res('c')}).then((val) => console.log('d', val));
console.log('e');

setTimeout(() => {
  console.log('f');
}, 0);

setTimeout(() => {
    console.log('g');
}, 3);

new Promise( (res) => {res('h')}).then(res => console.log(res, 'i'))
// b, e ,d c, h i, promisesfulfilled, a, f, g,

// 2.   Create a promise for something you may, or may not do.
let duetPromise = false
let myPromise = new Promise( (resolve, reject) => {
        setTimeout(()=> {
            if (singPromise){
                resolve('I can match your pitch')
            } else {
                reject('I"ll never be able to sing with you(cries violently in fetal position)')
            }
        }, 5 * 2000)
        
    })
    
// console.log (duetPromise)
// 3.   Create a new promise for something you may or may not do. 
//      After a few seconds log whether it has been done.


// 4.   Using the prior example use .then and .catch to handle responses and rejections

// let duetpromise = new Promise(function (resolve)  {
//         setTimeout(()=> resolve 
//                 ("I can finally match your pitch"),1000)
//              })

//     duetpromise.then(
//         result=> alert(result),
//         error => alert (error)
//     )
// 5.   What does a promise resolve do?
// returns a Promise object that is resolved with a given value

// 6.   Using HTML & CSS, write a promise that, after 5 seconds changes the existing text on the web-page
// const trick =[
//     {title: "Trick 1", body: "Tada!!!"}

function magic(){
    setTimeout( () => {
        let output = " ";
        trick.forEach( (post) => {
            output+= `<li>${trick.title}: ${post.body}</li>`
        })
        const bin = document.querySelector(`.bin`)
        bin.innerHTML= output
    }, 5000 )
}

// 6a create another promise that changes the styling of one of the html elements


function changeText() {
    return new Promise ( (resolve, reject) => {
        {
            setTimeout( ()=> {
                if (h2.innerHTML){
                    h2.innerHTML = "I've changed!"
                }
            })
        }
    })
}
// 7. What is the output of the following code?
const promise = new Promise(res => res(2));
promise.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.then(v => {
    console.log(v);
    return v * 2;
})
.finally(v => {
    console.log(v)
})

// 2
// 4
// not sure what it's asking

// 8.
const hopeful = document.getElementById('thinking')

function changeText() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (hopeful.innerHTML){
                resolve(hopeful.innerHTML = "I'VE DONE IT!");
            } else {
                reject('Nothing happened')
            }
        }, 4000)
    })
}

let yayPromise = changeText(true)
yayPromise.then(success => console.log(success)).catch(error => console.log(error))


const hot = document.getElementById('fire')

function onARoll() {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if (hot.innerHTML){
                resolve(hot.innerHTML = "Im on Fiyah!!!");
            } else {
                reject('Nothing happened')
            }
        }, 6000)
    })
}

let hotPromise = onARoll(true)
hotPromise.then(success => console.log(success)).catch(error => console.log(error))

