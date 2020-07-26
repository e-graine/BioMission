// ctx.fillStyle = 'blue';
// ctx.fillRect(10, 10, 5, 5);

var pixRatio = 200;
var rectSize = Math.floor(window.innerWidth / pixRatio);
var rectInHeight = Math.floor(window.innerHeight / rectSize);

// console.log((window.innerWidth * window.innerHeight) / 200);
// var w = window.innerWidth;
// var h = window.innerHeight;

var colors = [
    'black',
    'white',
]

function random(max) {
    return Math.floor(Math.random() * (max));
}

function pixelize() {
    var canvas = document.getElementById('introGraph');
    var ctx = canvas.getContext('2d');
    // ctx.fillStyle = 'blue';
    // ctx.fillRect(10, 10, 5, 5);
    for (i = 0; i < pixRatio; i++) {
        var xPos = i * rectSize;
        for (j = 0; j < rectInHeight; j++) {
            // console.log(rectInHeight);
            var yPos = j * rectSize;
            var color = colors[random(colors.length)]
            ctx.fillStyle = color;
            // console.log(color);
            ctx.fillRect(xPos, yPos, rectSize, rectSize);
        }
    }
}


// pixelize();
// setTimeout(pixelize, 5000);
setInterval(function () {
    pixelize();
    console.log('test');
}, 100);

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