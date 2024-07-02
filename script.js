const cannon = document.getElementById('cannon');
const cannonball = document.getElementById('cannonball');

let cannonX = 375;
const cannonSpeed = 10;

let cannonballY = 0;
let cannonballX = Math.random() * 780;
const cannonballSpeed = 5;
let cannonballDirection = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2;

document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft' && cannonX > 0) {
        cannonX -= cannonSpeed;
    } else if (event.key === 'ArrowRight' && cannonX < 750) {
        cannonX += cannonSpeed;
    }
    cannon.style.left = cannonX + 'px';
});

function moveCannonball() {
    cannonballY += cannonballSpeed;
    cannonballX += cannonballDirection;
    
    if (cannonballY > 600) {
        cannonballY = 0;
        cannonballX = Math.random() * 780;
        cannonballDirection = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2;
    }
    
    if (cannonballX < 0 || cannonballX > 780) {
        cannonballDirection *= -1;
    }

    cannonball.style.top = cannonballY + 'px';
    cannonball.style.left = cannonballX + 'px';

    if (
        cannonballY + 20 > 550 &&
        cannonX < cannonballX + 20 &&
        cannonX + 50 > cannonballX
    ) {
        alert('Game Over!');
        cannonballY = 0;
        cannonballX = Math.random() * 780;
        cannonballDirection = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 2;
    }

    requestAnimationFrame(moveCannonball);
}

moveCannonball();