// Scroll Maze
lineX1 = 0
lineX2 = 600
lineY1 = 190
lineY2 = 190
notherlineY1 = lineY1 + 25
notherlineY2 = lineY2 + 25
level = 0
score = 0


function setup() {
  createCanvas(600,400);
  stroke(255);
  frameRate(30);  
}



function draw() {
  background(0);
  stroke(255);
  rect (15, 195, 10, 10)
  fill(255);
  textAlign(RIGHT);
  text('<- GO TO THE SQUARE TO START', width/2, height/2);
  fill(255);
  stroke(255);
  ellipse(mouseX, mouseY, 10, 10);

  let d = dist(mouseX, mouseY, 15, 200);
  if (d < 8) {
    level = 1
  }
  if (level == 1){
    levelOne();
  }
  if (level == 2){
    end();
  }
}



function levelOne(){
  background(0);
  lineX1 = lineX1 - 5;
  lineX2 = lineX2 - 5;
  score = score + 1;

  stroke(255);
  textAlign(CENTER);
  textSize(25);
  strokeWeight(1);
  text('SCORE: '+score, 100, 30);

  strokeWeight(8);
  line (lineX1,lineY1,lineX2,lineY2);
  line (lineX1,notherlineY1,lineX2,notherlineY2);
  if (lineX2 < 600){
  line (lineX2, notherlineY2, lineX2+600, notherlineY2+150);
  line (lineX2, notherlineY2-25, lineX2+600, notherlineY2+125);
  }
  if (lineX2 < 0){
    line (lineX2+600, notherlineY2+150, lineX2+1200, notherlineY2-100);
    line (lineX2+600, notherlineY2+125, lineX2+1200, notherlineY2-125);
    }
  if (lineX2 < -600){
    line (lineX2+1200, notherlineY2-100, lineX2+1800, notherlineY2-100);
    line (lineX2+1200, notherlineY2-125, lineX2+1800, notherlineY2-125);
  }
  if (lineX2 < -1200){
    line (lineX2+1800, notherlineY2-100, lineX2+2400, notherlineY2);
    line (lineX2+1800, notherlineY2-125, lineX2+2400, lineY2);
  }
  if (lineX2 < -1800){
    line (lineX2+2400, notherlineY2, lineX2+3000, notherlineY2);
    line (lineX2+2400, lineY2, lineX2+3000, lineY2)
  }
  if (lineX2 < -2400){
    lineX2 = 600
  }
  loadPixels();
  var mousepixel = pixels[((mouseX + mouseY * width) * 4)];
  if(mousepixel == 255){
    end();
  }
 
}

function end(){
  background(0);
  textSize(12);
  textAlign(CENTER);
  fill(255);
  strokeWeight(1);
  text("GAME OVER", width/2, 100);
  text("SCORE: "+score, width/2, height/2);
noLoop();
}