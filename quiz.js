// Buurt Pubquiz - Quiz Logic

let currentRound = 0;
let currentQuestion = 0;
let answerRevealed = false;

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    round: document.getElementById('round-screen'),
    end: document.getElementById('end-screen')
};

// Toon een scherm
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// Start de quiz
function startQuiz() {
    currentRound = 0;
    currentQuestion = 0;
    showRoundIntro();
}

// Toon ronde introductie
function showRoundIntro() {
    const round = quizData[currentRound];

    document.getElementById('next-round-number').textContent = `Ronde ${currentRound + 1}`;
    document.getElementById('next-round-title').textContent = `${round.emoji} ${round.name}`;
    document.getElementById('next-round-description').textContent = round.description;

    showScreen('round');
}

// Ga verder met de quiz na ronde intro
function continueQuiz() {
    loadQuestion();
    showScreen('quiz');
}

// Laad een vraag
function loadQuestion() {
    const round = quizData[currentRound];
    const question = round.questions[currentQuestion];

    // Update header
    document.getElementById('round-name').textContent = `Ronde ${currentRound + 1}`;
    document.getElementById('round-title').textContent = round.name;
    document.getElementById('question-counter').textContent =
        `Vraag ${currentQuestion + 1} van ${round.questions.length}`;

    // Update vraag
    document.getElementById('question-text').textContent = question.question;

    // Maak antwoord knoppen
    const answersContainer = document.getElementById('answers');
    answersContainer.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        btn.textContent = `${String.fromCharCode(65 + index)}. ${answer}`;
        btn.dataset.index = index;
        btn.onclick = () => selectAnswer(index);
        answersContainer.appendChild(btn);
    });

    // Reset knoppen
    answerRevealed = false;
    document.getElementById('show-answer-btn').style.display = 'inline-block';
    document.getElementById('next-btn').disabled = true;
}

// Selecteer een antwoord (optioneel, voor interactief spelen)
function selectAnswer(index) {
    if (answerRevealed) return;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    buttons[index].classList.add('selected');
}

// Toon het juiste antwoord
function showAnswer() {
    const round = quizData[currentRound];
    const question = round.questions[currentQuestion];
    const correctIndex = question.correct;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach((btn, index) => {
        btn.classList.add('revealed');
        if (index === correctIndex) {
            btn.classList.add('correct');
        } else if (btn.classList.contains('selected')) {
            btn.classList.add('incorrect');
        }
    });

    answerRevealed = true;
    document.getElementById('show-answer-btn').style.display = 'none';
    document.getElementById('next-btn').disabled = false;
}

// Volgende vraag
function nextQuestion() {
    const round = quizData[currentRound];

    currentQuestion++;

    // Check of ronde klaar is
    if (currentQuestion >= round.questions.length) {
        currentQuestion = 0;
        currentRound++;

        // Check of quiz klaar is
        if (currentRound >= quizData.length) {
            showScreen('end');
        } else {
            showRoundIntro();
        }
    } else {
        loadQuestion();
    }
}

// Herstart de quiz
function restartQuiz() {
    currentRound = 0;
    currentQuestion = 0;
    showScreen('start');
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (screens.quiz.classList.contains('active')) {
        if (e.key === ' ' || e.key === 'Enter') {
            if (!answerRevealed) {
                showAnswer();
            } else {
                nextQuestion();
            }
        }
        // Cijfertoetsen voor antwoorden
        if (['1', '2', '3', '4'].includes(e.key)) {
            selectAnswer(parseInt(e.key) - 1);
        }
    }
});
