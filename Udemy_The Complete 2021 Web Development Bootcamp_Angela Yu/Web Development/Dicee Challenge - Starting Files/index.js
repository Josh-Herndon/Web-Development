var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var title = document.querySelector("h1");

var leftDie = document.getElementsByClassName("img1")[0];
leftDie.setAttribute("src", "images/dice" + randomNumber1 + ".png");

var rightDie = document.getElementsByClassName("img2")[0];
rightDie.setAttribute("src", "images/dice" + randomNumber2 + ".png");

if (randomNumber1 > randomNumber2) {
  title.textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  title.textContent = "Player 2 Wins!";
}
else {
  title.textContent = "Draw!";
}
