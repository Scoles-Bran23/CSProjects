let user, button, greeting;
let tracker = 0;
let time = 6;
let risk = 0;
let name = "";

const stateMap = {
  0 : {draw: intro, input: introDec},
  1 : {draw: preview, input: previewDec},
  2 : {draw: bump, input: bumpDec},
  3 : {draw: ignore, input: ignoreDec},
  4 : {draw: look1, input: look1Dec},
  5 : {draw: look2, input: look2Dec},
  6 : {draw: picture, input: pictureDec},
  7 : {draw: back, input: backDec},
  8 : {draw: zombification, input: zombieDec}
};


function setup() {
  // create canvas
  createCanvas(windowWidth, windowHeight);

  user = createInput();
  user.position(20, 65);

  //greeting = createElement('h2', '\"hey, what\'s your name?\"');
  greeting = createElement('h2', "");
  greeting.position(20, 5);

  button = createButton('');
  button.style('font-size', '12px');
  button.style('font-family', 'Times New Roman');
  let col = color('#F6BE00');
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
  clear();
  greeting.html('\"hey, what\'s your name?\"');
  let s = "press the button once you've responded";
  computerText(s, 20, 100);
  const answer = user.value();
  name = answer;
}
function introDec(){
  tracker = 1;
}

function preview() {
  clear();
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
  s = "it rubs you the wrong way, but you don't want to be late. it's only your second week at the lab, after all. do you pull over and check under the car, or ignore the distraction?";
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
  let s = "you ignore";
  storyText(s, 20, 100);
}

function ignoreDec(){

}

function look1(){
  clear();
  risk++;
  let s = "you pull over and gingerly open the door, squinting at the object on the side of the street.";
  storyText(s, 20, 100);
  s = "it's something small, unidentifiable. you take a step closer and gasp. in front of you is a scrambled monstrosity...";
  storyText(s, 20, 200);
  s = "press the button to continue";
  computerText(s, 20, 350);
}

function look1Dec(){
  tracker = 5;
}

function look2(){
  clear();
  let s = "...the bloody yolk oozed over the slick surface of the shiny black egg. the egg cracked, and curiously, resulted in three more eggs.";
  storyText(s, 20, 100);
  s = "before you can blink, half of the road is filled with bloodied, ebony egg shells.";
  storyText(s, 20, 200);
  s = "your experiences as a scientist, nay, a HUMAN, tell you that what is happening should be impossible.";
  storyText(s, 20, 300);
  s = "do you take a picture of the disaster to save evidence of your experience, or do you walk back to the car, vowing to forget what you have seen...forever?";
  storyText(s, 20, 400);
  s = "type \"1\" to take a picture for posterity, or \"2\" to ignore this fascinating scientific marvel";
  computerText(s, 20, 550);
}

function look2Dec(){
  const answer = user.value();
  clear();
  if(one(answer)){
    //picture
    risk++;
    tracker = 6;
  }
  else if(two(answer)){
    //ignore
    tracker = 7;
  }
}

function picture() {
  clear();
  let s = "sweat dripping down your face, you angle your phone above the crackling mass of eggs. your phone slips from your hand.";
  storyText(s, 20, 100);
  s = "\"not the new phone!\" a potential new species is apparently not enough to block you from rescuing your prized possession.";
  storyText(s, 20, 200);
  s = "you decide to carefully hunt through the black and red gooey egg shells for your phone.";
  storyText(s, 20, 300);
  s = "you lift ONE egg,";
  specialStoryText(s, 20, 400);
  s = "TWO eggs,";
  specialStoryText(s, 20, 450);
  s = "THREE eggs...";
  specialStoryText(s, 20, 500);
  s = "and that's when everything changes";
  storyText(s, 20, 550);

}

function pictureDec() {
  tracker = 8;
}

function back() {
  
}

function backDec() {
  
}

function zombification(){

}
function zombieDec(){

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
  fill(7, 112, 7);
  text(str, x, y, 400, 200);
}

function storyText(str, x, y){
  textFont('Times New Roman')
  textAlign(LEFT);
  textSize(20);
  fill(0);
  text(str, x, y, 300, 200);
}

function specialStoryText(str, x, y){
  textFont('Times New Roman')
  textAlign(LEFT);
  textSize(20);
  fill(250, 7, 7);
  text(str, x, y, 300, 200);
}


