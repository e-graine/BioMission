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
    'Je dispose d\'une base de données qui t\'aidera à prendre les bonnes décisions',
    'Elle est accessible via le bouton en haut à gauche',
    'Qui s\'illumine à la découverte d\'un nouvel indice',
]

var welcomeSpeech2 = [
    'Comme ça !',
    'Va vérifier ce que c\'est et reviens me voir après.',
]

var welcomeSpeech3 = [
    'Parfait !',
    'Maintenant tu as un autre bouton',
    'Qui s\'illumine à droite',
    'Il s\'agit des missions en attente',
    'Autant dire qu\'en 1/2h..',
    'Bref, accéde au panneau de mission',
    'et commence par en choisir trois',
]

var welcomeSpeech4 = [
    'Ok très bien,',
    'j\'enregistre les axes de développement prioritaires... ',
    'Je vais maintenant te laisser travailler',
    'Une dernière chose : tu vois ces 2 bars horizontales qui s\'affichent en bas ?',
    'Il de la progression de ta mission',
    'La première représente les problèmes résolus',
    'Tu veux l\'augmenter au maximum',
    'La deuxième, c\'est le temps qui passe',
    'Tu aimerais sûrement qu\'elle n\'augmente pas mais...',
    'Je ne veux surtout pas te mettre la préssion mais le temps est compté :)',
    'Je te fais totalement confiance',
    'Pour résoudre tout mes problèmes en mois d\'1/2h',
    'Et sauver le monde !',
    'Yesss !!!',
    'Eu... je veux dire... bonne chance,... humain'
]

function iaSpeaking(speech, speechName, specialSpeech) {

    var speechBox = document.getElementById('iaSpeech');
    if (specialSpeech) speechBox = document.getElementById(specialSpeech);

    if (speech.length > 0) {
        speechBox.innerHTML = '';
        var line = speech.shift()
        // var letters = line.split("");
        var words = line.split(" ");

        words = words.map(function (word) {
            return "<span style='opacity: 0'>" + word + " " + "</span>";
        });
        for (word of words) {
            speechBox.innerHTML += word;
        }
        // speechBox.querySelector("span:nth-child(2)").style.display = "block";
        // console.log(letters);
        var counter = 0;
        var writer = setInterval(function () {
            if (words.length > counter) {
                counter++;
                speechBox.querySelector("span:nth-child(" + counter + ")").style.opacity = "1";
                // var letter = letters.shift();
                // requestAnimationFrame(function () {
                //     test(letter, speechBox)
                // });
                // speechBox.innerHTML += letter;
            } else {
                // speechBox.querySelectorAll("span").style.margin = "2px solid black";
                clearInterval(writer);
                setTimeout(function () {
                    iaSpeaking(speech, speechName, specialSpeech);
                }, 2000)
            }
        }, 100);
    } else {
        endStep(speechName);
    }
}

// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://voicerss-text-to-speech.p.rapidapi.com/?r=0&c=mp3&f=8khz_8bit_mono&src=Hello%252C%20world!&hl=fr-fr",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "voicerss-text-to-speech.p.rapidapi.com",
//         "x-rapidapi-key": "1570ab0291msh44242735503f4d5p1a3611jsn04627f7fbbf4"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });
// window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
//     window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;


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

// function test(letter, speechBox) {
//     speechBox.innerHTML += letter;
// }