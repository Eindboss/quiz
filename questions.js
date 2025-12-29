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
            theme_hint: "Nieuw jaar, goede voornemens",
            questions: [
                {
                    slot_type: "news",
                    question_type: "multiple_choice",
                    question_text: "Welke Amerikaanse president werd op 20 januari 2025 ingehuldigd?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Joe Biden", "Donald Trump", "Kamala Harris", "Ron DeSantis"],
                    correct: 1,
                    explanation: "Donald Trump werd voor de tweede keer ingehuldigd als president van de Verenigde Staten.",
                    fun_fact: "Trump is pas de tweede president in de geschiedenis die twee niet-opeenvolgende termijnen dient."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Hoeveel dagen heeft januari?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["28 dagen", "30 dagen", "31 dagen", "29 dagen"],
                    correct: 2,
                    explanation: "Januari heeft altijd 31 dagen!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welke Nederlandse zangeres scoorde begin 2025 een hit met 'Muziek'?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Davina Michelle", "S10", "Froukje", "MEAU"],
                    correct: 3,
                    explanation: "MEAU had een grote hit met 'Muziek' begin 2025."
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welk 'goede voornemen' werd het meest genoemd op social media in januari 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Stoppen met roken", "Meer sporten", "Minder op telefoon", "Gezonder eten"],
                    correct: 2,
                    explanation: "Digital detox en minder schermtijd was de grote trend in 2025."
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Noem één goed voornemen dat je dit jaar (niet) hebt volgehouden.",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Dit is een open vraag - elk eerlijk antwoord telt!"
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
                    question_text: "In welke provincie wordt carnaval het grootst gevierd?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Noord-Holland", "Limburg", "Groningen", "Friesland"],
                    correct: 1,
                    explanation: "Limburg en Noord-Brabant zijn de carnavalsprovincies van Nederland."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Welke kleur hartjes zie je het meest met Valentijnsdag?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Blauwe hartjes", "Groene hartjes", "Rode hartjes", "Zwarte hartjes"],
                    correct: 2,
                    explanation: "Rood is de kleur van de liefde!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk carnavalslied was een grote hit in 2025?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Polonaise Hollandaise", "Links Rechts", "Carnaval", "Feest in de tent"],
                    correct: 1,
                    explanation: "Links Rechts blijft een carnavalsklassieker."
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke AI-tool werd veel gebruikt om Valentijnsgedichten te schrijven?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["ChatGPT", "Google", "Wikipedia", "TikTok"],
                    correct: 0,
                    explanation: "Veel mensen gebruikten ChatGPT voor creatieve Valentijnsteksten!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Hoe lang zijn jij en je partner al samen? (Of: hoeveel jaar ben je al single?)",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Open vraag - eerlijkheid duurt het langst!"
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
                    question_text: "In welke maand begint officieel de lente in 2025?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Februari", "Maart", "April", "Mei"],
                    correct: 1,
                    explanation: "De astronomische lente begint rond 20 maart."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Welk dier komt in de lente uit een ei?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Puppy", "Kitten", "Kuiken", "Konijn"],
                    correct: 2,
                    explanation: "Kuikentjes komen uit eieren, net als andere vogels!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Wie won The Voice of Holland 2025?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["[Vul winnaar in]", "Kandidaat B", "Kandidaat C", "Kandidaat D"],
                    correct: 0,
                    explanation: "De winnaar van The Voice 2025."
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke lente-activiteit ging viral op TikTok in maart 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Tuinieren op balkon", "Buiten hardlopen", "Picknicken", "Vogels spotten"],
                    correct: 0,
                    explanation: "Urban gardening en balkontuin waren hot op social media."
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Welke bloem bloeit als eerste in jouw tuin of op je balkon?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Krokus",
                        alternatives: ["Sneeuwklokje", "Narcis", "Tulp", "Geen tuin"]
                    },
                    explanation: "Krokussen en sneeuwklokjes zijn vaak de eerste!"
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
                    question_text: "In welke stad werd Koningsdag 2025 officieel gevierd door de koninklijke familie?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Amsterdam", "Rotterdam", "[Vul stad in]", "Den Haag"],
                    correct: 2,
                    explanation: "De koninklijke familie bezocht deze stad op Koningsdag 2025."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Welke kleur draag je op Koningsdag?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Blauw", "Groen", "Oranje", "Paars"],
                    correct: 2,
                    explanation: "Oranje is de kleur van ons Koningshuis!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk lied hoor je ALTIJD op Koningsdag?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Het Wilhelmus", "Bloed, Zweet en Tranen", "Ik hou van Holland", "Alle drie"],
                    correct: 3,
                    explanation: "Deze klassiekers hoor je elk jaar op Koningsdag!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Wat is een klassieke 1 april grap?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Zout in de suikerpot", "Alle vier", "Plastic over de WC", "Wekker 3 uur vroeger"],
                    correct: 1,
                    explanation: "1 april, kikker in je bil!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Wat heb je verkocht (of gekocht) op de vrijmarkt dit jaar?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Vrijmarkt is hét moment om oude spullen te verkopen!"
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
                    question_text: "Hoeveel jaar vrijheid vierden we op 5 mei 2025?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["78 jaar", "79 jaar", "80 jaar", "81 jaar"],
                    correct: 2,
                    explanation: "In 2025 vierden we 80 jaar bevrijding (1945-2025)."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Wat vieren we op 5 mei?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Kerst", "Sinterklaas", "Bevrijdingsdag", "Pasen"],
                    correct: 2,
                    explanation: "Op 5 mei vieren we dat Nederland vrij is!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "In welk land was het Eurovisie Songfestival 2025?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Nederland", "Zwitserland", "Zweden", "Italië"],
                    correct: 1,
                    explanation: "Zwitserland won in 2024, dus zij organiseerden het in 2025."
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Wat was de Nederlandse inzending voor Eurovision 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["[Vul artiest in]", "Artiest B", "Artiest C", "Artiest D"],
                    correct: 0,
                    explanation: "Nederland stuurde deze artiest naar Eurovision 2025."
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Naar welk bevrijdingsfestival ben je geweest in 2025?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: ["Geen", "Haarlem", "Utrecht", "Groningen"]
                    },
                    explanation: "Er zijn bevrijdingsfestivals door heel Nederland!"
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
                    question_text: "Wanneer is de langste dag van het jaar?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["1 juni", "15 juni", "21 juni", "30 juni"],
                    correct: 2,
                    explanation: "De zomerzonnewende is rond 21 juni - de langste dag!"
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Wat smelt in de zomer?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Een boek", "Een bal", "Een ijsje", "Een fiets"],
                    correct: 2,
                    explanation: "IJs smelt als het warm is - snel opeten dus!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk festival vindt elk jaar plaats in juni in Nederland?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Pinkpop", "Lowlands", "Mysteryland", "Defqon"],
                    correct: 0,
                    explanation: "Pinkpop is het oudste popfestival van Nederland!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke zomertrend ging viral in juni 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Hot girl walks", "Ice bucket challenge", "Brat summer", "Quiet luxury"],
                    correct: 2,
                    explanation: "Brat summer was dé trend van 2025!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Wat is jouw favoriete ijssmaak?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Iedereen heeft een favoriet!"
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
                    question_text: "Welk land was de populairste vakantiebestemming voor Nederlanders in 2025?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Spanje", "Frankrijk", "Griekenland", "Italië"],
                    correct: 1,
                    explanation: "Frankrijk blijft favoriet bij Nederlandse vakantiegangers."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Wat neem je mee naar het strand?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Winterjas", "Schaatsen", "Emmer en schep", "Paraplu"],
                    correct: 2,
                    explanation: "Met een emmer en schep kun je zandkastelen bouwen!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welke zomerhit stond bovenaan in juli 2025?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["[Vul hit in]", "Song B", "Song C", "Song D"],
                    correct: 0,
                    explanation: "Dé zomerhit van 2025!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke vakantie-app was het populairst in 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Booking.com", "Airbnb", "TikTok", "Google Maps"],
                    correct: 3,
                    explanation: "Google Maps is onmisbaar op vakantie!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Waar ben je op vakantie geweest deze zomer?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: ["Nergens", "Nederland", "Buitenland"]
                    },
                    explanation: "Staycation of verre reis - alles telt!"
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
                    question_text: "Welk groot sportevenement was er in augustus 2025?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["WK Voetbal", "Olympische Spelen", "Tour de France", "WK Atletiek"],
                    correct: 3,
                    explanation: "Het WK Atletiek 2025 was in Tokyo."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Wanneer begint de school weer na de zomervakantie?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Juni", "Juli", "Augustus/September", "December"],
                    correct: 2,
                    explanation: "De meeste scholen beginnen eind augustus of begin september."
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk groot muziekfestival is in augustus?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Pinkpop", "Lowlands", "Koningsdag", "Bevrijdingsfestival"],
                    correct: 1,
                    explanation: "Lowlands is traditioneel in augustus!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke 'back to school' trend was populair in augustus 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Aesthetic schoolspullen", "Vintage rugzakken", "Minimalisme", "Alle drie"],
                    correct: 3,
                    explanation: "Alle trends waren populair op social media!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "In welke groep/klas zit jouw kind (of zat jij vroeger)?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Van groep 1 tot universiteit - alles telt!"
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
                    question_text: "Op welke dag is Prinsjesdag altijd?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Eerste dinsdag", "Derde dinsdag", "Laatste dinsdag", "Eerste maandag"],
                    correct: 1,
                    explanation: "Prinsjesdag is altijd op de derde dinsdag van september."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Welk seizoen begint in september?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Lente", "Zomer", "Herfst", "Winter"],
                    correct: 2,
                    explanation: "De herfst begint rond 21 september!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk nummer van Earth, Wind & Fire gaat over september?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["September", "December", "Boogie Wonderland", "Let's Groove"],
                    correct: 0,
                    explanation: "Do you remember, the 21st night of September?"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke meme komt elk jaar terug op 21 september?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Earth Wind & Fire meme", "Pumpkin spice meme", "School meme", "Herfst meme"],
                    correct: 0,
                    explanation: "Do you remember wordt elk jaar viral op 21 september!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Wat is jouw favoriete herfstactiviteit?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: ["Wandelen", "Bladeren", "Soep maken", "Netflix"]
                    },
                    explanation: "Herfst is gezellig!"
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
                    question_text: "Wanneer is Halloween?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["1 oktober", "13 oktober", "31 oktober", "1 november"],
                    correct: 2,
                    explanation: "Halloween is altijd op 31 oktober."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Welke groente hol je uit met Halloween?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Wortel", "Pompoen", "Komkommer", "Tomaat"],
                    correct: 1,
                    explanation: "Pompoenen worden uitgehold en krijgen een eng gezicht!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk nummer is dé Halloween-klassieker?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Thriller - Michael Jackson", "Monster Mash", "Ghostbusters", "Alle drie"],
                    correct: 3,
                    explanation: "Dit zijn allemaal Halloween-klassiekers!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Wat was het populairste Halloween-kostuum in 2025?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["[Vul kostuum in]", "Kostuum B", "Kostuum C", "Kostuum D"],
                    correct: 0,
                    explanation: "Dit kostuum was overal te zien in 2025!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Als wat zou jij verkleed gaan met Halloween?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Creativiteit wordt beloond!"
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
                    question_text: "In welke stad kwam Sinterklaas aan in 2025?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Amsterdam", "[Vul stad in]", "Rotterdam", "Den Haag"],
                    correct: 1,
                    explanation: "Dit was de officiële intocht-stad van 2025."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Hoe heet het paard van Sinterklaas?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Amerigo", "Bansen", "Casper", "Dommel"],
                    correct: 0,
                    explanation: "Amerigo is het paard van de Sint!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Hoe begint het bekende Sinterklaaslied?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["Sinterklaas kapoentje", "Zie ginds komt de stoomboot", "Hoor wie klopt daar", "O kom er eens kijken"],
                    correct: 1,
                    explanation: "Zie ginds komt de stoomboot, uit Spanje weer aan!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke Sinterklaas-discussie is er elk jaar op social media?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Pepernoten vs kruidnoten", "Wel/geen chocoladeletter", "Schoenen zetten datum", "Alle drie"],
                    correct: 3,
                    explanation: "Nederland is verdeeld over al deze zaken!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Pepernoten of kruidnoten - wat is jouw favoriet?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: ["Pepernoten", "Kruidnoten", "Allebei", "Geen van beide"]
                    },
                    explanation: "Er is geen fout antwoord (maar kruidnoten is correct)!"
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
                    question_text: "Wat was het grote nieuwsonderwerp rond Kerst 2025?",
                    target_audience: "adults",
                    points: 2,
                    media: { type: "none" },
                    answers: ["[Vul nieuws in]", "Onderwerp B", "Onderwerp C", "Onderwerp D"],
                    correct: 0,
                    explanation: "Dit was hét gesprek van de dag rond Kerst 2025."
                },
                {
                    slot_type: "kids",
                    question_type: "multiple_choice",
                    question_text: "Welk dier trekt de slee van de Kerstman?",
                    target_audience: "kids",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Paarden", "Honden", "Rendieren", "Katten"],
                    correct: 2,
                    explanation: "Rudolph en zijn vrienden zijn rendieren!"
                },
                {
                    slot_type: "music",
                    question_type: "multiple_choice",
                    question_text: "Welk kerstlied staat elk jaar op nummer 1?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    answers: ["All I Want For Christmas", "Last Christmas", "Driving Home For Christmas", "Jingle Bells"],
                    correct: 0,
                    explanation: "Mariah Carey's All I Want For Christmas is onverslaanbaar!"
                },
                {
                    slot_type: "viral",
                    question_type: "multiple_choice",
                    question_text: "Welke oudejaarsshow wordt elk jaar opnieuw uitgezonden?",
                    target_audience: "mixed",
                    points: 1,
                    media: { type: "none" },
                    answers: ["Dinner for One", "The Sound of Music", "Home Alone", "Love Actually"],
                    correct: 0,
                    explanation: "Same procedure as every year, James!"
                },
                {
                    slot_type: "buurt",
                    question_type: "open_question",
                    question_text: "Wat is jouw goede voornemen voor 2026?",
                    target_audience: "mixed",
                    points: 2,
                    media: { type: "none" },
                    payload: {
                        correct_answer: "Elk antwoord goed",
                        alternatives: []
                    },
                    explanation: "Op naar een geweldig 2026!"
                }
            ]
        }
    ]
};
