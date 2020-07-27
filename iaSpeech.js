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

var speechText = document.createElement('div');
speechText.className = 'speech-text';
var speechWhiteChar = document.createElement('span');
speechWhiteChar.className = 'speech-white-char';

function iaSpeaking(speech, speechName, specialSpeech) {

    var speechBox = document.getElementById('iaSpeech');
    if (specialSpeech) speechBox = document.getElementById(specialSpeech);

    if (speech.length > 0) {
        speechBox.innerHTML = '';
        var line = speech.shift()
        var letters = line.split("");
        var writer = setInterval(function () {
            if (letters.length > 0) {
                var letter = letters.shift();
                requestAnimationFrame(function () {
                    test(letter, speechBox)
                });
                // speechBox.innerHTML += letter;
            } else {
                clearInterval(writer);
                setTimeout(function () {
                    iaSpeaking(speech, speechName, specialSpeech);
                }, 2000)
            }
        }, 50);
    } else {
        endStep(speechName);
    }
}

window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


// var start = null;

// var d = 'test';

// function step(timestamp) {
//     var progress;
//     if (start === null) start = timestamp;
//     progress = timestamp - start;
//     //   d.style.left = Math.min(progress/10, 200) + "px";
//     console.log(d);
//     if (progress > 2000) {
//         requestAnimationFrame(step);
//     }
// }

function test(letter, speechBox) {
    speechBox.innerHTML += letter;
}