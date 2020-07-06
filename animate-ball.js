
// ball js animation
const ball = document.getElementsByTagName('ball')[0];

let direction = 1;
function move() {
    const rect = ball.getBoundingClientRect();
    let out = rect.top + 150 >= window.innerHeight || ball.getBoundingClientRect().top <= 0;
    if (out) {
        direction *= -1;
    }
    ball.style.top = ball.getBoundingClientRect().top + 1.5 * direction + 'px';
}

// LOOP with REQUEST ANIMATION FRAME
function ballLoop() {
    requestAnimationFrame(() => {
        move();
        ballLoop();
    });
    // uncomment to do two increments in the `next` js cycle
    // requestAnimationFrame(() => {
    //   animateBall();
    // })
}
ballLoop();

// LOOP with SET INTERVAL
// comment the above ball loop and uncomment the below code to see ball looping using the event loop (macrotask queue)
// const intervalId = setInterval(() => {
//   // console.log('animation',ball.getBoundingClientRect().top, ball.style.top);
//   animateBall();
// }, 16);

// if stop ball button rendered
const stopBallButton = document.getElementById('stop-ball');
stopBallButton && (stopBallButton.onclick = function() {
    clearInterval(intervalId);
});