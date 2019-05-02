'use strict';

let button = document.getElementById('firingButton');
let billboard = document.querySelector('#billboard span');
let rocket = document.getElementById('rocket');
let seconds = 10;
button.addEventListener('click', function () {
  startCountdown();
})

function startCountdown () {
  billboard.innerHTML = seconds;
  rocket.src = 'images/rocket2.gif';
  let countdown = setInterval(function () {
    billboard.innerHTML = --seconds;
    if (seconds === 0) {
      clearInterval(countdown);
      launchRocket()
    }
  }, 1000);
}

function launchRocket() {
  rocket.classList.add('tookOff');
}
