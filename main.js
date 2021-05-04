var canvas= document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var image_array= ["mars1.jpg","mars2.jpg","mars3.jpg","mars4.jpg"];
var random_number= Math.floor(Math.random()*4);
console.log("random: "+ random_number);

var rover_width= 100;
var rover_height= 90;
rover_x=10;
rover_y=10;

background_image= image_array[random_number];
rover_image="rover.png";
var background_img_tag=new Image();
var rover_img_tag=new Image();
function add() {
    
    background_img_tag.onload=uploadBackground;
    background_img_tag.src=background_image;

   
    rover_img_tag.onload=uploadRover;
    rover_img_tag.src=rover_image;
}

function uploadBackground() {
    ctx.drawImage(background_img_tag,0,0,canvas.width,canvas.height);
}
function uploadRover() {
    ctx.drawImage(rover_img_tag,rover_x,rover_y,rover_width,rover_height);
}

window.addEventListener("keydown",my_keydown);
function my_keydown(e) {
var keyPressed=e.keyCode;
if(keyPressed==38){
    up();
    console.log("up");
}
if(keyPressed==40){
    down();
    console.log("down");
}
if(keyPressed==37){
    left();
    console.log("left");
}
if(keyPressed==39){
    right();
    console.log("right");
}

}

function up() {
    if(rover_y>=0)
    {
        rover_y-=10;
        console.log("When Up arrow is pressed x: "+ rover_x + " y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down() {
    if(rover_y<500)
    {
        rover_y+=10;
        console.log("When Up arrow is pressed x: "+ rover_x + " y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left() {
    if(rover_x>=0)
    {
        rover_x-=10;
        console.log("When Up arrow is pressed x: "+ rover_x + " y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right() {
    if(rover_x< 710)
    {
        rover_x+=10;
        console.log("When Up arrow is pressed x: "+ rover_x + " y: " + rover_y);
        uploadBackground();
        uploadRover();
    }
}