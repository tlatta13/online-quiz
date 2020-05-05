var cardBodyEl = document.getElementById("cardbody");
var descriptionEl = document.getElementById("description");
var questionEl = document.getElementById("choices");
var buttonEl = document.getElementById("btn");
var scoreKeeperEl = document.getElementById("score-keeper");


var count = 0
var score = 0

var questionArray = [
    // Question 1
    {
      question: "What year was Arsenal Football Club formed?",
      answers: ["A: 1886",
        "B: 1912",
        "C: 1893",
        "D: "],
      correct: "A: 1886",
    },
    
    // Question 2
    {
      question: "Who is the all-time Arsenal goal scorer?",
      answers: ["A: Dennis Bergkamp",
        "B: Thierry Henry",
        "C: Ian Write",
        "D: Robin Van Persie"],
      correct: "a"
    },

    // Question 3 
    {
      question: "Which Arsenal coach has the most wins with the club?",
      answers: ["A: Unai Emery",
        "B: Don How",
        "C: Arsene Wenger",
        "D: Stewart Housten"],
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
    questionEl.textContent = ("Your final score: " + score);
    buttonEl.textContent = "Start Over";
    count = 0
  }

  function nextQuestion() {
    if(count === 0) {
        buttonEl.textContent = "Next Question";
    }
    if(count === questionArray.length) {
        end()
        return
    }
    descriptionEl.textContent = questionArray[count].question;
    questionEl.textContent = questionArray[count].answers;
    count++;
}


  buttonEl.addEventListener("click", nextQuestion)

// 