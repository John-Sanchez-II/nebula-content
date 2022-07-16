const userNum = document.getElementById("user")

function enterNumber() {
    return new Promise((res, rej) => {
        random = Math.floor(Math.random() * 6 + 1)
        // let userInput = prompt('Enter a number between 1 and 6')
        let userInput = userNum.value

        if (typeof(userInput) === NaN) {
            rej("Not a valid number")
        }
        if (userInput === random) {
            res({
                point: 2,
                random,
            })
        } else if ((random === userInput - 1) || (random === userInput + 1)) {
            res({
                point: 1,
                random
            })
        } else {
            res({
                point: 0,
                random
            })
        }

    })
}

function continueGame() {
    return new Promise((res) => {
        if (window.confirm("Do you want to continue playing?")) {
            rej(true)
        } else {
            res(false)
        }
    })
}

function runGame() {
    enterNumber().then( (result) => {
        alert(`you have ${result.point} points and the random number is ${result.random}`)
        continueGame()
            .then((result) => {
                if (result) {
                    runGame()
                } else {
                    alert('Game Over')
                }
            })
    })
}
 runGame()