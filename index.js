var gameStatus = {
  step: null,
  viewDoc: false,
  viewMissions: false,
  currentScreen: "intro",
  currentMission: null,
  currentEnigme: null,
  numEnigme: 0,
  textImpact: "",
  enigmesToSolv: [],
  nbEnigme: null,
  missionTodo: [],
  dataEnigmes: [],
  dataDoc: [data.credits],
  totalTime: 30 * 60,
  curentTime: 0,
  timesUp: false,
  missionsMemory: null,
  score: null,
  doc: "",
  history: [],
};

window.onbeforeunload = function (e) {
  var e = e || window.event;

  // For IE and Firefox
  if (e) {
    e.returnValue = "Any string";
  }

  // For Safari
  return "Any string";
};

window.onunload = function (e) {
  if (
    gameStatus.enigmesToSolv.length !== 0 &&
    Object.keys(missions).length !== 0 &&
    !gameStatus.timesUp
  ) {
    localStorage.setItem("missions", JSON.stringify(missions));
    localStorage.setItem("gameStatus", JSON.stringify(gameStatus));
  } else {
    localStorage.clear();
  }
};

function differentialLoading(query) {
  if (query === "reset") {
    return endStep("openApp");
  }
  if (query === "testAll") {
    return endStep("transitionIntro");
  }
  if (query === "test") {
    missions = {
      Mobilité: {
        icon: "ui/mobility.svg",
        enigmes: ["e0", "e1"],
      },
    };
    return endStep("transitionIntro");
  }
  if (query.split("=")[0] === "score") {
    gameStatus.score = query.split("=")[1];
    // crypetr(gameStatus.score);
    return endStep("score");
  }
  var storedStatus = localStorage.getItem("gameStatus");
  if (storedStatus) {
    gameStatus = JSON.parse(storedStatus);
    missions = JSON.parse(localStorage.getItem("missions"));
    progress(
      "timeProgress",
      gameStatus.curentTime * (100 / gameStatus.totalTime)
    );
    progress(
      "winProgress",
      (100 / gameStatus.nbEnigme) *
        (gameStatus.nbEnigme - gameStatus.enigmesToSolv.length)
    );
    return endStep("welcomeBack");
  }

  return endStep("openApp");
}

differentialLoading(window.location.search.substr(1));

// setTimeout(function () {
//     endStep('rattrapage');
// }, 2000);
// endStep("transitionIntro");
// endStep("openApp");

function endStep(step) {
  document.getElementById("alertPicto").style.display = "none";
  gameStatus.step = step;
  switch (step) {
    case "openApp":
      screenDisplay("intro");
      loading();
      visitCount("biomissions", "visitcounter", "openApp");
      break;
    case "loading":
      setTimeout(function () {
        transitionGraph(2, 50, "Intro");
      }, 500);
      break;
    case "transitionIntro":
      document.getElementById("alertPicto").style.display = "block";
      screenDisplay("board");
      // addDocInGame(data.biomimetisme);
      setTimeout(function () {
        iaGraphFct(2);
      }, 500);
      setTimeout(function () {
        // iaSpeaking(welcomeSpeech, "welcomeSpeech", "speechAlert");
      }, 1000);
      break;
    case "welcomeSpeech":
      // screenCall("board");
      document.getElementById("alertPicto").style.display = "none";
      iaSpeaking(welcomeSpeech2, "welcomeSpeech2");
      break;
    case "welcomeSpeech2":
      addDocInGame(data.biomimetisme);
      document.getElementById("buttonMissions").classList.add("button-pulse");
      break;
    case "nextMissionSpeech":
      document.getElementById("buttonMissions").classList.add("button-pulse");
      break;
    case "welcomeBack":
      screenDisplay("board");
      iaSpeaking(welcomeBackSpeech, "welcomeBackSpeech");
      document.getElementById("buttonMissions").classList.add("button-pulse");
      break;
    case "enigmeDone":
      // document.getElementById('docEnigme').innerHTML = "";
      document.getElementById("docEnigme").style.display = "none";
      setTimeout(function () {
        ending();
      }, 500);
      break;
    case "rattrapage":
      // missions.Rattrapage = {};
      // missions.Rattrapage.enigmes = gameStatus.enigmesToSolv;
      // goMission("Rattrapage");
      gameStatus.dataEnigmes = gameStatus.enigmesToSolv;
      gameStatus.numEnigme = 0;
      gameStatus.currentMission = null;
      displayEnigme();
      screenCall("enigme");
      break;
    case "endGame":
      screenCall("board");
      visitCount("biomissions", "visitcounter", "endGame");
      iaSpeaking(gameStatus.endReason, "score");
      break;
    case "score":
      screenCall("endGame");
      winRateDisplay();
      break;
    case "endGameSpeech1":
      iaSpeaking(endGameSpeech2, "endGameSpeech2", "speechEnd2");
      break;
    case "endGameSpeech2":
      iaSpeaking(endGameSpeech3, "endGameSpeech3", "speechEnd3");
      break;
    case "endGameSpeech3":
      document.getElementById("buttonReStart").classList.add("button-pulse");
      // iaSpeaking(credits, "credits", "creditSpeech");
      document.getElementById("creditSpeech").style.display = "block";
      if (!gameStatus.score) {
        // document.getElementById("shareSpeech").style.display = 'block';
      }
      break;
    default:
      break;
    // console.log("step bug with " + step);
  }
}

function screenDisplay(screenToShow) {
  var screens = document.querySelectorAll(".screen-div");
  for (screen of screens) {
    screen.style.display = "none";
  }

  majStatus(screenToShow);

  var screenToShow = document.getElementById(screenToShow);
  screenToShow.style.display = "flex";

  if (screenToShow.attributes.isclosable) {
    document.getElementById("exitButton").style.display = "block";
  } else {
    document.getElementById("exitButton").style.display = "none";
  }

  if (screenToShow.attributes.nodoc) {
    document.getElementById("buttonDoc").style.display = "none";
  } else {
    document.getElementById("buttonDoc").style.display = "flex";
  }
}

function screenCall(screen) {
  if (event) {
    var button = document.getElementById(event.srcElement.id);
    if (button) {
      console.log(button.classList);
      button.classList.remove("button-pulse");
      document.getElementById("indiceSlide").classList.remove("indice-slide");
      document.getElementById("indiceAlert").classList.remove("blink-picto");
    }
  }
  transitionGraph(2, 4);
  screenDisplay(screen);
}

function majStatus(screen) {
  var lastH = gameStatus.history[gameStatus.history.length - 1];
  if (screen !== gameStatus.currentScreen && screen !== lastH) {
    gameStatus.history.push(screen);
  }
  gameStatus.currentScreen = screen;
}

function exit() {
  gameStatus.history.pop();
  screenCall(gameStatus.history[gameStatus.history.length - 1]);
}

function callCredits() {
  addDocInGame(data.credits);
  displayDoc();
  return screenCall("doc");
}

function visitCount(db, col, counter) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://ycallier-api.herokuapp.com/countAPI/" +
      db +
      "/" +
      col +
      "/" +
      counter,
    true
  );
  request.send();
}

function crypetr(data) {
  var request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://ycallier-api.herokuapp.com/encrypt/" + data,
    true
  );
  request.onload = function () {
    console.log(request.response);
  };
  request.send();
}

//////////////////// lancement
creaMission();
if (!gameStatus.nbEnigme) gameStatus.nbEnigme = gameStatus.enigmesToSolv.length;
