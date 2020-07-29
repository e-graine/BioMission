var canvas = document.getElementById('transitionGraph');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var pixRatio = 25;
var rectSize = Math.ceil(canvas.width / pixRatio);

var rectInHeight = Math.ceil(window.innerHeight / rectSize)

var colors = [
    'black',
    'white',
]

function random(max) {
    return Math.floor(Math.random() * (max));
}

function pixelize(ratioWhite) {
    var ctx = canvas.getContext('2d');
    for (i = 0; i < pixRatio; i++) {
        for (j = 0; j < rectInHeight; j++) {
            var xPos = i * rectSize;
            var yPos = j * rectSize;
            ctx.clearRect(xPos, yPos, rectSize, rectSize);
            var test = random(ratioWhite) + 1;
            if (test === ratioWhite) {
                ctx.fillStyle = "white";
                ctx.shadowColor = "white";
                ctx.shadowBlur = 20;
                ctx.fillRect(xPos, yPos, rectSize, rectSize);
            }
        }
    }
}

function transitionGraph(min, max, screen, step) {
    canvas.style.display = 'block';
    var counter = max;
    var pixLooper = setInterval(function () {

        counter -= 1;
        pixelize(counter);

        if (counter < min) {
            screenDisplay(screen);
            clearInterval(pixLooper)

            canvas.style.display = 'none';
            console.log(gameStatus + " " + screen);
            if (gameStatus.step === 'welcomeSpeech2' && screen === 'board') {
                endStep('tutoDoc');
            }
            if (step) {
                endStep('transition' + step);
            }
        }
    }, 100);
}