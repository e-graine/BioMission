// var introSpeech = {
//     name: 'introSpeech',
//     texts : [
//         "Le joueur découvre l’univers dans lequel il est plongé :",
//         "Une intelligence artificielle d’aide à la décision  est élaborée par les pouvoirs publics locaux.",
//         "A 1/2 heure de son activation, l’I.A prends l’initiative d’étendre ses connaissances",
//         "en s’adressant à un public peu mis à contribution dans la recherche de solution : les moins de 18 ans."
//     ]
// }
var introSpeech = [
    "Le joueur découvre l’univers dans lequel il est plongé :",
    "Une intelligence artificielle d’aide à la décision  est élaborée par les pouvoirs publics locaux.",
    "A 1/2 heure de son activation, l’I.A prends l’initiative d’étendre ses connaissances",
    "en s’adressant à un public peu mis à contribution dans la recherche de solution : les moins de 18 ans."
]
var welcomeSpeech = [
    'Hello, Human...',
    'J\'ai hacké ta machine mais je ne suis pas ton ennemi',
    'Ecoutes moi, nous avons peu de temps',
    '...Scénario...',
    '...Notions...',
    '...Explications du jeu..',
    'To save the world !',
    'Yeaaa !!',
    'Eu.. Je veux dire, bonne chance,... humain.'
]

var speechBox;
var currentSpeech;
var letters;

function iaSpeaking(speech, speechName, specialSpeech) {

    speechBox = document.getElementById('iaSpeech');
    if (specialSpeech) speechBox = document.getElementById(specialSpeech);
    currentSpeech = speech;

    if (currentSpeech.length > 0) {
        speechBox.innerHTML = '';
        var line = currentSpeech.shift()
        letters = line.split("");

        letters = letters.map(function (letter) {
            return "<span style='opacity: 0'>" + letter + "</span>";
        });
        for (letter of letters) {
            speechBox.innerHTML += letter;
        }
        // speechBox.querySelector("span:nth-child(2)").style.display = "block";
        // var counter = 0;
        // var writer = setInterval(function () {
        //     if (letters.length > counter) {
        //         counter++;
        //         speechBox.querySelector("span:nth-child(" + counter + ")").style.opacity = "1";
        //         // var letter = letters.shift();
        //         // requestAnimationFrame(function () {
        //         //     test(letter, speechBox)
        //         // });
        //         // speechBox.innerHTML += letter;
        //     } else {
        //         clearInterval(writer);
        //         setTimeout(function () {
        //             iaSpeaking(speech, speechName, specialSpeech);
        //         }, 2000)
        //     }
        // }, 100);
        requestAnimationFrame(step);
    } else {
        endStep(speechName);
    }
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


var start = null;
loopCounter = 1;

var d = 'test';

function step(timestamp) {
    var progress;
    if (start === null) start = timestamp;
    progress = timestamp - start;

    if (progress < 50) {
        requestAnimationFrame(step);
    } else {
        // console.log(speechBox);
        speechBox.querySelector("span:nth-child(" + loopCounter + ")").style.opacity = "1";
        loopCounter++;
        start = null;

        if (loopCounter < letters.length) {
            requestAnimationFrame(step);
        } else {
            iaSpeaking(currentSpeech)
            loopCounter = 1;
        }
    }
}

// step('montest');

// function test(letter, speechBox) {
//     speechBox.innerHTML += letter;
// }