/*
Gemlet: a starting point for writing games
Author: Valentin Stoyanov
Version: 1.0

Instructions:
Include gemlet.js in an HTML document containing
an element with an id of 'ball'.
The script will detect when th eleft or right arrow
key is presed and will move th eball element
accordingly.

*/

const ball = document.getElementById('ball');
document.addEventListener('keydown', handleKeyPress);
let position = 0;
let topPosition = 0;

function handleKeyPress(e) {
    if (e.code === 'ArrowLeft') {
        position -= 10;
    }
    if (e.code === 'ArrowRight') {
        position += 10;
    }
    if (e.code === 'ArrowUp') {
        topPosition -= 10;
    }
    if (e.code === 'ArrowDown') {
        topPosition += 10;
    }
    if (position < 0) {
        position = 0;
    }
    if (topPosition < 0) {
        topPosition = 0;
    }

    refresh(); // reposition the ball
}
/*refresh
changes the position of the ball
*/
function refresh() {
    ball.style.left = position + 'px';
    ball.style.top = topPosition + 'px';
}