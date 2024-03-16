const questions = [
    { question: "What is 2 + 2?", options: ["2", "3", "4", "5"], answer: "4" },
    { question: "Capital of France?", options: ["Paris", "London", "Berlin", "Madrid"], answer: "Paris" }
];
let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");

    questionEl.innerText = questions[currentQuestionIndex].question;
    optionsEl.innerHTML = ""; // Clear previous options

    questions[currentQuestionIndex].options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => selectOption(option);
        optionsEl.appendChild(button);
    });
}

function selectOption(option) {
    const isCorrect = option === questions[currentQuestionIndex].answer;
    score += isCorrect ? 1 : -1;
    document.getElementById("score").innerText = score;
    nextQuestion();
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        document.getElementById("quiz-container").style.display = "none";
        document.getElementById("result").style.display = "block";
    }
}

displayQuestion();
