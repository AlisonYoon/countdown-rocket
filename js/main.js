const btn = document.getElementById("firingButton");
const rocket = document.getElementById("rocket");
const billboard = document.getElementById("billboard");
let second = 10;

btn.addEventListener("click", countDown);


function countDown(){
   btn.removeEventListener("click", countDown);
   rocket.src = "images/rocket2.gif";
   billboard.querySelector("span").innerHTML = "10";
   const countDownInterval = setInterval(function(){
      billboard.querySelector("span").innerHTML = --second; 
      if(second == 0) {
         clearInterval(countDownInterval);
         rocket.classList.add("tookOff");
      }
   }, 1000);



}