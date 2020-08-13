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
    body: "Bla blabla... "
  }],
};

// setTimeout(function () {
//     endStep('rattrapage');
// }, 2000);
// endStep("transitionIntro");
endStep("openApp");

function endStep(step) {
  gameStatus.step = step;
  switch (step) {
    case "openApp":
      screenDisplay("intro");
      loading();
      //   visitCount("openApp");
      // iaSpeaking(introSpeech, 'introSpeech', 'introSpeech');
      break;
    case "introSpeech" || "loading":
      transitionGraph(2, 50, "board", "Intro");
      break;
    case "transitionIntro":
      screenDisplay("board");
      setTimeout(function () {
        iaGraphFct(2);
      }, 500);
      setTimeout(function () {
        iaSpeaking(welcomeSpeech, "welcomeSpeech");
      }, 2000);
      break;
    case "welcomeSpeech":
      // document.getElementById("buttonDoc").classList.add("button-pulse");
      addDocInGame(data.biomimetisme);
      iaSpeaking(welcomeSpeech2, "welcomeSpeech2");
      break;
    case "tutoDoc":
      iaSpeaking(welcomeSpeech3, "welcomeSpeech3");
      // document.getElementById("buttonMissions").classList.add("button-pulse");
      break;
      // case "tutoMissions":
      //   iaSpeaking(welcomeSpeech4, "welcomeSpeech4");
      //   break;
    case "enigmeDone":
      ending();
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
      screenDisplay("board");
      iaSpeaking(endGameSpeech);
      //   visitCount("endGame");
      break;
    default:
      // console.log("step bug with " + step);
  }
}

function ending() {
  gameStatus.numEnigme++;
  gameStatus.currentEnigme = null;
  document.getElementById("speechEnigme").innerHTML = "";

  if (gameStatus.numEnigme < gameStatus.dataEnigmes.length) {
    displayEnigme();
    return;
  }

  if (gameStatus.enigmesToSolv.length === 0) {
    endStep("endGame");
    return;
  }

  gameStatus.missionTodo = gameStatus.missionTodo.filter(
    (m) => m !== gameStatus.currentMission
  );
  console.log(gameStatus.currentMission);

  if (gameStatus.currentMission) {
    if (missions[gameStatus.currentMission].enigmes.length !== 0) {
      document.getElementById(gameStatus.currentMission).style.display = "none";
      delete missions[gameStatus.currentMission];
    }
  }
  // document.getElementById(gameStatus.currentMission).style.display = "none";
  for (mission in missions) {
    if (missions[mission].enigmes.length === 0) {
      document.getElementById(mission).style.display = "none";
      delete missions[mission];
      gameStatus.missionTodo = gameStatus.missionTodo.filter(
        (m) => m !== mission
      );
      // document.getElementById(mission).style.display = "none";
    }
  }
  screenDisplay("board");
  if (Object.keys(missions).length !== 0) {
    iaSpeaking(nextMissionSpeech);
  } else {
    iaSpeaking(looserSpeech, "rattrapage");
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
// screenCall('enigme');

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
    screenCall('enigme');
  } else {
    screenCall('board')
  }
}

function visitCount(test) {
  var testTime = Date.now() / 1000;
  console.log(testTime);
  var request = new XMLHttpRequest();
  request.open("GET", "http://localhost:8080/" + test, true);
  request.send();
  //   request.abort();
  //   request.open("GET", "http://localhost:8080/", true);
  //   request.send();
}

// $.ajax({
//   url: "./visitCounter/visitCounter.js", // La ressource ciblée
//   type: "GET", // Le type de la requête HTTP.
// });

// socket = io.connect();
// socket = io.connect("http://localhost:8080");

//////////////////// lancement
creaMission();
// gameStatus.winStep = 100 / gameStatus.enigmesToSolv.length;
// gameStatus.timeStep = 100 / (30 * 60);