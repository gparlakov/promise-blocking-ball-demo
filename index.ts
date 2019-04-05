import "./ball"

// promises
let maxTries = 10;
let counter = 0;

function startPromise() {
  if (counter < maxTries) {
    counter += 1;
    Promise.resolve().then(() => {
      console.log(counter);
      startPromise();
    });
  }
}

const inputCount = document.getElementById('promise-count') as HTMLInputElement;
const button = document.getElementById('run')
button.onclick = function () {
  counter = 0;
  const val = parseInt(inputCount.value);
  console.log(val);
  maxTries = isNaN(val) ? maxTries : val;
  startPromise();
}

