class particleSystem {
  ArrayList<Particle> particles;
  PVector gravity;
  PVector position;
  boolean inColor;
  float r, b, g;
  float lifeSpan= 50;
  particleSystem(float x, float y, boolean inColor) {
    this.inColor = inColor;
    particles = new ArrayList <Particle>();
    gravity = new PVector(0, 0.1);
    position = new PVector (x, y);
    r= random(10);
    b= random(255);
    g= random(100);
  }
  void run() {
    if (lifeSpan>0) {
      for (int i=0; i<1; i++) {
        Particle p = new Particle(new PVector(position.x, position.y), new PVector (random(-1, 1), random(-1, 1)), r, b, g);
        particles.add(p);
      }
    }
    position.add(0, 0);
    for (int i = particles.size()-1; i > -1; i--) {
      Particle p = particles.get(i);
      if (p.death()) {
        particles.remove(p);
      }
    }
    for (Particle p : particles) {

      p.applyGravity();
      p.update();
      if(inColor){
        p.colorDisplay();
      }
      else{
        p.display();
      }
      
      //p.checkEdgesBounce();
    }
    lifeSpan--;
  }
  boolean dead(){
    return particles.size()==0;
  }
}
