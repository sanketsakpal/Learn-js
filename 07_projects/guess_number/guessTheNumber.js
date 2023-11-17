const randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');
const p = document.createElement('p');

let prevGuess = [];

let numOfGuesses = 1;

let playGame = true;

if (playGame) {
    submit.addEventListener('click', (e) => {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess) {

    if (isNaN(guess)) {
        alert('please enter a valid number');
    } else if (guess < 1) {
        alert('please enter a number greater then 1');
    }
    else if (guess > 100) {
        alert('please enter a number less then 100 ');
    } else {
        prevGuess.push(guess);
        if (numOfGuesses === 10) {
            displayGuess(guess);
            displayMessage(`Game Over. Random number was ${randomNumber}`)
            endGame();
        } else {
            displayGuess(guess);
            checkGuess(guess);

        }
    }
}

function checkGuess(guess) {
    //
    if (guess === randomNumber) {
        displayMessage("You guessed it right");
        endGame();
    } else if (guess < randomNumber) {
        displayMessage("Number is too low");
    } else if (guess > randomNumber) {
        displayMessage("Number is too high");
    }
}

function displayGuess(guess) {
    userInput.value = " ";
    guessSlot.innerHTML += `${guess} ,`;
    numOfGuesses++;
    remaining.innerHTML = `${11 - numOfGuesses}`;
}

function displayMessage(message) {
    lowOrHigh.innerHTML = `<h2>${message}</h2>`;
}



function newGame() {
    // start new game 

    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', (e) => {
        const randomNumber = parseInt(Math.random() * 100 + 1);
        prevGuess = [];
        numOfGuesses = 1;
        playGame = true;
        guessSlot.innerHTML = "";
        remaining.innerHTML = `${11 - numOfGuesses}`;
        userInput.removeAttribute("disabled");
        StartOver.removeChild(p);

    });
}

function endGame() {
    // end game
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start new Game</h2>`;
    StartOver.appendChild(p);
    playGame = false;
    newGame();


}