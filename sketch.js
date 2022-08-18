var rotateNum;
var hoverRect = true;
var hoverDirection = false;

var rectX;
var rectY;

function setup() {
  createCanvas(400, 400);
  rotateNum = 0;
  rectMode(CENTER);
  
  rectX = width/2;
  rectY = height/2;
  
}

function draw() {
  background(220);
  
  push();
  
  translate(rectX, rectY);
  rotate(rotateNum);
  noStroke();
  fill(120,50,200);
  rect(0,0, 50, 50);
  


  
  pop();
  
  
  let d = dist(mouseX, mouseY, rectX, rectY);
  console.log(d);
  if(d < 36){
    if(rotateNum < 5){
      rotateNum++;
    }
  }
  else{
    if(rotateNum > 0){
      rotateNum--;
    }
  }
  
  
}