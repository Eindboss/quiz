// Eindejaarsquiz 2025 - Premium Buurtmensen
// 12 maanden × 5 vragen = 60 vragen totaal
// Slot types: news, kids, music, viral, buurt

const quizData = {
    meta: {
        version: "2.0",
        year: 2025,
        title: "Eindejaarsquiz Premium Buurtmensen",
        total_months: 12,
        questions_per_month: 5,
        total_questions: 60
    },
    months: [
        // ==================== JANUARI ====================
        {
            month: 1,
            name: "Januari",
            theme_hint: "Nieuw jaar, oude chaos",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag januari 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag januari 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag januari 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag januari 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag januari 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== FEBRUARI ====================
        {
            month: 2,
            name: "Februari",
            theme_hint: "Carnaval & Valentijn",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag februari 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag februari 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag februari 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag februari 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag februari 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== MAART ====================
        {
            month: 3,
            name: "Maart",
            theme_hint: "Lente kriebels",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag maart 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag maart 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag maart 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag maart 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag maart 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== APRIL ====================
        {
            month: 4,
            name: "April",
            theme_hint: "Koningsdag & 1 april grappen",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag april 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag april 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag april 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag april 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag april 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== MEI ====================
        {
            month: 5,
            name: "Mei",
            theme_hint: "Bevrijding & Eurovision",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag mei 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag mei 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag mei 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag mei 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag mei 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== JUNI ====================
        {
            month: 6,
            name: "Juni",
            theme_hint: "Zomer begint",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag juni 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag juni 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag juni 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag juni 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag juni 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== JULI ====================
        {
            month: 7,
            name: "Juli",
            theme_hint: "Vakantie vibes",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag juli 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag juli 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag juli 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag juli 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag juli 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== AUGUSTUS ====================
        {
            month: 8,
            name: "Augustus",
            theme_hint: "Laatste zomerdagen",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag augustus 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag augustus 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag augustus 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag augustus 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag augustus 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== SEPTEMBER ====================
        {
            month: 9,
            name: "September",
            theme_hint: "Terug naar school",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag september 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag september 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag september 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag september 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag september 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== OKTOBER ====================
        {
            month: 10,
            name: "Oktober",
            theme_hint: "Herfst & Halloween",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag oktober 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag oktober 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag oktober 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag oktober 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag oktober 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== NOVEMBER ====================
        {
            month: 11,
            name: "November",
            theme_hint: "Sint & gezelligheid",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag november 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag november 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag november 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag november 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag november 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        },

        // ==================== DECEMBER ====================
        {
            month: 12,
            name: "December",
            theme_hint: "Kerst & Oud en Nieuw",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Nieuwsvraag december 2025",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Kindervraag december 2025",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Muziekvraag december 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "[PLACEHOLDER] Viral/meme vraag december 2025",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Optie A", "Optie B", "Optie C", "Optie D"],
                    correct: 0,
                    explanation: "Uitleg komt hier"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "[PLACEHOLDER] Buurtvraag december 2025",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Antwoord",
                        alternatives: []
                    },
                    explanation: "Uitleg komt hier"
                }
            ]
        }
    ]
};
