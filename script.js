const screens = {
  "MainHall-South": {
    img: "img/screen/MainHall-South.jpg",
    regions: [
      {
        x: 400,
        y: 300,
        r: 100,
        action: () => {gotoScreen("LivingRoom-South")},
      },
      {
        x: 100,
        y: 100,
        r: 300,
        action: () => {playSound("testSound.mp3")},
      },
    ],
  },
  "LivingRoom-South": {
    img: "img/screen/LivingRoom-South.jpg",
    regions: [],
  }
}

const state = {
  currentScreen: null
}

window.onload = () => {
  gotoScreen("MainHall-South");
  document.querySelector("#game-overlay").onclick = handleClick;
  document.querySelector("#game-overlay").onmousemove = handleMouseMove;
  window.ondrop = handleDrop;
  window.ondragover = handleDragOver;
}

function handleMouseMove(e) {
  const x = e.layerX;
  const y = e.layerY;

  hideHighlight();

  screens[state.currentScreen].regions.forEach(region => {
    if (withinRadius(x-region.x, y-region.y, region.r)) {
      showHighlight(region.x, region.y, region.r)
    }
  });
}

function handleClick(e) {
  const x = e.layerX;
  const y = e.layerY;

  screens[state.currentScreen].regions.forEach(region => {
    if (withinRadius(x-region.x, y-region.y, region.r)) {
      region.action();
    }
  });
}

function handleDrop(e) {
  e.preventDefault();
  if (e.dataTransfer.files.length === 1
    && e.dataTransfer.files[0].name === "time.knife") {
    console.log("time knife: ", e);
  } else {
    console.log("not time knife: ", e);
  }
}

function handleDragOver(e) {
  e.preventDefault();
}

function gotoScreen(screen) {
  state.currentScreen = screen;
  document.querySelector("#game-img").src = screens[screen].img;
}

function playSound(soundFilename) {
  const audio = new Audio(`sound/${soundFilename}`);

  audio.play();
}

function showHighlight(x, y, radius) {
  const highlight = document.querySelector("#game-highlight");

  highlight.style.left = `${x}px`;
  highlight.style.top = `${y}px`;
  highlight.style.width = `${radius*2}px`;
  highlight.style.height = `${radius*2}px`;
  highlight.style.opacity = 1;
}

function hideHighlight() {
  const highlight = document.querySelector("#game-highlight");

  highlight.style.opacity = 0;
}

function withinRadius(x, y, r) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) < r
}
