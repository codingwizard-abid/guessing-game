"use strict";
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
   const guess = Number(document.querySelector(".guess").value);
   if (!guess) {
      document.querySelector(".message").textContent = "No Number ⛔";
   } else if (guess === secretNumber) {
      document.querySelector(".number").textContent = secretNumber;
      document.querySelector(".message").textContent = "Correct Number 👌";
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
         document.querySelector(".message").textContent = guess > secretNumber ? "too high 📈" : "too low 📉";
         score--;
         document.querySelector(".score").textContent = score;
      }else{
         document.querySelector(".score").textContent = 0;
         document.querySelector(".message").textContent = 'you lost the game!';
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
   document.querySelector(".message").textContent = 'Start guessing...';
   score = 20;
   document.querySelector('.score').textContent = score;
});