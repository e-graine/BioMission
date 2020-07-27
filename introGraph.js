var pixRatio = 200;
var rectSize = Math.floor(window.innerWidth / pixRatio);
var rectInHeight = Math.floor(window.innerHeight / rectSize);

// console.log((window.innerWidth * window.innerHeight) / 200);
// var w = window.innerWidth;
// var h = window.innerHeight;

var colors = [
    'black',
    'white',
    // '#1b3449',
    // '#2a4252',
    // '#243239',
    // '#011229',
    // '#0d213b',
    // '#373c40',
    // '#272b30',
    // '#1f231e',
    // '#687173',
    // '#7a827a',
    // '#afac85',
    // '#c8b583',
    // '#e0ae6d',
    // '#f1b959',
    // '#fae9c8',
    // '#321d05',
    // '#4b2907',
    // '#6e3909',
    // '#8c4009',
    // '#c06c16',
    // '#e6871a',
    // '#e88e15',
    // '#471804'

]

function random(max) {
    return Math.floor(Math.random() * (max));
}

var canvas = document.getElementById('introGraph');


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
                // console.log("test");

                // var color = colors[random(colors.length)]
                ctx.fillRect(xPos, yPos, rectSize, rectSize);
                // } else {
                //     // ctx.fillStyle = "black";
                //     ctx.fillStyle = rgb(80, 0, 0);;
                // }
            }
        }
    }
}


// pixelize();
// setTimeout(pixelize, 5000);
function introGraph() {

    var max = 50;
    var min = 2;
    var counter = max;
    var switcher;
    var pixLooper = setInterval(function () {

        counter -= 1;
        pixelize(counter);

        if (counter < min) {
            clearInterval(pixLooper)
            endStep('introGraph');
        }
    }, 100);
}

// ctx.fillStyle = "white";
// ctx.fillRect(0, 0, rectSize, rectSize);
// ctx.fillStyle = "blue";
// ctx.fillRect(rectSize, rectSize, rectSize, rectSize);

// var w = window.innerWidth;
// var h = window.innerHeight;

// var img = document.createElement("canevas");
// img.setAttribute('src', 'earth4.jpg');
// img.width = 10;
// img.height = 10;

// var img = document.getElementById("introImg");

// html2canvas(document.body).then(function (img) {
//     document.body.appendChild(img);
//     console.log(img);
//     ctx.drawImage(img, 0, 0);
// });


// var p = 10,
//     maxMove = p / 2,
//     maxStep = 10,

//     $img = $('img'),
//     w = $img.width(),
//     h = $img.height(),