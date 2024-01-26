const questions = [
    {
        question: "Identify this scale ",
        audio: "assets/audio/c-major.wav",
        answers: [
            {text: "C Dorian", correct: false},
            {text: "C Locrian", correct: false},
            {text: "C Major", correct: true},
            {text: "C phryigian", correct: false},
        ]
    },
    {
        question: "Identify this scale",
        audio: "assets/audio/c-dorian.wav",
        answers: [
            {text: "C Dorian 2", correct: true},
            {text: "C phryigian", correct: false},
            {text: "C Major", correct: false},
            {text: "C Locrian", correct: false},
        ]  
    },
    {
        question: "Identify this scale",
        audio: "assets/audio/c-phrygian.wav",
        answers: [
            {text: "C Dorian 3", correct: false},
            {text: "C Locrian", correct: false},
            {text: "C Major", correct: false},
            {text: "C phryigian", correct: true},
        ]
    },
    {
        question: "Identify this scale",
        audio: "assets/audio/c-locrian.wav",
        answers: [
            {text: "C Dorian 4", correct: false},
            {text: "C Locrian", correct: true},
            {text: "C Major", correct: false},
            {text: "C phryigian", correct: false},
        ]
    },
    {
        question: "Identify this scale",
        audio: "assets/audio/c-minor.wav",
        answers: [
            {text: "C Dorian 5", correct: false},
            {text: "C Locrian", correct: false},
            {text: "C Major", correct: false},
            {text: "C Minor", correct: true},
        ]
    }
];
let shuffledQuestions = [];
const totalQuizQuestions = 5;
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const questionAudio = document.getElementById("audio-question");

let currentQuestionIndex = 0;
let score = 0;

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function startQuiz() {
    shuffledQuestions = shuffle(questions);
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next"
    showQuestion();
}


function showQuestion() {
    resetState();
    let currentQuestion = shuffledQuestions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;
    questionAudio.src = currentQuestion.audio;   


    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}


function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer (e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${totalQuizQuestions}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < totalQuizQuestions) {
        showQuestion();
    }else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < totalQuizQuestions){
        handleNextButton();
    } else {
        startQuiz();
    }
})

startQuiz();











