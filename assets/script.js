// function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

// 	function showQuestions(questions, quizContainer){
// 		// code will go here
// 	}
// //each question is an array  
// console.log(myQuestions[0].question)
// 	function showResults(questions, quizContainer, resultsContainer){
//         var myQuestions = [
//             {
//                 question: "What is 10/2?",
//                 answers: {
//                     a: '3',
//                     b: '5',
//                     c: '115'
//                 },
//                 correctAnswer: 'b'
//             },
//             {
//                 question: "What is 30/3?",
//                 answers: {
//                     a: '3',
//                     b: '5',
//                     c: '10'
//                 },
//                 correctAnswer: 'c'
//             }
//         ];
// 	}

// 	// show the questions
// showQuestions(questions, quizContainer)
//     	// we'll need a place to store the output and the answer choices
// 	var output = [];
// 	var answers;


// 	// for each question...
// 	for(var i=0; i<questions.length; i++){
		
// 		// first reset the list of answers
// 		answers = [];

// 		// for each available answer to this question...
// 		for(letter in questions[i].answers){

// 			// ...add an html radio button
// 			answers.push(
// 				'<label>'
// 					+ '<input type="radio" name="question'+i+'" value="'+letter+'">'
// 					+ letter + ': '
// 					+ questions[i].answers[letter]
// 				+ '</label>'
// 			);
// 		}

// 		// add this question and its answers to the output
// 		output.push(
// 			'<div class="question">' + questions[i].question + '</div>'
// 			+ '<div class="answers">' + answers.join('') + '</div>'
// 		);
// 	}

// 	// finally combine our output list into one string of html and put it on the page
// 	quizContainer.innerHTML = output.join('');
// }

// 	// when user clicks submit, show results
// 	submitButton.onclick = function(){
// 		showResults(questions, quizContainer, resultsContainer);
// 	}

var Startbtn = document.getElementById("StartQuiz");
var QuizEl = document.getElementById("quiz");
var Questionsdiv = document.getElementById("Questions");
var TitleEl = document.getElementById("Title");
var QuestionIndex = 0;
var OptionsEl = document.getElementById("Options");

Startbtn.addEventListener("click", Quiz)

function Quiz(){
	Questionsdiv.style.display = "block";
	QuizEl.style.display = "none";
	GetQuestions();
}

function GetQuestions() {
	TitleEl.textContent = questions[QuestionIndex].title;
	
	for (var i=0; i < questions[QuestionIndex].options.length; i++) {
		var optionBtn = document.createElement("button");
		optionBtn.textContent = questions[QuestionIndex].options[i]
		OptionsEl.append(optionBtn)
		optionBtn.onclick = GetNextQuestion();
	}
}

function GetNextQuestion() {
	QuestionIndex++;
	GetQuestions();
}
