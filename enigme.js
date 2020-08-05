var dataEnigmes = []

function displayEnigme() {
    document.getElementById('bodyEnigme').innerHTML = document.getElementById(dataEnigmes[gameStatus.numEnigme]).innerHTML;
}

function solvEnigme(enigme) {
    var solvedBulett = document.getElementsByClassName('bull' + enigme);
    for (bulett of solvedBulett) {
        bulett.classList.remove("enigme-waiting-bullet");
        bulett.classList.add("enigme-solved-bullet");
    }

    // var missionEnigmes = missions[gameStatus.currentMission].enigmes;
    // missions[gameStatus.currentMission].enigmes = missionEnigmes.filter(e => e !== enigme);

    gameStatus.enigmesToSolv = gameStatus.enigmesToSolv.filter(e => e !== enigme);

    var missionsImpact = [];
    for (mission in missions) {
        for (e of missions[mission].enigmes) {
            if (e === enigme) {
                missionsImpact.push(mission)
                missions[mission].enigmes = missions[mission].enigmes.filter(e => e !== enigme);
            }
        }
    }

    var textImpact = '';
    if (missionsImpact.length === 1) {
        textImpact = 'dans la mission ' + missionsImpact[0];
    }
    if (missionsImpact.length > 1) {
        textImpact = 'dans les missions '
        for (var i = 0; i < missionsImpact.length - 2; i++) {
            textImpact += missionsImpact[i] + ', ';
        }
        textImpact += missionsImpact[missionsImpact.length - 2] + ' et ' + missionsImpact[missionsImpact.length - 1] + ' !';
    }

    var solvedEnigmeSpeech = [
        'Yessss !',
        'J\'ai pu résoudre des problématiques similaires',
        textImpact,
        'Passons à l\'étape suivante'
    ];
    document.getElementById("bodyEnigme").innerHTML = '';
    iaSpeaking(solvedEnigmeSpeech, 'enigmeDone', 'speechEnigme');
}

function failEnigme(enigme) {
    // var failedBullett = document.getElementById('bull' + gameStatus.currentMission + enigme);
    // failedBullett.classList.remove("enigme-waiting-bullet");
    // failedBullett.classList.add("enigme-failed-bullet");
    // if (gameStatus.failedEnigmes.indexOf(enigme) === -1) {
    //     gameStatus.failedEnigmes.push(enigme);
    // }
    // console.log(gameStatus.failedEnigmes);
    // var missionEnigmes = missions[gameStatus.currentMission].enigmes;
    // missions[gameStatus.currentMission].enigmes = missionEnigmes.filter(e => e !== enigme);

    var failedEnigmeSpeech = [
        'Hum... Cela ne permet pas de résoudre le problème',
        'Nous le rencontrerons à nouveau',
        'Passons à l\'étape suivante'
    ];
    document.getElementById("bodyEnigme").innerHTML = '';
    iaSpeaking(failedEnigmeSpeech, 'enigmeDone', 'speechEnigme');
}