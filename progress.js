gameStatus.winStep = 100 / gameStatus.enigmesToSolv.length;

gameStatus.timeStep = 100 / (30 * 60);
setInterval(function () {
    progress('timeProgress', gameStatus.timeStep);
}, 1000);

function progress(bar, step) {
    var progressBar = document.getElementById(bar);
    var progress = progressBar.style.width;
    var newProgress = (parseFloat(progress) + step) + '%';
    progressBar.style.width = newProgress;
}