var canvas = document.querySelector('canvas');

//initilizes the canvas
const len= 50

canvas.width = len*10;
canvas.height = len*10;
var content = canvas.getContext("2d");
content.fillStyle = "gray";

var check;


function draw()
{
    content.strokeStyle = "black";
    content.beginPath();
    content.moveTo(0, 0);
    content.lineTo(0, 50);
    content.stroke();

}
function draw2()
{
    content.strokeStyle = "black";
    content.beginPath();
    content.moveTo(50, 0);
    content.lineTo(50, 50);
    content.stroke();
}
function draw3()
{
    content.strokeStyle = "black";
    content.beginPath();
    content.moveTo(100, 0);
    content.lineTo(100, 50);
    content.stroke();
}


function draw4()
{
    content.strokeStyle = "black";
    content.beginPath();
    content.moveTo(0, 50);
    content.lineTo(0, 100);
    content.stroke();

}
function draw5()
{
    content.strokeStyle = "black";
    content.beginPath();
    content.moveTo(50, 50);
    content.lineTo(50, 100);
    content.stroke();
}
function draw6()
{
    content.strokeStyle = "black";
    content.beginPath();
    content.moveTo(100, 50);
    content.lineTo(100, 100);
    content.stroke();
}
draw();
draw2();
draw3();
draw4();
draw5();
draw6();