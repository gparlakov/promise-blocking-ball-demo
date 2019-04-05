import './style.css';
 // ball js animation
const ball = document.getElementsByTagName('ball')[0] as HTMLElement;
function bounce() {

  let out = ball.getBoundingClientRect().top >= window.innerHeight;
  ball.style.top = (out ? 0 : ball.getBoundingClientRect().top + 1) + "px";
}
const intervalId = setInterval(() => {
  // console.log('animation',ball.getBoundingClientRect().top, ball.style.top);
  bounce();  
}, 30);

// if stop ball button rendered
const stopBallButton = document.getElementById('stop-ball')
stopBallButton && (stopBallButton.onclick = function() {
  clearInterval(intervalId);
});
