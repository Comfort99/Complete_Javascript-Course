'use strict';

const model = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModel = document.querySelector('.close-modal');
const btnsOpenModel = document.querySelectorAll('.show-modal');

const closeModel = function () {
    console.log('Button clicked');
    model.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const openModel = function () {
    console.log('Button clicked');
    model.classList.add('hidden');
    overlay.classList.add('hidden');
};


for (let i = 0; i < btnsOpenModel.length; i++) {
    btnsOpenModel[i].addEventListener('click',
        closeModel);
};

btnCloseModel.addEventListener('click', openModel);

overlay.addEventListener('click', openModel);

// Handle ESC key press
// Keydown event is fired when a key is pressed down
// Keyup event is fired when a key is released
// keypress event is fired when a key is pressed down and released (deprecated)
document.addEventListener('keydown', function (event) {
    console.log('Key pressed: ', event.key);
    if (event.key === 'Escape' && !model.classList.contains
        ('hidden')) {
        closeModel();
    }
});