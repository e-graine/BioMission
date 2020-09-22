function displayEnigme() {
    gameStatus.currentEnigme = gameStatus.dataEnigmes[gameStatus.numEnigme];
    var enigmeElement = document.getElementById(gameStatus.currentEnigme);
    document.getElementById('bodyEnigme').innerHTML = enigmeElement.innerHTML;
    document.getElementById("docEnigme").style.display = "none"
    var doc = enigmeElement.attributes.doc;
    if (doc) {
        if (!gameStatus.dataDoc[doc.value]) {
            addDocInGame(data[doc.value]);
        }
    }

    // var enigmesInMission = missions[gameStatus.currentMission].nbEnigme;
    // var currentEnigmeInMission = enigmesInMission - missions[gameStatus.currentMission].enigmes.length +1;
    // document.getElementById('enigmeNumber').innerHTML = currentEnigmeInMission + "/" + enigmesInMission;
    document.getElementById('enigmeNumber').innerHTML = (gameStatus.numEnigme + 1) + "/" + gameStatus.dataEnigmes.length
}

function solvEnigme(enigme, answer) {
    progress('winProgress', 100 / gameStatus.nbEnigme)

    gameStatus.enigmesToSolv = gameStatus.enigmesToSolv.filter(function (e) {
        return e !== enigme
    });

    var missionsImpact = [];
    for (mission in missions) {
        for (e of missions[mission].enigmes) {
            if (e === enigme) {
                if (mission !== gameStatus.currentMission) {
                    missionsImpact.push(mission)
                }
                missions[mission].enigmes = missions[mission].enigmes.filter(function (e) {
                    return e !== enigme
                });
                progress(mission + 'Progress', 100 / missions[mission].nbEnigme);
            }
        }
    }

    var textImpact = false;
    if (missionsImpact.length === 1) {
        textImpact = 'la mission ' + missionsImpact[0] + ' !';
    }
    if (missionsImpact.length > 1) {
        textImpact = 'les missions '
        for (var i = 0; i < missionsImpact.length - 2; i++) {
            textImpact += missionsImpact[i] + ', ';
        }
        textImpact += missionsImpact[missionsImpact.length - 2] + ' et ' + missionsImpact[missionsImpact.length - 1] + ' !';
    }

    var speech;
    if (textImpact) {
        speech = [
            'Exact !',
            answer,
            'Tout est connecté !',
            'J\'ai pu faire aussi avancer ' + textImpact,
            'Continuer la mission'
        ];
    } else {
        speech = [
            'Exact !',
            answer,
            'Continuer la mission'
        ];
    }
    iaSpeaking(speech, 'enigmeDone', 'speechEnigme');
}

function endEnigme(enigme, solv) {
    document.getElementById("buttonDoc").classList.remove("button-pulse");
    document.getElementById("indiceSlide").classList.remove("indice-slide");
    document.getElementById("indiceAlert").classList.remove("blink-picto");
    document.getElementById("bodyEnigme").innerHTML = '';
    document.getElementById("docEnigme").style.display = "block"
    var answer = document.getElementById(enigme).attributes.answer.value;
    if (solv) {
        return solvEnigme(enigme, answer);
    }

    var speech = ['hum... non ca ne va pas',
        answer,
        "Continuer la mission"
    ];
    iaSpeaking(speech, 'enigmeDone', 'speechEnigme');
}