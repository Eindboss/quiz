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
          "question_type": "multiple_choice",
          "question_text": "20 januari 2025: Amerika kreeg een nieuw machtsduo. Wie stond naast Trump bij de eedaflegging, en werd daarmee het politieke 'experiment' van deze termijn?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image_after_answer",
            "url": "https://ci.usembassy.gov/wp-content/uploads/sites/12/2025/01/inauguration_trump_swearing_in-25020627943215-2.jpg",
            "alt_text": "Trump inauguratie 2025"
          },
          "answers": [
            "J.D. Vance",
            "Nikki Haley",
            "Mike Pence",
            "Ron DeSantis"
          ],
          "correct": 0,
          "explanation": "Trump begon zijn tweede termijn met J.D. Vance als vicepresident."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "In januari hoor je vaak nieuws over 'goede voornemens'. Wat betekent dat?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Dingen die mensen zich voornemen om beter te doen",
            "Regels die de regering elk jaar in januari maakt",
            "Nieuwe wetten waar kinderen zich aan moeten houden",
            "Geheime plannen die meestal tot februari duren"
          ],
          "correct": 0,
          "explanation": "Goede voornemens zijn plannen die mensen maken om iets te verbeteren."
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
          "question_text": "Dit kwam in 2025 veel in het nieuws: wie werd in januari president van de Verenigde Staten?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Donald Trump",
            "Joe Biden",
            "Barack Obama",
            "De burgemeester van New York"
          ],
          "correct": 0,
          "explanation": "Donald Trump begon in 2025 aan een nieuwe termijn als president."
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
          "question_type": "multiple_choice",
          "question_text": "Maart 2025: welk land stond opnieuw bovenaan de World Happiness Report-lijst, tot lichte frustratie van landen die het 'ook best goed doen'?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Finland",
            "Nederland",
            "Canada",
            "Denemarken"
          ],
          "correct": 0,
          "explanation": "Finland stond opnieuw op nummer 1 in de World Happiness Report 2025."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Het Jeugdjournaal ging in 2025 vaak over klimaat. Wat betekent 'klimaat' eigenlijk?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Het gemiddelde weer over een lange tijd",
            "Het weer van vandaag",
            "Hoe warm je jas is",
            "Of het morgen gaat regenen"
          ],
          "correct": 0,
          "explanation": "Klimaat gaat over het weer over een lange periode, niet over één dag."
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
          "question_text": "April 2025: de Wereldexpo ging van start. In welke stad werd de toekomst officieel geopend, inclusief robots, dromen en lange wachttijden?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "image_after_answer",
            "url": "https://www.kanpai-japan.com/sites/default/files/styles/content_xs/public/uploads/2024/08/osaka-expo-2025-3d.jpg",
            "alt_text": "Expo 2025 Osaka"
          },
          "answers": [
            "Osaka",
            "Tokio",
            "Shanghai",
            "Dubai"
          ],
          "correct": 0,
          "explanation": "Expo 2025 werd gehouden in Osaka, Japan."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Op 1 april zie je soms nepnieuws. Wat is nepnieuws?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Nieuws dat niet waar is",
            "Nieuws dat alleen op tv komt",
            "Nieuws speciaal voor volwassenen",
            "Nieuws dat nog moet gebeuren"
          ],
          "correct": 0,
          "explanation": "Nepnieuws is nieuws dat niet klopt, maar wel echt lijkt."
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
          "question_type": "multiple_choice",
          "question_text": "Eurovisie 2025: Nederland stuurde een inzending die muzikaal werd gewaardeerd, maar niet won. Wie vertegenwoordigde Nederland en waar eindigden we?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.esc-plus.com/wp-content/uploads/2025/05/stage_basel_ESC2025.jpg",
            "alt_text": "Eurovision 2025 Basel"
          },
          "answers": [
            "Claude – 12e plaats",
            "Joost Klein – 5e plaats",
            "Anouk – 2e plaats",
            "Duncan Laurence – 1e plaats"
          ],
          "correct": 0,
          "explanation": "Claude vertegenwoordigde Nederland en eindigde 12e in de finale."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "5 mei is Bevrijdingsdag. Waar denken we dan vooral aan?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Vrijheid en het einde van de Tweede Wereldoorlog",
            "Het begin van de zomervakantie",
            "De verjaardag van de koning",
            "Een dag zonder regels"
          ],
          "correct": 0,
          "explanation": "Bevrijdingsdag gaat over vrijheid na de Tweede Wereldoorlog."
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
          "question_text": "In 2025 viel het Nederlandse kabinet. Wat is een kabinet?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "De groep ministers die het land bestuurt",
            "Een kast in de Tweede Kamer",
            "Het huis van de minister-president",
            "Een geheime vergaderclub"
          ],
          "correct": 0,
          "explanation": "Het kabinet bestaat uit ministers en bestuurt Nederland."
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
          "question_type": "multiple_choice",
          "question_text": "Juli 2025: Wimbledon kreeg een nieuwe kampioen bij de mannen. Wie won zijn eerste titel op het heiligste gras?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "image_after_answer",
            "url": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/bedf/live/f1887690-51b8-11f0-bdc1-3392cff01039.jpg",
            "alt_text": "Wimbledon 2025 winnaar"
          },
          "answers": [
            "Jannik Sinner",
            "Carlos Alcaraz",
            "Novak Djokovic",
            "Daniil Medvedev"
          ],
          "correct": 0,
          "explanation": "Jannik Sinner won in 2025 zijn eerste Wimbledon-titel."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Dit zag je in de zomer van 2025 vaak op tv: wat is Wimbledon?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een groot tennistoernooi",
            "Een voetbalclub",
            "Een pretpark in Engeland",
            "Een nieuwe sport"
          ],
          "correct": 0,
          "explanation": "Wimbledon is een beroemd tennistoernooi in Engeland."
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
          "question_text": "Amsterdam werd in 2025 750 jaar. Wat betekent dat?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Dat de stad al 750 jaar bestaat",
            "Dat er 750 boten lagen",
            "Dat er 750 mensen wonen",
            "Dat het 750 dagen feest was"
          ],
          "correct": 0,
          "explanation": "Amsterdam bestaat sinds 1275 en werd in 2025 750 jaar."
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
          "question_type": "multiple_choice",
          "question_text": "September 2025: de WK Atletiek werd gehouden in een stad die dit kunstje al vaker heeft gedaan. Waar?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "image",
            "url": "https://assets.aws.worldathletics.org/64ea346743516f3ab8b54ed4.jpg",
            "alt_text": "WK Atletiek 2025"
          },
          "answers": [
            "Tokio",
            "Parijs",
            "Doha",
            "Berlijn"
          ],
          "correct": 0,
          "explanation": "De WK Atletiek 2025 vonden plaats in Tokio."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "In september hoor je vaak over Prinsjesdag. Wat gebeurt er dan?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "De regering vertelt plannen voor het komende jaar",
            "De koning gaat op vakantie",
            "Alle wetten worden afgeschaft",
            "De Tweede Kamer sluit"
          ],
          "correct": 0,
          "explanation": "Op Prinsjesdag presenteert de regering de plannen en de begroting."
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
          "question_text": "In 2025 waren er verkiezingen. Wat doe je bij verkiezingen?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 4,
          "media": {
            "type": "none"
          },
          "answers": [
            "Stemmen op wie je het beste vindt",
            "Een test maken op school",
            "Beslissen wat iedereen moet eten",
            "Een quiz invullen"
          ],
          "correct": 0,
          "explanation": "Bij verkiezingen stemmen mensen op een partij of persoon."
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
          "question_type": "multiple_choice",
          "question_text": "Het Sinterklaasjournaal 2025 had een opvallend 'probleem-met-oplossing'. Wat stond centraal in het verhaal?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.dutchnews.nl/wpcms/wp-content/uploads/2025/12/ANP-542167298.jpg",
            "alt_text": "Sinterklaasjournaal 2025"
          },
          "answers": [
            "Kwijtgeraakte puzzelstukjes in het strooigoed",
            "Een lekke stoomboot",
            "Onvindbare Pieten",
            "Een verdwenen staf"
          ],
          "correct": 0,
          "explanation": "In 2025 draaide het verhaal om puzzelstukjes die per ongeluk tussen het strooigoed zaten."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is het Jeugdjournaal?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Nieuws speciaal uitgelegd voor kinderen",
            "Een tekenfilm",
            "Een krant voor juffen en meesters",
            "Een geheim programma"
          ],
          "correct": 0,
          "explanation": "Het Jeugdjournaal legt het nieuws uit op een begrijpelijke manier."
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
          "question_text": "December 2025: wie ontving de Nobelprijs voor de Vrede, voor haar rol in de Venezolaanse democratische oppositie?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "image_after_answer",
            "url": "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/1200x900/ANI-20251010092211_202510.jpg",
            "alt_text": "Nobelprijs voor de Vrede 2025"
          },
          "answers": [
            "María Corina Machado",
            "Volodymyr Zelensky",
            "Greta Thunberg",
            "Alexei Navalny (postuum)"
          ],
          "correct": 0,
          "explanation": "De Nobelprijs voor de Vrede 2025 ging naar María Corina Machado."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "In december hoor je vaak over 'vrede'. Wat betekent vrede?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Dat er geen oorlog is",
            "Dat iedereen altijd vrienden is",
            "Dat niemand ruzie mag maken",
            "Dat alles perfect gaat"
          ],
          "correct": 0,
          "explanation": "Vrede betekent dat landen of groepen geen oorlog voeren."
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
