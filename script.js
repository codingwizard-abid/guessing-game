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
      document.querySelector('.number').style.backgroundColor = '#333';
      document.querySelector('.number').style.color = '#fff';

      if(score > highScore){
         highScore = score;
      }
   } else if (guess > secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = "too high try again";
         score--;
         document.querySelector(".score").textContent = score;
      }else{
         document.querySelector(".message").textContent = "attempt exceeded you lost the game.";
      }
   } else if (guess < secretNumber) {
      if (score > 1) {
         document.querySelector(".message").textContent = "too low try again";
         score--;
         document.querySelector(".score").textContent = score;
      }else{
         document.querySelector(".message").textContent = "attempt exceeded you lost the game.";
         document.querySelector(".score").textContent = 0;
      }
   }
});

// reset every thing 

document.querySelector('.again').addEventListener('click', function(){
   score = 0;
   secretNumber = Math.trunc(Math.random() * 20) + 1;
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.backgroundColor = '#fff';
   document.querySelector('.number').style.backgroundColor = '#333';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector(".guess").value = '';
   document.querySelector(".message").textContent = 'Start guessing...';
   document.querySelector(".score").textContent = score;
});