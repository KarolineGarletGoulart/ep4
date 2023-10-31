const questions = [
    {
        question: "Qual é a linguagem de programação usada para desenvolver este quiz?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript"
    },
    {
        question: "Qual função é usada para selecionar um elemento HTML pelo seu ID?",
        options: ["getElementById", "querySelector", "selectElement", "getById"],
        correctAnswer: "getElementById"
    },
    {
        question: "Quais são os três tipos de estruturas condicionais em JavaScript?",
        options: ["if/else", "switch/case", "while", "for"],
        correctAnswer: "if/else"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const resultElement = document.getElementById("result");

    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        optionsElement.innerHTML = '';

        questions[currentQuestion].options.forEach((option, index) => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
            optionsElement.appendChild(label);
        });
    } else {
        questionElement.textContent = '';
        optionsElement.innerHTML = '';
        resultElement.textContent = `Pontuação: ${score} de ${questions.length}`;
    }
}

function nextQuestion() {
    const selectedOption = document.querySelector('input[name="option"]:checked');

    if (selectedOption) {
        if (selectedOption.value === questions[currentQuestion].correctAnswer) {
            score++;
        }

        currentQuestion++;
        loadQuestion();
    }
}

loadQuestion();
