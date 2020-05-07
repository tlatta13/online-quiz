var cardBodyEl = document.getElementById("cardbody");
var descriptionEl = document.getElementById("description");
// var answerEl = document.getElementById("choices");
var choiceDiv = document.getElementById("choice-buttons");
var buttonEl = document.getElementById("btn");
// var scoreKeeperEl = document.getElementById("score-keeper");
var timeEl = document.getElementById("time");

var count = 0

var questionArray = [
    // Question 1
    {
      question: "What year was Arsenal Football Club formed?",
      answers: ["A: 1886",
        "B: 1912",
        "C: 1893",
        "D: 1907"],
      correct: "A: 1886",
    },
    
    // Question 2
    {
      question: "Who is the all-time Arsenal goal scorer?",
      answers: ["A: Dennis Bergkamp",
        "B: Thierry Henry",
        "C: Ian Write",
        "D: Robin Van Persie"],
      correct: "B: Thierry Henry",
    },

    // Question 3 
    {
      question: "Which Arsenal coach has the most wins with the club?",
      answers: ["A: Unai Emery",
        "B: Don How",
        "C: Arsene Wenger",
        "D: Stewart Housten"],
      correct: "C: Arsene Wenger",
    },

    // Question 4
    {
      question: "How many English Premier League titles does Arsenal have?",
      answers: ["A: 20",
        "B: 18",
        "C: 13",
        "D: 9"],
      correct: "C: 13",
    },
  ];

var secondsLeft = 60;
buttonEl.addEventListener("click", function(event) {
    event.preventDefault();
    // nextQuestion();

    var timerInterval = setInterval(function() {
        timeEl.textContent = "Time left: " + secondsLeft;
        secondsLeft--;
    if(secondsLeft < 0) {
        clearInterval(timerInterval);
        descriptionEl.textContent = "Times Up. You scored: 0";
        choiceDiv.textContent = "";
    }
    }, 1000);   
});

  
function end() {
    descriptionEl.textContent = "You scored: " + secondsLeft;
    choiceDiv.textContent = "";
    timeEl.textContent = "";
    timerInterval = stop;
    buttonEl.textContent = "Start Over";
    count = 0
}

  function checker(event) { 
    if(questionArray[count].correct === event.target.value) {
          alert("That's Correct");
      } else {
          secondsLeft -= 10;
      }
      count++
      nextQuestion();
  }
  
function nextQuestion() {
    if(count === 0) {
        buttonEl.style.visibility = "hidden"
    }

    if(count === questionArray.length) {
        choiceDiv.textContent = prompt("Enter you initials: ");

    }

    // Display Questions
    descriptionEl.textContent = questionArray[count].question;
    console.log(count)
    choiceDiv.textContent = ""
    // Display Answer Choices
    var answer = questionArray[count].answers;
    for (var i = 0; i < answer.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute('id', 'choices');
        answerBtn.setAttribute('value', answer[i]);
        answerBtn.onclick = checker;
        answerBtn.textContent = answer[i]
        choiceDiv.appendChild(answerBtn);
    }
}

buttonEl.addEventListener("click", nextQuestion)