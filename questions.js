// Eindejaarsquiz 2025 - Premium Buurtmensen
// 12 maanden × 3 vragen = 36 vragen totaal
// Slot types: news, kids, music

const quizData = {
  "meta": {
    "version": "2.0",
    "year": 2025,
    "title": "Eindejaarsquiz Premium Buurtmensen",
    "total_months": 12,
    "questions_per_month": 3,
    "total_questions": 36
  },
  "months": [
    {
      "month": 1,
      "name": "Januari",
      "theme_hint": "Nieuw jaar, goede voornemens",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "Trump begon zijn tweede termijn. Hoe heet de nieuwe First Lady? (Bonus: de Second Lady?)",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image_after_answer",
            "url": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/3935x2623+0+0/resize/1200x800!/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2Ff6%2Fd4%2F357d6b8d4a37b865ac8fddcb68b5%2Fgettyimages-2194469237.jpg",
            "alt_text": "Melania Trump en Usha Vance bij de inauguratie"
          },
          "payload": {
            "correct_answer": "Melania Trump en Usha Vance",
            "alternatives": ["Melania Trump", "Melania", "Usha Vance", "Usha"]
          },
          "explanation": "Melania Trump is terug als First Lady. Usha Vance is de eerste Indiaas-Amerikaanse Second Lady."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is het populairste huisdier van Nederland?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een kat",
            "Een hond",
            "Een konijn",
            "Een goudvis"
          ],
          "correct": 0,
          "explanation": "De kat is het populairste huisdier in Nederland - er zijn bijna 4 miljoen katten!"
        },
        {
          "slot_type": "music",
          "question_type": "music_lyrics",
          "question_text": "Wat is de derde zin van het refrein?",
          "intro_text": "Het lied \"Terug in de tijd\" van Yves Berendse is ook in 2025 nog altijd een van de meest gedraaide liedjes in Nederland.",
          "lyrics_hint": "Ja, als ik terug kon in de tijd, dan wel met jou\nIk heb je zo lang niet gezien, hoe is het nou?\n....\nAls ik terug kon in de tijd, dan wel met jou",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "video_after_answer",
            "url": "https://www.youtube.com/embed/ERSCR2cuqAU?si=RmfcCx2xyZYfgzTd&clip=UgkxX5AtC3YMl4YlmSa8QIf4OnK0eqVeBiRx&clipt=EKSHAhjPgwQ",
            "alt_text": "Terug in de tijd - Yves Berendse"
          },
          "answers": [
            "Ik zou het allemaal overdoen, ik zweer het jou",
            "Ik mis je elke dag opnieuw, geloof me nou",
            "We gaan terug naar vroeger toe, ik weet niet hoe",
            "De tijd staat stil als jij er bent, dat weet je toch"
          ],
          "correct": 0,
          "explanation": "De derde zin is: 'Ik zou het allemaal overdoen, ik zweer het jou'"
        }
      ]
    },
    {
      "month": 2,
      "name": "Februari",
      "theme_hint": "Carnaval & Valentijn",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "In februari is er in de VS de Super Bowl, een van de grootste sport- en mediaevenementen van het jaar. Om welke sport gaat het eigenlijk bij de Super Bowl? En wie trad dit jaar op bij de halftime show?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image_after_answer",
            "url": "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/5331x3998+0+0/resize/1100/quality/85/format/jpeg/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F2c%2F41%2F0b0fe36e4710a6ea5b5e595af715%2Flamar2025superbowl.jpg",
            "alt_text": "Kendrick Lamar bij de Super Bowl halftime show 2025"
          },
          "payload": {
            "correct_answer": "American football, Kendrick Lamar",
            "alternatives": ["Football", "American football", "Kendrick Lamar", "Kendrick"]
          },
          "explanation": "De Super Bowl is de finale van de American football competitie (NFL). Kendrick Lamar verzorgde de halftime show van Super Bowl LIX."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Op 14 februari is het Valentijnsdag. Welk symbool hoort daar het meest bij?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een rood hartje ❤️",
            "Een voetbal ⚽",
            "Een sneeuwpop ☃️",
            "Een paraplu ☂️"
          ],
          "correct": 0,
          "explanation": "Valentijnsdag is de dag van de liefde, en het rode hartje is hét symbool!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "\"Die With a Smile\" van Bruno Mars en Lady Gaga was in februari 2025 het meest gestreamde lied in Nederland. Wat is de echte voornaam van Lady Gaga?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "audio_with_video_after",
            "url": "https://www.youtube.com/embed/kPa7bsKwL-c?si=hhJVDCdyQJ1dd5zh&start=36",
            "video_after_url": "https://www.youtube.com/embed/IFS3imM9qes?si=gzf83w2UzLNt6KPS&start=2",
            "alt_text": "Die With a Smile - Bruno Mars & Lady Gaga"
          },
          "answers": [
            "Stefani",
            "Angelina",
            "Joanne",
            "Gaga (echt waar, stond op haar geboorteakte)"
          ],
          "correct": 0,
          "explanation": "Lady Gaga's volledige naam is Stefani Joanne Angelina Germanotta."
        }
      ]
    },
    {
      "month": 3,
      "name": "Maart",
      "theme_hint": "Lente kriebels",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "In 2025 werd Memphis Depay de topscorer aller tijden van het Nederlands elftal. Welke oud-international passeerde hij daarmee op de ranglijst?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Robin van Persie",
            "alternatives": ["Van Persie", "RVP"]
          },
          "explanation": "Memphis passeerde Robin van Persie (50 goals) en staat nu op 55 interlanddoelpunten."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "In de lente worden veel dieren wakker. Welk dier houdt een winterslaap?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een egel",
            "Een koe",
            "Een kip",
            "Een hond"
          ],
          "correct": 0,
          "explanation": "Egels, maar ook beren en vleermuizen houden een winterslaap!"
        },
        {
          "slot_type": "music",
          "question_type": "open_question",
          "question_text": "In maart scoorde Bruno Mars weer een megahit, maar nu met een andere zangeres: Rosé. Ken jij nog 3 zangeressen waarvan de naam begint met een R?",
          "target_audience": "mixed",
          "points": 3,
          "humor_level": 2,
          "media": {
            "type": "audio_only",
            "url": "https://www.youtube.com/embed/ekr2nIex040?si=abHghLUQxAzjtmm6&start=2",
            "alt_text": "APT. - Bruno Mars & Rosé"
          },
          "payload": {
            "correct_answer": "Bijvoorbeeld: Rihanna, Rita Ora, Robyn, Rachel Platten, Regina Spektor",
            "alternatives": [
              "Rihanna",
              "Rita Ora",
              "Robyn",
              "Rachel Platten",
              "Regina Spektor",
              "Roxette",
              "Ria Valk"
            ]
          },
          "explanation": "Bekende zangeressen met een R: Rihanna, Rita Ora, Robyn, Roxette (Marie Fredriksson), Rachel Platten, Regina Spektor, en natuurlijk Ria Valk!"
        }
      ]
    },
    {
      "month": 4,
      "name": "April",
      "theme_hint": "Koningsdag & 1 april grappen",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "multiple_choice",
          "question_text": "In 2025 ging een video van konijnen op een trampoline massaal viral. Wat was er met dit filmpje aan de hand?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "video_before_question",
            "url": "https://www.youtube.com/embed/LDLwShbOSsg?si=6f5dxvpQQXAx8GnB&start=36",
            "alt_text": "Konijnen op een trampoline - viral video"
          },
          "answers": [
            "Het was nep - gemaakt met AI",
            "De konijnen waren getraind voor een commercial",
            "Het was een deepfake van cavia's",
            "De trampoline was van de buren gestolen"
          ],
          "correct": 0,
          "explanation": "De video werd honderden miljoenen keren bekeken, maar bleek volledig AI-gegenereerd. Veel influencers trapten erin!"
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Op 27 april is het Koningsdag! Welke kleur draagt bijna iedereen dan?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Oranje",
            "Blauw",
            "Roze",
            "Groen"
          ],
          "correct": 0,
          "explanation": "Op Koningsdag draagt iedereen oranje - de kleur van ons koningshuis!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice_multi",
          "question_text": "In april was de populairste Nederlandse artiest Roxy Dekker. Welke 2 dingen zijn waar over Roxy Dekker?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "audio_only",
            "url": "https://www.youtube.com/embed/AsWcssoECUE?si=wcORh-pUXvAYbzwi&start=2",
            "alt_text": "Roxy Dekker"
          },
          "answers": [
            "Nummer-1-hit zonder radio airplay",
            "Begon met TikTok-grappen",
            "Covers van Bruno Mars",
            "Jongste met 3 hits in Top 40",
            "Ontdekt via The Voice Kids",
            "Schrijft eigen liedjes"
          ],
          "correct": [1, 5],
          "explanation": "Roxy Dekker begon met grappige TikTok-liedjes die viraal gingen, en schrijft al haar eigen nummers."
        }
      ]
    },
    {
      "month": 5,
      "name": "Mei",
      "theme_hint": "Bevrijding & Eurovision",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "Eurovisie 2025: wie vertegenwoordigde Nederland en op welke plaats eindigden we? (Bonuspunt: welk land won?)",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.esc-plus.com/wp-content/uploads/2025/05/stage_basel_ESC2025.jpg",
            "alt_text": "Eurovision 2025 Basel"
          },
          "payload": {
            "correct_answer": "Claude, 12e plaats (Oostenrijk won met JJ)",
            "alternatives": ["Claude", "Claude 12e", "Claude twaalfde"]
          },
          "explanation": "Claude eindigde 12e met 'C'est La Vie'. Hij maakte een tekstfout in de finale! Oostenrijk won met JJ."
        },
        {
          "slot_type": "kids",
          "question_type": "open_question",
          "question_text": "In 2025 kwam de film Lilo & Stitch uit. Noem vier namen van figuren uit deze film.",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "image_after_answer",
            "url": "https://static.wikia.nocookie.net/disney/images/6/65/Lilo_%26_Stitch_%282025%29_-_Poster.jpg",
            "alt_text": "Lilo, Stitch, Angel en Nani"
          },
          "payload": {
            "correct_answer": "Lilo, Stitch, Angel, Nani",
            "alternatives": ["Lilo", "Stitch", "Angel", "Nani", "Jumba", "Pleakley", "David", "Cobra Bubbles"]
          },
          "explanation": "De hoofdfiguren zijn Lilo, Stitch, Angel en Nani!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "In mei 2025 was Marco Borsato gecanceld. Toch staat hij nu met veel nummers in de Top 2000. Welk lied heeft de hoogste notering?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video_before_question",
            "url": "https://www.youtube.com/embed/7azASBMAkOU?si=oqGiEGH7REezD8Cu&start=2",
            "alt_text": "Marco Borsato - Dochters"
          },
          "answers": [
            "Dromen zijn bedrog",
            "De Waarheid",
            "Dochters",
            "Rood"
          ],
          "correct": 1,
          "explanation": "De Waarheid staat het hoogst in de Top 2000 van alle Marco Borsato nummers."
        }
      ]
    },
    {
      "month": 6,
      "name": "Juni",
      "theme_hint": "Zomer begint",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "multiple_choice",
          "question_text": "Op 3 juni 2025 viel het eerste kabinet-Schoof. Wat was de reden van de val van het kabinet?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2025/06/06/385834.jpg",
            "alt_text": "Kabinet Schoof valt"
          },
          "answers": [
            "Asiel- en migratiebeleid",
            "De voorjaarsnota",
            "Stikstof",
            "De lengte van de kabinetsformatie"
          ],
          "correct": 0,
          "explanation": "Het conflict over asielmigratie leidde tot het terugtrekken van steun door de PVV."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is het favoriete vakantieland voor Nederlanders?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Spanje",
            "De maan",
            "De Noordpool",
            "Australië"
          ],
          "correct": 0,
          "explanation": "Spanje, Griekenland en Turkije zijn de populairste vakantielanden!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "25 jaar geleden was er ook al muziek. Wie stond er in juni 2000 op 1 in de Nederlandse hitlijsten?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video_after_answer",
            "url": "https://www.youtube.com/embed/ymNFyxvIdaM?si=2YvZO9tnLxNf6-8x&start=36&clip=UgkxbUksRD-dmuFmH9X52f5hCU6FF0mytx84&clipt=ELzTAhjD1QM",
            "alt_text": "Freestyler - Bomfunk MC's"
          },
          "answers": [
            "The Boy Is Mine – Brandy & Monica",
            "Freestyler – Bomfunk MC's",
            "A Little Less Conversation – Elvis Presley vs JXL",
            "Dragostea Din Tei – O-Zone"
          ],
          "correct": 1,
          "explanation": "Freestyler van Bomfunk MC's stond in juni 2000 op nummer 1 in Nederland."
        }
      ]
    },
    {
      "month": 7,
      "name": "Juli",
      "theme_hint": "Vakantie vibes",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "In 2025 kondigde de originele K3 een reünie aan. Tickets vlogen de deur uit! Noem 5 K3-zangeressen!",
          "target_audience": "adults",
          "points": 5,
          "humor_level": 3,
          "media": {
            "type": "audio_only",
            "url": "https://www.youtube.com/embed/wgDnM4i3gbM?si=WC7etSkFF9-z03Jw&start=36",
            "alt_text": "K3 - Alle Kleuren"
          },
          "payload": {
            "correct_answer": "Karen Damen, Kristel Verbeke, Kathleen Aerts, Josje Huisman, Klaasje Meijer, Hanne Verbruggen, Marthe De Pillecyn, Julia Boschman",
            "alternatives": ["Karen", "Kristel", "Kathleen", "Josje", "Klaasje", "Hanne", "Marthe", "Julia"]
          },
          "explanation": "Alle K3-zangeressen: Karen Damen, Kristel Verbeke, Kathleen Aerts (origineel), Josje Huisman, Klaasje Meijer, Hanne Verbruggen, Marthe De Pillecyn en Julia Boschman."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Welk ijsje is al meer dan 45 jaar het populairste ijsje van Nederland?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Het Raketje",
            "Een boterham met pindakaas",
            "Een tomaat",
            "Spruitjesijs"
          ],
          "correct": 0,
          "explanation": "Het Raketje is al 45 jaar het populairste ijsje van Nederland!"
        },
        {
          "slot_type": "music",
          "question_type": "open_question",
          "question_text": "De meeste zomerhits hoor je in de zomer. Waar je weinig meer van hoort is van TMF. Wie kent de meeste TMF-VJ's?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Bridget Maasland, Ruud de Wild, Sylvie Meis, Tooske Ragas, Winston Gerschtanowitz, Evi Hanssen, Eric Corton, Isabelle Brinkman, Wessel van Diepen, Patrick Lodiers, Candy Dulfer, Adam Curry",
            "alternatives": [
              "Bridget Maasland",
              "Ruud de Wild",
              "Sylvie Meis",
              "Tooske Ragas",
              "Winston Gerschtanowitz",
              "Evi Hanssen",
              "Eric Corton",
              "Isabelle Brinkman",
              "Wessel van Diepen",
              "Patrick Lodiers",
              "Candy Dulfer",
              "Adam Curry"
            ]
          },
          "explanation": "Alle bekende TMF-VJ's: Bridget Maasland, Ruud de Wild, Sylvie Meis, Tooske Ragas, Winston Gerschtanowitz, Evi Hanssen, Eric Corton, Isabelle Brinkman, Wessel van Diepen, Patrick Lodiers, Candy Dulfer en Adam Curry."
        }
      ]
    },
    {
      "month": 8,
      "name": "Augustus",
      "theme_hint": "Laatste zomerdagen",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "multiple_choice",
          "question_text": "SAIL Amsterdam 2025 was geen 'gewone editie'. Welke mijlpaal vierde de stad tegelijk?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image_after_answer",
            "url": "https://thingstodoinamsterdam.com/wp-content/uploads/2025/03/Sail-2025.jpg",
            "alt_text": "SAIL Amsterdam 2025"
          },
          "answers": [
            "750 jaar Amsterdam",
            "500 jaar grachtengordel",
            "100 jaar IJtunnel",
            "50 jaar A10"
          ],
          "correct": 0,
          "explanation": "SAIL 2025 viel samen met het 750-jarig bestaan van Amsterdam."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Amsterdam is de hoofdstad van Nederland. Wat is de hoofdstad van Frankrijk?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Parijs",
            "Londen",
            "Berlijn",
            "Madrid"
          ],
          "correct": 0,
          "explanation": "Parijs is de hoofdstad van Frankrijk!"
        },
        {
          "slot_type": "music",
          "question_type": "open_question",
          "question_text": "DJ's zijn vaak niet geboren als DJ. Wie weet wie dit zijn?",
          "intro_text": "Tijs Verwest • Armin van Buuren • Martijn Garritsen • Robbert van de Corput • Nick van de Wall • Tim Bergling • Adam Wiles • Pierre Guetta • Sonny Moore • Joel Zimmerman",
          "target_audience": "mixed",
          "points": 10,
          "humor_level": 2,
          "media": {
            "type": "audio_only",
            "url": "https://www.youtube.com/embed/DhFWvnzedBE?si=yWbtarwoR78Gc1V9&start=36",
            "alt_text": "Waarom moet ze nou een DJ zijn - Bankzitters"
          },
          "payload": {
            "correct_answer": "Tiësto, Armin van Buuren, Martin Garrix, Hardwell, Afrojack, Avicii, Calvin Harris, David Guetta, Skrillex, Deadmau5",
            "alternatives": ["Tiësto", "Armin van Buuren", "Martin Garrix", "Hardwell", "Afrojack", "Avicii", "Calvin Harris", "David Guetta", "Skrillex", "Deadmau5"]
          },
          "explanation": "Tijs Verwest = Tiësto, Armin van Buuren, Martijn Garritsen = Martin Garrix, Robbert van de Corput = Hardwell, Nick van de Wall = Afrojack, Tim Bergling = Avicii, Adam Wiles = Calvin Harris, Pierre Guetta = David Guetta, Sonny Moore = Skrillex, Joel Zimmerman = Deadmau5."
        }
      ]
    },
    {
      "month": 9,
      "name": "September",
      "theme_hint": "Terug naar school",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "In mei 2025 kreeg de katholieke kerk een nieuwe paus. Welke pausnaam koos hij? (Bonuspunt: uit welk land komt hij?)",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Leo XIV (uit de Verenigde Staten/Amerika)",
            "alternatives": ["Leo", "Leo de veertiende", "Paus Leo"]
          },
          "explanation": "Robert Prevost werd paus Leo XIV - de eerste Amerikaanse paus ooit! Hij spreekt 6 talen en woonde lang in Peru."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "In september begint de school weer. Wat zit er meestal in je broodtrommel?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 5,
          "media": {
            "type": "none"
          },
          "answers": [
            "Boterhammen",
            "Een televisie",
            "Een olifant",
            "De juf"
          ],
          "correct": 0,
          "explanation": "Boterhammen natuurlijk! Hoewel een olifant ook best gezellig zou zijn..."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "September 2025: Calum Scott bracht een nieuwe versie uit van 'I Wanna Dance With Somebody' samen met Whitney Houston. Van wie is het originele nummer (1987)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/eH3giaIzONA?start=45",
            "alt_text": "I Wanna Dance With Somebody"
          },
          "answers": [
            "Whitney Houston",
            "Madonna",
            "Céline Dion",
            "De HEMA (afdeling dans)"
          ],
          "correct": 0,
          "explanation": "Het origineel uit 1987 is van Whitney Houston; in 2025 kwam er een herwerkte versie met Calum Scott."
        }
      ]
    },
    {
      "month": 10,
      "name": "Oktober",
      "theme_hint": "Herfst & Halloween",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "multiple_choice",
          "question_text": "Na de kabinetsval werd Nederland opnieuw naar de stembus gestuurd. Op welke datum vonden de vervroegde Tweede Kamerverkiezingen plaats?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "image",
            "url": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w%2Cf_auto%2Cq_auto%3Abest/rockcms/2025-10/251029-Geert-Wilders-rs-95b4ea.jpg",
            "alt_text": "Verkiezingen oktober 2025"
          },
          "answers": [
            "29 oktober 2025",
            "15 oktober 2025",
            "31 oktober 2025",
            "6 november 2025"
          ],
          "correct": 0,
          "explanation": "De vervroegde verkiezingen werden gehouden op 29 oktober 2025."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Welk eng feest vieren we op 31 oktober?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Halloween",
            "Kerstmis",
            "Pasen",
            "Verjaardag van de tandarts"
          ],
          "correct": 0,
          "explanation": "Op Halloween verkleden kinderen zich als spoken, heksen en monsters!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welk liedje hoort bijna standaard bij Halloween-feestjes (met dat bekende 'hee-hee' geluid)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/sOnqjkJTMaA?start=240",
            "alt_text": "Thriller Michael Jackson"
          },
          "answers": [
            "Thriller – Michael Jackson",
            "Het Wilhelmus",
            "Kleine Wasbeer",
            "Bumperkleven – Remix"
          ],
          "correct": 0,
          "explanation": "'Thriller' van Michael Jackson is een Halloween-klassieker."
        }
      ]
    },
    {
      "month": 11,
      "name": "November",
      "theme_hint": "Sint & gezelligheid",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "open_question",
          "question_text": "Het Sinterklaasjournaal 2025 was controversieel: er waren soldaten, noodpakketten en een noodtoestand. Wat was er kwijt?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.dutchnews.nl/wpcms/wp-content/uploads/2025/12/ANP-542167298.jpg",
            "alt_text": "Sinterklaasjournaal 2025"
          },
          "payload": {
            "correct_answer": "De pakjes",
            "alternatives": ["Pakjes", "De cadeaus", "Cadeaus", "De cadeautjes"]
          },
          "explanation": "De pakjes waren kwijt! De Hoofdpiet riep zelfs een noodtoestand uit en vroeg kinderen noodpakketten te kopen."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Sinterklaas is best oud! In welk jaar is hij geboren?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Rond het jaar 280",
            "In 1900",
            "In 2000",
            "Vorig jaar"
          ],
          "correct": 0,
          "explanation": "Sinterklaas is gebaseerd op Sint-Nicolaas, geboren rond 280 in Turkije. Dat is meer dan 1700 jaar geleden!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welk lied wordt vaak gedraaid als Sinterklaas 'aankomt'?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/MRuS3dxKK9U?start=10",
            "alt_text": "Zie ginds komt de stoomboot"
          },
          "answers": [
            "Zie ginds komt de stoomboot",
            "Jingle Bells",
            "Bad Romance",
            "Het geluid van inpakpapier dat scheurt"
          ],
          "correct": 0,
          "explanation": "'Zie ginds komt de stoomboot' is een bekende Sinterklaasliedje."
        }
      ]
    },
    {
      "month": 12,
      "name": "December",
      "theme_hint": "Kerst & Oud en Nieuw",
      "questions": [
        {
          "slot_type": "news",
          "question_type": "multiple_choice",
          "question_text": "Welk programma won de Gouden Televizier-Ring 2025 met een recordscore van 74% van de stemmen?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Vandaag Inside",
            "Het Jachtseizoen: Most Wanted",
            "Wie is de Mol?",
            "De Slimste Mens"
          ],
          "correct": 0,
          "explanation": "Vandaag Inside won met 74% - een record! De heren waren zelf niet aanwezig, want ze moesten 'werken'."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "In de kerstfilm 'Home Alone' wordt een jongen thuis vergeten. Hoe heet hij?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Kevin",
            "Sinterklaas",
            "De Kerstman",
            "Pepernansen"
          ],
          "correct": 0,
          "explanation": "Kevin McCallister wordt per ongeluk thuis vergeten en moet de inbrekers slim te slim af zijn!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welke kersthit begint met 'Last Christmas, I gave you my heart'?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/E8gmARGvPlI?start=30",
            "alt_text": "Last Christmas Wham!"
          },
          "answers": [
            "Wham!",
            "Queen",
            "Coldplay",
            "De buurkinderen (als ze om 07:00 aanbellen)"
          ],
          "correct": 0,
          "explanation": "'Last Christmas' is van Wham! (George Michael)."
        }
      ]
    }
  ]
};
