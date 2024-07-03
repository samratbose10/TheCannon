const cannon = document.getElementById('cannon');
const cannonball = document.getElementById('cannonball');
const scoreDisplay = document.getElementById('score');
const countdownDisplay = document.getElementById('countdown');
const startButton = document.getElementById('startButton');

let cannonX = 375;
const cannonSpeed = 10;

let cannonballY = 0;
let cannonballX = Math.random() * 780;
let cannonballSpeed = 5;
let score = 0;
let gameSpeed = 1;
let gameStarted = false;

document.addEventListener('keydown', (event) => {
    if (!gameStarted) return;
    if (event.key === 'ArrowLeft' && cannonX > 0) {
        cannonX -= cannonSpeed;
    } else if (event.key === 'ArrowRight' && cannonX < 750) {
        cannonX += cannonSpeed;
    }
    cannon.style.left = cannonX + 'px';
});

function moveCannonball() {
    cannonballY += cannonballSpeed * gameSpeed;

    if (cannonX + 25 < cannonballX) {
        cannonballX -= cannonballSpeed * gameSpeed * 0.5;
    } else if (cannonX + 25 > cannonballX) {
        cannonballX += cannonballSpeed * gameSpeed * 0.5;
    }

    if (cannonballY > 600) {
        cannonballY = 0;
        cannonballX = Math.random() * 780;
        score++;
        gameSpeed += 0.1;
        scoreDisplay.textContent = 'Score: ' + score;
    }

    cannonball.style.top = cannonballY + 'px';
    cannonball.style.left = cannonballX + 'px';

    if (
        cannonballY + 20 > 550 &&
        cannonX < cannonballX + 20 &&
        cannonX + 50 > cannonballX
    ) {
        alert('Game Over! Your score is: ' + score);
        resetGame();
    } else {
        requestAnimationFrame(moveCannonball);
    }
}

function resetGame() {
    gameStarted = false;
    cannonballY = 0;
    cannonballX = Math.random() * 780;
    score = 0;
    gameSpeed = 1;
    scoreDisplay.textContent = 'Score: ' + score;
    startButton.style.display = 'block';
}

function startCountdown() {
    let countdown = 3;
    countdownDisplay.style.display = 'block';
    countdownDisplay.textContent = countdown;

    const countdownInterval = setInterval(() => {
        countdown--;
        if (countdown > 0) {
            countdownDisplay.textContent = countdown;
        } else {
            clearInterval(countdownInterval);
            countdownDisplay.style.display = 'none';
            gameStarted = true;
            moveCannonball();
        }
    }, 1000);
}

startButton.addEventListener('click', () => {
    startButton.style.display = 'none';
    startCountdown();
});
