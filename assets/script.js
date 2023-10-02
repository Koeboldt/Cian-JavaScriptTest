var user ={
    scoreBase: 0,
    userName: "",
    finished: false,
};

var clock;
var timeRemaining = 50;
var scoreDisplayEl = document.querySelector("#scoreDisplay")
var clockDisplayEl = document.querySelector("#timerDisplay")
var scoreEl = document.querySelector("#score")
var clockEl = document.querySelector("#timer")
var timeUp = document.querySelector("#timerBlurb")
var startButtonEl = document.querySelector("#startQuizButton")
var rankingsButtonEl = document.querySelector("#rankingsButton")
var answersEl = document.querySelectorAll("#questionAnswer")
var quizEl = document.querySelector(".quizDisplay")
var questionMasterEl = document.querySelector(".questionMaster")
var questionEl = document.querySelector("#questionDisplay")
var answerButton0El = document.querySelector("#b0")
var answerButton1El = document.querySelector("#b1")
var answerButton2El = document.querySelector("#b2")
var answerButton3El = document.querySelector("#b3")

function countdown () {
    clock = setInterval(function(){
        timeRemaining--;
        clockEl.textContent = timeRemaining;
        console.log(timeRemaining)
        if (timeRemaining == 0){
            endQuiz();
            timeUp.textContent = "Time's Up!";
        }
    },1000)
    
}

function 

function endQuiz () {
clearInterval(clock);
clockEl.textContent = "";
startButtonEl.disabled = false;
startButtonEl.hidden = false;
rankings();
}

function startQuiz (){
    startButtonEl.disabled = true
    startButtonEl.hidden = true
    timeRemaining = 50;
    clearInterval(clock);
    countdown();
}

function rankings (){

}

startButtonEl.addEventListener("click", startQuiz);

rankingsButtonEl.addEventListener("click", rankings);