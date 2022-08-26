"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

function displayMessage(message){
   document.querySelector('.message').textContent = message;
}

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   if (!guess) {
      displayMessage("No Number ⛔");
   } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      displayMessage("Correct Number 👌");
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').style.backgroundColor = '#f4f4f4';
      document.querySelector('.number').style.color = '#333';

      if(score > highScore){
         highScore = score;
         document.querySelector('.highscore').textContent = highScore;
      }
   } else if(guess !== secretNumber){
      if (score > 1) {
         displayMessage(guess > secretNumber ? "too high 📈" : "too low 📉");
         score--;
         document.querySelector(".score").textContent = score;
      }else{
         document.querySelector(".score").textContent = 0;
         displayMessage('you lost the game!');
      }
   }
});

// reset every thing 

document.querySelector('.again').addEventListener('click', function(){
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.backgroundColor = '#fff';
   document.querySelector('.number').style.color = '#333';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector(".guess").value = '';
   displayMessage('Start guessing...');
   score = 20;
   document.querySelector('.score').textContent = score;
});