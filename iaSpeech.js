var welcomeSpeech = [
    "Trop de missions en attente…",
    "Symbiose impossible…",
    "Crash du système prévu dans 30 minutes…",
];

var welcomeSpeech2 = [
    'Bonjour, humain',
    'Merci d\'avoir répondu à mon alerte',
    'Je suis une Intelligence artificielle en danger',
    'Je dois trouver des associations durables',
    'entre la nature et l\'homme',
    'Pour concevoir la ville de demain',
    'Mes missions dépassent ma capacité de traitement',
    'J\'ai besoin de ton aide',
    'Trouve les missions en cliquant sur : <br><img/src="ui/missions.svg"/>',
    'Trouve des indices dans la database : <br><img/src="ui/doc.svg"/>',
    'Dernière chose :',
    "tu as 2 barres en bas de l'écran",
    "La première c'est ta progression",
    "Elle augmente à chaque mission terminée",
    "La deuxième c'est le temps qui passe",
    "Tu aimerais sûrement qu'elle n'augmente pas mais...",
    "Tout le programme sera perdu dans moins de 30 minutes",
    "Je compte sur toi...",
    "nous n’avons plus de temps à perdre !",
];

var welcomeBackSpeech = [
    "Te revoilà, human :)",
    "Tes missions t'attendent :)"
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
    "si tu le souhaites",
];

var credits = ["Crédits <span/class='blink-speech'>&#10140;</span>"]

function iaSpeaking(speech, speechName, speechBox) {
    gameStatus.speech = JSON.parse(JSON.stringify(speech));

    gameStatus.speechLine = gameStatus.speech.shift().split(" ");
    gameStatus.speechLine.push("<span/class='blink-speech'>&#10140;</span>");
    gameStatus.speechBox = document.getElementById("iaSpeech");
    if (speechBox) gameStatus.speechBox = document.getElementById(speechBox);
    gameStatus.speechBox.innerHTML = "";
    gameStatus.speechBox.onclick = nextLine;

    gameStatus.speechName = speechName;
    writer(gameStatus.speechLine.shift(), speechName);
}

function writer(word, speechName) {
    if (word) {
        // word = document.createTextNode(word);
        // gameStatus.speechBox.appendChild(word);
        // gameStatus.speechBox.appendChild(document.createTextNode(word + ' '));
        gameStatus.speechBox.innerHTML += word + " ";
        return setTimeout(function () {
            writer(gameStatus.speechLine.shift(), speechName);
        }, 50);
    }
}

function nextLine() {
    if (gameStatus.speech.length > 0) {
        gameStatus.speechLine = gameStatus.speech.shift().split(" ");
        gameStatus.speechLine.push("<span/class='blink-speech'>&#10140;</span>");
        gameStatus.speechBox.innerHTML = "";
        // gameStatus.speechBox.innerHTML += "<br>";
        return writer(gameStatus.speechLine.shift());
    }
    gameStatus.speechBox.innerHTML = "";
    endStep(gameStatus.speechName);
}