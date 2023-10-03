var user ={
    score: 0,
    userName: "",
    finished: false,
};
var questionList = [
    {
        question: "sample question 1?",
            b0: "test answer false",
            b1: "test answer false",
            b2: "correct answer",
            b3: "test answer false",
        answerKey: "b2"
    },
    {
        question: "sample question 2?",
            b0: "correct answer",
            b1: "test answer false",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b0"
    },
    {
        question: "sample question 3?",
            b0: "test answer false",
            b1: "correct answer",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b1"
    },
    {
        question: "sample question 4?",
            b0: "test answer false",
            b1: "correct answer",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b1"
    },
    {
        question: "sample question 5?",
            b0: "test answer false",
            b1: "correct answer",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b1"
    },
    {
        question: "sample question 6?",
            b0: "test answer false",
            b1: "correct answer",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b1"
    },
    {
        question: "sample question 7?",
            b0: "test answer false",
            b1: "correct answer",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b1"
    },
    {
        question: "sample question 8?",
            b0: "test answer false",
            b1: "correct answer",
            b2: "test answer false",
            b3: "test answer false",
        answerKey: "b1"
    },
    
]
var currentQuestion = 0;
var clock;
var timeRemaining;
var instructionsEl = document.querySelector("#instructions");
var rankingMasterEl = document.querySelector("#rankingMaster");
var userDataEl = document.querySelector("#userData");
var enteredName = document.querySelector("#userName").value;
var scoreDisplayEl = document.querySelector("#scoreDisplay");
var clockDisplayEl = document.querySelector("#timerDisplay");
var scoreEl = document.querySelector("#score");
var clockEl = document.querySelector("#timer");
var timeUp = document.querySelector("#timerBlurb");
var startButtonEl = document.querySelector("#startQuizButton");
var rankingsButtonEl = document.querySelector("#rankingsButton");
var answersEl = document.querySelectorAll("#questionAnswer");
var quizEl = document.querySelector(".quizDisplay");
var questionMasterEl = document.querySelector(".questionMaster");
var questionEl = document.querySelector("#questionDisplay");
var answerButton0El = document.querySelector("#b0");
var answerButton1El = document.querySelector("#b1");
var answerButton2El = document.querySelector("#b2");
var answerButton3El = document.querySelector("#b3");

function countdown () {
    timeRemaining = 50;
    clearInterval(clock);
    clockEl.textContent = timeRemaining;
    timeUp.textContent = " Seconds Remain!";
    clockDisplayEl.disabled = false;
    clockDisplayEl.hidden = false;
    clock = setInterval(function(){
        timeRemaining--;
        clockEl.textContent = timeRemaining;
        if (timeRemaining == 0){
            rankings();
        }
    },1000)
    
} 

function hideInstructions(){
    instructionsEl.disabled = true;
    instructionsEl.hidden = true;
}

function showInstructions(){
    instructionsEl.disabled = false;
    instructionsEl.hidden = false;
}

function displayScore(){
    scoreEl.textContent = user.score + " points!";
}

function hideRankings() {
    rankingMasterEl.disabled = true;
    rankingMasterEl.hidden = true;
}

function hideTimer(){
    clockDisplayEl.disabled = true;
    clockDisplayEl.hidden = true;
}

function hideQuiz() {
    questionMasterEl.disabled = true;
    questionMasterEl.hidden = true;
}

function itterateQuestion(){
    questionEl.textContent = questionList[currentQuestion].question;
    answerButton0El.textContent = questionList[currentQuestion].b0;
    answerButton1El.textContent = questionList[currentQuestion].b1;
    answerButton2El.textContent = questionList[currentQuestion].b2;
    answerButton3El.textContent = questionList[currentQuestion].b3;
}

function nextQuestion(){
    currentQuestion++;
    if( currentQuestion < questionList.length){
    itterateQuestion();
    }
    else{
        user.finished = true;
        rankings();
    }
}

function userReset () {
    user.score = 0;
    user.finished = false;
    user.userName = "";

}

function endQuiz(){
        startButtonEl.disabled = false;
        startButtonEl.hidden = false;
        hideQuiz();
    if (timeRemaining == 0){
        clockEl.textContent = "";
        clearInterval(clock);
        timeUp.textContent = "Time's Up!";
        user.finished = true;
    }
    else {
        clockEl.textContent = "";
        clearInterval(clock);
        timeUp.textContent = "";
    }
}


function startQuiz(){
    userReset();
    hideInstructions();
    countdown();
    displayScore();
    questionMasterEl.disabled = false;
    questionMasterEl.hidden = false;
    startButtonEl.disabled = true
    startButtonEl.hidden = true
    itterateQuestion();
}

function rankings (){
    rankingMasterEl.disabled = false;
    rankingMasterEl.hidden = false;
    showInstructions();
    endQuiz();
    console.log(user);
}


function checkAnswer0(){
    var answer1 = this.id.toString();
   if( answer1 === questionList[currentQuestion].answerKey){
    user.score += 5
    displayScore();
    nextQuestion();
   }
   else{
    user.score -= 5
    displayScore();
    nextQuestion();
   }
}

function checkAnswer1(){
    var answer2 = this.id.toString();
        if( answer2 === questionList[currentQuestion].answerKey){
            user.score += 5
            displayScore();
            nextQuestion();
        }
        else{
            user.score -= 5
            displayScore();
            nextQuestion();
        }
}

function checkAnswer2(){
    var answer3 = this.id.toString();
    if( answer3 === questionList[currentQuestion].answerKey){
     user.score += 5
     displayScore();
     nextQuestion();
    }
    else{
        user.score -= 5
        displayScore();
        nextQuestion(); 
    }
 }

function checkAnswer3(){
    var answer4 = this.id.toString();
   if( answer4 === questionList[currentQuestion].answerKey){
    user.score += 5
    displayScore();
    nextQuestion();
   }
   else{
    user.score -= 5
    displayScore();
    nextQuestion();
   }
}

startButtonEl.addEventListener("click", startQuiz);

rankingsButtonEl.addEventListener("click", rankings);

answerButton0El.addEventListener("click", checkAnswer0);

answerButton1El.addEventListener("click", checkAnswer1);

answerButton2El.addEventListener("click", checkAnswer2);

answerButton3El.addEventListener("click", checkAnswer3);

hideRankings();
hideQuiz();
hideTimer();