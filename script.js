const questions = [
    {
        questions: "Jakie zwierzę jest największe na świecie?",
        answers: [
            {text: "Rekin", correct: false},
            {text: "Bialy Wieloryb", correct: true},
            {text: "zyrafa", correct: false},
            {text: "mysz", correct: false},
        ]
    },
    {
        questions: "Jakie zwierzę jest najszybsze na świecie",
        answers: [
            {text: "Zółw", correct: false},
            {text: "Miecznik", correct: false},
            {text: "Sokół", correct: false},
            {text: "gepard", correct: true,}
        ]
    },
    {
        questions: "Jakie zwierzę widzi w nocy?",
        answers: [
            {text: "Kot", correct: true},
            {text: "Pies", correct: false},
            {text: "Słoń", correct: false},
            {text: "Papuga", correct: false,}
        ]
    },
    {
        questions: "Jakie zwierzę nie potrafi latać?",
        answers: [
            {text: "Pingwin", correct: true},
            {text: "Orzeł", correct: false},
            {text: "Nietoperz", correct: false},
            {text: "Papuga", correct: false,}
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function starQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let question = currentQuestionIndex + 1;
    questionElement.innerHTML = question + "." + currentQuestion.
    questions;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }


}

starQuiz();