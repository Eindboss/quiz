// Buurt Pubquiz 2025 - Vragen voor jong & oud
// Mix van kindervragen en uitdagende volwassen vragen

const quizData = [
    // ==================== RONDE 1: OPWARMER ====================
    {
        name: "Opwarmer",
        emoji: "🔥",
        description: "Een mix voor het hele gezin!",
        questions: [
            {
                question: "Welk dier zie je hier?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg",
                answers: ["Hond", "Kat", "Konijn", "Hamster"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Hoeveel kleuren heeft de Nederlandse vlag?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
                answers: ["2", "3", "4", "5"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "In welk jaar viel de Berlijnse Muur?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg/1200px-West_and_East_Germans_at_the_Brandenburg_Gate_in_1989.jpg",
                answers: ["1985", "1987", "1989", "1991"],
                correct: 2,
                difficulty: "volwassen"
            },
            {
                question: "Welke planeet is dit?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GPN-2000-001437.jpg/1200px-GPN-2000-001437.jpg",
                answers: ["Mars", "Jupiter", "Saturnus", "Venus"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Wie schilderde 'De Sterrennacht'?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1200px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
                answers: ["Rembrandt", "Picasso", "Vincent van Gogh", "Claude Monet"],
                correct: 2,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 2: MUZIEK ====================
    {
        name: "Muziek",
        emoji: "🎵",
        description: "Van kinderliedjes tot klassiekers!",
        questions: [
            {
                question: "Van welke film is dit liedje? 🎬",
                video: "https://www.youtube.com/embed/L0MK7qz13bU?start=0&end=30",
                answers: ["Frozen", "Vaiana", "Encanto", "Coco"],
                correct: 0,
                difficulty: "kind"
            },
            {
                question: "Wie zingt 'Bohemian Rhapsody'?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Queen_-_Freddie_Mercury%2C_Roger_Taylor%2C_John_Deacon%2C_Brian_May.jpg/1200px-Queen_-_Freddie_Mercury%2C_Roger_Taylor%2C_John_Deacon%2C_Brian_May.jpg",
                answers: ["The Beatles", "Queen", "ABBA", "The Rolling Stones"],
                correct: 1,
                difficulty: "volwassen"
            },
            {
                question: "Welk instrument is dit?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/GuitareClassique5.png/220px-GuitareClassique5.png",
                answers: ["Viool", "Gitaar", "Banjo", "Ukelele"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Uit welk land komt K-pop?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Flag_of_South_Korea.svg/1200px-Flag_of_South_Korea.svg.png",
                answers: ["Japan", "China", "Zuid-Korea", "Thailand"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Welke Nederlandse band maakte 'Radar Love' (1973)?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Golden_Earring_-_TopPop_1974_2.png/440px-Golden_Earring_-_TopPop_1974_2.png",
                answers: ["BZN", "Golden Earring", "Doe Maar", "The Cats"],
                correct: 1,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 3: NATUUR & DIEREN ====================
    {
        name: "Natuur & Dieren",
        emoji: "🦁",
        description: "Ken jij deze dieren?",
        questions: [
            {
                question: "Welk dier is het grootst?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Humpback_stellwagen_edit.jpg/1200px-Humpback_stellwagen_edit.jpg",
                answers: ["Olifant", "Giraffe", "Blauwe vinvis", "Nijlpaard"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Wat eet een panda het liefst?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Grosser_Panda.JPG/1200px-Grosser_Panda.JPG",
                answers: ["Vlees", "Bamboe", "Fruit", "Noten"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Hoeveel poten heeft een spin?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Tegenaria_domestica_crop.jpg/1200px-Tegenaria_domestica_crop.jpg",
                answers: ["6", "8", "10", "12"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Welke vogel kan niet vliegen maar is de snelste loper?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Struthio_camelus_-_Etosha_2014_%281%29.jpg/1200px-Struthio_camelus_-_Etosha_2014_%281%29.jpg",
                answers: ["Pinguïn", "Kiwi", "Struisvogel", "Emoe"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Welke diersoort is de 'Axolotl'?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/AxolsENorte.jpg/1200px-AxolsENorte.jpg",
                answers: ["Vis", "Salamander", "Slang", "Hagedis"],
                correct: 1,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 4: FILM & DISNEY ====================
    {
        name: "Film & Disney",
        emoji: "🎬",
        description: "Popcorn erbij!",
        questions: [
            {
                question: "Hoe heet deze gele vriend?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/4/43/Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp/220px-Pikachu_artwork_for_Pok%C3%A9mon_Red_and_Blue.webp.png",
                answers: ["Pikachu", "Charmander", "Squirtle", "Eevee"],
                correct: 0,
                difficulty: "kind"
            },
            {
                question: "In welk jaar kwam de eerste Star Wars film uit?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1200px-Star_Wars_Logo.svg.png",
                answers: ["1973", "1977", "1980", "1983"],
                correct: 1,
                difficulty: "volwassen"
            },
            {
                question: "Hoe heet de sneeuwpop in Frozen?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Olaf_from_Disney%27s_Frozen.png/220px-Olaf_from_Disney%27s_Frozen.png",
                answers: ["Sneezy", "Olaf", "Kristoff", "Marshmallow"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Welke studio maakte 'Spirited Away'?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/d/db/Spirited_Away_Japanese_poster.png/220px-Spirited_Away_Japanese_poster.png",
                answers: ["Disney", "Pixar", "Studio Ghibli", "DreamWorks"],
                correct: 2,
                difficulty: "volwassen"
            },
            {
                question: "Wat is de naam van Woody's beste vriend in Toy Story?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1e/Toy_Story_logo.svg/1200px-Toy_Story_logo.svg.png",
                answers: ["Rex", "Buzz Lightyear", "Slinky", "Mr. Potato Head"],
                correct: 1,
                difficulty: "kind"
            }
        ]
    },

    // ==================== RONDE 5: SPORT ====================
    {
        name: "Sport",
        emoji: "⚽",
        description: "Van voetbal tot Formule 1!",
        questions: [
            {
                question: "Hoeveel spelers staan er in een voetbalelftal op het veld?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Football_in_Bloomington%2C_Indiana%2C_1995.jpg/1200px-Football_in_Bloomington%2C_Indiana%2C_1995.jpg",
                answers: ["9", "10", "11", "12"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Welke Nederlandse F1-coureur werd wereldkampioen in 2021, 2022, 2023 én 2024?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Max_Verstappen_2017_Malaysia_3_%28cropped%29.jpg/440px-Max_Verstappen_2017_Malaysia_3_%28cropped%29.jpg",
                answers: ["Nyck de Vries", "Max Verstappen", "Jos Verstappen", "Giedo van der Garde"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "In welke stad werden de Olympische Spelen van 2024 gehouden?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Olympic_flag.svg/1200px-Olympic_flag.svg.png",
                answers: ["Tokyo", "Los Angeles", "Parijs", "Brisbane"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Hoeveel Grand Slam toernooien zijn er per jaar in tennis?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Tennis_Racket_and_Balls.jpg/1200px-Tennis_Racket_and_Balls.jpg",
                answers: ["2", "3", "4", "5"],
                correct: 2,
                difficulty: "volwassen"
            },
            {
                question: "Welke sport beoefent Sifan Hassan?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sifan_Hassan_%2852146605262%29_%28cropped%29.jpg/440px-Sifan_Hassan_%2852146605262%29_%28cropped%29.jpg",
                answers: ["Zwemmen", "Hardlopen", "Wielrennen", "Schaatsen"],
                correct: 1,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 6: AARDRIJKSKUNDE ====================
    {
        name: "Aardrijkskunde",
        emoji: "🌍",
        description: "Ken jij de wereld?",
        questions: [
            {
                question: "In welk land staat dit beroemde gebouw?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/500px-Empire_State_Building_%28aerial_view%29.jpg",
                answers: ["Engeland", "Frankrijk", "Amerika", "Canada"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Wat is de hoofdstad van Australië?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Flag_of_Australia_%28converted%29.svg/1200px-Flag_of_Australia_%28converted%29.svg.png",
                answers: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
                correct: 2,
                difficulty: "volwassen"
            },
            {
                question: "In welk land staat de Eiffeltoren?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
                answers: ["Italië", "Spanje", "Frankrijk", "België"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Welke rivier stroomt door Egypte?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nile_River_and_delta_from_orbit.jpg/440px-Nile_River_and_delta_from_orbit.jpg",
                answers: ["Amazone", "Nijl", "Ganges", "Mississippi"],
                correct: 1,
                difficulty: "volwassen"
            },
            {
                question: "Hoeveel provincies heeft Nederland?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Netherlands_location_map.svg/800px-Netherlands_location_map.svg.png",
                answers: ["10", "11", "12", "13"],
                correct: 2,
                difficulty: "kind"
            }
        ]
    },

    // ==================== RONDE 7: 2024 IN BEELD ====================
    {
        name: "2024 in Beeld",
        emoji: "📅",
        description: "Wat weet je nog van dit jaar?",
        questions: [
            {
                question: "Welk land won het EK Voetbal 2024?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
                answers: ["Engeland", "Spanje", "Nederland", "Frankrijk"],
                correct: 1,
                difficulty: "volwassen"
            },
            {
                question: "Welke nieuwe Disney-Pixar film speelt zich af in het hoofd van een tiener?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f7/Inside_Out_2_poster.jpg/220px-Inside_Out_2_poster.jpg",
                answers: ["Soul", "Luca", "Inside Out 2", "Elemental"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "In welke stad werden de Olympische Zomerspelen 2024 gehouden?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/800px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg",
                answers: ["Los Angeles", "Parijs", "Tokio", "Brisbane"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Welke app werd in 2024 tijdelijk verboden in de VS?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/a/a9/TikTok_logo.svg/200px-TikTok_logo.svg.png",
                answers: ["Instagram", "TikTok", "Snapchat", "WhatsApp"],
                correct: 1,
                difficulty: "volwassen"
            },
            {
                question: "Joost Klein deed mee aan het Eurovisie Songfestival 2024. In welk land was dat?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Eurovision_Song_Contest_logo_2015.svg/440px-Eurovision_Song_Contest_logo_2015.svg.png",
                answers: ["Oekraïne", "Italië", "Zweden", "Nederland"],
                correct: 2,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 8: NEDERLAND ====================
    {
        name: "Nederland",
        emoji: "🇳🇱",
        description: "Hoe goed ken jij ons kikkerlandje?",
        questions: [
            {
                question: "Welke bloem is Nederland beroemd om?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/24_Tulip_white_red_spring_2004.jpg/1200px-24_Tulip_white_red_spring_2004.jpg",
                answers: ["Roos", "Tulp", "Zonnebloem", "Lelie"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Hoe heet de koning van Nederland?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/King_Willem-Alexander.jpg/440px-King_Willem-Alexander.jpg",
                answers: ["Willem-Alexander", "Beatrix", "Máxima", "Constantijn"],
                correct: 0,
                difficulty: "kind"
            },
            {
                question: "In welk jaar werd Nederland voor het laatst Europees Kampioen voetbal?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1200px-Flag_of_the_Netherlands.svg.png",
                answers: ["1988", "1992", "2000", "Nooit"],
                correct: 0,
                difficulty: "volwassen"
            },
            {
                question: "Wat is de grootste stad van Nederland?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/KeijssersA-20100606.jpg/1200px-KeijsersA-20100606.jpg",
                answers: ["Den Haag", "Rotterdam", "Amsterdam", "Utrecht"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Welke Nederlandse uitvinding gebruiken we dagelijks om door water te zien?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Oldmicroscope.jpg/440px-Oldmicroscope.jpg",
                answers: ["Telescoop", "Microscoop", "Camera", "Bril"],
                correct: 1,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 9: WETENSCHAP ====================
    {
        name: "Wetenschap",
        emoji: "🔬",
        description: "Voor de slimmeriken!",
        questions: [
            {
                question: "Welke planeet heeft ringen?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Saturn_during_Equinox.jpg/1200px-Saturn_during_Equinox.jpg",
                answers: ["Mars", "Jupiter", "Saturnus", "Venus"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Wat is H2O?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/H2O_2D_labelled.svg/440px-H2O_2D_labelled.svg.png",
                answers: ["Zout", "Suiker", "Water", "Lucht"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Hoeveel botten heeft een volwassen mens (ongeveer)?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Human_skeleton_front_en.svg/440px-Human_skeleton_front_en.svg.png",
                answers: ["106", "156", "206", "256"],
                correct: 2,
                difficulty: "volwassen"
            },
            {
                question: "Welk orgaan pompt bloed door je lichaam?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/440px-Diagram_of_the_human_heart_%28cropped%29.svg.png",
                answers: ["Longen", "Hart", "Lever", "Nieren"],
                correct: 1,
                difficulty: "kind"
            },
            {
                question: "Wie formuleerde de relativiteitstheorie?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Einstein_1921_by_F_Schmutzer_-_restoration.jpg/440px-Einstein_1921_by_F_Schmutzer_-_restoration.jpg",
                answers: ["Isaac Newton", "Albert Einstein", "Stephen Hawking", "Nikola Tesla"],
                correct: 1,
                difficulty: "volwassen"
            }
        ]
    },

    // ==================== RONDE 10: FINALE ====================
    {
        name: "Grote Finale",
        emoji: "🏆",
        description: "De laatste vragen - wie wint?",
        questions: [
            {
                question: "Hoeveel continenten zijn er op aarde?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Continents_vridge.png/1200px-Continents_vridge.png",
                answers: ["5", "6", "7", "8"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "In welk jaar landde de eerste mens op de maan?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Aldrin_Apollo_11_original.jpg/800px-Aldrin_Apollo_11_original.jpg",
                answers: ["1965", "1967", "1969", "1971"],
                correct: 2,
                difficulty: "volwassen"
            },
            {
                question: "Wat is de langste rivier ter wereld?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Nile_River_and_delta_from_orbit.jpg/440px-Nile_River_and_delta_from_orbit.jpg",
                answers: ["Amazone", "Nijl", "Mississippi", "Yangtze"],
                correct: 1,
                difficulty: "volwassen"
            },
            {
                question: "Welke superheld is dit?",
                image: "https://upload.wikimedia.org/wikipedia/en/thumb/2/21/Web_of_Spider-Man_Vol_1_129-1.png/250px-Web_of_Spider-Man_Vol_1_129-1.png",
                answers: ["Batman", "Superman", "Spider-Man", "Iron Man"],
                correct: 2,
                difficulty: "kind"
            },
            {
                question: "Welk woord miste in de Nederlandse Elfstedentocht sinds 1997?",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Elfstedenmonument_met_ijzige_kop.jpg/440px-Elfstedenmonument_met_ijzige_kop.jpg",
                answers: ["Schaatsers", "IJs", "Sponsors", "Vrijwilligers"],
                correct: 1,
                difficulty: "volwassen"
            }
        ]
    }
];
