void setup(){
  size(800, 800);
  background(255);
}
void draw(){
  drawSquare(400, 400, 30);
  drawCircle(200, 200, 100);
  drawCircle2(300, 300, 100);
}

void drawSquare(int x, int y, float w){
  stroke(1);
  fill(255);
  rect(x, y, w, w);
  if(w > 10){
    drawSquare(x+50, y-50, w*0.8);
    drawSquare(x-50, y+50, w*0.8);
   }
}

void drawCircle(int x, int y, float r){
  stroke(1);
  fill(255);
  ellipse(x, y, r, r);
  if(x < width/2){
    drawCircle(x+10, y, r*0.5);
  }
}

void drawCircle2(int x, int y, float r){
  //noStroke();
  //fill(50, 168, 168, 20);
  ellipse(x, y, r, r);
  if(r > 5){
    drawCircle2(x, y, r*0.4);
  }
  
}
