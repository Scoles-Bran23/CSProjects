let user, button, greeting, button2, leftMargin, centerMargin, rightMargin;
let tracker = 0;
let time = 6;
let risk = 0;
let name = "";
let img;

const stateMap = {
  0 : {draw: intro, input: introDec},
  1 : {draw: preview, input: previewDec},
  2 : {draw: bump, input: bumpDec},
  3 : {draw: ignore, input: ignoreDec},
  4 : {draw: look1, input: look1Dec},
  5 : {draw: look2, input: look2Dec},
  6 : {draw: picture, input: pictureDec},
  7 : {draw: back, input: backDec},
  8 : {draw: zombification, input: zombieDec},
  9 : {draw: urgentCare, input: ucDec},
  10: {draw: home, input: homeDec},
  11: {draw: work, input: workDec},
  12: {draw: death, input: deathDec},
  13: {draw: urgentCare2, input: uc2Dec},
  14: {draw: work2, input: work2Dec},
  15: {draw: run, input: runDec},
  16: {draw: walk, input: walkDec},
  17: {draw: run2, input: run2Dec}
};


function setup() {

  // create canvas
  createCanvas(windowWidth, windowHeight);


  centerMargin = windowWidth/3;
  leftMargin = centerMargin - 200;
  rightMargin = centerMargin + 200;
  extraLeftMargin = centerMargin - 350;
  extraRightMargin = centerMargin + 350;

  textAlign(CENTER);
  textSize(20);
  fill(0);

  img = loadImage('yellowEgg.png');

  user = createInput();
  user.position(centerMargin + 40, 65);
  user.style('font-family', 'Times New Roman', 'Times', 'serif');
  user.style('font-size', '20px');

  //greeting = createElement('h2', '\"hey, what\'s your name?\"');
  greeting = createElement('h2', "");
  greeting.position(centerMargin, 7);



  button = createImg("redEgg.png");
  button.position(700, 15);
  button.size(150, 150);
  //button.size(150, 50);

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
  
  greeting.html('~post yolkpocalyptic literature~');

  for(let i = 0; i < windowWidth; i+=30){
      image(img, i, -8, 40, 40);
  }


  let s = "\"hey, what\'s your name?\"";
  storyText(s, centerMargin, 100);
  s = "type an answer and then press the egg once you've responded";
  computerText(s, centerMargin, 150);
  const answer = user.value();
  name = answer;

}
function introDec(){
  tracker = 1;
}

function preview() {
  clear();
  greeting.html('\"nice to meet you, ' + name + '\"');
  user.value('');
  let s = "the woman in front of you grins. the smile glances off her eyes and then disappears. your eyes widen as she takes a step forward, but by then it's too late...";
  storyText(s, centerMargin, 100);
}

function previewDec(){
  tracker = 2;
}


function bump() {
  clear();
  greeting.html(time + ":00 AM");
  let s = "it's still dark outside and the sheets of rain hitting the car feel like a series of personal attacks. there's less traffic than usual and you're thankful. as you cruise down the boulevard alone you feel a slight bump underneath your car.";
  storyText(s, centerMargin, 100);
  s = "it rubs you the wrong way, but you don't want to be late. it's only your second week at the lab, after all, and you want to impress with your presentation. do you pull over and check under the car, or ignore the distraction?";
  storyText(s, centerMargin, 300);
  s = "type \"1\" to keep driving or \"2\" to satiate your curiosity";
  computerText(s, centerMargin, 500);

}


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
  storyText(s, centerMargin, 100);
}

function ignoreDec(){

}

function look1(){
  user.value('');
  clear();
  risk++;
  let s = "you pull over and gingerly open the door, squinting at the object on the side of the street.";
  storyText(s, centerMargin, 100);
  s = "it's something small, unidentifiable. you take a step closer and gasp. in front of you is a scrambled monstrosity...";
  storyText(s, centerMargin, 200);
}

function look1Dec(){
  tracker = 5;
}

function look2(){
  clear();
  let s = "...the bloody yolk oozes over the slick surface of the shiny black egg. the egg cracks, and curiously, results in three more eggs.";
  storyText(s, centerMargin, 100);
  s = "before you can blink, half of the road is filled with bloodied, ebony egg shells.";
  storyText(s, centerMargin, 200);
  s = "your experiences as a scientist, nay, a HUMAN, tell you that whatever is happening should be impossible.";
  storyText(s, centerMargin, 300);
  s = "do you take a picture of the disaster to save evidence of your experience, or do you walk back to the car, vowing to forget what you have seen...forever?";
  storyText(s, centerMargin, 400);
  s = "type \"1\" to take a picture for posterity, or \"2\" to ignore this fascinating scientific marvel";
  computerText(s, centerMargin, 550);
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
  user.value('');
  clear();
  let s = "sweat dripping down your face, you angle your phone above the crackling mass of eggs. your phone slips from your hand.";
  storyText(s, centerMargin, 100);
  s = "\"not the new phone!\" a potential new species is apparently not enough to block you from rescuing your prized possession.";
  storyText(s, centerMargin, 200);
  s = "you decide to carefully hunt through the black and red gooey egg shells for your phone. despite your best efforts, your hand crunches an intact egg as you snap a picture of the road";
  storyText(s, centerMargin, 300);
}

function pictureDec() {
  tracker = 8;
}

function back() {
  user.value('');
  clear();
  let s = "you start to head back to your car, when you slip on the oozing yolk. you look down and your knees are drenched in blood."
  storyText(s, centerMargin, 100);
  s = "you reach for the asphalt, crunching the shell beneath your hand.";
  storyText(s, centerMargin, 200);
}

function backDec() {
  tracker = 8;
}

function zombification(){
  clear();
  let s = "you feel somehow different. stronger than ever before. you have never felt so powerful, nor so power hungry.";
  storyText(s, centerMargin, 100);
  s = "you start to hiccup intensely. a feeling of dread. \"i guess i need a scare,\" you grimace.";
  storyText(s, leftMargin, 200);
  s = "you feel something smooth and round rise from the back of your throat.";
  storyText(s, rightMargin, 200);
  s = "you take a couple steps back to your car then break out into a full sprint, peeling open the door to sit down with a sigh of relief.";
  storyText(s, centerMargin, 300);
  s = "the midnight egg forces itself out of your mouth. this time, the blood on its exterior is yours.";
  storyText(s, centerMargin, 400);
  s = "do you speed off to urgent care, to see what they have to say about the situation? since you're a scientist, you don't think they would have any more knowledge than you. at the same time, maybe your symptoms and experience are not unique.";
  storyText(s, extraLeftMargin, 500);
  s = "you could head home and sequester yourself in safety. but what if your condition gets worse and you need help?";
  storyText(s, centerMargin, 500);
  s = "at the same time, you really need to get to work, even if it seems a bit risky. missing presentation day without an excuse would set you back in your career. besides, the people at your job might be the most likely to figure out what's going on.";
  storyText(s, extraRightMargin, 500);
  s = "type \"1\" to drive to urgent care, \"2\" to drive home, or \"3\" to drive to work";
  computerText(s, centerMargin, 650);
}

function zombieDec(){
  const answer = user.value();
  clear();
  time++;
  if(one(answer)){
    risk++;
    clear();
    tracker = 9;
  }
  else if(two(answer)){
    clear();
    tracker = 10;
  }
  else if(three(answer)){
    risk+=2;
    clear();
    tracker = 11;
  }
}

function urgentCare(){
  user.value('');
  greeting.html(time + ":00 AM");
  clear();

  let s = "you continue focused - frighteningly so - down the road. \"the doctors will be able to help,\" you decide.";
  storyText(s, centerMargin, 100);
  s = "a bump rises in the back of your throat again as you turn into the parking lot. you check left and right for passerby, then scamper wimpily to the trash can as you catch the next egg in your open palm.";
  storyText(s, leftMargin, 200);
  s = "you let the egg sit in your hand for a second, then rest it in your pocket. you tell yourself that it could help the staff figure out what's wrong with you. you don't ask yourself why it feels so hard to put down.";
  storyText(s, rightMargin, 200);
  s = "as you round the corner into the clinic, you pause. by walking through the door in front of you, you are making a choice that can never be taken back: showing other people what is wrong with you.";
  storyText(s, centerMargin, 360);
  s = "you wrack your brain as you contemplate your options: do you turn around and head home after all, or go through with your plan?";
  storyText(s, centerMargin, 525);
  s = "type \"1\" to drive home, or \"2\" to open the door to the clinic";
  computerText(s, centerMargin, 650);
}

function ucDec(){
  const answer = user.value();
  clear();
  if(one(answer)){
    clear();
    tracker = 10;
  }
  else if(two(answer)){
    clear();
    tracker = 13;
  }
}

function urgentCare2(){
  //
}

function uc2Dec(){

}


function home(){
  user.value('');
  greeting.html(time + ":00 AM");
  clear();
  let s = "you spin the car around and start on the trek back to your house. nothing but doubts and misgivings run through your mind.";
  storyText(s, centerMargin, 100);
  s = "another bump rises in your throat as you continue down the deserted road. you raise your phone to your hand to dial 911";
  storyText(s, centerMargin, 250);
  s = "stealing a glance at yourself in the rearview mirror, you gasp in horror at the blood running down the sides of your mouth, at the egg shell lodged in your hair";
  storyText(s, centerMargin, 350);
  s = "you begin to dissociate as a chicken from a local farm appears to cross the road in front of you. you slam on your brakes and swerve out of control.";
  storyText(s, centerMargin, 500);
  s = name + ": death by chicken";
  storyText(s, centerMargin, 650);
}

function homeDec(){
  tracker = 12;
}
function work(){
  user.value('');
  clear();
  let s = "you head towards the giant lab complex looming above the mountains. the building would look relatively nondescript, like a massive beige shopping center, save for the green glass adorning its surface, like snake skin scales hugging the walls of a fortress";
  storyText(s, centerMargin, 100);
  s = "you park in the empty parking garage and head to building 153B, the hub of your company's work.";
  storyText(s, centerMargin, 300);
  s = "as you walk past the glass you see distorted versions of yourself reflected back. you don't know how to reconcile the power you feel inside with the bloody shell of a person you see in the window.";
  storyText(s, centerMargin, 400);


  //dr ryder = new boss

  //pass her test
    //forgetting things about yourself
    //do you feel empowered
  //answer honestly --> you work together to try and cure you
  //unlike other diseases, it is spread through the chicken
  //answer dishonestly --> she aims to kill you (not spread the chicken disease)
    //hear on radio - the disease has spread too far - too little left
    //
}

function workDec(){
  tracker = 14;
}

function work2(){
  user.value('');
  clear();
  let s = "the door slides open and limping down the hallway is Dr. Ryder, your boss.";
  storyText(s, centerMargin, 100);
  s = "her eyes widen in disbelief. yours do too. her arms are covered in layers of medical gauze. her hands, secured in boxing gloves. her distinctive leather jacket, replaced by layers of sweatshirts and long sleeves";
  storyText(s, centerMargin, 200);
  s = "she screams-" + name.toUpperCase() + "-and backs away";
  storyText(s, centerMargin, 350);
  s = "do you step forward to reassure her? or do you run from the scene?";
  storyText(s, centerMargin, 450);
  s = "type \"1\" to get closer, or \"2\" to flee at full speed";
  computerText(s, centerMargin, 550);
}

function work2Dec() {
  if(one(answer)){
    clear();
    risk++;
    tracker = 16;
  }
  else if(two(answer)){
    clear();
    tracker = 15;
  }
}

function run(){
  user.value('');
  clear();
  let s = "you trip over yourself to get out of the lab. your instincts are screaming at you to leave, even though you have lots of questions for Dr. Ryder.";
  storyText(s, centerMargin, 100);
  s = "you hear her thunderous voice behind you telling you to STOP - she says she just wants to talk";
  storyText(s, centerMargin, 200);
  s = "IT'S TOO LATE, you scream, but when you go race through the doors they don't open";
  storyText(s, centerMargin, 300);
  s = "you tug at the glass, plunging your hand into the millimeter gap blocking you from freedom, but to no avail";
  storyText(s, centerMargin, 400);
  s = "when you turn around, you see Dr. Ryder clutching a remote";
  storyText(s, centerMargin, 400);
}

function runDec(){
  tracker = 17;
}

function run2(){
  user.value('');
  clear();
  let s = "the woman in front of you grins. the smile glances off her eyes and then disappears. your eyes widen as she takes a step forward, but by then it's too late";
  storyText(s, centerMargin, 100);
  s = "";
  
}

function run2Dec(){

}

function walk(){

}

function walkDec(){

}

function death(){
  greeting.html(time + ":00 AM");
  clear();
  let s = "points: " + risk;
  storyText(s, centerMargin, 100);
  s = "do you wish to play again? say yes if you dare";
  computerText(s, centerMargin, 200);
}

function deathDec(){
  const answer = user.value();
  if(yes(answer)){
    user.value('');
    resetVar();
  }
}

function clear(){
  background(255);
}

function yes(a){
  if(a.toUpperCase() == "YES" || a.toUpperCase() == "Y"){
    return true;
  }
  else {
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

function three(a){
  if(a.toUpperCase() == "3" || a.toUpperCase() == "THREE"){
    return true;
  }
  else{
    return false;
  }
  
}

function resetVar(){
  tracker = 0;
  time = 6;
  risk = 0;
  name = "";
}

function computerText(str, x, y){
  textFont('Times New Roman')
  textAlign(CENTER);
  textSize(20);
  fill(7, 112, 7);
  text(str, x, y, 300, 200);
}

function storyText(str, x, y){
  textFont('Times New Roman')
  textAlign(CENTER);
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


