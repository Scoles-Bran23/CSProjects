void setup(){
  size(400, 400);
  background(255);
}
void draw(){

  translate(width/2, 350);
  drawRect(5, 40, 15);

}

void drawRect(float w, float h, int level){
  int r, g, b;
  r = 10;
  g = 50;
  b = 100;

  if(level == 0){
    return;
  }
  
  noStroke();

  pushMatrix();
  fill(r+10*level, g+10*level, b+10*level);
  rect(0, 0, w, h);
  
  pushMatrix();
    rotate(PI/20.0);
    translate(0, -35);
    scale(0.9);
    drawRect(w, h, level - 1);
  popMatrix();
  
  pushMatrix();
    rotate(-PI/20.0);
    translate(0, -35);
    scale(0.9);
    drawRect(w, h, level - 1);
  popMatrix();
  
  popMatrix();

}
