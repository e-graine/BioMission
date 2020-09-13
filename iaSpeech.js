var welcomeSpeech = [
    "Trop de mission en attente…",
    "Symbiose impossible…",
    "Crash du système prévu dans 30 minutes…",
];

var welcomeSpeech2 = [
    'Trouves les missions en cliquant sur : <br><img/src="ui/missions.svg"/>',
    'Trouves des indices dans la database : <br><img/src="ui/doc.svg"/>',
    'Dernière chose :',
    "tu as 2 barres en bas de l'écran",
    "La première c'est ta progression",
    "Elle augmente à chaque mission terminée",
    "La deuxième c'est le temps qui passe",
    "Tu aimerais sûrement qu'elle n'augmente pas mais...",
    "Je compte sur toi...",
    "nous n’avons plus de temps à perdre !",
];

var welcomeBackSpeech = [
    "Te revoilà, human :)",
    "D'autres missions t'attendent..."
];

var solvedEnigmeSpeech = [
    'Exact !',
];

var failedEnigmeSpeech = [
    'Hum... Non ça ne va pas',
];

var nextMissionSpeech = ["Merci, humain !", "D'autres missions t'attendent :)"];

var allSolved = ["Wow tu as tout résolu !"];

var timesUp = ["Times up !"];

var looser = ["Tu as terminé toutes les missions :)"];

var endGameSpeech1 = ["Merci humain,"];

var endGameSpeech2 = [];

var endGameSpeech3 = [
    "La symbiose est l'association biologique,",
    "durable et réciproquement profitable,",
    "entre deux organismes vivants.",
    "Nous reviendrons te voir,",
    "si tu le souhaite",
];

// var speechText = document.createElement("div");
// var nextLineButton = document.createElement("div");
// nextLineButton.innerHTML = "Suivant >"
// nextLineButton.onclick = nextLine;

function iaSpeaking(speech, speechName, speechBox) {
    gameStatus.speech = JSON.parse(JSON.stringify(speech));

    gameStatus.speechLine = gameStatus.speech.shift().split(" ");
    gameStatus.speechLine.push("&#10140;");
    gameStatus.speechBox = document.getElementById("iaSpeech");
    if (speechBox) gameStatus.speechBox = document.getElementById(speechBox);
    gameStatus.speechBox.innerHTML = "";
    // speechText.innerHTML = "";
    // gameStatus.speechBox.appendChild(speechText);
    // gameStatus.speechBox.appendChild(nextLineButton);
    gameStatus.speechBox.onclick = nextLine;

    gameStatus.speechName = speechName;
    writer(gameStatus.speechLine.shift(), speechName);
    // if (word) {
    //     document.getElementById(speechBox).innerHTML += word + " ";
    //     word = line.shift();
    //     return setTimeout(function () {
    //         iaSpeaking(speech, speechName, speechBox, line, word);
    //     }, 50);
    // }
    // if (speech.length > 0) {
    //     line = speech.shift().split(" ");
    //     word = line.shift();
    //     var timer = line.length * 500;
    //     return setTimeout(function () {
    //         speechBox.innerHTML = "";
    //         iaSpeaking(speech, speechName, speechBox, line, word);
    //     }, timer);
    // }

    // endStep(speechName);
}

function writer(word, speechName) {
    // alert(speechName);
    if (word) {
        gameStatus.speechBox.innerHTML += word + " ";
        // speechText.innerHTML += word + " ";
        return setTimeout(function () {
            // console.log(word + ' ' + gameStatus.speechName)
            writer(gameStatus.speechLine.shift(), speechName);
        }, 50);
    }
    // alert(gameStatus.speechName);
    // endLine(speechName);
}

function nextLine() {
    if (gameStatus.speech.length > 0) {
        gameStatus.speechLine = gameStatus.speech.shift().split(" ");
        gameStatus.speechLine.push("&#10140;");
        // speechText.innerHTML = "";
        gameStatus.speechBox.innerHTML = "";
        return writer(gameStatus.speechLine.shift());
    }
    gameStatus.speechBox.innerHTML = "";
    endStep(gameStatus.speechName);
}

// function endLine(speechName) {

//     if (gameStatus.speech.length > 0) {
//         gameStatus.speechLine = gameStatus.speech.shift().split(" ");
//         var timer = gameStatus.speechBox.innerHTML.length * 100;
//         return setTimeout(function () {
//             gameStatus.speechBox.innerHTML = "";
//             writer(gameStatus.speechLine.shift(), speechName);
//         }, timer);
//     }
//     endStep(speechName);
// }

// function endSpeech() {
//     // console.log('coucou');
//     // if (gameStatus.speechName) {

//     endStep(gameStatus.speechName);
//     gameStatus.speechName = 'nbjhv';
//     // }
// }