//////////////////////// WIN

/////////////////////// TIME
setInterval(tic, 6000);

function tic() {
    var timeBar = document.getElementById('timeProgress');
    var timeProgress = timeBar.style.width;
    var newTime = (parseFloat(timeProgress) + 0.33) + '%';
    console.log(newTime);
    timeBar.style.width = newTime;
}