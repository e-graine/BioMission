var gameStatus = {
    step: null,
    viewDoc: false,
    viewMissions: false,
    currentScreen: "intro",
    currentMission: "nul",
    numEnigme: 0,
    textImpact: "",
    enigmesToSolv: [],
    missionTodo: [],
    dataEnigmes: [],
};

// setTimeout(function () {
//     endStep('rattrapage');
// }, 2000);
// endStep('transitionIntro');
endStep("openApp");

function endStep(step) {
    gameStatus.step = step;
    switch (step) {
        case "openApp":
            screenDisplay("intro");
            loading();
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
            document.getElementById("buttonDoc").classList.add("button-pulse");
            iaSpeaking(welcomeSpeech2, "welcomeSpeech2");
            break;
        case "tutoDoc":
            iaSpeaking(welcomeSpeech3, "welcomeSpeech3");
            document.getElementById("buttonMissions").classList.add("button-pulse");
            break;
        case "tutoMissions":
            iaSpeaking(welcomeSpeech4, "welcomeSpeech4");
            break;
        case "enigmeDone":
            ending();
            break;
        case "rattrapage":
            gameStatus.dataEnigmes = gameStatus.enigmesToSolv;
            gameStatus.numEnigme = 0;
            displayEnigme();
            screenCall('enigme');
            break;
        case "endGame":
            screenDisplay("board");
            iaSpeaking(endGameSpeech);
            break;
        default:
            console.log("step bug with " + step);
    }
}

function ending() {
    gameStatus.numEnigme++;
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
    document.getElementById(gameStatus.currentMission).style.display = "none";
    for (mission of gameStatus.missionTodo) {
        if (missions[mission].enigmes.length === 0) {
            gameStatus.missionTodo = gameStatus.missionTodo.filter(
                (m) => m !== mission
            );
            document.getElementById(mission).style.display = "none";
        }
    }

    screenDisplay("board");
    if (gameStatus.missionTodo.length !== 0) {
        iaSpeaking(nextMissionSpeech);
    } else {
        iaSpeaking(looserSpeech, 'rattrapage');
    }
}

function screenDisplay(screenToShow) {
    screens = document.querySelectorAll(".screen-div");
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
    } else if (gameStatus.step === "welcomeSpeech3" && screen === "board") {
        endStep("tutoMissions");
    }
}


//////////////////// lancement
creaMission();
// gameStatus.winStep = 100 / gameStatus.enigmesToSolv.length;
// gameStatus.timeStep = 100 / (30 * 60);