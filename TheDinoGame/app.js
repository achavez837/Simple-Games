/* HOMEWORK:
	- Add score counter (seconds alive) [x]
	- Improve bush logic (following?)
	- Background images and player/bush images!  [x]
	- Have bushes jump when they are close to you!
*/

const player = {
  x: 20, // pixels from left
  y: 0, // pxiels from bottom
  w: 20, // width of player
  h: 50, // height of player
  xVelocity: 0,
  yVelocity: 0,
  alive: true,
  element: document.getElementById("player"),
};

let bushes = [];

//default key stance
const keys = {
  left: false,
  right: false,
  jump: false,
};

initGame();

const sceneEl = document.getElementById("scene");

function initGame() {
  document.addEventListener("keydown", handleKeyDown); //event listener that sets what the keys do
  document.addEventListener("keyup", handleKeyUp);
  // setInterval(gameLoop, 1000/60);

  initBushes();
  gameLoop();
  //Alisa Additions  clearInterval(timerVariable); timerVariable = setInterval(timeDisplay, 1000);
}

// what the keys do
function handleKeyDown(event) {
  // console.log('handleKeyDown: %o', event.code);
  if (event.code === "ArrowRight") {
    keys.right = true;
  }
  if (event.code === "ArrowLeft") {
    keys.left = true;
  }
  if (event.code === "Space") {
    keys.jump = true;
  }
}
function handleKeyUp(event) {
  // console.log('handleKeyUp: %o', event.code);
  if (event.code === "ArrowRight") {
    keys.right = false;
  }
  if (event.code === "ArrowLeft") {
    keys.left = false;
  }
  if (event.code === "Space") {
    keys.jump = false;
  }
}

function gameLoop() {
  if (player.alive === false) return;

  // Handle key presses
  if (keys.right) player.xVelocity += 0.5;
  if (keys.left) player.xVelocity -= 0.5;
  if (keys.jump && player.y === 0) player.yVelocity = 10;

  // Update player position
  player.x += player.xVelocity;
  player.y += player.yVelocity;
  player.xVelocity *= 0.8;

  // Handle bush logic
  bushes.forEach((bush) => {
    bush.x += bush.xVelocity;
    bush.y += bush.yVelocity;
    if (bush.x < 0) {
      bush.x = 1000;
    }

    bush.yVelocity -= 0.5;
    if (bush.y <= 0) {
      bush.y = 0;
      bush.yVelocity = 0;
    }
    //bush speed
    if (bush.y === 0 && Math.random() < 0.001) {
      bush.yVelocity = 8;
    }

    // Collision detection
    if (checkCollision(player, bush)) {
      player.alive = false;
      gameOver();
    }
  });

  // Handle gravity
  if (player.y > 0) {
    player.yVelocity -= 0.5;
  } else {
    player.y = 0;
    player.yVelocity = 0;
  }

  updateScene();
  window.requestAnimationFrame(gameLoop);
}

function initBushes() {
  const oldBushEls = Array.from(document.getElementsByClassName("bush"));
  oldBushEls.forEach((bush) => bush.remove());

  bushes = [];
  for (let i = 0; i < 8; i++) {
    addBush();
  }
}

function addBush() {
  const sceneEl = document.getElementById("scene"); // sceneElement
  const bushEl = document.createElement("div"); // bushElement
  bushEl.classList.add("bush");
  sceneEl.appendChild(bushEl);

  const bush = {
    x: 500 + 200 * bushes.length,
    y: 0,
    w: 20,
    h: 20,
    xVelocity: -1 * (1 + 4 * Math.random()), // why is set up this way ? why not 6 * ?
    yVelocity: 0,
    element: bushEl,
  };
  bushes.push(bush);
}

function checkCollision(a, b) {
  // https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  return (
    a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.h + a.y > b.y
  );
}

function updateScene() {
  player.element.style.left = player.x;
  player.element.style.bottom = player.y;
  bushes.forEach((bush) => {
    bush.element.style.left = bush.x;
    bush.element.style.bottom = bush.y;
  });
  //Alisa Additions
}

function gameOver() {
  sceneEl.style.backgroundImage =
    "url('https://images.pond5.com/you-lose-video-game-arcade-footage-087926062_prevstill.jpeg')";
  sceneEl.style.backgroundPosition = "center";

  //Alisa Additions
  // clearInterval(timerVariable);

  /*
  setTimeout(() => {
    sceneEl.style.backgroundImage = "url('https://img.freepik.com/free-vector/volcano-eruption-cave-view-halloween-background_107791-8809.jpg')";
    sceneEl.style.backgroundRepeat = "no-repeat";
    sceneEl.style.backgroundSize = "900px 500px"
    resetGame();
  }, 2000); */
}

function resetGame() {
  sceneEl.focus(); /// check me
  player.x = 20;
  player.alive = true;
  initBushes();
  gameLoop();

  totalSeconds = 0;
  //Alisa Additions
  document.getElementById("timeDisplay").innerHTML = 0;
  sceneEl.style.backgroundImage =
    "url('https://img.freepik.com/free-vector/volcano-eruption-cave-view-halloween-background_107791-8809.jpg')";
  sceneEl.style.backgroundRepeat = "no-repeat";
  sceneEl.style.backgroundSize = "900px 500px";
}
/*
function resetGame() {
  player.x = 20;
  player.alive = true;
  initBushes();
  updateScene();
  gameLoop();
}
*/
//Alisa Additions:
var timerVaritimerVariableable = setInterval(timeDisplay, 1000);
var totalSeconds = 0;
var seconds;

/* My attempt to try and save last time stamp
var oldScore = [];
oldScore.push([totalSeconds]);
document.getElementById("oldScore").innerHTML = oldScore;
*/

function timeDisplay() {
  if (player.alive === false) {
    /// check me
    return;
  }
  ++totalSeconds;
  var hour = Math.floor(totalSeconds / 3600);
  var minute = Math.floor((totalSeconds - hour * 3600) / 60);
  var seconds = totalSeconds - (hour * 3600 + minute * 60);
  document.getElementById("timeDisplay").innerHTML = seconds;
}

// document.getElementById("resetBtn").addEventListener("click", resetGame());

function refreshPage() {
  location.reload();
}
