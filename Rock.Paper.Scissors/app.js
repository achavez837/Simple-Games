//defines all parts
const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice; //using let globally defines the parts i have in my functions
let result;

//displays with each click
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

// Randomizer for computer choice
function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1;

  if (randomNumber === 1) {
    computerChoice = "Rock";
  }
  if (randomNumber === 2) {
    computerChoice = "Paper";
  }
  if (randomNumber === 3) {
    computerChoice = "Scissors";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

// if and for the results of game
function getResult() {
  if (computerChoice === userChoice) {
    result = "Its a draw! Try Again!";
  }
  if (computerChoice === "Rock" && userChoice === "Paper") {
    result = "You Win!";
  }
  if (computerChoice === "Rock" && userChoice === "Scissors") {
    result = "You Lost!";
  }
  if (computerChoice === "Paper" && userChoice === "Scissors") {
    result = "You Win!";
  }
  if (computerChoice === "Paper" && userChoice === "Rock") {
    result = "You Lost!";
  }
  if (computerChoice === "Scissors" && userChoice === "Paper") {
    result = "You Lost!";
  }
  if (computerChoice === "Scissors" && userChoice === "Rock") {
    result = "You Lost!";
  }
  resultDisplay.innerHTML = result;
  setTimeout(() => {
    location.reload()
  },2000);
}



