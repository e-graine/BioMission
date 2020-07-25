var introSpeech = "Le joueur découvre l’univers dans lequel il est plongé :  Une intelligence artificielle d’aide à la décision  est élaborée par les pouvoirs publics locaux. A 1/2 heure de son activation, l’I.A prends l’initiative d’étendre ses connaissances en s’adressant à un public peu mis à contribution dans la recherche de solution : les moins de 18 ans. Afin de récolter leurs avis et leurs expériences, elle commence par expliquer sa mission, les enjeux, et les différent problème qu’elle rencontre dans sa mission."
var welcomeSpeech = 'Welcome, Human...'

var speechText = document.createElement('div');
speechText.className = 'speech-text';
var speechWhiteChar = document.createElement('span');
speechWhiteChar.className = 'speech-white-char';

function iaSpeakin(speech, specialSpeech) {

    var speechBox = document.getElementById('iaSpeech');
    if (specialSpeech) speechBox = document.getElementById(specialSpeech);

    speechBox.innerHTML = '';
    speechBox.appendChild(speechText);
    // speechBox.appendChild(speechWhiteChar);

    var splitSpeech = speech.split("");

    var looper = setInterval(function () {
        if (splitSpeech.length > 0) {
            // speechText.style.borderRight = '2px solid white'
            var letter = splitSpeech.shift();

            // speechText.innerHTML += '|';
            speechText.innerHTML += letter;
            // speechText.appendChild(speechWhiteChar);
        } else {
            clearInterval(looper);
            speechBox.removeChild(speechWhiteChar);
        }
    }, 50);
}