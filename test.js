var cardBodyEl = document.getElementById("cardbody");
var descriptionEl = document.getElementById("description");
var answerEl = document.getElementById("choices");
var choiceDiv = document.getElementById("choice-buttons");
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
      correct: "A: 1886"
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


// buttonEl.addEventListener("click", function(event) {
//     var secondsLeft = 40;
//     event.preventDefault();
//     // nextQuestion();

//     var timerInterval = setInterval(function() {
//         timeEl.textContent = "Time left: " + secondsLeft;
//         secondsLeft--;
//     if(secondsLeft === 0) {
//         clearInterval(timerInterval);
//     }
//     }, 1000);   
// });

  function end () {
    descriptionEl.textContent = "";
    // answerEl.textContent = "";
    buttonEl.textContent = "Start Over";
    count = 0
  }

  function checker(position) {
      if (questionArray[count].correct === questionArray[count].answers(position)) {
          alert("That's Correct");
      } else {
          alert("That's wrong")
      }
      questionArray++
      nextQuestion();
  }
  
  function nextQuestion() {
    // if(count != 0) {
    //     choiceDiv.style.visibility = "hidden";
    // }
    
    if(count === 0) {
        buttonEl.textContent = "Next Question";
        buttonEl.style.visibility = "hidden"
    }

    if(count === questionArray.length) {
        end()
        return
    }

    descriptionEl.textContent = questionArray[count].question;
    // answerEl.textContent = questionArray[count].answers;

    var answer = questionArray[count].answers;
    for (var i = 0; i < answer.length; i++) {
        var answerBtn = document.createElement("button");
        answerBtn.setAttribute('class', 'choices');
        answerBtn.onclick = function () {
            checker(i);
        }
        answerBtn.textContent = answer[i]
        choiceDiv.appendChild(answerBtn);
    }

    count++;
}


  buttonEl.addEventListener("click", nextQuestion)