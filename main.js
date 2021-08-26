canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
rover_width=100;
rover_height=90;
background_image="mars.jpg";
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add() {
    background_imageTag=new Image();
    background_imageTag.onload=uploadbackground;
    background_imageTag.src=background_image;
    rover_imageTag=new Image();
    rover_imageTag.onload=uploadrover;
    rover_imageTag.src=rover_image;
}
function uploadbackground() {
    ctx.drawImage(background_imageTag,0,0,canvas.width, canvas.height);
}
function uploadrover() {
    ctx.drawImage(rover_imageTag,rover_x,rover_y,rover_width,rover_height);
}
window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
    keypress=e.keyCode 
console.log(keypress);
if (keypress=='38') {
    up(); 
    console.log("up");
}
if (keypress=='40') {
    down();
    console.log("down");
}
if (keypress=='37') {
    Left();
    console.log("Left");
}
if (keypress=='39') {
    right();
    console.log("right");
}
}
function up() {
    if (rover_y>=0) {
        rover_y=rover_y-10;
        console.log("when up arrow is pressed,x="+ rover_x+"|y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function down() {
    if (rover_y<=500) {
        rover_y=rover_y+10;
        console.log("when down arrow is pressed,x="+ rover_x+"|y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}
function Left() {
    if (rover_x>=0) {
        rover_x=rover_x-10
        console.log("when left arrow is pressed,x="+ rover_x+"|y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}

function right() {
    if (rover_x<=700) {
        rover_x=rover_x+10
        console.log("when right arrown is pressed,x="+ rover_x+"|y="+rover_y);
        uploadbackground();
        uploadrover();
    }
}