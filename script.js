"use etrict";
/*
console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "Correct number";

document.querySelector(".number").textContent = 12;
document.querySelector(".score").textContent = 10;

document.querySelector(".guess").value = 23;
console.log(document.querySelector(".guess").value);
*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //not number
  if (!guess) {
    document.querySelector(".message").textContent = "NO number!!";
    //won
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "congrats!! you Won the game";
    document.querySelector("body").style.backgroundColor = "#00e600";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent =
        guess > secretNumber ? "To High!!" : "To Low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you Lose the game!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").style.width = "30rem";
    }
  }
  /*  //too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "To High!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you Lose the game!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").style.width = "30rem";
    }
    //too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector(".message").textContent = "To Low!!";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "you Lose the game!!";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#ff0000";
      document.querySelector(".number").style.width = "30rem";
    }
  }*/
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
