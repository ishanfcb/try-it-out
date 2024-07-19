let lang;
  // console.log('lang')
let speechRec;
let command;

function setup(){
  // noCanvas();
  createCanvas(600, 400);
  background(94, 98, 184);
  textSize(22);
  textAlign(CENTER);
  text("say one of the following: up, down, left, right", width / 2, height / 2);
  
  let lang = navigator.language || 'en-US';
  console.log(lang);
  let speechRec = new p5.SpeechRec(lang, gotSpeech);
  
  // console.log('speechRec')
  let continuous = true;
  let interim = false;
  
  speechRec.start(continuous, interim);
  
  function gotSpeech(){
    if (speechRec.resultValue == true){
      command = speechRec.resultString;
      // createP(command);
      textAlign(CENTER)
      console.log(command);
      // let woah= text(command, width/2, height/2.3);
      // console.log(woah)
    }
    // console.log(speechRec);
  // point(width/2, height/3)
  // strokeWeight(15);
  
  }
}

//   function result(){
//     let speechRec = new p5.SpeechRec(lang, gotSpeech);
//     if (speechRec.resultValue == true){
//       // text(speechRec.result, x, y);
//       // textAlign(CENTER)
      
//     }
//   }

let x = 300;
let y= 300;

function draw(){
  console.log(command);
  point(x,y);
  strokeWeight(10);
  stroke('red');
  
//   let speechRec;
  if(command == "right"){
    x = x + 15;
    command = 'bla';
  } 
  else if (command == "left"){
    x = x - 15;
    command = 'bla';
  }
  else if(command == "down"){
    y = y - 15;
    command = 'bla';
  } 
  else if (command == "up"){
    y = y + 15;
    command = 'bla';
  }
}