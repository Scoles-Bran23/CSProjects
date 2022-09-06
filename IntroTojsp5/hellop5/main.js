let x, w;
function setup(){
  x = 0;
  w = 10;
  createCanvas(400, 400);
}
function draw(){
  background(255);


  /*
  if(mouseX > width/2){
    x++;
  }
  else{
    x--;
  }*/

  if(mouseY > width/2){
    w++;
    fill(235, 52, 119);
  }
  else{
    w--;
    fill(50, 129, 168);
  }

  noStroke();
  ellipse(width/2, width/2, w, w);
  stroke(0);
  strokeWeight(w/8);
  ellipse(width/2, width/2, w/4, w/4);

}
