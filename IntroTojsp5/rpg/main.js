let user, button, greeting;
let tracker = 0;
let score = 0;

function setup() {
  // create canvas
  createCanvas(710, 400);

  user = createInput();
  user.position(20, 65);

  button = createButton('submit');
  button.position(user.x + user.width, 65);
  button.mousePressed(action);

  greeting = createElement('h2', 'welcome. what is your name?');
  greeting.position(20, 5);

  
  textAlign(LEFT);
  textSize(30);
}

function action(){
  if(tracker == 0){
    greet();
  }
  else if(tracker == 1){
    reply();
  }
}

function greet() {
  const answer = user.value();
  greeting.html('welcome ' + answer + '!');
  user.value('');

  text("are you ready?", 50, 200);
  
  tracker = 1;
  
}


function reply() {
  background(255);
  const answer = user.value();
  greeting.html('score: ' + score);
  
  user.value('');
  if(yes(answer)) {
    text("i'm glad. click the button to continue", 50, 200);
  }
  else {
    text("too bad. click the button to continue", 50, 200);
  }
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