var timerCount = 0;
var XPos = 100;
var YPos = 100; 
var Csize = 10;
var UpDown = 1;
var XPos1 = 100;
var YPos2 = 100;
var XPos2 = 20;
var YPos3 = 20;
var XPos4 = 600;
var YPos4 = 600;
var ang = 0;
let img;

function preload(){
  img = loadImage('bird.png');
}

function setup() {
  createCanvas(1000, 750);
  background(300);
  frameRate(4);
}

function draw() {
  timerCount = timerCount + 5;
  if (timerCount > 400){
    return
  }
  XPos = sin(timerCount/20)*333;
  XPos = XPos + width/2;
  timerCount += 1;
  YPos = cos(timerCount/63)*400;
  YPos = YPos + height/2;

  Csize = Csize + 2*UpDown;

  if (Csize > 50){
    UpDown = -1; 
  }
  if (Csize<10){
    UpDown = 1;
  }
  image(img, XPos, YPos, Csize*1.5, Csize*1.5);
  // circle(XPos, YPos, Csize);

  XPos1 = sin(timerCount/63)*151 ;
  XPos1 = XPos1 + width/2;
  YPos2 = cos(timerCount/20)*101;
  YPos2 = YPos2 + height/2;
  
  image(img, XPos1, YPos2, Csize, Csize);
  // circle(XPos1 , YPos2, Csize/2)

  XPos2 = sin(timerCount/50)*400 ;
  XPos2 = XPos2 + width/3;
  YPos3 = cos(timerCount/23)*333;
  YPos3 = YPos3 + height/3; 
  
  image(img,XPos2 , YPos3, Csize*.75, Csize*.75)
  // circle(XPos2 , YPos3, Csize*.75)

  XPos4 = XPos4 + 250*sin(ang);
  YPos4 = XPos4/2 + 250*cos(ang);
  ang = ang + 10
  image(img, XPos4 , YPos4, Csize*1.25, Csize*1.25)
  // circle(XPos4 , YPos4, Csize/4)
}
