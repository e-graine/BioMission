// gameStatus.timeStep = 100 / (40);
// gameStatus.timeStep = 100 / (30 * 60);
// gameStatus.totalTime = 30 * 60;
// gameStatus.curentTime = 0;

setInterval(function () {
    gameStatus.curentTime++;
    progress('timeProgress', (100 / gameStatus.totalTime));
    if (gameStatus.curentTime > gameStatus.totalTime && !gameStatus.timesUp) {
        gameStatus.timesUp = true;
        gameStatus.endReason = timesUp;
        endStep("endGame");
    }
    // progress('timeProgress', gameStatus.timeStep);
    // if (parseFloat(document.getElementById('timeProgress').style.width) > 99 && !gameStatus.timesUp) {
    //     gameStatus.timesUp = true;
    //     gameStatus.endReason = timesUp;
    //     endStep("endGame");
    // }
}, 1000);

function progress(bar, step) {
    var progressBar = document.getElementById(bar);
    var progress = progressBar.style.width;
    var newProgress = (parseFloat(progress) + step) + '%';
    progressBar.style.width = newProgress;
}