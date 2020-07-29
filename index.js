var gameStatus = {
    step: null,
    viewDoc: false,
    viewMissions: false
};

endStep('openApp');

function endStep(step) {
    gameStatus.step = step;
    switch (step) {
        case 'openApp':
            screenDisplay('intro');
            loading();
            // iaSpeaking(introSpeech, 'introSpeech', 'introSpeech');
            break;
        case 'introSpeech' || 'loading':
            // introGraph();
            transitionGraph(2, 50, 'board', 'Intro');
            break;
        case 'transitionIntro':
            screenDisplay('board');
            setTimeout(function () {
                iaGraphFct(2);
            }, 500)
            setTimeout(function () {
                iaSpeaking(welcomeSpeech, 'welcomeSpeech');
            }, 2000)
            break;
        case 'welcomeSpeech':
            document.getElementById("buttonDoc").classList.add("button-pulse");
            iaSpeaking(welcomeSpeech2, 'welcomeSpeech2');
            break;
        case 'tutoDoc':
            // console.log('test');
            iaSpeaking(welcomeSpeech3, 'welcomeSpeech3');
        default:
            console.log('step bug with ' + step);
    }
}

function screenDisplay(screenToShow) {
    screens = document.querySelectorAll('.screen-div')
    for (screen of screens) {
        screen.style.display = 'none';
    }

    var screenToShow = document.getElementById(screenToShow);
    screenToShow.style.display = 'flex';

    if (screenToShow.attributes.isclosable) {
        document.getElementById('exitButton').style.display = "block";
    } else {
        document.getElementById('exitButton').style.display = "none";
    }
}

function screenCall(screen) {
    button = document.getElementById(event.srcElement.id);
    button.classList.remove("button-pulse");
    transitionGraph(0, 5, screen);
}