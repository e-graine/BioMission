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
var welcomeSpeech = ['Welcome, Human...']

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
                speechBox.innerHTML += letter;
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

function speechLooper() {

}