const cannon = document.getElementById('cannon');
const cannonball = document.getElementById('cannonball');

let cannonX = 375;
const cannonSpeed = 10;

let cannonballY = 0;
const cannonballSpeed = 5;

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
    if (cannonballY > 600) {
        cannonballY = 0;
        cannonball.style.left = Math.random() * 780 + 'px';
    }
    cannonball.style.top = cannonballY + 'px';

    if (
        cannonballY + 20 > 550 &&
        cannonX < parseInt(cannonball.style.left) + 20 &&
        cannonX + 50 > parseInt(cannonball.style.left)
    ) {
        alert('Game Over!');
        cannonballY = 0;
        cannonball.style.left = Math.random() * 780 + 'px';
    }

    requestAnimationFrame(moveCannonball);
}

moveCannonball();