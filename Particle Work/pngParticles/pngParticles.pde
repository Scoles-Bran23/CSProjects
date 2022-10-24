PImage light;
ArrayList <particleSystem> systems;
float gravity=10;


void setup() {
  fullScreen();
  systems = new ArrayList <particleSystem>();
  light = loadImage("light.png");
  imageMode(CENTER);
  light.resize(50,50);
}



void draw() {
  //blendMode(BLEND);
  blendMode(ADD);
  background(0); 
  
  //println("number of systems: " + systems.size());
  
  for (particleSystem s : systems) {

    s.run();
    
  }
  
  for (int i= systems.size()-1; i > -1; i--){
    particleSystem s = systems.get(i);
    //println("size of particles: " + s.particles.size());
    if(s.particles.size() == 0){
      systems.remove(s);
    }
  }
  
}
void mouseClicked() {
  particleSystem s = new particleSystem(mouseX, mouseY);
  systems.add(s);
}
