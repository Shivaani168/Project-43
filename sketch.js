var backgroundImage,backgroundImage2,form,system,code,security;
var score=0;

function preload() {
backgroundImage= loadImage("aladdin_cave.jpg")
backgroundImage2=loadImage("treasure.jpg")
}

function setup() {
createCanvas(1000,500);
security = new Security();
system = new System();
}

function draw() {
background(backgroundImage);
clues();
security.display();
textSize(20);
fill("red")
stroke("black")
text("Score: " + score,900,30);
text("Re-arrange all the letters and solve the quiz to unlock the treasure.",100,30)
// add code for changing the background to the treasure background
if(score === 3) {
clear()
background(backgroundImage2)
fill("black")
textSize(40);
text("TREASURE UNLOCKED",150,450);
}
drawSprites()
}