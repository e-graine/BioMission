function ending() {
    gameStatus.numEnigme++;
    gameStatus.currentEnigme = null;
    document.getElementById("speechEnigme").innerHTML = "";

    if (gameStatus.numEnigme < gameStatus.dataEnigmes.length) {
        displayEnigme();
        return;
    }

    if (gameStatus.enigmesToSolv.length === 0) {
        gameStatus.endReason = allSolved;
        endStep("endGame");
        return;
    }

    // gameStatus.missionTodo = gameStatus.missionTodo.filter(
    //   (m) => m !== gameStatus.currentMission
    // );

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
            gameStatus.missionTodo = gameStatus.missionTodo.filter(function (m) {
                return m !== mission;
            });
            // document.getElementById(mission).style.display = "none";
        }
    }
    screenDisplay("board");
    if (Object.keys(missions).length !== 0) {
        iaSpeaking(nextMissionSpeech);
    } else {
        gameStatus.endReason = looser;
        endStep("endGame");
        // iaSpeaking(looserSpeech, "rattrapage");
    }
}

function winRateDisplay() {
    var box = document.getElementById('winRate');
    var winRate = parseInt(document.getElementById('winProgress').style.width);
    endGameSpeech2 = ['Tu as atteint ' + winRate + ' % de la symbiose'];

    var counter = 0;
    var writer = setInterval(function () {
        box.innerHTML = counter;
        counter++;
        if (winRate < counter) {
            clearInterval(writer);
            iaSpeaking(endGameSpeech1, 'endGameSpeech1', 'speechEnd1');
        }
    }, 60);
}

function restart() {
    // visitCount("biomissions", "visitcounter", "reStart");
    document.getElementById('winProgress').style.width = 0;
    document.getElementById('timeProgress').style.width = 0;
    gameStatus.timesUp = false;
    gameStatus.enigmesToSolv = [];
    gameStatus.dataDoc = [{
        title: "Sources",
        body: "Bla blabla... ",
    }, ]
    missions = gameStatus.missionsMemory;
    creaMission();
    screenCall('board');
    iaSpeaking(['Hello, human']);
}