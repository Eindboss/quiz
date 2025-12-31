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
          "question_text": "20 januari 2025: Trump begon zijn tweede termijn. Hoe heet de nieuwe First Lady? (Bonuspunt: hoe heet de nieuwe Second Lady?)",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image_after_answer",
            "url": "https://media.cnn.com/api/v1/images/stellar/prod/ap25020841494795.jpg?c=16x9&q=h_833,w_1480,c_fill",
            "alt_text": "Melania Trump en Usha Vance bij de inauguratie"
          },
          "payload": {
            "correct_answer": "Melania Trump (Second Lady: Usha Vance)",
            "alternatives": ["Melania", "Usha Vance", "Usha"]
          },
          "explanation": "Melania Trump is terug als First Lady. Usha Vance, vrouw van vicepresident J.D. Vance, is de eerste Indiaas-Amerikaanse Second Lady."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Welk huisdier hebben de meeste mensen in Nederland?",
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
          "question_type": "multiple_choice",
          "question_text": "Super Bowl LIX (februari 2025): sport was bijzaak, cultuur hoofdzaak. Welke artiest kreeg het podium – en het debat – volledig naar zich toe?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image_after_answer",
            "url": "https://hips.hearstapps.com/hmg-prod/images/474774247-18481150825049588-4241654844345328156-n-67a387fb4c262.jpg",
            "alt_text": "Super Bowl halftime show 2025"
          },
          "answers": [
            "Kendrick Lamar",
            "Beyoncé",
            "Taylor Swift",
            "The Weeknd"
          ],
          "correct": 0,
          "explanation": "Kendrick Lamar verzorgde de halftime show van Super Bowl LIX."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Met carnaval verkleden veel mensen zich. Welke kleuren horen bij carnaval?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Alle kleuren! Hoe gekker hoe beter",
            "Alleen zwart en wit",
            "Alleen grijs",
            "Alleen oranje"
          ],
          "correct": 0,
          "explanation": "Bij carnaval draag je zoveel mogelijk gekke kleuren!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Wat is de echte voornaam van Lady Gaga?",
          "intro_text": "Het nummer \"Die With a Smile\" van Bruno Mars en Lady Gaga was in februari 2025 het meest gestreamde lied in Nederland. De ballade over eeuwige liefde raakte een snaar bij miljoenen luisteraars.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video_after_answer",
            "url": "https://www.youtube.com/embed/IFS3imM9qes?si=gzf83w2UzLNt6KPS&start=2",
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
          "question_text": "In 2025 werd Memphis Depay de topscorer aller tijden van het Nederlands elftal. Wiens record verbrak hij?",
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
          "question_text": "Ken jij nog 3 zangeressen waarvan de naam begint met een R?",
          "intro_text": "In maart scoorde Bruno Mars weer een megahit, maar nu met een andere zangeres: Rosé.",
          "target_audience": "mixed",
          "points": 3,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/ekr2nIex040?si=abHghLUQxAzjtmm6&start=2&clip=Ugkx5klmMSVdJYlwqSaSNk-nmOulm9puiw_d&clipt=EIS1CBjAgQk",
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
          "question_text": "In 2025 ging een schattige video viral van konijnen op een trampoline. Wat bleek het probleem?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "none"
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
          "question_type": "multiple_choice",
          "question_text": "Wat is waar over Roxy Dekker?",
          "intro_text": "In april was de populairste Nederlandse artiest Roxy Dekker.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/AsWcssoECUE?si=wcORh-pUXvAYbzwi&start=2&clip=Ugkxk5ERSrmwwd04yUY4E3XqWn6G8onFM0GV&clipt=EMjWBRjwmQc",
            "alt_text": "Roxy Dekker"
          },
          "answers": [
            "Ze scoorde een nummer-1-hit zonder ooit op de radio te zijn gedraaid",
            "Haar liedjes begonnen als TikTok-grappen",
            "Ze brak door met Nederlandstalige covers van Bruno Mars",
            "Ze was de jongste artiest ooit met drie hits tegelijk in de Top 40"
          ],
          "correct": 1,
          "explanation": "Roxy Dekker begon met het maken van grappige liedjes op TikTok die viraal gingen."
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
          "question_type": "multiple_choice",
          "question_text": "In mei 2025 kwam de film Lilo & Stitch uit. Hoe heet het meisje dat Stitch adopteert?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Lilo",
            "Nani",
            "Angel",
            "Moana"
          ],
          "correct": 0,
          "explanation": "Lilo is het Hawaiiaanse meisje dat de lieve alien Stitch adopteert!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welk lied heeft de hoogste notering?",
          "intro_text": "In mei 2025 was Marco Borsato gecanceld. Toch staat hij nu met veel nummers in de Top 2000.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/7azASBMAkOU?si=oqGiEGH7REezD8Cu&start=2&clip=UgkxrglFAPV2MbmwEk6uPYosvk7K0JpRG2ly&clipt=EOC_ChjYlQs",
            "alt_text": "Marco Borsato"
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
          "question_text": "3 juni 2025: kabinet-Schoof viel. Wat was de doorslaggevende politieke breuklijn?",
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
          "question_text": "Waar gaan de meeste Nederlandse gezinnen op zomervakantie?",
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
          "question_text": "Wie stond er in juni 2000 op 1 in de Nederlandse hitlijsten?",
          "intro_text": "25 jaar geleden was er ook al muziek.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video_after_answer",
            "url": "https://www.youtube.com/embed/oIJldSgK0Wc?si=bXVoGiHBflzNl-8_&clip=Ugkx3ugWjRVnfh5e3jCm7bmDuzC5Z2pu7Lya&clipt=EMmdChijtws",
            "alt_text": "Life - Des'ree"
          },
          "answers": [
            "Life – Des'ree",
            "The Ketchup Song (Aserejé) – Las Ketchup",
            "Dragostea Din Tei – O-Zone",
            "Jij bent de zon – Jop"
          ],
          "correct": 0,
          "explanation": "Life van Des'ree stond in juni 2000 op nummer 1 in Nederland."
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
          "question_text": "In 2025 kondigde de originele K3 een reünie aan. Tickets vlogen de deur uit! Hoe heten de drie originele K3-zangeressen?",
          "target_audience": "adults",
          "points": 3,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Karen, Kristel en Kathleen",
            "alternatives": ["Karen Kristel Kathleen", "Karen Damen, Kristel Verbeke, Kathleen Aerts"]
          },
          "explanation": "Karen Damen, Kristel Verbeke en Kathleen Aerts stonden na 16 jaar weer samen op het podium. In 4 uur werden 300.000 tickets verkocht!"
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
          "question_text": "Hoeveel TMF VJ's ken je nog?",
          "intro_text": "De meeste zomerhits hoor je in de zomer. Waar je weinig meer van hoort is van TMF.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Bijvoorbeeld: Bridget Maasland, Ruud de Wild, Sylvie Meis, Tooske Ragas, Winston Gerschtanowitz, Evi Hanssen",
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
          "explanation": "Bekende TMF VJ's waren onder andere Bridget Maasland, Ruud de Wild, Sylvie Meis, Tooske Ragas, Winston Gerschtanowitz en Evi Hanssen."
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
          "question_text": "Amsterdam werd in 2025 jarig! Hoe oud werd de stad?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "750 jaar",
            "10 jaar",
            "100 jaar",
            "1 miljoen jaar"
          ],
          "correct": 0,
          "explanation": "Amsterdam bestaat al sinds 1275 en werd in 2025 maar liefst 750 jaar oud!"
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welke Nederlandse dj is wereldwijd bekend én heet eigenlijk Tijs Verwest?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/qhJKCgKJuJY?start=60",
            "alt_text": "Tiësto"
          },
          "answers": [
            "Tiësto",
            "Armin van Buuren",
            "Martin Garrix",
            "DJ Pannenkoek (live vanaf de bakplaat)"
          ],
          "correct": 0,
          "explanation": "Tijs Verwest is Tiësto."
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
