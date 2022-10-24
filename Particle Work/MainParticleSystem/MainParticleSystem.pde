Particle p;
Particle q;
float x = 0;
void setup(){
  size(400, 400);
  background(0);
  PVector pIn = new PVector(width/2, 10);
  p = new Particle(pIn);
  q = new Particle(pIn);

}
<<<<<<< HEAD

//hey katie hows life?
//hello
=======
//hey katie hows life?
//hello
//helllo again
>>>>>>> 556203cfbbc02896bad1df76b170f18c94ade7ea
void draw(){
  p.run();
  q.run();
  x+=0.3;
  PVector forceOne = new PVector(noise(x), random(0.1, 0.1));
  p.applyForce(forceOne);
  PVector forceTwo = new PVector(0.2, 0.2);
  q.applyForce(forceTwo);
}
