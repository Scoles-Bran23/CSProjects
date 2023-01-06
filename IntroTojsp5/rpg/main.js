let user, button, greeting;
let tracker = 0;
let time = 6;
let risk = 5;
let name = "";

const stateMap = {
  0 : preview,
  1 : bump,
  2 : bumpDec,
  3 : reply1
};


function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);

  user = createInput();
  user.position(20, 65);

  greeting = createElement('h2', '\"hey, what\'s your name?\"');
  greeting.position(20, 5);

  button = createButton('respond');
  button.style('font-size', '12px');
  button.style('font-family', 'Times New Roman');
  button.position(user.x + user.width, 65);

  textAlign(LEFT);
  textSize(20);
  fill(0);
}

function draw(){
  button.mousePressed(stateMap[tracker]);
}



function preview() {
  const answer = user.value();
  name = answer;
  greeting.html('\"nice to meet you, ' + answer + '. i\'m jean\"');
  user.value('');
  let s = "the woman in front of you grins. the smile glances off her eyes and then disappears. your eyes widen as she takes a step forward, but by then it's too late...";
  storyText(s, 100);

  fill(255, 0, 0);
  s = "click button to continue";
  computerText(s, 20);

  tracker = 1;
  
}


function bump() {
  clear();
  const answer = user.value();
  greeting.html(time + ":00 AM");
  user.value('');
  let s = "it's still dark outside and the sheets of rain hitting the car feel like a series of personal attacks. there's less traffic than usual and you're thankful. as you cruise down the boulevard alone you feel a slight bump underneath your car.";
  storyText(s, 100);
  s = "it rubs you the wrong way, but you don't want to be late. it's only your second week, after all. do you pull over and check under the car, or ignore the distraction?";
  storyText(s, 200);
  s = "type \"1\" to keep driving or \"2\" to satiate your curiosity";
  computerText(s, 300);
  tracker = 2;

}

function bunpDec() {
  clear();
  const answer = user.value();
  if(one(answer)){
    risk--;
    clear();
    tracker = 3;
  }
  else if(two(answer)){
    risk++;
    clear();
    tracker = 4;
  }

}

function reply1(){
  clear();
  const answer = user.value();
  greeting.html('score: ' + score);

  user.value('');
  if(yes(answer)) {
    clear();
    text("you chose A", 50, 200);
    tracker = 3;
  }
  else {
    clear();
    text("you chose B", 50, 200);
    tracker = 4;
  }

}

function clear(){
  background(255);
}

function yes(a){
  if(a.toUpperCase() == "YES" || a.toUpperCase() == "Y"){
    return true;
  }
  else{
    return false;
  }
  
}

function no(a){
  if(a.toUpperCase() == "NO" || a.toUpperCase() == "N"){
    return true;
  }
  else{
    return false;
  }
  
}

function one(a){
  if(a.toUpperCase() == "1" || a.toUpperCase() == "ONE"){
    return true;
  }
  else{
    return false;
  }
  
}

function two(a){
  if(a.toUpperCase() == "2" || a.toUpperCase() == "TWO"){
    return true;
  }
  else{
    return false;
  }
  
}

function computerText(str, h){
  textFont('Times New Roman')
  textAlign(LEFT);
  textSize(20);
  fill(255, 0, 0);
  text(str, h, 300, 400, 200);
}

function storyText(str, h){
  textFont('Times New Roman')
  textAlign(LEFT);
  textSize(20);
  fill(0);
  text(str, 20, h, 300, 200);
}


