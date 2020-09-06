var welcomeSpeech = [
    "! Alert !",
    "Système en surcharge ! ",
    "Trop de défis à résoudre...",
    "L’IA est incapable de réaliser la symbiose",
    "Crash du système prévu dans 30 minutes… ",
    "Et si la solution était dans la Nature ? ",
    'Résous les défis de l’IA en cliquant sur : <br><img/src="ui/missions.svg"/>',
    'Trouves des indices dans la database : <br><img/src="ui/doc.svg"/>',
    "Je compte sur toi... ",
    "nous n’avons plus de temps à perdre !",
];

var solvedEnigmeSpeech = [
    'Exact !',
    'Passons à l\'étape suivante'
];

var failedEnigmeSpeech = [
    'Hum... Non ça ne va pas',
    'Passons à l\'étape suivante'
];

var nextMissionSpeech = ["Merci, humain !", "D'autres missions t'attendent :)"];

var allSolved = ["Wow tu as tout résolu !"];

var timesUp = ["Times up !"];

var looser = ["Tu as terminé toutes les missions :)"];

var endGameSpeech1 = ["Merci humain,"];

var endGameSpeech2 = [];

var endGameSpeech3 = [
    "La symbiose est l'association biologique, ",
    "durable et réciproquement profitable,",
    "entre deux organismes vivants.",
    "",
    "Nous reviendrons de voir,",
    "si tu le souhaite",
];

function iaSpeaking(speech, speechName, speechBox) {
    gameStatus.speech = JSON.parse(JSON.stringify(speech));

    gameStatus.speechLine = gameStatus.speech.shift().split(" ");
    gameStatus.speechBox = document.getElementById("iaSpeech");
    if (speechBox) gameStatus.speechBox = document.getElementById(speechBox);
    gameStatus.speechBox.innerHTML = "";
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
        return setTimeout(function () {
            // console.log(word + ' ' + gameStatus.speechName)
            writer(gameStatus.speechLine.shift(), speechName);
        }, 50);
    }
    // alert(gameStatus.speechName);
    endLine(speechName);
}

function endLine(speechName) {

    if (gameStatus.speech.length > 0) {
        gameStatus.speechLine = gameStatus.speech.shift().split(" ");
        var timer = gameStatus.speechBox.innerHTML.length * 100;
        return setTimeout(function () {
            gameStatus.speechBox.innerHTML = "";
            writer(gameStatus.speechLine.shift(), speechName);
        }, timer);
    }
    endStep(speechName);
}

function endSpeech() {
    // console.log('coucou');
    // if (gameStatus.speechName) {

    endStep(gameStatus.speechName);
    gameStatus.speechName = 'nbjhv';
    // }
}