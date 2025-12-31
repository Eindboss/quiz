// Eindejaarsquiz 2025 - Premium Buurtmensen
// Maandelijkse structuur: 12 maanden × 3 vragen = 36 vragen

let currentMonth = 0;
let currentQuestion = 0;
let answerRevealed = false;

// Buurtfoto's voor maandschermen
const buurtPhotos = [
    'photos/01c3f0dc-7d99-4e12-a410-d5d25af5f14d.JPG',
    'photos/108de7a8-c57e-4053-8f78-5bbc55f547b0.JPG',
    'photos/1d761673-0885-4a16-bc4c-854437b8e706.JPG',
    'photos/241323e0-c8ae-4967-8889-0ee994fcf51e.JPG',
    'photos/2765046b-77bb-4908-bcd7-2f4aafa6c7a8.JPG',
    'photos/2b12f291-8b17-400e-ba7a-f562a12221fb.JPG',
    'photos/2d21eb81-e5e3-49e1-842e-ad4214a8c02c.JPG',
    'photos/35c8dc26-78c0-4c9a-92b1-df8f51233028.JPG',
    'photos/3d4a352b-9864-426e-8164-d08575122cd3.JPG',
    'photos/4058ea8d-7f74-4fae-9f5c-a51e11b46116.JPG',
    'photos/47f4eb26-3534-4f50-ad16-1b3afc3e88da.JPG',
    'photos/5273243e-d747-4411-a882-02ef3d5920d2.JPG',
    'photos/5c79be39-9491-46b6-bc0b-a81b7bb7184f.JPG',
    'photos/7215ba25-6fe3-4c52-97f0-711c10e9be3e.JPG',
    'photos/75083418-2d59-4f6d-8039-f04a4809aefe.JPG',
    'photos/78557f69-cadd-4001-b154-760a91623880.JPG',
    'photos/78b260e7-98b6-4aed-938e-c88cc252f9bb.JPG',
    'photos/809a89e9-41ac-446d-961b-83f18d2a7dd9.JPG',
    'photos/822ac501-49ed-4b30-9c86-e0ac00616d85.JPG',
    'photos/836e5e40-53dd-45d5-a8a7-de74fead4a50.JPG',
    'photos/87613243-0722-4496-9598-cac309666c6a.JPG',
    'photos/8d272829-80dd-457a-9ccc-502d027fa6c3.JPG',
    'photos/90890882-2a62-44c1-a16f-13826140ff3f.JPG',
    'photos/9a1c6825-2cfd-4b9c-a9ad-a761efdbcee0.JPG',
    'photos/a0f52ab9-9134-44c5-a797-5ce22a536207.JPG',
    'photos/a24492c1-cdf3-4a16-898e-6395e168d7fd.JPG',
    'photos/a48fc1c6-45b3-4fb6-81a4-32f7ada10d87.JPG',
    'photos/a92d0f5e-cdf3-425c-8e04-4f6833b4fb58.JPG',
    'photos/ab3a58ba-836c-4ca3-aec9-d24f9379d5b3.JPG',
    'photos/ae439c8a-ecc7-4d3d-a3b7-c9ebd8a4e824.JPG',
    'photos/b2cb30cb-db8c-47ec-9c31-c349885a38bf.JPG',
    'photos/bf4fd03b-a130-46ed-8f68-2cd187881b98.JPG',
    'photos/c177934f-d1ba-4773-a85f-6962e844dc83.JPG',
    'photos/c220d1d7-84ea-4309-ab1c-3e953c48df38.JPG',
    'photos/c316ff69-6401-4609-8547-fc45c850664c.JPG',
    'photos/c6127b6b-a7d8-42b1-b4e0-16323665aced.JPG',
    'photos/cb4f8416-f658-428a-8e1a-88b6d2647426.JPG',
    'photos/d6578651-0f1a-4b35-86b8-e44edfaef236.JPG',
    'photos/df36d1c2-2b1b-4660-be41-dd87a50e40ec.JPG',
    'photos/e50e7afb-965d-4f29-82bf-4651371f9b32.JPG',
    'photos/e8dc4bb6-7b56-406f-8aa7-36cee50ccc53.JPG',
    'photos/e9272806-282a-415a-a122-c96594640c7f.JPG',
    'photos/ed51fc69-b667-40f3-b371-15607b129bd2.JPG'
];

// Shuffle array (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Get random photos for a month (3-4 photos)
function getRandomPhotos(count = 3) {
    const shuffled = shuffleArray(buurtPhotos);
    return shuffled.slice(0, count);
}

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

// ============================================
// MEDIA OVERLAY - Fullscreen video
// ============================================

function openMediaOverlay(title, node) {
    const overlay = document.getElementById('media-overlay');
    const content = document.getElementById('media-overlay-content');
    const titleEl = document.getElementById('media-overlay-title');

    content.innerHTML = '';
    content.appendChild(node);
    titleEl.textContent = title || 'Media';

    overlay.classList.add('active');
    overlay.setAttribute('aria-hidden', 'false');
}

function closeMediaOverlay() {
    const overlay = document.getElementById('media-overlay');
    const content = document.getElementById('media-overlay-content');
    overlay.classList.remove('active');
    overlay.setAttribute('aria-hidden', 'true');
    content.innerHTML = '';
}

// ============================================
// FX ANIMATIES - Vuurwerk en champagne
// ============================================

function fireworkPop(xPct = 50, yPct = 35, count = 8) {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;

    for (let i = 0; i < count; i++) {
        const d = document.createElement('div');
        d.className = 'firework-pop';
        d.style.left = `calc(${xPct}vw + ${Math.random() * 140 - 70}px)`;
        d.style.top = `calc(${yPct}vh + ${Math.random() * 100 - 50}px)`;
        d.style.background = confettiColors[Math.floor(Math.random() * confettiColors.length)];
        layer.appendChild(d);
        setTimeout(() => d.remove(), 1000);
    }
}

function champagneBurst(count = 20) {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const b = document.createElement('div');
            b.className = 'champagne-bubble';
            b.style.left = `${Math.random() * 100}vw`;
            const size = Math.random() * 12 + 8;
            b.style.width = `${size}px`;
            b.style.height = `${size}px`;
            layer.appendChild(b);
            setTimeout(() => b.remove(), 3000);
        }, i * 100);
    }
}

function sparkleBurst(xPct = 50, yPct = 50, count = 12) {
    const layer = document.getElementById('fx-layer');
    if (!layer) return;

    for (let i = 0; i < count; i++) {
        setTimeout(() => {
            const s = document.createElement('div');
            s.className = 'sparkle-burst';
            s.style.left = `calc(${xPct}vw + ${Math.random() * 100 - 50}px)`;
            s.style.top = `calc(${yPct}vh + ${Math.random() * 80 - 40}px)`;
            layer.appendChild(s);
            setTimeout(() => s.remove(), 700);
        }, i * 50);
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

        // Trigger confetti, champagne, fireworks and photos on end screen
        if (screenName === 'end') {
            setTimeout(() => createConfetti(150), 300);
            setTimeout(() => champagneBurst(30), 200);
            setTimeout(() => {
                fireworkPop(20, 25, 8);
                fireworkPop(80, 25, 8);
                fireworkPop(50, 20, 10);
            }, 500);
            setTimeout(() => sparkleBurst(50, 50, 20), 800);
            loadEndPhotos();
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

    // Toon random buurtfoto's
    const photoGrid = document.getElementById('month-photos');
    if (photoGrid) {
        photoGrid.innerHTML = '';
        const photos = getRandomPhotos(4);
        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Buurtfoto';
            img.className = 'month-photo';
            img.style.animationDelay = `${index * 0.15}s`;
            photoGrid.appendChild(img);
        });
    }

    // Update timeline op startscherm
    updateTimeline();

    showScreen('month');

    // Vuurwerk animatie bij maandovergang
    setTimeout(() => {
        fireworkPop(25, 30, 6);
        fireworkPop(75, 30, 6);
    }, 300);
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

    // Check for video_before_question - show video first in overlay
    if (question.media && question.media.type === 'video_before_question' && !question._videoShown) {
        question._videoShown = true; // Mark as shown to prevent loop
        const iframe = document.createElement('iframe');
        let videoUrl = question.media.url;
        if (videoUrl.includes('?')) {
            videoUrl += '&autoplay=1';
        } else {
            videoUrl += '?autoplay=1';
        }
        iframe.src = videoUrl;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        openMediaOverlay(question.media.alt_text || 'Video', iframe);
    }

    // Update header
    document.getElementById('month-name').textContent = month.name;
    document.getElementById('month-theme').textContent = month.theme_hint;
    document.getElementById('month-number').textContent = currentMonth + 1;
    document.getElementById('question-counter').textContent = `Vraag ${currentQuestion + 1}/${totalQuestions}`;

    // Update progress bar
    const progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progress-fill').style.width = `${progressPercent}%`;

    // Update media (afbeelding, video of audio)
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';
    mediaContainer.classList.remove('answer-revealed'); // Reset smaller image class

    // Only show media immediately if it's not an "after_answer" or "before_question" type
    if (question.media && question.media.type !== 'none' &&
        question.media.type !== 'video_after_answer' &&
        question.media.type !== 'image_after_answer' &&
        question.media.type !== 'video_before_question') {
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
        } else if (question.media.type === 'audio_youtube' || question.media.type === 'audio_only' || question.media.type === 'audio_with_video_after') {
            // Listen card with equalizer animation (audio plays hidden)
            const listenCard = document.createElement('div');
            listenCard.className = 'listen-card';

            // Hidden iframe for audio playback
            const iframe = document.createElement('iframe');
            let videoUrl = question.media.url;
            if (videoUrl.includes('?')) {
                videoUrl += '&autoplay=1';
            } else {
                videoUrl += '?autoplay=1';
            }
            iframe.src = videoUrl;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.className = 'audio-youtube-iframe';
            listenCard.appendChild(iframe);

            // Equalizer animation
            const equalizer = document.createElement('div');
            equalizer.className = 'equalizer';
            for (let i = 0; i < 5; i++) {
                const bar = document.createElement('span');
                equalizer.appendChild(bar);
            }
            listenCard.appendChild(equalizer);

            // Label
            const label = document.createElement('div');
            label.className = 'listen-label';
            label.textContent = 'Luister goed...';
            listenCard.appendChild(label);

            mediaContainer.appendChild(listenCard);
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
    const questionTextEl = document.getElementById('question-text');
    questionTextEl.style.display = ''; // Reset visibility (in case hidden by image_after_answer)
    questionTextEl.textContent = question.question_text;

    // Bepaal vraagtype en toon juiste interface
    const answersContainer = document.getElementById('answers');
    const openAnswerContainer = document.getElementById('open-answer-container');
    const openAnswerInput = document.getElementById('open-answer-input');

    answersContainer.innerHTML = '';
    openAnswerContainer.style.display = 'none';

    // Toon antwoordopties voor multiple choice vragen
    if (question.answers && question.answers.length > 0) {
        // Add class for many answers (more than 4)
        if (question.answers.length > 4) {
            answersContainer.classList.add('many-answers');
        } else {
            answersContainer.classList.remove('many-answers');
        }

        question.answers.forEach((answer, index) => {
            const btn = document.createElement('button');
            btn.className = 'answer-btn';
            btn.textContent = answer;
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
        // Hide question text, intro text, lyrics hint to make room for answer
        const questionText = document.getElementById('question-text');
        const introText = document.querySelector('.intro-text');
        const lyricsHint = document.querySelector('.lyrics-hint');
        if (questionText) questionText.style.display = 'none';
        if (introText) introText.style.display = 'none';
        if (lyricsHint) lyricsHint.style.display = 'none';

        // Toon correct antwoord voor open vraag
        const correctAnswer = question.payload?.correct_answer || question.correct_answer || '';
        const alternatives = question.payload?.alternatives || [];

        let answerText = correctAnswer;
        if (alternatives.length > 0) {
            answerText += ` (ook goed: ${alternatives.join(', ')})`;
        }

        const answerDisplay = document.createElement('div');
        answerDisplay.className = 'open-answer-reveal';
        answerDisplay.innerHTML = answerText;
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
    } else if (question.question_type === 'multiple_choice_multi') {
        // Multiple choice with multiple correct answers
        const correctIndices = Array.isArray(question.correct) ? question.correct : [question.correct];

        buttons.forEach((btn, index) => {
            btn.classList.add('revealed');
            if (correctIndices.includes(index)) {
                btn.classList.add('correct');
            } else if (btn.classList.contains('selected')) {
                btn.classList.add('incorrect');
            }
        });
    } else {
        // Multiple choice (single answer)
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

    // Stop any background audio before showing video/media
    const audioIframe = document.querySelector('.audio-youtube-iframe');
    if (audioIframe) {
        audioIframe.src = ''; // Stop the audio by clearing src
    }

    // Show media after answer if applicable
    if (question.media && (question.media.type === 'video_after_answer' || question.media.type === 'image_after_answer' || question.media.type === 'audio_youtube' || question.media.type === 'audio_with_video_after')) {
        const mediaContainer = document.getElementById('media-container');

        if (question.media.type === 'video_after_answer') {
            // Open video in fullscreen overlay
            const iframe = document.createElement('iframe');
            let videoUrl = question.media.url;
            if (videoUrl.includes('?')) {
                videoUrl += '&autoplay=1';
            } else {
                videoUrl += '?autoplay=1';
            }
            iframe.src = videoUrl;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            openMediaOverlay('Video', iframe);
            // Champagne burst when showing video
            champagneBurst(15);
        } else if (question.media.type === 'image_after_answer') {
            // Hide question text, intro text, lyrics hint when showing image
            const questionText = document.getElementById('question-text');
            const introText = document.querySelector('.intro-text');
            const lyricsHint = document.querySelector('.lyrics-hint');
            if (questionText) questionText.style.display = 'none';
            if (introText) introText.style.display = 'none';
            if (lyricsHint) lyricsHint.style.display = 'none';

            mediaContainer.innerHTML = '';
            mediaContainer.classList.add('answer-revealed'); // Smaller image
            const img = document.createElement('img');
            img.src = question.media.url;
            img.alt = question.media.alt_text || 'Quiz afbeelding';
            img.loading = 'lazy';
            mediaContainer.appendChild(img);
            // Sparkle effect for image reveal
            sparkleBurst(50, 40, 10);
        } else if (question.media.type === 'audio_youtube' || question.media.type === 'audio_with_video_after') {
            // After answer: show the actual video in fullscreen overlay
            const iframe = document.createElement('iframe');
            // Use video_after_url if available, otherwise use main url
            let videoUrl = question.media.video_after_url || question.media.url;
            if (videoUrl.includes('?')) {
                videoUrl += '&autoplay=1';
            } else {
                videoUrl += '?autoplay=1';
            }
            iframe.src = videoUrl;
            iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
            iframe.allowFullscreen = true;
            openMediaOverlay('Muziekvraag', iframe);
            // Champagne and sparkles for music reveal
            champagneBurst(20);
            setTimeout(() => sparkleBurst(50, 50, 15), 300);
        }
    }

    // Toon uitleg indien beschikbaar
    if (question.explanation) {
        const explanationEl = document.createElement('div');
        explanationEl.className = 'explanation';
        explanationEl.innerHTML = question.explanation;

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

// Vorige vraag
function previousQuestion() {
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

    // Clear media container
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';

    // Ga terug naar vorige vraag
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    } else if (currentMonth > 0) {
        // Ga naar vorige maand
        currentMonth--;
        const prevMonth = quizData.months[currentMonth];
        currentQuestion = prevMonth.questions.length - 1;
        loadQuestion();
    }
    // Als we bij eerste vraag van eerste maand zijn, doe niets
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

// Laad foto's op startscherm bij laden
function loadStartPhotos() {
    const photoGrid = document.getElementById('start-photos');
    if (photoGrid) {
        photoGrid.innerHTML = '';
        const photos = getRandomPhotos(6);
        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Buurtfoto';
            img.className = 'start-photo';
            img.style.animationDelay = `${index * 0.1}s`;
            photoGrid.appendChild(img);
        });
    }
}

// Laad foto's op eindscherm
function loadEndPhotos() {
    const photoGrid = document.getElementById('end-photos');
    if (photoGrid) {
        photoGrid.innerHTML = '';
        const photos = getRandomPhotos(8);
        photos.forEach((photo, index) => {
            const img = document.createElement('img');
            img.src = photo;
            img.alt = 'Buurtfoto';
            img.className = 'end-photo';
            img.style.animationDelay = `${index * 0.1}s`;
            photoGrid.appendChild(img);
        });
    }
}

// Initialiseer foto's bij laden
document.addEventListener('DOMContentLoaded', () => {
    loadStartPhotos();
});

// Keyboard controls
document.addEventListener('keydown', (e) => {
    // Escape closes media overlay
    if (e.key === 'Escape') {
        const overlay = document.getElementById('media-overlay');
        if (overlay && overlay.classList.contains('active')) {
            closeMediaOverlay();
            return;
        }
    }

    if (screens.quiz && screens.quiz.classList.contains('active')) {
        if (e.key === ' ' || e.key === 'Enter') {
            e.preventDefault();
            // Don't trigger if media overlay is open
            const overlay = document.getElementById('media-overlay');
            if (overlay && overlay.classList.contains('active')) {
                closeMediaOverlay();
                return;
            }
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
