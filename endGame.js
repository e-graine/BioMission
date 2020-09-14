function ending() {
    gameStatus.numEnigme++;
    gameStatus.currentEnigme = null;
    document.getElementById("speechEnigme").innerHTML = "";

    if (gameStatus.numEnigme < gameStatus.dataEnigmes.length) {
        displayEnigme();
        screenCall("enigme");
        return;
    }

    if (gameStatus.enigmesToSolv.length === 0) {
        gameStatus.endReason = allSolved;
        endStep("endGame");
        return;
    }

    if (gameStatus.currentMission) {
        if (missions[gameStatus.currentMission].enigmes.length !== 0) {
            document.getElementById(gameStatus.currentMission).style.display = "none";
            delete missions[gameStatus.currentMission];
        }
    }

    for (mission in missions) {
        if (missions[mission].enigmes.length === 0) {
            document.getElementById(mission).style.display = "none";
            delete missions[mission];
            gameStatus.missionTodo = gameStatus.missionTodo.filter(function (m) {
                return m !== mission;
            });
        }
    }

    screenCall("board");
    if (Object.keys(missions).length !== 0) {
        iaSpeaking(nextMissionSpeech, 'nextMissionSpeech');
    } else {
        gameStatus.endReason = looser;
        endStep("endGame");
    }
}

function winRateDisplay() {
    document.getElementById('speechEnd1').innerHTML = "";
    document.getElementById('speechEnd2').innerHTML = "";
    document.getElementById('speechEnd3').innerHTML = "";
    document.getElementById('winRate').innerHTML = "";

    if (gameStatus.score) {
        endGameSpeech1 = ["Salut, j'ai fait " + gameStatus.score + " sur BIO-MISSION !"];
        endGameSpeech2 = ["C'est un petit jeux écolo"];
        endGameSpeech3 = ["Tu veux tenter ?"];
        document.getElementById('buttonReStart').innerHTML = "Jouer";
        scoreWriter(0, gameStatus.score)
    } else {
        var score = parseInt(document.getElementById('winProgress').style.width);
        endGameSpeech2 = ['Tu as atteint ' + score + ' % de la symbiose'];
        scoreWriter(0, score)
    }
}

function scoreWriter(counter, limit) {
    document.getElementById('winRate').innerHTML = counter;
    counter++;
    if (limit >= counter) {
        return setTimeout(function () {
            scoreWriter(counter, limit)
        }, 60)
    }
    iaSpeaking(endGameSpeech1, 'endGameSpeech1', 'speechEnd1');
}

function restart() {
    visitCount("biomissions", "visitcounter", "openApp");
    visitCount("biomissions", "visitcounter", "reStart");
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

function sharedScore() {
    var url = window.location.hostname + "?score=" + gameStatus.score;
    window.prompt("Copie le lien de ton score :", url);
}