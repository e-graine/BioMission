// var dataEnigmes = []

function displayEnigme() {
    gameStatus.currentEnigme = gameStatus.dataEnigmes[gameStatus.numEnigme];
    var enigmeElement = document.getElementById(gameStatus.currentEnigme);
    document.getElementById('bodyEnigme').innerHTML = enigmeElement.innerHTML;

    var doc = enigmeElement.attributes.doc;
    if (doc) {
        if (!gameStatus.dataDoc[doc.value]) {
            addDocInGame(data[doc.value]);
        }
    }

}

function solvEnigme(enigme) {
    progress('winProgress', gameStatus.winStep)

    // var solvedBulett = document.getElementsByClassName('bull' + enigme);
    // for (bulett of solvedBulett) {
    //     bulett.classList.remove("enigme-waiting-bullet");
    //     bulett.classList.add("enigme-solved-bullet");
    // }

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
                progress(mission + 'Progress', missions[mission].stepProgress)
            }
        }
    }

    var textImpact = false;
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
        'Exact !',
        'Passons à l\'étape suivante'
    ];

    if (textImpact) {
        solvedEnigmeSpeech = [
            'Exact !',
            'J\'ai pu résoudre des problématiques similaires',
            textImpact,
            'Passons à l\'étape suivante'
        ];
    }

    document.getElementById("bodyEnigme").innerHTML = '';
    iaSpeaking(solvedEnigmeSpeech, 'enigmeDone', 'speechEnigme');
}

function failEnigme(enigme) {
    var failedEnigmeSpeech = [
        'Hum... Non ça ne va pas',
        'Passons à l\'étape suivante'
    ];
    document.getElementById("bodyEnigme").innerHTML = '';
    iaSpeaking(failedEnigmeSpeech, 'enigmeDone', 'speechEnigme');
}