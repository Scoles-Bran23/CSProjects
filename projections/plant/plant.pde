int x, w, y, r;
void setup(){
  size(400, 400);
  x = width/2;
  w = 10;
  y = height;
  background(255);
}

void draw(){
  noStroke();
  r = int(random(0, 2));
  println(r);
  fill(15, 36, 5, 100);
  if(y > 3*height/4){
      y--;
  }
  else if(r==0){
    if(y > height/2){
      x++;
      y-=+2;
    }
  }
  else if(r==1){
    if(y > height/2){
      x+=-2;
      y++;
    }
  }
/*
  else if(y < height/2 && x < 3*width/4){
    x++;
    y-=2;
  }
*/
  

  ellipse(x, y, w, w);

}
