const computerChoiceDisplay = document.getElementById("computerChoice");
const userChoiceDisplay = document.getElementById("userChoice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = ` ${userChoice}`;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * possibleChoices.length + 1);

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = ` ${computerChoice}`;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a Draw!";
    resultDisplay.style.color = "black";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Win!";
    resultDisplay.style.color = "darkgreen";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Lose!";
    resultDisplay.style.color = "darkred";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You Win!";
    resultDisplay.style.color = "darkgreen";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lose!";
    resultDisplay.style.color = "darkred";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Win!";
    resultDisplay.style.color = "darkgreen";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Lose!";
    resultDisplay.style.color = "darkred";
  }
  resultDisplay.innerHTML = ` ${result}`;
}
