Particle p;
Particle q;
void setup(){
  size(400, 400);
  background(0);
  PVector pIn = new PVector(width/2, 10);
  p = new Particle(pIn);
  q = new Particle(pIn);

}
//hey katie hows life?
//hello
//helllo again
void draw(){
  p.run();
  q.run();

  PVector forceTwo = new PVector(0.1, 0.1);
  q.applyForce(forceTwo);
}
