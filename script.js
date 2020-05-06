var cardBodyEl = document.getElementById("cardbody");
var descriptionEl = document.getElementById("description");
var questionEl = document.getElementById("choices");
var buttonEl = document.getElementById("btn");
var scoreKeeperEl = document.getElementById("score-keeper");
var timeEl = document.getElementById("time");
var choiceZeroEl = document.getElementById("choice-zero");
var choiceOneEl = document.getElementById("choice-one");
var choiceTwoEl = document.getElementById("choice-two");
var choiceThreeEl = document.getElementById("choice-three");

// choiceZeroEl.style.visibility = "hidden";
// choiceOneEl.style.visibility = "hidden";
// choiceTwoEl.style.visibility = "hidden";
// choiceThreeEl.style.visibility = "hidden";

var count = 0
// var score = 0

var questionArray = [
    // Question 1
    {
      question: "What year was Arsenal Football Club formed?",
      answer0: "A: 1886",
      answer1:  "B: 1912",
      answer2:  "C: 1893",
      answer3:  "D: 1907",
      correct: "A: 1886",
    },
    
    // Question 2
    {
      question: "Who is the all-time Arsenal goal scorer?",
      answer0: "A: Dennis Bergkamp",
      answer1: "B: Thierry Henry",
      answer2: "C: Ian Write",
      answer3: "D: Robin Van Persie",
      correct: "B: Thierry Henry"
    },

    // Question 3 
    {
      question: "Which Arsenal coach has the most wins with the club?",
      answer0: "A: Unai Emery",
      answer1: "B: Don How",
      answer2: "C: Arsene Wenger",
      answer3: "D: Stewart Housten",
      correct: "C: Arsene Wenger"
    },

    // Question 4
    {
      question: "How many English Premier League titles does Arsenal have?",
      answers: ["A: 20",
        "B: 18",
        "C: 13",
        "D: 9"],
      correct: "C: 13"
    },
  ];

  function end () {
    descriptionEl.textContent = "";
    questionEl.textContent = "Your final score: ";
    buttonEl.textContent = "Start Over";
    count = 0
  }



buttonEl.addEventListener("click", function(event) {
    var secondsLeft = 40;
    event.preventDefault();
    // nextQuestion();

    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time left: " + secondsLeft;
        secondsLeft--;
    if(secondsLeft === 0) {
        clearInterval(timerInterval);
    }
    }, 1000);   
});

        
//     }

  function nextQuestion() {
    if(count === 0) {
        buttonEl.style.visibility = "hidden";
        // buttonEl.textContent = "Next Question";
    }

    descriptionEl.textContent = questionArray[count].question;
    // questionEl.textContent = questionArray[count].answers;
    
    
    choiceZeroEl.textContent = questionArray[count].answer0;
    choiceOneEl.textContent = questionArray[count].answer1;
    choiceTwoEl.textContent = questionArray[count].answer2;
    choiceThreeEl.textContent = questionArray[count].answer3;
    count++;

    if(count === questionArray.length) {
        end()
        return
    }
}


  buttonEl.addEventListener("click", nextQuestion)
//   choiceZeroEl.addEventListener("click", )
//   choiceOneEl.addEventListener("click", )
//   choiceTwoEl.addEventListener("click", )
//   choiceThreeEl.addEventListener("click", )