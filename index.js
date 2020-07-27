// iaSpeaking(introSpeech, 'introSpeech', 'introSpeech');
// iaSpeakin(welcomeSpeech);

// endStep('openApp');
endStep('openApp');

function endStep(step) {

    switch (step) {
        case 'openApp':
            // iaSpeaking(introSpeech, 'introSpeech', 'introSpeech');
            break;
        case 'introSpeech' || 'loading':
            introGraph();
            break;
        case 'introGraph':
            document.getElementById("intro").style.display = "none";
            setTimeout(function () {
                iaGraphFct(2);
            }, 500)
            setTimeout(function () {
                iaSpeaking(welcomeSpeech, 'welcomeSpeech');
            }, 2000)
            break;
        default:
            console.log(step);
    }
}