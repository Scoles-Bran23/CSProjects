class Particle {
  PVector position;
  PVector velocity;
  PVector acceleration;
  float lifeSpan;
  float mass = 0.5;
  
  Particle(PVector p){
    position = new PVector(p.x, p.y);
    velocity = new PVector(random(-1, 1), random(0, 0.1));
    acceleration = new PVector(0, 0.1);
    lifeSpan = 255;
  }
  
  boolean isDead(){
    if(lifeSpan < 0){
      return true;
    }
    else{
      return false;
    }
  }
  
  void update(){
    velocity.add(acceleration);
    position.add(velocity);
    acceleration.mult(0);
    lifeSpan -= 5;
  }
  void display(){
    noStroke();
    fill(255, lifeSpan);
    ellipse(position.x, position.y, 10, 10);
  }
  void applyForce(PVector force){
    PVector f = new PVector(force.x, force.y);
    f.div(mass);
    acceleration.add(f);
  }
  
  void run(){
    update();
    display();
    
  }
  
}
