const closedMonkey = document.querySelector(".closed");
const openMonkey = document.querySelector(".open");

// add event listener

closedMonkey.addEventListener("click", () => {
  if (openMonkey.classList.contains("open")) {
    openMonkey.classList.add("active");
    closedMonkey.classList.remove("active");
  }
});

openMonkey.addEventListener("click", () => {
  if (closedMonkey.classList.contains("closed")) {
    closedMonkey.classList.add("active");
    openMonkey.classList.remove("active");
  }
});


// this is for emoji face but can be used for dropdown menu 