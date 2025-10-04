const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const startScreen = document.getElementById('start-screen');
const gameOverScreen = document.getElementById('game-over');
const startBtn = document.getElementById('start-button');
const restartBtn = document.getElementById('restart-button');
const muteBtn = document.getElementById('mute-button');
const scoreEl = document.getElementById('score');
const healthEl = document.getElementById('health-bar');

startBtn.addEventListener('click', () => {
    startScreen.style.display = 'none';
    // start the game loop here
});

restartBtn.addEventListener('click', () => {
    gameOverScreen.style.display = 'none';
    // reset game variables and start game
});

muteBtn.addEventListener('click', () => {
    // toggle audio
});
