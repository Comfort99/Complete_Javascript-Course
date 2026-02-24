'use strict';

// DOM Element selectors
// . for class
// # for id
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

const init = function () {
    // Current score and active player variables
    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;


    // Reset UI elements
    score0El.textContent = 0;
    score1El.textContent = 0;
    current0El.textContent = 0;
    current1El.textContent = 0;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
    diceEl.classList.add('hidden');
}
init();

// function to add current score to total score
const addScore = function () {
    document.getElementById(`current--${activePlayer}`).textContent = 0; // Reset current score display
    scores[activePlayer] += currentScore; // Add current score to total score
    document.getElementById(`score--${activePlayer}`).textContent =
        scores[activePlayer]; // Update total score display
    currentScore = 0; // Reset current score variable
}


// Function to switch active player
const switchPlayer = function () {
    activePlayer = activePlayer === 0 ? 1 : 0; // Switch active player
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    diceEl.classList.add('hidden');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
    if (playing) {
        // 1. Generate a random dice roll
        const dice = Math.trunc(Math.random() * 6) + 1;

        // 2. Display the dice
        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`;


        // 3. Check for rolled 1: if true, switch to next player
        if (dice === 1) {
            document.getElementById(`current--${activePlayer}`).textContent = 0; // Reset current score display
            currentScore = 0; // Reset current score to 0
            switchPlayer();
        } else {
            // Add dice to current score
            document.getElementById(`current--${activePlayer}`).textContent =
                currentScore;
            currentScore += dice;
        }
    }
});

btnHold.addEventListener('click', function () {
    if (playing) {
        if (scores[activePlayer] >= 20) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        } else {
            switchPlayer();
            addScore(); // Add current score to total score before switching
        }
    }
});

btnNew.addEventListener('click', init());
