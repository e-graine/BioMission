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
  missionTodo: [],
  dataEnigmes: [],
  dataDoc: [{
    title: "Sources",
    body: "Bla blabla... ",
  }, ],
  timesUp: false,
  missionsMemory: null,
  score: null,
  doc: "",
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

function differentialLoading(query) {
  if (query === "test") {
    missions = {
      Mobilité: {
        icon: "ui/mobility.svg",
        enigmes: ["e0"],
      },
    };
    return endStep("transitionIntro");
  }
  if (query.split("=")[0] === "score") {
    gameStatus.score = query.split("=")[1];
    // crypetr(gameStatus.score);
    return endStep("score");
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
  gameStatus.step = step;
  switch (step) {
    case "openApp":
      screenDisplay("intro");
      loading();
      visitCount("biomissions", "visitcounter", "openApp");
      // iaSpeaking(introSpeech, 'introSpeech', 'introSpeech');
      break;
    case "loading":
      // document.getElementById("fullScreen").style.display = "block";
      // document.getElementById("clickSpeech").style.display = "block";
      setTimeout(function () {
        transitionGraph(2, 50, "board", "Intro");
      }, 500);
      break;
    case "fullScreen":
      transitionGraph(2, 50, "board", "Intro");
      break;
    case "transitionIntro":
      screenDisplay("board");
      // addDocInGame(data.biomimetisme);
      setTimeout(function () {
        iaGraphFct(2);
      }, 500);
      setTimeout(function () {
        iaSpeaking(welcomeSpeech, "welcomeSpeech");
      }, 1000);
      break;
      // case "alertSpeech":
      //   // screenCall("board");
      //   // addDocInGame(data.biomimetisme);
      //   document.getElementById('alertText').style.display = 'none';
      //   setTimeout(function () {
      //     iaSpeaking(welcomeSpeech, "welcomeSpeech");
      //   }, 1000);
      //   break;
    case "welcomeSpeech":
      document.getElementById("alertPicto").style.display = "none";
      // addDocInGame(data.biomimetisme);
      iaSpeaking(welcomeSpeech2, "welcomeSpeech2");
      break;
    case "welcomeSpeech2":
      document.getElementById("buttonMissions").classList.add("button-pulse");
      break;
      // case "tutoDoc":
      //   iaSpeaking(welcomeSpeech3, "welcomeSpeech3");
      //   break;
    case "enigmeDone":
      // document.getElementById('docEnigme').innerHTML = "";
      document.getElementById("docEnigme").style.display = "none"
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
      if (!gameStatus.score) {
        document.getElementById("shareSpeech").style.display = 'block';
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
      button.classList.remove("button-pulse");
      document.getElementById("indiceSlide").classList.remove("indice-slide");
      document.getElementById("indiceAlert").classList.remove("blink-picto");
    }
  }
  transitionGraph(2, 4, screen);
}

function majStatus(screen) {
  gameStatus.currentScreen = screen;

  if (gameStatus.step === "welcomeSpeech2" && screen === "board") {
    endStep("tutoDoc");
  }
  // else if (gameStatus.step === "welcomeSpeech3" && screen === "board") {
  //   endStep("tutoMissions");
  // }
}

function exit() {
  if (gameStatus.currentEnigme) {
    screenCall("enigme");
  } else {
    screenCall("board");
  }
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