ArrayList<MakeLine> lines;

void setup(){
  size(800, 800);
  lines = new ArrayList<MakeLine>();
  PVector start = new PVector(0, height/2);
  PVector end = new PVector(width, height/2);
  
  lines.add(new MakeLine(start, end));
  
  for(int i = 0; i < 5; i++){
    generate();
  }
}
void draw(){
  background(255);
  for(MakeLine l : lines){
    l.display();
  }
}

class MakeLine{
  
  PVector start;
  PVector end;
  
  MakeLine(PVector a, PVector b){
    start = a.copy();
    end = b.copy();
  }
  
  PVector lineA(){
     return start.copy();
  }
  PVector lineB(){
    PVector v = PVector.sub(end, start);
    v.div(3);
    v.add(start);
    return v;
  }
  
  PVector lineC(){
    PVector a = start.copy();
    PVector v = PVector.sub(end, start);
    v.div(3);
    a.add(v);
    v.rotate(-radians(60));
    a.add(v);
    return a;
  }
  
  
  PVector lineD(){
    PVector v = PVector.sub(end, start);
    v.mult(2/3.0);
    v.add(start);
    return v;
  }
  
  PVector lineE(){
    return end.copy();
  }
   
  
  void display(){
    stroke(3, start.x*0.4, start.x*0.4);
    line(start.x, start.y, end.x, end.y);
  }
}

void generate(){
  ArrayList next = new ArrayList<MakeLine>();
  for (MakeLine l : lines){
    PVector a = l.lineA();
    PVector b = l.lineB();
    PVector c = l.lineC();
    PVector d = l.lineD();
    PVector e = l.lineE();
    
    next.add(new MakeLine(a, b));
    next.add(new MakeLine(b, c));
    next.add(new MakeLine(c, d));
    next.add(new MakeLine(d, e));

  }
  lines = next;
}
