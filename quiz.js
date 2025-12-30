// Eindejaarsquiz 2025 - Premium Buurtmensen
// Maandelijkse structuur: 12 maanden × 5 vragen = 60 vragen

let currentMonth = 0;
let currentQuestion = 0;
let answerRevealed = false;

// Confetti colors
const confettiColors = ['#d4af37', '#f4e4a6', '#a68b2a', '#ffffff', '#8b5cf6', '#10b981', '#ef4444'];

// Create confetti effect
function createConfetti(count = 100) {
    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
            confetti.style.width = (Math.random() * 10 + 5) + 'px';
            confetti.style.height = (Math.random() * 10 + 5) + 'px';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';
            confetti.style.animationDelay = (Math.random() * 0.5) + 's';

            // Random shapes
            const shapes = ['50%', '0%', '30% 70% 70% 30% / 30% 30% 70% 70%'];
            confetti.style.borderRadius = shapes[Math.floor(Math.random() * shapes.length)];

            document.body.appendChild(confetti);

            // Remove after animation
            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// Slot type configuratie
const slotConfig = {
    news: { emoji: '📰', label: 'Nieuws', class: 'news' },
    kids: { emoji: '🧒', label: 'Kids', class: 'kids' },
    music: { emoji: '🎵', label: 'Muziek', class: 'music' },
    viral: { emoji: '🔥', label: 'Viral', class: 'viral' },
    buurt: { emoji: '🏘️', label: 'Buurt', class: 'buurt' }
};

// DOM Elements
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    month: document.getElementById('month-screen'),
    end: document.getElementById('end-screen')
};

// Toon een scherm
function showScreen(screenName) {
    Object.values(screens).forEach(screen => {
        if (screen) screen.classList.remove('active');
    });
    if (screens[screenName]) {
        screens[screenName].classList.add('active');

        // Trigger confetti on end screen
        if (screenName === 'end') {
            setTimeout(() => createConfetti(150), 300);
        }
    }
}

// Start de quiz
function startQuiz() {
    currentMonth = 0;
    currentQuestion = 0;
    showMonthIntro();
}

// Toon maand introductie
function showMonthIntro() {
    const month = quizData.months[currentMonth];

    document.getElementById('next-month-number').textContent = `Maand ${currentMonth + 1} van 12`;
    document.getElementById('next-month-title').textContent = month.name;
    document.getElementById('next-month-theme').textContent = month.theme_hint;

    // Update timeline op startscherm
    updateTimeline();

    showScreen('month');
}

// Update timeline markers
function updateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        item.classList.remove('active', 'completed');
        if (index < currentMonth) {
            item.classList.add('completed');
        } else if (index === currentMonth) {
            item.classList.add('active');
        }
    });
}

// Ga verder met de quiz na maand intro
function continueQuiz() {
    loadQuestion();
    showScreen('quiz');
}

// Laad een vraag
function loadQuestion() {
    const month = quizData.months[currentMonth];
    const question = month.questions[currentQuestion];
    const totalQuestions = month.questions.length;

    // Update header
    document.getElementById('month-name').textContent = month.name;
    document.getElementById('month-theme').textContent = month.theme_hint;
    document.getElementById('month-number').textContent = currentMonth + 1;
    document.getElementById('question-counter').textContent = `Vraag ${currentQuestion + 1}/${totalQuestions}`;

    // Update progress bar
    const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;

    // Update slot badge
    const slotBadge = document.getElementById('slot-badge');
    const slot = slotConfig[question.slot_type] || slotConfig.news;
    slotBadge.textContent = `${slot.emoji} ${slot.label}`;
    slotBadge.className = `slot-badge ${slot.class}`;

    // Update difficulty badge
    const diffBadge = document.getElementById('difficulty-badge');
    const audience = question.target_audience || 'mixed';
    if (audience === 'kids') {
        diffBadge.textContent = '🧒 Kinderen';
        diffBadge.className = 'difficulty-badge kids';
    } else if (audience === 'adults') {
        diffBadge.textContent = '🧠 Volwassenen';
        diffBadge.className = 'difficulty-badge adults';
    } else {
        diffBadge.textContent = '👨‍👩‍👧 Familie';
        diffBadge.className = 'difficulty-badge mixed';
    }

    // Update points badge
    const points = question.points || 1;
    document.getElementById('points-badge').textContent = `${points} punt${points > 1 ? 'en' : ''}`;

    // Update media (afbeelding, video of audio)
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';

    // Only show media immediately if it's not an "after_answer" type
    if (question.media && question.media.type !== 'none' &&
        question.media.type !== 'video_after_answer' &&
        question.media.type !== 'image_after_answer') {
        if (question.media.type === 'image') {
            const img = document.createElement('img');
            img.src = question.media.url;
            img.alt = question.media.alt_text || 'Quiz afbeelding';
            img.loading = 'lazy';
            mediaContainer.appendChild(img);
        } else if (question.media.type === 'video') {
            const iframe = document.createElement('iframe');
            let videoUrl = question.media.url;
            if (question.media.start_seconds) {
                videoUrl += `?start=${question.media.start_seconds}`;
            }
            iframe.src = videoUrl;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            mediaContainer.appendChild(iframe);
        } else if (question.media.type === 'audio') {
            const audio = document.createElement('audio');
            audio.src = question.media.url;
            audio.controls = true;
            if (question.media.autoplay) audio.autoplay = true;
            mediaContainer.appendChild(audio);
        } else if (question.media.type === 'audio_youtube') {
            // YouTube audio-only: iframe is hidden, only audio plays
            const wrapper = document.createElement('div');
            wrapper.className = 'audio-youtube-wrapper';

            const iframe = document.createElement('iframe');
            let videoUrl = question.media.url;
            // Add autoplay parameter
            if (videoUrl.includes('?')) {
                videoUrl += '&autoplay=1';
            } else {
                videoUrl += '?autoplay=1';
            }
            iframe.src = videoUrl;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.className = 'audio-youtube-iframe';

            const label = document.createElement('div');
            label.className = 'audio-youtube-label';
            label.innerHTML = '🎵 <span>Luister goed...</span>';

            wrapper.appendChild(iframe);
            wrapper.appendChild(label);
            mediaContainer.appendChild(wrapper);
        }
    }

    // Handle intro text and lyrics hint for music_lyrics questions
    const questionCard = document.querySelector('.question-card');
    const existingIntro = questionCard.querySelector('.intro-text');
    const existingLyrics = questionCard.querySelector('.lyrics-hint');
    if (existingIntro) existingIntro.remove();
    if (existingLyrics) existingLyrics.remove();

    if (question.intro_text) {
        const introEl = document.createElement('div');
        introEl.className = 'intro-text';
        introEl.textContent = question.intro_text;
        // Insert before question text
        const questionText = document.getElementById('question-text');
        questionText.parentNode.insertBefore(introEl, questionText);
    }

    if (question.lyrics_hint) {
        const lyricsEl = document.createElement('div');
        lyricsEl.className = 'lyrics-hint';
        // Format lyrics with line breaks and highlight missing line
        const lines = question.lyrics_hint.split('\n');
        lyricsEl.innerHTML = lines.map(line => {
            if (line.trim() === '....') {
                return '<span class="missing-line">🎵 .... 🎵</span>';
            }
            return `<span class="lyric-line">${line}</span>`;
        }).join('');
        // Insert before question text
        const questionText = document.getElementById('question-text');
        questionText.parentNode.insertBefore(lyricsEl, questionText);
    }

    // Update vraag
    document.getElementById('question-text').textContent = question.question_text;

    // Bepaal vraagtype en toon juiste interface
    const answersContainer = document.getElementById('answers');
    const openAnswerContainer = document.getElementById('open-answer-container');
    const openAnswerInput = document.getElementById('open-answer-input');

    answersContainer.innerHTML = '';
    openAnswerContainer.style.display = 'none';

    // Hide answers for audio_youtube (listen & guess questions)
    const isListenQuestion = question.media && question.media.type === 'audio_youtube';

    if (isListenQuestion) {
        // Luistervraag: geen antwoorden tonen, mensen moeten zelf raden
        // Antwoorden worden pas bij "Toon Antwoord" getoond
    } else if (question.question_type === 'open_question') {
        // Open vraag
        openAnswerContainer.style.display = 'block';
        openAnswerInput.value = '';
        openAnswerInput.placeholder = 'Typ je antwoord...';
        openAnswerInput.focus();
    } else if (question.question_type === 'true_false') {
        // Waar/Niet waar
        ['Waar', 'Niet waar'].forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = answer;
            btn.dataset.index = index;
            btn.dataset.value = index === 0;
            btn.onclick = () => selectAnswer(index);
            answersContainer.appendChild(btn);
        });
    } else {
        // Multiple choice (default)
        const options = question.payload?.options || question.answers || [];
        options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            const text = typeof option === 'object' ? option.text : option;
            const key = typeof option === 'object' ? option.key : String.fromCharCode(65 + index);
            btn.textContent = `${key}. ${text}`;
            btn.dataset.index = index;
            btn.dataset.key = key;
            btn.onclick = () => selectAnswer(index);
            answersContainer.appendChild(btn);
        });
    }

    // Reset state
    answerRevealed = false;
    document.getElementById('show-answer-btn').style.display = 'inline-flex';
    document.getElementById('next-btn').disabled = true;
}

// Selecteer een antwoord
function selectAnswer(index) {
    if (answerRevealed) return;

    const buttons = document.querySelectorAll('.answer-btn');
    buttons.forEach(btn => btn.classList.remove('selected'));
    if (buttons[index]) {
        buttons[index].classList.add('selected');
    }
}

// Toon het juiste antwoord
function showAnswer() {
    const month = quizData.months[currentMonth];
    const question = month.questions[currentQuestion];

    const buttons = document.querySelectorAll('.answer-btn');
    const openAnswerContainer = document.getElementById('open-answer-container');

    if (question.question_type === 'open_question') {
        // Toon correct antwoord voor open vraag
        const correctAnswer = question.payload?.correct_answer || question.correct_answer || '';
        const alternatives = question.payload?.alternatives || [];

        let answerText = correctAnswer;
        if (alternatives.length > 0) {
            answerText += ` (ook goed: ${alternatives.join(', ')})`;
        }

        const answerDisplay = document.createElement('div');
        answerDisplay.className = 'open-answer-reveal';
        answerDisplay.innerHTML = `<strong>Correct antwoord:</strong> ${answerText}`;
        openAnswerContainer.appendChild(answerDisplay);

    } else if (question.question_type === 'true_false') {
        // Waar/Niet waar
        const correctValue = question.payload?.correct_answer;
        buttons.forEach((btn, index) => {
            btn.classList.add('revealed');
            const isCorrect = (index === 0) === correctValue;
            if (isCorrect) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected')) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        // Multiple choice
        const correctKey = question.payload?.correct_option;
        const correctIndex = question.correct !== undefined ? question.correct :
            (correctKey ? ['A', 'B', 'C', 'D'].indexOf(correctKey) : 0);

        buttons.forEach((btn, index) => {
            btn.classList.add('revealed');
            if (index === correctIndex) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected')) {
                btn.classList.add('incorrect');
            }
        });
    }

    // Show media after answer if applicable
    if (question.media && (question.media.type === 'video_after_answer' || question.media.type === 'image_after_answer' || question.media.type === 'audio_youtube')) {
        const mediaContainer = document.getElementById('media-container');
        mediaContainer.innerHTML = '';

        if (question.media.type === 'video_after_answer') {
            const iframe = document.createElement('iframe');
            iframe.src = question.media.url;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            mediaContainer.appendChild(iframe);
        } else if (question.media.type === 'image_after_answer') {
            const img = document.createElement('img');
            img.src = question.media.url;
            img.alt = question.media.alt_text || 'Quiz afbeelding';
            img.loading = 'lazy';
            mediaContainer.appendChild(img);
        } else if (question.media.type === 'audio_youtube') {
            // After answer: show the actual video (was audio-only before)
            const iframe = document.createElement('iframe');
            iframe.src = question.media.url;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            mediaContainer.appendChild(iframe);
        }
    }

    // Toon uitleg indien beschikbaar
    if (question.explanation) {
        const explanationEl = document.createElement('div');
        explanationEl.className = 'explanation';
        explanationEl.innerHTML = `<strong>Uitleg:</strong> ${question.explanation}`;

        const questionCard = document.querySelector('.question-card');
        const existingExplanation = questionCard.querySelector('.explanation');
        if (existingExplanation) existingExplanation.remove();
        questionCard.appendChild(explanationEl);
    }

    // Toon fun fact indien beschikbaar
    if (question.fun_fact) {
        const funFactEl = document.createElement('div');
        funFactEl.className = 'fun-fact';
        funFactEl.innerHTML = `<strong>Wist je dat:</strong> ${question.fun_fact}`;

        const questionCard = document.querySelector('.question-card');
        const existingFunFact = questionCard.querySelector('.fun-fact');
        if (existingFunFact) existingFunFact.remove();
        questionCard.appendChild(funFactEl);
    }

    answerRevealed = true;
    document.getElementById('show-answer-btn').style.display = 'none';
    document.getElementById('next-btn').disabled = false;
}

// Volgende vraag
function nextQuestion() {
    const month = quizData.months[currentMonth];

    // Verwijder uitleg, fun fact, intro en lyrics
    const questionCard = document.querySelector('.question-card');
    const explanation = questionCard.querySelector('.explanation');
    const funFact = questionCard.querySelector('.fun-fact');
    const openReveal = questionCard.querySelector('.open-answer-reveal');
    const introText = questionCard.querySelector('.intro-text');
    const lyricsHint = questionCard.querySelector('.lyrics-hint');
    if (explanation) explanation.remove();
    if (funFact) funFact.remove();
    if (openReveal) openReveal.remove();
    if (introText) introText.remove();
    if (lyricsHint) lyricsHint.remove();

    // Clear media container for after_answer types
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';

    currentQuestion++;

    // Check of maand klaar is
    if (currentQuestion >= month.questions.length) {
        currentQuestion = 0;
        currentMonth++;

        // Check of quiz klaar is
        if (currentMonth >= quizData.months.length) {
            showScreen('end');
        } else {
            showMonthIntro();
        }
    } else {
        loadQuestion();
    }
}

// Herstart de quiz
function restartQuiz() {
    currentMonth = 0;
    currentQuestion = 0;

    // Reset timeline
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.classList.remove('active', 'completed');
    });

    showScreen('start');
}

// Keyboard controls
document.addEventListener('keydown', (e) => {
    if (screens.quiz && screens.quiz.classList.contains('active')) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
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
        // A, B, C, D voor antwoorden
        if (['a', 'b', 'c', 'd', 'A', 'B', 'C', 'D'].includes(e.key)) {
            const index = e.key.toLowerCase().charCodeAt(0) - 97;
            selectAnswer(index);
        }
    }

    // Start quiz met Enter op startscherm
    if (screens.start && screens.start.classList.contains('active') && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        startQuiz();
    }

    // Start maand met Enter op maandscherm
    if (screens.month && screens.month.classList.contains('active') && (e.key === ' ' || e.key === 'Enter')) {
        e.preventDefault();
        continueQuiz();
    }
});
