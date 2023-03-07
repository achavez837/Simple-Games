const squares = document.querySelectorAll(".square"); // all is important, i want all the squares
const mole = document.querySelector(".mole");
const timer = document.querySelector("#time");
const score = document.querySelector("#score");
const btn = document.getElementById("btn");

let comment = document.getElementById("comment");
let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove("mole");
  });

  let randomSquare = squares[Math.floor(Math.random() * squares.length + 1)];
  randomSquare.classList.add("mole");

  hitPosition = randomSquare.id;
}

squares.forEach((square) => {
  square.addEventListener("mousedown", () => {
    if (square.id == hitPosition) {
      result++;
      score.innerHTML = result;
      hitPosition = null;
    }
  });
});

btn.addEventListener("mousedown", () => {
  timerId = setInterval(randomSquare, 500);
  let countDownTimerId = setInterval(countDown, 1000);

  function countDown() {
    currentTime--; 
    timer.innerHTML = currentTime;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      comment.innerHTML = `GAME OVER! Your final score is ${result}!`;
    }
  }
});
