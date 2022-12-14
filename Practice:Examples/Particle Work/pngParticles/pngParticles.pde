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

void setup() {
  fullScreen();
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
  
  println(isHardSongBeat());
  //println("number of systems: " + systems.size());

  for (particleSystem s : systems) {

    s.run();
  }

  for (int i= systems.size()-1; i > -1; i--) {
    particleSystem s = systems.get(i);
    //println("size of particles: " + s.particles.size());
    if (s.dead()) {
      systems.remove(s);
    }
  }
  
  fft.analyze(spectrum);
  float low = getTotalLevel(spectrum, 0, 50);
  println(low);
  if (low > 1) {
     particleSystem s = new particleSystem(random(width), random(height), true);
     systems.add(s);
  } 
  else if (low > 0.5){
    particleSystem s = new particleSystem(random(width), random(height), false);
    systems.add(s);
  }
  

}


boolean isHardSongBeat() {
  fft.analyze(spectrum);
  float low = getTotalLevel(spectrum, 0, 50);
  println(low);
  if (low > 0.2) {
    return true;
  } else {
    return false;
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
