let circles = [];
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 1; i++) {
    circles.push(new Circle());
  }
}

function draw() {
  background(255);
  for(let i = 0; i < circles.length; i++){
    circles[i].display();
  }

}

class Circle{
  constructor(xPos, yPos, w){
    this.xPos = xPos;
    this.yPos = yPos;
    this.xVel = random(1, 5);
    this.yVel = random(1, 5);
    this.w = 50;
  }

  display(){
    ellipse(width/2, height/2, this.w, this.w)
  }

}
