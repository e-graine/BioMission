gameStatus.winStep = 100 / gameStatus.enigmesToSolv.length;

// gameStatus.timeStep = 100 / (40);
gameStatus.timeStep = 100 / (30 * 60);
setInterval(function () {
    progress('timeProgress', gameStatus.timeStep);
    if (parseFloat(document.getElementById('timeProgress').style.width) > 99 && !gameStatus.timesUp) {
        gameStatus.timesUp = true;
        gameStatus.endReason = timesUp;
        endStep("endGame");
    }
}, 1000);

function progress(bar, step) {
    var progressBar = document.getElementById(bar);
    var progress = progressBar.style.width;
    var newProgress = (parseFloat(progress) + step) + '%';
    progressBar.style.width = newProgress;
}