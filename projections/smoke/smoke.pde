import processing.sound.*;
PImage light;
ArrayList <particleSystem> systems;
float gravity=10;

SoundFile soundFile;
AudioIn mic;
FFT fft;
int sampleCount = 100;
int bandCount = 512;
float[] spectrum = new float[bandCount];
float t = 255;

boolean toFadeIn = false;
boolean cover = false;

boolean inColor;

float LOW_REACTIVITY_LEVEL = 0.07;
float HIGH_REACTIVITY_LEVEL = 0.09;

void setup() {
  fullScreen();
  noCursor();
  mic = new AudioIn(this, 0);
  mic.start();

  //soundFile = new SoundFile(this, ".mp3");
  //soundFile.play();

  fft = new FFT(this, bandCount);
  fft.input(mic);

  systems = new ArrayList <particleSystem>();
  light = loadImage("light.png");
  imageMode(CENTER);
  light.resize(50, 50);

}



void draw() {
  //blendMode(BLEND);
  blendMode(ADD);
  background(0);

  println(t);
   

  for (particleSystem s : systems) {
    if(t <= 0 && !cover){
       s.run();
    }

  }


  for (int i= systems.size()-1; i > -1; i--) {
    particleSystem s = systems.get(i);
    if (s.dead()) {
      systems.remove(s);
    }
  }
  
  fft.analyze(spectrum);
  float low = getTotalLevel(spectrum, 0, 50);
  //println(low);
  if (low > HIGH_REACTIVITY_LEVEL) {
     particleSystem s = new particleSystem(random(width), random(height), inColor);
     systems.add(s);
  } 
  
  if(toFadeIn){
    if(t > 0){
      t-=10;
    }
    
  }
  
  noStroke();
  fill(0, t);
  rect(0, 0, width, height);
  
  if(cover){
     noStroke();
     fill(0);
     rect(0, 0, width, height);
  }
}

public float getTotalLevel(float[] data, int begin, int end) {
  if (begin >= end) return 0;
  float total = 0;
  for (int i = begin; i < end; i++) {
    total += data[i];
  }
  return total;
}

void keyPressed(){
  if(key == ENTER || key == RETURN){
     toFadeIn = true;
  }
  if(key == ' ' && cover == false){
    cover = true;
  }
  else if(key == ' ' && cover == true){
     cover = false;
  }
  
  if((key == 'c' || key == 'C') && inColor == false){
    inColor = true;
  }
  else if((key == 'c' || key == 'C') && inColor == true){
    inColor = false;
  }

}
