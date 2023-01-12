let user, button, greeting;
let tracker = 0;
let time = 6;
let risk = 5;
let name = "";

const stateMap = {
  0 : {draw: intro, input: introDec},
  1 : {draw: preview, input: previewDec},
  2 : {draw: bump, input: bumpDec},
  3 : {draw: ignore, input : ignoreDec},
  4 : {draw: look, input: lookDec}
};


function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);

  user = createInput();
  user.position(20, 65);

  //greeting = createElement('h2', '\"hey, what\'s your name?\"');
  greeting = createElement('h2', "");
  greeting.position(20, 5);

  button = createButton('respond');
  button.style('font-size', '12px');
  button.style('font-family', 'Times New Roman');
  let col = color('#5cb1ed');
  button.style('background-color', col);
  let col2 = color('#cb42f5');
  button.position(user.x+user.width, 65);
  button.size(100, user.height);

  textAlign(LEFT);
  textSize(20);
  fill(0);

  button.mousePressed(handleInput);
}

function draw(){
  stateMap[tracker].draw();
}

function handleInput(){
  stateMap[tracker].input()
}

function intro(){
  greeting.html('\"hey, what\'s your name?\"');
  const answer = user.value();
  name = answer;
}
function introDec(){
  tracker = 1;
}

function preview() {
  greeting.html('\"nice to meet you, ' + name + '. i\'m jean\"');
  user.value('');
  let s = "the woman in front of you grins. the smile glances off her eyes and then disappears. your eyes widen as she takes a step forward, but by then it's too late...";
  storyText(s, 20, 100);

  fill(255, 0, 0);
  s = "click button to continue";
  computerText(s, 20, 250);
}

function previewDec(){
  tracker = 2;
}


function bump() {
  clear();
  greeting.html(time + ":00 AM");
  let s = "it's still dark outside and the sheets of rain hitting the car feel like a series of personal attacks. there's less traffic than usual and you're thankful. as you cruise down the boulevard alone you feel a slight bump underneath your car.";
  storyText(s, 20, 100);
  s = "it rubs you the wrong way, but you don't want to be late. it's only your second week, after all. do you pull over and check under the car, or ignore the distraction?";
  storyText(s, 20, 300);
  s = "type \"1\" to keep driving or \"2\" to satiate your curiosity";
  computerText(s, 20, 450);

}

//a (one) b (two)
function bumpDec() {
  clear();
  const answer = user.value();
  if(one(answer)){
    clear();
    tracker = 3;
  }
  else if(two(answer)){
    clear();
    tracker = 4;
  }
}

function ignore(){
  clear();
  risk--;
  let s = "you ignore";
  storyText(s, 20, 100);
}

function ignoreDec(){

}

function look(){
  clear();
  risk++;
  let s = "you look";
  storyText(s, 20, 100);
}

function lookDec(){

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

function computerText(str, x, y){
  textFont('Times New Roman')
  textAlign(LEFT);
  textSize(20);
  fill(255, 0, 0);
  text(str, x, y, 400, 200);
}

function storyText(str, x, y){
  textFont('Times New Roman')
  textAlign(LEFT);
  textSize(20);
  fill(0);
  text(str, x, y, 300, 200);
}


