const screens = {
  "JakeRoom-North": {
    interactables: [
      {
        x: 113,
        y: 410,
        r: 75,
        action: () => {playSoundWithLockout("WrongWay")},
      }
    ]
  },
  "JakeRoom-East": {
    interactables: [
      {
        x: 401,
        y: 221,
        r: 50,
        action: () => {playSoundWithLockout("TimeClock")},
      }
    ]
  },
  "JakeRoom-South": {
    arrows: [
      {
        x: 216,
        y: 450,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(7deg)",
        action: () => {gotoScreen("MainHall-South")}
      }
    ],
    interactables: [
      {
        x: 400,
        y: 213,
        r: 50,
        action: () => {
          state.inputLocked = true;
          gotoScreen("JakeRoom-South-PictureZoom");
          playSound("Foot");
          window.setTimeout(() => {
            gotoScreen("JakeRoom-South");
            state.inputLocked = false;
          }, 3300);
        }
      },
    ],
  },
  "JakeRoom-West": {},
  "JakeRoom-South-PictureZoom": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "MainHall-North": {
    arrows: [
      {
        x: 550,
        y: 500,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-12deg)",
        action: () => {gotoScreen("JakeRoom-North")},
      }
    ]
  },
  "MainHall-East": {
    arrows: [
      {
        x: 325,
        y: 475,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-3deg)",
        action: () => {gotoScreen("BathroomHall-East")},
      }
    ],
    interactables: [
      {
        x: 445,
        y: 368,
        r: 100,
        action: () => {
          state.inputLocked = true;
          gotoScreen("MainHall-East-UpstairsDoor");
          window.setTimeout(() => {
            gotoScreen("MainHall-East-UpstairsDoor-Eyes");
            playSound("Woof");
            window.setTimeout(() => {
              gotoScreen("MainHall-East-UpstairsDoor");
              window.setTimeout(() => {
                gotoScreen("MainHall-East");
                state.inputLocked = false;
                playSoundWithLockout("BetterNotGoThatWay");
              }, 300);
            }, 500)
          }, 500);
        },
      }
    ]
  },
  "MainHall-South": {
    arrows: [
      {
        x: 492,
        y: 550,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-5deg)",
        action: () => {gotoScreen("LivingRoom-South")},
      }
    ]
  },
  "MainHall-West": {},
  "MainHall-East-UpstairsDoor": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "MainHall-East-UpstairsDoor-Eyes": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "LivingRoom-North": {
    interactables: [
      {
        x: 217,
        y: 297,
        r: 50,
        action: () => {gotoScreen("MainHall-North")},
      }
    ],
    arrows: [
      {
        x: 220,
        y: 410,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(10deg)",
        action: () => {gotoScreen("MainHall-North")},
      }
    ]
  },
  "LivingRoom-East": {},
  "LivingRoom-South": {},
  "LivingRoom-West": {},
  "BathroomHall-North": {
    arrows: [
      {
        x: 376,
        y: 525,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(50deg) rotateZ(0deg)",
        action: () => {gotoScreen("Bathroom-North")},
      }
    ]
  },
  "BathroomHall-East": {
    interactables: [
      {
        x: 543,
        y: 360,
        r: 75,
        action: () => {
          const now = Date.now();
          if (now - state.lockedDoorLastClickTime > 10000
            || state.lockedDoorCounter >= 5) {
            state.lockedDoorCounter = 0;
          }

          state.lockedDoorCounter += 1;
          state.lockedDoorLastClickTime = now;
          
          playSoundWithLockout(`Locked${state.lockedDoorCounter}`);
        }
      }
    ]
  },
  "BathroomHall-South": {},
  "BathroomHall-West": {
    arrows: [
      {
        x: 275,
        y: 550,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(50deg) rotateZ(0deg)",
        action: () => {gotoScreen("MainHall-West")},
      }
    ]
  },
  "Bathroom-North": {
    interactables: [
      {
        x: 540,
        y: 508,
        r: 100,
        action: () => {playSoundWithLockout("TimeShit")}
      }
    ]
  },
  "Bathroom-East": {
    interactables: [
      {
        x: 350,
        y: 111,
        r: 100,
        action: () => {playSoundWithLockout("BunnyNotBird")},
      }
    ]
  },
  "Bathroom-South": {
    arrows: [
      {
        x: 509,
        y: 475,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(60deg) rotateZ(-4deg)",
        action: () => {gotoScreen("BathroomHall-South")},
      }
    ]
  },
  "Bathroom-West": {
    interactables: [
      {
        x: 544,
        y: 221,
        r: 100,
        action: () => {
          state.inputLocked = true;
          gotoScreen("Bathroom-West-MirrorZoom");
          playSound("Heh");
          window.setTimeout(() => {
            gotoScreen("Bathroom-West");
            state.inputLocked = false;
          }, 1000);
        },
      },
    ]
  },
  "Bathroom-West-MirrorZoom": {
    noLeftTurn: true,
    noRightTurn: true,
  },
};

const audioList = [
  "Locked1",
  "Locked2",
  "Locked3",
  "Locked4",
  "Locked5",
  "Heh",
  "BunnyNotBird",
  "TimeShit",
  "Foot",
  "TimeClock",
  "Woof",
  "BetterNotGoThatWay",
  "WrongWay",
]
const audioObjects = {};

const state = {
  currentScreen: null,
  lastMouseCoords: { x: 0, y: 0 },
  inputLocked: false,
  lockedDoorLastClickTime: 0,
  lockedDoorCounter: 0,
};

window.onload = () => {
  gotoScreen("MainHall-East");
  document.querySelector("#game-overlay").onclick = handleClick;
  document.querySelector("#game-overlay").onmousemove = handleMouseMove;
  window.ondrop = handleDrop;
  window.ondragover = handleDragOver;
  preloadAudio();
}

function handleMouseMove(e) {
  const x = e.layerX;
  const y = e.layerY;

  state.lastMouseCoords = { x, y };

  decideHighlights(x, y);
}

function handleClick(e) {
  const x = e.layerX;
  const y = e.layerY;

  console.log(x, y);

  if (!state.inputLocked) {
    if (withinLeftTurnArrow(x, y)) {
      turnLeft();
      return;
    } else if (withinRightTurnArrow(x, y)) {
      turnRight();
      return;
    }

    screens[state.currentScreen].interactables?.forEach(interactable => {
      if (withinRadius(x-interactable.x, y-interactable.y, interactable.r)) {
        interactable.action();
      }
    });

    screens[state.currentScreen].arrows?.forEach(arrow => {
      if (withinRadius(x-arrow.x, y-arrow.y, arrow.height/2)) {
        arrow.action();
      }
    });
  }  
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

function preloadAudio() {
  audioList.forEach(audio => {
    audioObjects[audio] = new Audio(`sound/${audio}.mp3`);
    audioObjects[audio].preload = "auto";
  });
}

function gotoScreen(screen) {
  state.currentScreen = screen;
  document.querySelector("#game-img").src = `img/screen/${screen}.jpg`;
  
  decideHighlights(state.lastMouseCoords.x, state.lastMouseCoords.y);
  
  removeArrows();
  window.setTimeout(() => {
    replaceArrows();
  }, 10);

  if (screens[screen].noLeftTurn) {
    hideLeftTurnArrow();
  } else {
    showLeftTurnArrow();
  }
  if (screens[screen].noRightTurn) {
    hideRightTurnArrow();
  } else {
    showRightTurnArrow();
  }
}

function turnLeft() {
  const [room, direction] = state.currentScreen.split("-");

  let newDirection;
  if (direction === "North") {
    newDirection = "West";
  } else if (direction === "West") {
    newDirection = "South";
  } else if (direction === "South") {
    newDirection = "East";
  } else {
    newDirection = "North";
  }

  gotoScreen(`${room}-${newDirection}`);
}

function turnRight() {
  const [room, direction] = state.currentScreen.split("-");

  let newDirection;
  if (direction === "North") {
    newDirection = "East";
  } else if (direction === "East") {
    newDirection = "South";
  } else if (direction === "South") {
    newDirection = "West";
  } else {
    newDirection = "North";
  }

  gotoScreen(`${room}-${newDirection}`);
}

function playSound(sound) {
  audioObjects[sound].play();
}

function playSoundWithLockout(sound) {
  const audio = audioObjects[sound];

  state.inputLocked = true;

  audio.play();

  window.setTimeout(() => {
    state.inputLocked = false;
  }, audio.duration * 1000);
}

function decideHighlights(x, y) {
  hideHighlights();

  if (withinLeftTurnArrow(x, y)) {
    highlightLeftTurnArrow();
    return;
  } else if (withinRightTurnArrow(x, y)) {
    highlightRightTurnArrow();
    return;
  }

  screens[state.currentScreen].interactables?.forEach(interactable => {
    if (withinRadius(x-interactable.x, y-interactable.y, interactable.r)) {
      showHighlight(interactable.x, interactable.y, interactable.r)
    }
  });

  screens[state.currentScreen].arrows?.forEach((arrow, i) => {
    if (withinRadius(x-arrow.x, y-arrow.y, arrow.height/2)) {
      const arrowElement = document
        .querySelector(`#game-arrows-container img[data-index="${i}"]`);

      if (arrowElement) {
        arrowElement.src = "img/ArrowHighlighted.png";
        document.querySelector("#game-overlay").style.cursor = "pointer";
      }
    }
  });
}

function hideHighlights() {
  document.querySelector("#game-highlight").style.opacity = 0;
  document.querySelector("#game-left-turn").src = "img/ArrowCurved.png";
  document.querySelector("#game-right-turn").src = "img/ArrowCurved.png";
  document.querySelectorAll("#game-arrows-container img").forEach(arrow => {
    arrow.src = "img/Arrow.png";
  });
  document.querySelector("#game-overlay").style.cursor = "initial";
}

function showHighlight(x, y, radius) {
  const highlight = document.querySelector("#game-highlight");

  highlight.style.left = `${x}px`;
  highlight.style.top = `${y}px`;
  highlight.style.width = `${radius*2}px`;
  highlight.style.height = `${radius*2}px`;
  highlight.style.opacity = 1;

  document.querySelector("#game-overlay").style.cursor = "pointer";
}

function highlightLeftTurnArrow() {
  document.querySelector("#game-left-turn").src = "img/ArrowCurvedHighlighted.png";
  document.querySelector("#game-overlay").style.cursor = "pointer";
}

function highlightRightTurnArrow() {
  document.querySelector("#game-right-turn").src = "img/ArrowCurvedHighlighted.png";
  document.querySelector("#game-overlay").style.cursor = "pointer";
}

function removeArrows() {
  const container = document.querySelector("#game-arrows-container");

  container.innerHTML = "";
}

function replaceArrows() {
  const container = document.querySelector("#game-arrows-container");

  container.innerHTML = "";

  screens[state.currentScreen].arrows?.forEach((arrow, i) => {
    const img = document.createElement("img");
    img.dataset.index = i;
    img.src = "img/Arrow.png";
    img.style.position = "absolute";
    img.style.left = `${arrow.x}px`;
    img.style.top = `${arrow.y}px`;
    img.style.height = `${arrow.height}px`;
    img.style.transform = arrow.transform;

    container.appendChild(img);
  });
}

function hideLeftTurnArrow() {
  document.querySelector("#game-left-turn").style.opacity = 0;
}

function showLeftTurnArrow() {
  document.querySelector("#game-left-turn").style.opacity = 1;
}

function hideRightTurnArrow() {
  document.querySelector("#game-right-turn").style.opacity = 0;
}

function showRightTurnArrow() {
  document.querySelector("#game-right-turn").style.opacity = 1;
}

function withinRadius(x, y, r) {
  return Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2)) < r
}

function withinLeftTurnArrow(x, y) {
  return x < 150 && y > (600-150);
}

function withinRightTurnArrow(x, y) {
  return x > (800-150) && y > (600-150)
}
