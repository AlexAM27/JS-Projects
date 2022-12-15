'use strict';

const COLORS = ['#ff6b6b', '#f783ac', '#da77f2', '#9775fa', '#748ffc', '#4dabf7', '#3bc9db', '#38d9a9', '#ffd43b', '#fd7e14'];

const board = document.querySelector('#board');

const SQUARES_AMOUNT = 600;

for(let i = 0; i < SQUARES_AMOUNT; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => setColor(square));
    square.addEventListener('mouseleave', () => removeColor(square));

    board.append(square);
}

function setColor(elem) {
    const color = gerRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(elem) {
    elem.style.backgroundColor = '#1d1d1d';
    elem.style.boxShadow = '0 0 2px #000';
    
}

function gerRandomColor() {
    const index = Math.floor(Math.random() * COLORS.length);
    return COLORS[index];
}