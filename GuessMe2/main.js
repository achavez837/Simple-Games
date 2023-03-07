let enterBtn = document.getElementById("enterBtn");
let againBtn = document.getElementById("againBtn");
let output = document.getElementById("outputText");

let number = [Math.floor(Math.random() * 100)];

function checkNumber() {
  var input = document.getElementById("userInput").value;
  if (input == number) {
    output.innerHTML = `YOU WON! It was ${number}!`;
    output.style.color = "green";
  } else if (input > number && input < 100) {
    output.innerHTML = "You guessed too high :(";
    output.style.color = "red";
  } else if (input < number && input > 1) {
    output.innerHTML = "You guessed too low :(";
    output.style.color = "red";
  } else if (input < 1) {
    output.innerHTML = "Higher! Its between 1 & 100";
  } else if (isNaN(input)) {
    output.innerHTML = "That's not a number";
  }
}

enterBtn.addEventListener("click", checkNumber);
againBtn.addEventListener("click", function () {
  location.reload();
});

/*
btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  if (input == number) {
    output.innerHTML = `You Guessed Right! Your number was ${number}`;
  } else if (input < number) {
    output.innerHTML = "You guessed too low :( Try again";
  }
  if (input > number) {
    output.innerHTML = "You Guessed too high :( Try again";
  }
});
*/
