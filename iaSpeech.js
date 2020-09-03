var introSpeech = [
    "Le joueur découvre l’univers dans lequel il est plongé :",
    "Une intelligence artificielle d’aide à la décision  est élaborée par les pouvoirs publics locaux.",
    "A 1/2 heure de son activation, l’I.A prends l’initiative d’étendre ses connaissances",
    "en s’adressant à un public peu mis à contribution dans la recherche de solution : les moins de 18 ans.",
];

// var welcomeSpeech = [
//     'Bonjour, Humain...',
//     'J\'ai hacké ta machine mais je ne suis pas ton ennemi',
//     'Ecoutes moi, nous avons peu de temps',
//     '...Scénario...',
//     '...Notions...',
//     'Je dispose d\'une base de données qui t\'aidera à prendre les bonnes décisions',
//     'Elle est accessible via le bouton en haut à gauche',
//     'Qui s\'illumine à la découverte d\'un nouvel indice',
// ]

// var alertSpeech = [
//     "Système en surcharge ! ",
//     "L’ordinateur a détecté une quantité trop importante de défis à résoudre.",
//     "Crash du système prévu dans 30 minutes… ",
//     "Et si la solution était dans la Nature ? ",
// ];

var welcomeSpeech = [
    "! Alert !",
    "Système en surcharge ! ",
    "L’ordinateur a détecté une quantité trop importante de défis à résoudre.",
    "Crash du système prévu dans 30 minutes… ",
    "Et si la solution était dans la Nature ? ",
    'Réponds vite aux défis cliquant sur <br><img/src="ui/missions.svg"/>',
    'Trouves des indices en cliquant sur <br><img/src="ui/doc.svg"/>',
    "Je compte sur toi... ",
    "nous n’avons plus de temps à perdre !",
];

// var welcomeSpeech2 = [
//     'Comme ça !',
//     'Va vérifier ce que c\'est et reviens me voir après.',
// ]

// var welcomeSpeech3 = [
//     'Parfait !',
//     'Tu as un autre bouton à droite : ',
//     'Ce sont tes missions.',
//     'Avant d\'y aller,',
//     'tu vois ces 2 bars horizontales  en bas ?',
//     'C\'est ta progression,',
//     'La première représente les problèmes résolus',
//     'Tu veux l\'augmenter au maximum',
//     'La deuxième, c\'est le temps qui passe',
//     'Tu aimerais sûrement qu\'elle n\'augmente pas mais...',
//     'Je ne veux surtout pas te mettre la préssion mais le temps est compté :)',
//     'Je te fais totalement confiance',
//     'Pour résoudre tout mes problèmes en mois d\'1/2h',
//     'Et sauver le monde !',
//     'Yesss !!!',
//     'Eu... je veux dire... bonne chance,... humain'
// ]

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

// function iaSpeaking(speech, speechName, specialSpeech) {

//     var speechBox = document.getElementById('iaSpeech');
//     if (specialSpeech) speechBox = document.getElementById(specialSpeech);

//     if (speech.length > 0) {
//         speechBox.innerHTML = '';
//         var line = speech.shift()
//         // var letters = line.split("");
//         var words = line.split(" ");
//         // if (parseInt(window.innerWidth) < 1000) {
//         //     speechBox.innerHTML += words;
//         //     var timer = words.length * 1000;
//         //     reSpeek(speech, speechName, specialSpeech, timer);
//         //     return;
//         // }
//         words = words.map(function (word) {
//             if (parseInt(window.innerWidth) < 1000) {
//                 return word + " ";
//             }
//             return "<span style='opacity: 0'>" + word + " " + "</span>";
//         });
//         for (word of words) {
//             speechBox.innerHTML += word;
//         }
//         if (parseInt(window.innerWidth) < 1000) {
//             var timer = words.length * 500;
//             reSpeek(speech, speechName, specialSpeech, timer);
//             return
//         }
//         var counter = 0;
//         var writer = setInterval(function () {
//             counter++;
//             var word = speechBox.querySelector("span:nth-child(" + counter + ")");
//             if (word) word.style.opacity = "1";
//             // speechBox.querySelector("span:nth-child(" + counter + ")").style.opacity = "1";
//             if (words.length === counter) {
//                 clearInterval(writer);
//                 reSpeek(speech, speechName, specialSpeech, 2000)
//             }
//         }, 100);
//     } else {
//         endStep(speechName);
//     }
// }

// function reSpeek(speech, speechName, specialSpeech, timer) {
//     setTimeout(function () {
//         iaSpeaking(speech, speechName, specialSpeech);
//     }, timer)
// }

function iaSpeaking(speech, speechName, specialSpeech) {
    gameStatus.speech = speech;
    gameStatus.speechLine = speech.shift().split(" ");
    gameStatus.speechBox = document.getElementById("iaSpeech");
    if (specialSpeech)
        gameStatus.speechBox = document.getElementById(specialSpeech);
    gameStatus.speechBox.innerHTML = "";
    gameStatus.speechName = speechName;
    writer(gameStatus.speechLine.shift());
}

function writer(word) {
    gameStatus.speechBox.innerHTML += word + " ";
    if (gameStatus.speechLine.length > 0) {
        setTimeout(function () {
            writer(gameStatus.speechLine.shift());
        }, 50);
    } else if (gameStatus.speech.length > 0) {
        gameStatus.speechLine = gameStatus.speech.shift().split(" ");
        var timer = gameStatus.speechLine.length * 500;
        setTimeout(function () {
            gameStatus.speechBox.innerHTML = "";
            writer(gameStatus.speechLine.shift());
        }, timer);
    } else {
        endStep(gameStatus.speechName);
        gameStatus.speechName = "";
    }
}