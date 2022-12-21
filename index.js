var readlineSync = require('readline-sync');

var score = 0; //Initialization of score

// high score leaderboard
var highScores = [
  {
    name: "Vivek",
    score: 6
  },
  {
    name: "Sachin",
    score: 4
  },
  {
    name: "Rajesh",
    score: 5
  }
]

// array of objects
var questions = [
  {
    question: "Full form of Wifi ?",
    answer: "Wireless Fidelity"
  },{
    question: "Full form of API ? ",
    answer: "Application Programming Interface"
  },{
    question: "Full form of APK ? ",
    answer:"Android Application Package"
  },{
    question: "Full form of USB ? ",
    answer: "Universal Serial Bus"
  },{
    question: "Full form of SMS ? ",
    answer: "Short Message Service"
  },{
    question: "Full form of URL ? ",
    answer: "Uniform Resource Locator"
  }
];


function welcome(){
  var userName = readlineSync.question("What is your Name ?");
  console.log("Welcome " + userName + "to the Quiz app...")
}

function play(question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase() === answer.toUpperCase()){ //branching
    console.log("right!");
    score = score + 1;
  }else{
    console.log("oops! google it...")
  }

  console.log("Your score is: " + score);
  console.log("_______________________");
}


function  game() {
  for(var i=0; i<questions.length; i++){
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer);//accessing objects as .question and .answer
  }
}

function showScores(){
  console.log("YAY ! You scored: " + score);
  console.log("___________");
  console.log("LEADERBOARD");
  console.log("___________");

  highScores.map(score => console.log(score.name +":"+ score.score));
}

welcome()
game()
showScores()