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

=======
//hey katie hows life?
//hello
>>>>>>> f9eb291cb076297468af15166611ceb3b4a0ea84
void draw(){
  p.run();
  q.run();
  x+=0.3;
  PVector forceOne = new PVector(noise(x), random(0.1, 0.1));
  p.applyForce(forceOne);
  PVector forceTwo = new PVector(0.1, 0.1);
  q.applyForce(forceTwo);
}
