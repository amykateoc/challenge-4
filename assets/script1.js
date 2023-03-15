var Startbtn = document.getElementById("StartQuiz");
var QuizEl = document.getElementById("quiz");
var Questionsdiv = document.getElementById("Questionsdiv");
var TitleEl = document.getElementById("titles");
var QuestionIndex = 0;
var OptionsEl = document.getElementById("options");
var GetResultsEl = document.getElementById("resultsbutton")
var AnswersEl = document.getElementById("Results")
var AnswersTitleEl = document.getElementById("resultstitles")
var CorrectAnswer = document.getElementById("answers")
var timer = document.getElementById("time");
var timeLeft = questions.length * 15;
var timerEl;

Startbtn.addEventListener("click", Quiz)

function Quiz(){
	Questionsdiv.style.display = "block";
	QuizEl.style.display = "none";
	StartTimer();
	var resultsBtn = document.createElement("button");
	timerEl = setInterval(StartTimer,1000)
	// resultsBtn.textContent = "Get Results";
	// GetResultsEl.append(resultsBtn)
	//resultsBtn.onclick = GetResults();
	GetQuestions();
}

function StartTimer(){
		timeLeft--;
		timer.textContent = timeLeft + " seconds left";
		if(timeLeft <= 0) {
			endQuiz();
		}
	
}

	// var timerInterval = setInterval(function(){
	// 	timeLeft--;
	// 	timer.textContent = timeLeft + " seconds left";

		// if(timeLeft === 0) {
		// 	clearInterval(timerInterval);
		// 	//optionBtn.disabled = true;
		// 	//this is a local variable and needs to be global
		// }
	// }, 1000);

function GetQuestions() {
	OptionsEl.textContent = "";
	TitleEl.textContent = questions[QuestionIndex].title;

	for (var i=0; i < questions[QuestionIndex].options.length; i++) {
		var optionBtn = document.createElement("button");
		var choice = questions[QuestionIndex].options[i];
		optionBtn.setAttribute("class", "choice")
		optionBtn.setAttribute("value", choice)
		optionBtn.textContent = choice;
		optionBtn.onclick = GetNextQuestion;
		OptionsEl.append(optionBtn);
	}
}

function GetNextQuestion(event) {
	var buttonClicked = event.target;
	if(!buttonClicked.matches(".choice")) {
		return;
	}
	if(buttonClicked.value !== questions[QuestionIndex].answer) {
		timeLeft -= 5;
		alert("This answer is wrong");
	}
	else {
		alert("This is correct");
	}

	QuestionIndex++;
	if(timeLeft <= 0 || QuestionIndex === questions.length) {
		endQuiz();
	}
	else {
		GetQuestions(); 
	}
}

function endQuiz() {
	Questionsdiv.style.display = "none";
	AnswersEl.style.display = "block";
	clearInterval(timerEl);
}

function GetResults() {
AnswersEl.style.display = "block";
QuizEl.style.display = "none";
AnswersTitleEl.textContent = questions[QuestionIndex].title;
}
