const screens = {
  "Hallway-North": {
    arrows: [
      {
        x: 280,
        y: 496,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(8deg)",
        action: () => {gotoScreen("JakeRoom-North")}
      }
    ]
  },
  "Hallway-East": {
    arrows: [
      {
        x: 364,
        y: 515,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(1deg)",
        action: () => {
          state.inputLocked = true;
          gotoScreen("Hallway-Stairs");
          window.setTimeout(() => {
            gotoScreen("Hallway-Stairs-Shark");
            playSound("Splash");
            window.setTimeout(() => {
              playSound("Scream");
            }, 350);
            window.setTimeout(() => {
              gotoScreen("Hallway-East");
              state.inputLocked = false;
            }, 1000)
          }, 500);
        }
      }
    ]
  },
  "Hallway-South": {
    arrows: [
      {
        x: 310,
        y: 516,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(4deg)",
        action: () => {gotoScreen("LivingRoom-South")}
      }
    ]
  },
  "Hallway-West": {
    arrows: [
      {
        x: 478,
        y: 475,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-2deg)",
        action: () => {gotoScreen("BathroomHallway-West")}
      }
    ],
    "interactables": [
      {
        x: 367,
        y: 390,
        r: 100,
        action: () => {
          state.inputLocked = true;
          gotoScreen("Hallway-UpstairsDoor");
          window.setTimeout(() => {
            gotoScreen("Hallway-UpstairsDoor-Eyes");
            playSound("Woof");
            window.setTimeout(() => {
              gotoScreen("Hallway-UpstairsDoor");
              window.setTimeout(() => {
                gotoScreen("Hallway-West");
                state.inputLocked = false;
                playSoundWithLockout("TimeHound");
              }, 300);
            }, 500)
          }, 500);
        }
      }
    ]
  },
  "JakeRoom-North": {
    interactables: [
      {
        x: 416,
        y: 474,
        r: 100,
        action: () => {
          gotoScreen("JakeRoom-BoardGames")
          playSoundWithLockout("JakeRoomBoardGames");
        },
      }
    ]
  },
  "JakeRoom-East": {},
  "JakeRoom-South": {
    interactables: [
      {
        x: 422,
        y: 239,
        r: 70,
        action: () => {
          gotoScreen("JakeRoom-Foot");
          playSound("FootFetish");
          window.setTimeout(() => {
            gotoScreen("JakeRoom-South");
          }, 3500);
        }
      }
    ],
    arrows: [
      {
        x: 608,
        y: 470,
        height: 120,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-7deg)",
        action: () => {gotoScreen("Hallway-South")}
      }
    ]
  },
  "JakeRoom-West": {
    interactables: [
      {
        x: 403,
        y: 254,
        r: 50,
        action: () => {
          gotoScreen("JakeRoom-Clock");
          playSound("JakeRoomClock")
          window.setTimeout(() => {
            gotoScreen("JakeRoom-West");
          }, 4000);
        }
      }
    ]
  },
  "LivingRoom-North": {
    arrows: [
      {
        x: 571,
        y: 394,
        height: 120,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-7deg)",
        action: () => {gotoScreen("Hallway-North")}
      }
    ]
  },
  "LivingRoom-East": {
    interactables: [
      {
        x: 678,
        y: 339,
        r: 100,
        action: () => {gotoScreen("ComputerRoom-East")}
      }
    ]
  },
  "LivingRoom-South": {
    interactables: [
      {
        x: 113,
        y: 225,
        r: 50,
        action: () => {
          gotoScreen("LivingRoom-Sculpture");
          playSound("HowLewd");
          window.setTimeout(() => {
          gotoScreen("LivingRoom-South");
          }, 2500);
        }
      }
    ]
  },
  "LivingRoom-West": {
    interactables: [
      {
        x: 287,
        y: 133,
        r: 50,
        action: () => {
          gotoScreen("LivingRoom-West-WithTunnel");
          if (!state.mazeVisited) {
            playSoundWithLockout("LivingRoomSwitch");
          }
        }
      },
      {
        x: 489,
        y: 253,
        r: 70,
        action: () => {
          gotoScreen("LivingRoom-JakePhoto");
          playSound("Handsome");
          window.setTimeout(() => {
            gotoScreen("LivingRoom-West");
          }, 2500);
        }
      }
    ]
  },
  "BathroomHallway-North": {
    arrows: [
      {
        x: 439,
        y: 534,
        height: 200,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(0deg)",
        action: () => {gotoScreen("Bathroom-North")}
      }
    ]
  },
  "BathroomHallway-East": {
    arrows: [
      {
        x: 507,
        y: 524,
        height: 200,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(0deg)",
        action: () => {gotoScreen("Hallway-East")}
      }
    ]
  },
  "BathroomHallway-South": {},
  "BathroomHallway-West": {
    interactables: [
      {
        x: 256,
        y: 359,
        r: 50,
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
  "Bathroom-North": {
    interactables: [
      {
        x: 507,
        y: 381,
        r: 50,
        action: () => {
          gotoScreen("Bathroom-Diary-Closed");
          if (state.diaryFound) {
            playSoundWithLockout("BathroomDiaryAgain");
          } else {
            playSoundWithLockout("BathroomDiary");
            state.diaryFound = true;
          }
        }
      },
      {
        x: 274,
        y: 445,
        r: 100,
        action: () => {
          gotoScreen("Bathroom-Toilet");
          playSound("TimeShit");
          window.setTimeout(() => {
            gotoScreen("Bathroom-North");
          }, 3500);
        }
      }
    ]
  },
  "Bathroom-East": {
    interactables: [
      {
        x: 87,
        y: 465,
        r: 50,
        action: () => {
          gotoScreen("Bathroom-Diary-Closed");
          if (state.diaryFound) {
            playSoundWithLockout("BathroomDiaryAgain");
          } else {
            playSoundWithLockout("BathroomDiary");
            state.diaryFound = true;
          }
        }
      },
      {
        x: 277,
        y: 284,
        r: 50,
        action: () => {
          gotoScreen("Bathroom-Mirror");
          playSound("WolfWhistle");
          window.setTimeout(() => {
            gotoScreen("Bathroom-East");
          }, 1000);
        }
      }
    ]
  },
  "Bathroom-South": {
    arrows: [
      {
        x: 307,
        y: 459,
        height: 120,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(2deg)",
        action: () => {gotoScreen("BathroomHallway-South")}
      }
    ]
  },
  "Bathroom-West": {
    interactables: [
      {
        x: 451,
        y: 233,
        r: 80,
        action: () => {
          gotoScreen("Bathroom-Bird");
          playSound("BunnyNotBird");
          window.setTimeout(() => {
            gotoScreen("Bathroom-West");
          }, 3000);
        }
      }
    ]
  },
  "SecretRoom-North": {
    interactables: [
      {
        x: 225,
        y: 365,
        r: 120,
        action: () => {playSoundWithLockout("SecretRoomScreen")}
      }
    ]
  },
  "SecretRoom-East": {
    interactables: [
      {
        x: 420,
        y: 484,
        r: 100,
        action: () => {playSoundWithLockout("SecretRoomFolder")}
      }
    ]
  },
  "SecretRoom-South": {
    arrows: [
      {
        x: 235,
        y: 491,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(0deg)",
        action: () => {gotoScreen("LivingRoom-West")}
      }
    ]
  },
  "SecretRoom-West": {
    interactables: [
      {
        x: 73,
        y: 395,
        r: 90,
        action: () => {playSoundWithLockout("NoPulse")}
      },
      {
        x: 216,
        y: 436,
        r: 50,
        action: () => {
          gotoScreen("SecretRoom-Id");
          if (!state.idSeen) {
            state.idSeen = true;
            playSoundWithLockout("SecretRoomId");
          }
        }
      }
    ]
  },
  "ComputerRoom-North": {
    interactables: [
      {
        x: 400,
        y: 257,
        r: 120,
        action: () => {
          gotoScreen("ComputerRoom-Fish");
          playSoundWithLockout("ComputerRoomFish");
        }
      }
    ]
  },
  "ComputerRoom-East": {},
  "ComputerRoom-South": {},
  "ComputerRoom-West": {
    arrows: [
      {
        x: 220,
        y: 480,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(-8deg)",
        action: () => {gotoScreen("LivingRoom-West")}
      }
    ]
  },
  "Hallway-UpstairsDoor": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Hallway-UpstairsDoor-Eyes": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Hallway-Stairs": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Hallway-Stairs-Shark": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "JakeRoom-BoardGames": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 622,
        y: 520,
        height: 200,
        transform: "translate(-50%, -50%) rotateX(60deg) rotateZ(-200deg)",
        action: () => {gotoScreen("JakeRoom-North")}
      }
    ]
  },
  "LivingRoom-West-WithTunnel": {
    arrows: [
      {
        x: 182,
        y: 444,
        height: 120,
        transform: "translate(-50%, -50%) rotateX(65deg) rotateZ(8deg)",
        action: () => {
          state.mazeDepth = 0;
          state.mazeCorrect = true;
          gotoScreen("Maze");

          if (state.mazeVisited) {
            playSoundWithLockout("MazeAgain");
          } else {
            playSoundWithLockout("MazeFirst");
            state.mazeVisited = true;
          }
        }
      }
    ]
  },
  "Maze": {
    noLeftTurn: true,
    noRightTurn: true,

    arrows: [
      {
        x: 340,
        y: 402,
        height: 90,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-60deg)",
        action: () => {mazeGoLeft()}
      },
      {
        x: 440,
        y: 402,
        height: 90,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(60deg)",
        action: () => {mazeGoRight()}
      },
      {
        x: 390,
        y: 356,
        height: 90,
        transform: "translate(-50%, -50%) rotateX(60deg) rotateZ(0deg)",
        action: () => {mazeGoStraight()}
      }
    ]
  },
  "CorridorDeath": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "CorridorWin": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 395,
        y: 420,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(60deg) rotateZ(0deg)",
        action: () => {
          loopSoundEnd("EerieAmbience");
          gotoScreen("SecretRoom-North")
          playSoundWithLockout("RoomInGlasgow");
        }
      }
    ]
  },
  "CorridorBunnyDead": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "SecretRoom-Id": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 155,
        y: 495,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("SecretRoom-West")}
      }
    ],
  },
  "YouWin": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Bathroom-Diary-Closed": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 91,
        y: 516,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page1")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page1": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page2")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Closed")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page2": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page3")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page1")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page3": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page4")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page2")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page4": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page5")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page3")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page5": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page6")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page4")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page6": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page7")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page5")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page7": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page8")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page6")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page8": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page9")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page7")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page9": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 146,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(-90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page10")}
      },
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page8")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ]
  },
  "Bathroom-Diary-Page10": {
    noLeftTurn: true,
    noRightTurn: true,
    arrows: [
      {
        x: 583,
        y: 552,
        height: 80,
        transform: "translate(-50%, -50%) rotateZ(90deg) rotateX(45deg)",
        action: () => {gotoScreen("Bathroom-Diary-Page9")}
      },
      {
        x: 711,
        y: 511,
        height: 150,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("Bathroom-East")}
      }
    ],
  },
  "LivingRoom-JakePhoto": {
    noLeftTurn: true,
    noRightTurn: true
  },
  "LivingRoom-Sculpture": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "ComputerRoom-Fish": {
    noLeftTurn: true,
    noRightTurn:true,
    arrows: [
      {
        x: 66,
        y: 532,
        height: 120,
        transform: "translate(-50%, -50%) rotateX(45deg) rotateZ(-180deg)",
        action: () => {gotoScreen("ComputerRoom-North")}
      }
    ]
  },
  "JakeRoom-Foot": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "JakeRoom-Clock": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Bathroom-Toilet": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Bathroom-Bird": {
    noLeftTurn: true,
    noRightTurn: true,
  },
  "Bathroom-Mirror": {
    turnLeft: true,
    turnRight: true,
  },
  "Black": {
    noLeftTurn: true,
    noRightTurn: true,
  }
};

const audioList = [
  "Locked1",
  "Locked2",
  "Locked3",
  "Locked4",
  "Locked5",
  "Woof",
  "Splash",
  "Scream",
  "Static",
  "EerieAmbience",
  "Jumpscare",
  "Footsteps",
  "FootstepsRunning",
  "Stab",
  "Explosion",
  "BathroomDiary",
  "BathroomDiaryAgain",
  "TimeShit",
  "JakeRoomBoardGames",
  "JakeRoomClock",
  "TimeHound",
  "LivingRoomSwitch",
  "Handsome",
  "MazeFirst",
  "MazeAgain",
  "HowLewd",
  "RoomInGlasgow",
  "SecretRoomScreen",
  "SeeBody",
  "NoPulse",
  "ThisOnesForJake",
  "FootFetish",
  "BunnyNotBird",
  "BarelyAlive",
  "SecretRoomId",
  "SecretRoomFolder",
  "ComputerRoomFish",
  "WolfWhistle",
]
const audioObjects = {};

const state = {
  currentScreen: null,
  lastMouseCoords: { x: 0, y: 0 },
  inputLocked: false,
  lockedDoorLastClickTime: 0,
  lockedDoorCounter: 0,
  mazeDepth: null,
  mazeCorrect: null,
  timeKnifeActive: false,
  diaryFound: false,
  mazeVisited: false,
  bodySeen: false,
  idSeen: false,
};

const mazeSolution = [1, 3, 2, 3, 2, 1];

window.onload = () => {
  gotoScreen("JakeRoom-South");
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
    if (withinLeftTurnArrow(x, y) && !screens[state.currentScreen].noLeftTurn) {
      turnLeft();
      return;
    } else if (withinRightTurnArrow(x, y) && !screens[state.currentScreen].noRightTurn) {
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
    state.timeKnifeActive = true;
    document.querySelector("#game-time-knife").style.opacity = "1";
  } else {
    console.log("function to get time knife if not working:");
    console.log(() => {
      state.timeKnifeActive = true;
      document.querySelector("#game-time-knife").style.opacity = "1";
    });
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
  if (screen === "LivingRoom-West-WithTunnel") {
    document.querySelector("#game-img").src
      = "img/screen/flipped-posterised/LivingRoom-West-WithTunnel.webp";
    loopSoundStart("Static")
  } else if (screen === "Maze") {
    loopSoundEnd("Static");
    loopSoundStart("EerieAmbience");

    const corridorNumber = state.mazeDepth % 5 + 1;

    document.querySelector("#game-img").src
      = `img/screen/flipped-posterised/Corridor${corridorNumber}.jpg`;
  } else {
    if (screen === "SecretRoom-West" && !state.bodySeen) {
      state.bodySeen = true;
      playSoundWithLockout("SeeBody");
    }

    document.querySelector("#game-img").src
      = `img/screen/flipped-posterised/${screen}.jpg`
    loopSoundEnd("Static");
  }
  state.currentScreen = screen;

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

function mazeGoLeft() {
  if (state.mazeCorrect && mazeSolution[state.mazeDepth] !== 1) {
    state.mazeCorrect = false;
  }

  state.mazeDepth += 1;

  if (state.mazeDepth === 6) {
    if (state.mazeCorrect) {
      mazeWin();
    } else {
      mazeDeath();
    }
  } else {
    playSoundWithLockout("Footsteps");
    gotoScreen("Maze");
  }
}

function mazeGoStraight() {
  if (state.mazeCorrect && mazeSolution[state.mazeDepth] !== 2) {
    state.mazeCorrect = false;
  }

  state.mazeDepth += 1;

  if (state.mazeDepth === 6) {
    if (state.mazeCorrect) {
      mazeWin();
    } else {
      mazeDeath();
    }
  } else {
    playSoundWithLockout("Footsteps");
    gotoScreen("Maze");
  }
}
function mazeGoRight() {
  if (state.mazeCorrect && mazeSolution[state.mazeDepth] !== 3) {
    state.mazeCorrect = false;
  }

  state.mazeDepth += 1;

  if (state.mazeDepth === 6) {
    if (state.mazeCorrect) {
      mazeWin();
    } else {
      mazeDeath();
    }
  } else {
    playSoundWithLockout("Footsteps");
    gotoScreen("Maze");
  }
}

function mazeWin() {
  playSoundWithLockout("Footsteps");
  gotoScreen("CorridorWin");
}

function mazeDeath() {
  if (state.timeKnifeActive) {
    gotoScreen("CorridorDeath");
    playSound("Jumpscare");
    window.setTimeout(() => {
     playSound("ThisOnesForJake");
      window.setTimeout(() => {
        document.querySelector("#game-time-knife").style.opacity = 0;
        gotoScreen("CorridorBunnyDead");
        playSound("Stab");
        window.setTimeout(() => {
          const explosion = document.querySelector("#game-explosion");
          explosion.style.opacity = 1;
          explosion.src = "img/Explosion.gif";
          playSound("Explosion");
          window.setTimeout(() => {
            explosion.style.opacity = 0;
            loopSoundEnd("EerieAmbience");
            gotoScreen("YouWin");
          }, 1000);
        }, 2000);
      }, 3300);
    }, 700);
  } else {
    gotoScreen("CorridorDeath");
    playSound("Jumpscare");
    window.setTimeout(() => {
      gotoScreen("Black");
      playSound("FootstepsRunning");
      window.setTimeout(() => {
        gotoScreen("LivingRoom-West");
        loopSoundEnd("EerieAmbience");
        playSoundWithLockout("BarelyAlive");
      }, 1000);
    }, 700);
  }
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
  }, audio.duration * 1000 + 200);
}

function loopSoundStart(sound) {
  audioObjects[sound].loop = true;
  audioObjects[sound].play();
}

function loopSoundEnd(sound) {
  if (audioObjects[sound]) {
    audioObjects[sound].loop = false;
    audioObjects[sound].pause();
  }
}

function decideHighlights(x, y) {
  hideHighlights();

  if (withinLeftTurnArrow(x, y) && !screens[state.currentScreen].noLeftTurn) {
    highlightLeftTurnArrow();
    return;
  } else if (withinRightTurnArrow(x, y) && !screens[state.currentScreen].noRightTurn) {
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
  return x < 120 && y > (600-120);
}

function withinRightTurnArrow(x, y) {
  return x > (800-120) && y > (600-120)
}
