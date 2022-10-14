import processing.sound.*;

SoundFile soundFile;
FFT fft;
int sampleCount = 100;
int bandCount = 512;
float[] spectrum = new float[bandCount];

ArrayList<Tree> trees;
void setup(){
  fullScreen();
  background(0);
 
  soundFile = new SoundFile(this, "olivia.mp3");
  soundFile.play();
  
  fft = new FFT(this, bandCount);
  fft.input(soundFile);

  
  trees = new ArrayList<Tree>();
  for(int i = 0; i < 1; i++){
    //float x, float y, float w, float h, float a, int level, int rate
    
    Tree t = new Tree(width/2 - width/4, height/2+150, 7, 90, 0, 10, 3);
    Tree a = new Tree(width/2 + width/4, height/2+150, 7, 90, 0, 10, 3);
    trees.add(t);
    trees.add(a);
    
    /*
    Tree t = new Tree(random(100, width-100), random(100, height - 100), int(random(6, 8)), int(random(60, 80)), random(5, 15), int(random(7, 10)), int(random(2, 4)));
    trees.add(t);
    */
  }
  
}
void draw(){
  background(0);
  for(Tree t : trees){
    t.display();
  }

}

void drawRect(float w, float h, float a, int drawSet, int level){


   //float tempA = (noise(millis()) * 6)+6;
   
   //map(tempA, 0, beat(), (noise(millis()) * 6)+6, (noise(millis()) * 4)+10);
   frameRate(10);
   float tempA = 5;
   if(isBeat()){
     tempA = (noise(millis()) * 3)+0;
   }
   else{
    tempA = (noise(millis()) * 3)+10;
   }
   

   
  //int newLevel = level - tempLevel;
  
  if(level == 0){
    return;
  }
  
  noStroke();

  pushMatrix();
  if(drawSet == 0){
     fill(level*20, 50, 100, 200);
  }
  else if(drawSet == 1){
    fill(50, level*20, 100, 200);
  }
  else if(drawSet == 2){
    fill(30, 100, level*20, 200);
  }
  else if(drawSet == 3){
    fill(level*20, level*10, 10);
  }
  else {
    fill(level*20, 200);
  }

  rect(0, 0, w, h);
  
  
    pushMatrix();
      rotate(PI/tempA);
      translate(0, -1*h + 10);
      scale(0.9);
      drawRect(w, h, a, drawSet, level - 1);
    popMatrix();
  
    pushMatrix();
      rotate(-PI/tempA);
      translate(0, -1*h + 10);
      scale(0.9);
      drawRect(w, h, a, drawSet, level - 1);
    popMatrix();


  popMatrix();

}

boolean isBeat(){
  fft.analyze(spectrum);
  float low = getTotalLevel(spectrum, 0, 5); //greater than 1
  if(low > 1){
    return true;
  }
  else{
    return false;
  }

}

/*
float beat(){
  fft.analyze(spectrum);
  float low = getTotalLevel(spectrum, 0, 5); //greater than 1
  return low;
}*/

  public float getTotalLevel(float[] data, int begin, int end){
    if (begin >= end) return 0;

    float total = 0;

    for (int i=begin; i<end; i++)
        total += data[i];

    return total;
  }


/*
void mousePressed(){
  translate(mouseX, mouseY);
  //w --> width of the rectangle
  //h --> height of the rectangle
  //a --> angle that the branches rotate (bigger is less rotation)
  //level --> how many times the branches separate
  drawRect(int(random(2, 5)), int(random(20, 40)), random(5, 15), int(random(5, 12)));
}*/
