'use strict';

/*
DOM - Document Object Model: Structured representation
of the HTML document, allows Javascript to access HTML
elements and styles to manipulate them. (Change text,
HTML attributes, CSS styles, etc.)
Is not part of the JavaScript language, but is a web API provided by browsers.
*/

/*
console.log(document.querySelector('.message').textContent); // Get text content of element with class 'message'
document.querySelector('.message').textContent = 'Correct Number!'; // Set text content of element with class 'message'

document.querySelector('.number').textContent = 13; // Set text content of element with class 'number' to 13
document.querySelector('.score').textContent = 10; // Set text content of element with class 'score' to 10

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); // Get value of input element with class 'guess'
*/

const secretNumber = Math.trunc(Math.random() * 20) + 1; // Generate random number between 1 and 20
let score = 20;

let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent =
        message;
}

document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value); // Get value of input element with class 'guess' when button with class 'check' is clicked
        console.log(guess);

        // When there is no input
        if (!guess) {
            document.querySelector('.message').textContent =
                'No number!';

            // When player wins
        } else if (guess === secretNumber) {
            document.querySelector('.number').textContent = secretNumber; // Set text content of element with class 'number' to secret number

            displayMessage('Correct Number!');

            document.querySelector('body').style.backgroundColor =
                '#60b347';

            document.querySelector('.number').style.width =
                '30rem';
            if (score > highscore) {
                highscore = score;
                document.querySelector('.highscore').textContent =
                    highscore;
            }
            // When guess is wrong
        } else if (guess !== secretNumber) {
            if (score > 1) {
                //displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
                    //guess > secretNumber ? 'Too high!' :
                        //'Too low!';
                displayMessage(guess > secretNumber ? 'Too high!' :
                    'Too low!');
            
                score--;
                document.querySelector('.score').textContent =
                    score;
            } else {
                displayMessage('You lost the game!');
                document.querySelector('.score').textContent = 0;
            }

        }
    });


///////////////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/

document.querySelector('.again').addEventListener
    ('click', function () {
        score = 20;
        const secretNumber = Math.trunc(Math.random() * 20) + 1;

        displayMessage('Start guessing...');

        document.querySelector('.number').textContent = '?';
        document.querySelector('.score').textContent = score;
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor =
            '#222';

        document.querySelector('.number').style.width =
            '15rem';
    });

