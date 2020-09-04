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
};

// setTimeout(function () {
//     endStep('rattrapage');
// }, 2000);
endStep("transitionIntro");
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
      document.getElementById('alertPicto').style.display = 'none';
      addDocInGame(data.biomimetisme);
      document.getElementById("buttonMissions").classList.add("button-pulse");
      // iaSpeaking(welcomeSpeech2, "welcomeSpeech2");
      break;
      // case "tutoDoc":
      //   iaSpeaking(welcomeSpeech3, "welcomeSpeech3");
      //   break;
    case "enigmeDone":
      setTimeout(function () {
        ending()
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
      // visitCount("biomissions", "visitcounter", "endGame");
      iaSpeaking(gameStatus.endReason);
      setTimeout(function () {
        endStep('score')
      }, 3000);
      break;
    case "score":
      screenCall("endGame");
      winRateDisplay();
      break;
    case "endGameSpeech1":
      iaSpeaking(endGameSpeech2, 'endGameSpeech2', 'speechEnd2');
      break;
    case "endGameSpeech2":
      iaSpeaking(endGameSpeech3, 'endGameSpeech3', 'speechEnd3');
      break;
    case "endGameSpeech3":
      document.getElementById("buttonReStart").classList.add("button-pulse");
      break;
    default:
      break;
      // console.log("step bug with " + step);
  }
}

function openFullscreen() {
  var elem = document.body;
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
    /* Iphone */
    if (elem.webkitEnterFullScreen) {
      elem.webkitEnterFullScreen();
    }
  } else if (elem.msRequestFullscreen) {
    /* IE/Edge */
    elem.msRequestFullscreen();
  }
  endStep("fullScreen");
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
    document.getElementById("buttonDoc").style.display = "block";
  }
}

function screenCall(screen) {
  if (event) {
    var button = document.getElementById(event.srcElement.id);
    if (button) {
      button.classList.remove("button-pulse");
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

//////////////////// lancement
creaMission();