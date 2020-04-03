
function setup() {
  createCanvas(500,500);
  
}

function draw() {
  background(136,214,238); 
  rectMode(CENTER);
  fill(0,100,0);
  rect(250,500,500,125)
  fill(166,117,68); 

  rect(160,330,50,300);
  rect(340,330,50,300);
  //main
  rect(250,400,200,250);
  //left tower
  rect(105,400,90,300);
  //right tower
  rect(395,400,90,300);
  //flag
  fill(0,0,255);
  
  rect(275,70,50,20);
  //door
  fill(50,23,25);
  rect(250,450,70,150);

  fill(100,51,33);
  triangle(150,275,350,275,250,80);
  triangle(60,250,150,250,105,150);
  triangle(350,250,440,250,395,150);

  triangle(135,180,185,180,160,120);
  triangle(315,180,365,180,340,120);

  drawSprites();
}
