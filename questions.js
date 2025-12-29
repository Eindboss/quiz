// Eindejaarsquiz 2025 - Premium Buurtmensen
// 12 maanden × 5 vragen = 60 vragen totaal
// Slot types: news, kids, music, viral, buurt

const quizData = {
  "meta": {
    "version": "2.0",
    "year": 2025,
    "title": "Eindejaarsquiz Premium Buurtmensen",
    "total_months": 12,
    "questions_per_month": 5,
    "total_questions": 60
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
          "question_text": "Wie werd op 20 januari 2025 beëdigd als vicepresident van de Verenigde Staten?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://ci.usembassy.gov/wp-content/uploads/sites/12/2025/01/inauguration_trump_swearing_in-25020627943215-2.jpg",
            "alt_text": "Trump inauguratie 2025"
          },
          "answers": [
            "J.D. Vance",
            "Mike Pence",
            "Kamala Harris",
            "Elon Musk (want hij was er toch)"
          ],
          "correct": 0,
          "explanation": "Trump begon zijn tweede termijn met J.D. Vance als vicepresident."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat doe je meestal op oudjaarsavond vlak vóór 12 uur?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Aftellen",
            "Je tanden poetsen",
            "Je huiswerk maken",
            "De was vouwen (uit vrije wil)"
          ],
          "correct": 0,
          "explanation": "Vlak voor middernacht tellen veel mensen af naar het nieuwe jaar."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Begin 2025 kwam een dans-versie uit van 'Moonlight Shadow'. Van wie is het originele nummer uit 1983?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/e80qhyovOnA?start=30",
            "alt_text": "Moonlight Shadow"
          },
          "answers": [
            "Mike Oldfield (met zang van Maggie Reilly)",
            "André Hazes",
            "Spiderman: The Musical",
            "De speaker van de AH (bonuspunten als je hem kent)"
          ],
          "correct": 0,
          "explanation": "'Moonlight Shadow' is oorspronkelijk van Mike Oldfield (1983). In 2025 verscheen er een dance-cover.",
          "fun_fact": "Je hoort het origineel in veel '80s'-playlists, en het blijft irritant lekker hangen."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Januari: welke 'nieuwjaarstraditie' is elk jaar weer massaal online te zien?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Goede-voornemens-posts die rond 12 januari verdwijnen",
            "Iedereen verkoopt spontaan zijn bank",
            "Massaal sneeuw in Nederland",
            "Collectieve stilte op internet"
          ],
          "correct": 0,
          "explanation": "Goede voornemens zijn een vaste januari-klassieker online."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één typisch Nederlands goed voornemen dat je vaak hoort in januari.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Meer sporten / gezonder eten / afvallen / minder alcohol",
            "alternatives": [
              "meer sporten",
              "gezonder eten",
              "afvallen",
              "minder alcohol",
              "minder snoepen",
              "meer wandelen"
            ]
          },
          "explanation": "Alles dat begint met 'dit jaar écht…' is goed. Ook als je het morgen alweer vergeet."
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
          "question_text": "Welke artiest verzorgde de halftime show van Super Bowl LIX (februari 2025)?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://hips.hearstapps.com/hmg-prod/images/474774247-18481150825049588-4241654844345328156-n-67a387fb4c262.jpg",
            "alt_text": "Super Bowl halftime show 2025"
          },
          "answers": [
            "Usher",
            "Beyoncé",
            "The Weeknd",
            "Gerard Joling (internationale doorbraak)"
          ],
          "correct": 0,
          "explanation": "Usher stond centraal tijdens de halftime show van Super Bowl LIX."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is 'carnaval' meestal het meest?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Verkleedfeest met muziek",
            "Een examenweek",
            "Een stille optocht waar je niet mag lachen",
            "Een dag waarop iedereen broccoli eet"
          ],
          "correct": 0,
          "explanation": "Carnaval is een feest met verkleden, muziek en vaak optochten."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welke artiest staat bekend om een 'powerballad' én won in 2014 Eurovision voor Oostenrijk (hint: baard en jurk)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/SaolVEJEjV4?start=60",
            "alt_text": "Rise Like a Phoenix"
          },
          "answers": [
            "Conchita Wurst",
            "DJ Tiësto",
            "K3",
            "De buurman die altijd om 22:03 boort"
          ],
          "correct": 0,
          "explanation": "Conchita Wurst won Eurovision 2014 voor Oostenrijk met 'Rise Like a Phoenix'."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Februari: welke Valentijns-trend duikt elk jaar weer op social media?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "'Kijk eens hoe perfect mijn relatie is'-posts",
            "Iedereen doet alsof bloemen verboden zijn",
            "Iedereen doet een boekverslag",
            "Mensen posten alleen foto's van stoeptegels"
          ],
          "correct": 0,
          "explanation": "Valentijn = relatieposts, cadeautjes en veel mensen die 'helemaal niks met Valentijn hebben'."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één Nederlandse stad die bekend staat om carnaval.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Maastricht / Den Bosch / Breda / Tilburg",
            "alternatives": [
              "Maastricht",
              "Den Bosch",
              "'s-Hertogenbosch",
              "Breda",
              "Tilburg",
              "Eindhoven"
            ]
          },
          "explanation": "Alles onder de rivieren telt. Bonuspunten als je er ook een carnavalsnaam bij weet."
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
          "question_text": "Welke sector zorgde in maart 2025 voor grootschalige ontregeling in Nederland door stakingen?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.dutchnews.nl/wpcms/wp-content/uploads/2025/07/ANP-532106548.jpg",
            "alt_text": "OV-stakingen maart 2025"
          },
          "answers": [
            "Openbaar vervoer",
            "Supermarkten",
            "De Efteling",
            "Ouders met bakfietsen"
          ],
          "correct": 0,
          "explanation": "Trein- en OV-stakingen zorgden voor chaos bij forenzen en scholieren."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Welke maand begint de lente meestal (meteorologisch) in Nederland?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Maart",
            "Augustus",
            "December",
            "De maand 'Poffertjes'"
          ],
          "correct": 0,
          "explanation": "De lente start vaak in maart."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "In 2025 ging het oude liedje 'Pretty Little Baby' viraal op TikTok. Wie zong het origineel?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/BF2jcSBgM4A?start=10",
            "alt_text": "Pretty Little Baby"
          },
          "answers": [
            "Connie Francis",
            "Ariana Grande",
            "ABBA",
            "De kat van de buren (miauwt in A-klein)"
          ],
          "correct": 0,
          "explanation": "Het origineel is van Connie Francis (jaren '60) en werd in 2025 opnieuw viral."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Maart: eerste zonnige dag. Wat doen Nederlanders het liefst?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Op het terras zitten (ook als het 9 graden is)",
            "Schaatsen op natuurijs",
            "Sneeuwballen gooien",
            "Binnen blijven en klagen dat het te warm is"
          ],
          "correct": 0,
          "explanation": "Zon = terras. Nederland is hierin volledig voorspelbaar en toch trots."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één plek in Nederland waar je in het voorjaar bloemen gaat kijken.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Keukenhof",
            "alternatives": [
              "Keukenhof",
              "Bollenstreek",
              "Lisse",
              "tulpenvelden"
            ]
          },
          "explanation": "Keukenhof en de Bollenstreek zijn de bekendste opties."
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
          "question_text": "In welke stad werd de Wereldexpo 2025 officieel geopend?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.kanpai-japan.com/sites/default/files/styles/content_xs/public/uploads/2024/08/osaka-expo-2025-3d.jpg",
            "alt_text": "Expo 2025 Osaka"
          },
          "answers": [
            "Osaka",
            "Tokio",
            "Dubai",
            "Almere (bijna af)"
          ],
          "correct": 0,
          "explanation": "Expo 2025 vond plaats in Osaka, Japan."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is een '1 aprilgrap'?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een grap die je op 1 april uithaalt",
            "Een test op school",
            "Een soort ijsje",
            "Een dier in de dierentuin"
          ],
          "correct": 0,
          "explanation": "Op 1 april halen mensen vaak grapjes uit."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welke band zong het bekende lied 'Waterloo' (Eurovision-winnaar 1974)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/Sj_9CiNkkn4?start=20",
            "alt_text": "ABBA Waterloo"
          },
          "answers": [
            "ABBA",
            "The Beatles",
            "Queen",
            "De Toppers (maar dan met glitterregen)"
          ],
          "correct": 0,
          "explanation": "ABBA won Eurovision 1974 met 'Waterloo'."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "April: wat is het meest geloofwaardige 1-april 'nieuwtje' in de buurtapp?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "'Er is een nieuwe parkeerregel…' (en iedereen raakt meteen in paniek)",
            "'De zon gaat uit'",
            "'Iedereen krijgt gratis pizza'",
            "'Katten moeten voortaan een helm dragen'"
          ],
          "correct": 0,
          "explanation": "In Nederland zijn parkeerregels en paniek elkaars natuurlijke vijanden."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Koningsdag 2025: noem één ding dat je vaak ziet op een vrijmarkt.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Tweedehands speelgoed / boeken / kleding",
            "alternatives": [
              "speelgoed",
              "boeken",
              "kleding",
              "oude spellen",
              "rommel",
              "LP's"
            ]
          },
          "explanation": "Vrijmarkt = schatzoeken in andermans zolder."
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
          "question_text": "Wie vertegenwoordigde Nederland op het Eurovisie Songfestival 2025 en op welke plek eindigde Nederland?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.esc-plus.com/wp-content/uploads/2025/05/stage_basel_ESC2025.jpg",
            "alt_text": "Eurovision 2025 Basel"
          },
          "answers": [
            "Joost Klein – 5e",
            "Claude – 3e",
            "Anouk – 12e",
            "De Top 2000 – morele winnaar"
          ],
          "correct": 0,
          "explanation": "Joost Klein eindigde verrassend sterk met een 5e plaats."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "5 mei is in Nederland een speciale dag. Wat vieren we dan?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Bevrijdingsdag",
            "Sinterklaas",
            "Koningsnacht",
            "De Nationale Pannenkoekinspectie"
          ],
          "correct": 0,
          "explanation": "Op 5 mei vieren we Bevrijdingsdag."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Eurovision 2025: met welk lied won JJ voor Oostenrijk?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/g8v6cZ21vlc?start=45",
            "alt_text": "JJ Wasted Love Eurovision 2025"
          },
          "answers": [
            "Wasted Love",
            "Lost in Lidl",
            "Kapsalon Symphony",
            "Ik Ben Een Demissionair Kabinet"
          ],
          "correct": 0,
          "explanation": "JJ won Eurovision 2025 met 'Wasted Love'."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Mei: welk 'festivalprobleem' is elk jaar weer trending op social media?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "'Ik ben mijn vrienden kwijt' + 17 spraakmemo's",
            "Iedereen heeft altijd droog haar",
            "Niemand verliest ooit iets",
            "Iedereen gaat op tijd naar bed"
          ],
          "correct": 0,
          "explanation": "Festivals = kwijt, moe, dorst, en tóch gelukkig."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één Nederlandse herdenking of traditie die in mei plaatsvindt.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Dodenherdenking (4 mei) / Bevrijdingsdag (5 mei)",
            "alternatives": [
              "dodenherdenking",
              "4 mei",
              "bevrijdingsdag",
              "5 mei",
              "bevrijdingsfestival"
            ]
          },
          "explanation": "4 mei herdenken, 5 mei vieren: Nederland in twee dagen."
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
          "question_text": "Wat was de directe aanleiding voor de val van het kabinet-Schoof op 3 juni 2025?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://idsb.tmgrup.com.tr/ly/uploads/images/2025/06/06/385834.jpg",
            "alt_text": "Kabinet Schoof valt"
          },
          "answers": [
            "PVV trok steun in over asielbeleid",
            "Begroting niet rond",
            "Motie over frikandellen",
            "Iemand vergat 'reply all'"
          ],
          "correct": 0,
          "explanation": "Het conflict over asielmigratie leidde tot het terugtrekken van steun door de PVV."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat hoort meestal bij het begin van de zomer?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 1,
          "media": {
            "type": "none"
          },
          "answers": [
            "Lange dagen en meer zon",
            "Sneeuwballen",
            "Kerstliedjes",
            "Iedereen draagt een muts in huis"
          ],
          "correct": 0,
          "explanation": "In de zomer zijn de dagen langer en is het vaker warm."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welke Nederlandse zangeres zong 'Europapa' (een echte oorwurm uit de lage landen, maar dan eerder)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/gT2wY0DjYHo?start=30",
            "alt_text": "Europapa Joost Klein"
          },
          "answers": [
            "Joost Klein (het is een man, maar dat is de grap)",
            "Maan",
            "Anouk",
            "Gerard Joling (altijd een optie)"
          ],
          "correct": 0,
          "explanation": "'Europapa' is van Joost Klein. Bonus: je kunt het nu waarschijnlijk niet meer uit je hoofd krijgen."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Juni: wat is de meest gedeelde 'zomerstart' foto in Nederland?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Eerste barbecue met te veel rook",
            "Een perfect gezonde salade",
            "Een foto van stilte",
            "Een screenshot van je belastingaangifte"
          ],
          "correct": 0,
          "explanation": "De Nederlandse barbecue is 40% eten en 60% rooksignalen naar de buren."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één typisch Nederlandse 'zomer-eten' klassieker (mag heel simpel).",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "IJs / haring / barbecue / aardbeien",
            "alternatives": [
              "ijs",
              "haring",
              "barbecue",
              "aardbeien",
              "saté",
              "watermeloen"
            ]
          },
          "explanation": "Alles dat je buiten eet en plakt aan je vingers telt."
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
          "question_text": "Welke tennisser won in juli 2025 voor het eerst Wimbledon bij de mannen?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://ichef.bbci.co.uk/ace/standard/1536/cpsprodpb/bedf/live/f1887690-51b8-11f0-bdc1-3392cff01039.jpg",
            "alt_text": "Wimbledon 2025 winnaar"
          },
          "answers": [
            "Jannik Sinner",
            "Novak Djokovic",
            "Carlos Alcaraz",
            "Tim van Rijthoven (op karakter)"
          ],
          "correct": 0,
          "explanation": "Jannik Sinner pakte zijn eerste Wimbledon-titel."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat neem je vaak mee op vakantie?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Koffer met kleding",
            "Een koelkast",
            "Een zwembad van 12 meter",
            "De complete bankstelset"
          ],
          "correct": 0,
          "explanation": "Op vakantie neem je meestal kleding en spullen in een koffer mee."
        },
        {
          "slot_type": "music",
          "question_type": "multiple_choice",
          "question_text": "Welke artiest staat bekend om het lied 'Flowers' (mega-hit van de afgelopen jaren)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "video",
            "url": "https://www.youtube.com/embed/G7KNmW9a75Y?start=60",
            "alt_text": "Flowers Miley Cyrus"
          },
          "answers": [
            "Miley Cyrus",
            "Boudewijn de Groot",
            "Ramses Shaffy",
            "De buurvrouw met de bladblazer"
          ],
          "correct": 0,
          "explanation": "'Flowers' is van Miley Cyrus."
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Juli: welk vakantiefenomeen zie je elk jaar weer in je tijdlijn?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "'Airport dad'-foto's (veel te vroeg op Schiphol)",
            "Mensen die relaxed zijn op vakantie",
            "Niemand klaagt over files",
            "Iedereen post alleen hun waslijst"
          ],
          "correct": 0,
          "explanation": "Vakantie = te vroeg vertrekken, en daarna zeggen dat het 'toch best handig' was."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Open vraag: Wat is jouw ultieme Nederlandse 'vakantie in eigen land'-plek (één woord of plaatsnaam)?",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Waddeneilanden / Zeeland / Veluwe",
            "alternatives": [
              "Texel",
              "Terschelling",
              "Ameland",
              "Zeeland",
              "Veluwe",
              "Limburg",
              "Drenthe"
            ]
          },
          "explanation": "Hier is geen fout antwoord. Alleen iemand die 'de A2' zegt krijgt een blik."
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
          "question_text": "Welke bijzondere verjaardag viel samen met SAIL Amsterdam 2025?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://thingstodoinamsterdam.com/wp-content/uploads/2025/03/Sail-2025.jpg",
            "alt_text": "SAIL Amsterdam 2025"
          },
          "answers": [
            "750 jaar Amsterdam",
            "500 jaar grachten",
            "100 jaar fietsbel",
            "50 jaar file op de A10"
          ],
          "correct": 0,
          "explanation": "SAIL 2025 viel samen met het 750-jarig bestaan van Amsterdam."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is een 'parade' of optocht meestal?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 1,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een rij mensen/voertuigen die langs komt met muziek",
            "Een stille rij bij de tandarts",
            "Een file met alleen tractors",
            "Een spelletje op de telefoon"
          ],
          "correct": 0,
          "explanation": "Bij een parade rijdt of loopt er een stoet langs, vaak met muziek."
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
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Augustus: wat is het meest gedeelde 'hete dag' bericht in Nederland?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "'Het is 28 graden. Dit is officieel tropisch. Ik smelt.'",
            "'Wat een fijne kou!'",
            "'Ik heb zin in erwtensoep'",
            "'Ik ga de schoorsteen aansteken'"
          ],
          "correct": 0,
          "explanation": "Nederlanders praten over het weer alsof het breaking news is. Omdat dat ook zo voelt."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één bekende Nederlandse stad waar je in de zomer graag een dagje naartoe gaat.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 1,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Amsterdam / Rotterdam / Utrecht / Den Haag",
            "alternatives": [
              "Amsterdam",
              "Rotterdam",
              "Utrecht",
              "Den Haag",
              "Haarlem",
              "Leiden",
              "Groningen",
              "Maastricht"
            ]
          },
          "explanation": "Dagje stad = lopen, ijs, terras, en daarna klagen over drukte."
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
          "question_text": "In welke stad werd het WK Atletiek 2025 gehouden?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://assets.aws.worldathletics.org/64ea346743516f3ab8b54ed4.jpg",
            "alt_text": "WK Atletiek 2025"
          },
          "answers": [
            "Tokio",
            "Parijs",
            "Doha",
            "Papendal (bijna)"
          ],
          "correct": 0,
          "explanation": "Het WK Atletiek vond plaats in Tokio, Japan."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat heb je vaak nodig als school weer begint?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Schrift of schoolspullen",
            "Ski's",
            "Zwemvliezen",
            "Een helm voor je boterham"
          ],
          "correct": 0,
          "explanation": "Bij school begin je vaak met schoolspullen zoals schriften en pennen."
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
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "September 2025: welk 'brainrot'-getal werd in 2025 een viral meme waar volwassenen niets van begrepen?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "6-7 ('six seven')",
            "3,14",
            "42 (die is al bezet door Hitchhiker's Guide)",
            "118 (het nummer van de pizza)"
          ],
          "correct": 0,
          "explanation": "'6-7' (six seven) werd in 2025 een virale meme/uitroep op social media."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één schooltraditie of 'terug naar school' moment dat je in september ziet (thuis of op straat).",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Nieuwe rugzak / eerste schooldag foto / broodtrommel",
            "alternatives": [
              "nieuwe rugzak",
              "eerste schooldag foto",
              "broodtrommel",
              "fietschaos",
              "nieuwe schoenen"
            ]
          },
          "explanation": "Alles dat 'nieuwe spullen + lichte paniek' combineert telt."
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
          "question_text": "Op welke datum vonden de vervroegde Tweede Kamerverkiezingen van 2025 plaats?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-560w%2Cf_auto%2Cq_auto%3Abest/rockcms/2025-10/251029-Geert-Wilders-rs-95b4ea.jpg",
            "alt_text": "Verkiezingen oktober 2025"
          },
          "answers": [
            "29 oktober",
            "15 oktober",
            "31 oktober",
            "Wanneer iedereen tijd had"
          ],
          "correct": 0,
          "explanation": "Na de kabinetsval werd 29 oktober vastgesteld als verkiezingsdatum."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat is Halloween meestal?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Verkleed gaan en snoep halen",
            "Een sportdag",
            "Een dag dat iedereen fluistert",
            "Een feest met alleen spruitjes"
          ],
          "correct": 0,
          "explanation": "Met Halloween verkleden kinderen zich vaak en vragen snoep ('trick or treat')."
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
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "Oktober: welk soort filmpjes scoort elk jaar weer rond Halloween?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Schrikfilmpjes en jumpscares",
            "Video's van belastingformulieren",
            "Saaie vergaderopnames",
            "Tutorials: 'hoe word ik een deurmat'"
          ],
          "correct": 0,
          "explanation": "Jumpscares en halloween-grappen domineren vaak in oktober."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één ding dat je in Nederland typisch in de herfst ziet (weer, natuur of straatbeeld).",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Bladeren vallen / regen / paddenstoelen",
            "alternatives": [
              "bladeren vallen",
              "regen",
              "storm",
              "paddenstoelen",
              "wind",
              "donker vroeg"
            ]
          },
          "explanation": "De herfst is 60% bladeren en 40% 'waar is mijn paraplu'."
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
          "question_text": "Welk probleem stond centraal in het Sinterklaasjournaal 2025?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://www.dutchnews.nl/wpcms/wp-content/uploads/2025/12/ANP-542167298.jpg",
            "alt_text": "Sinterklaasjournaal 2025"
          },
          "answers": [
            "Het Grote Boek raakte kwijt/beschadigd",
            "De boot was lek",
            "De Pieten waren zoek",
            "De stoommachine had update-problemen"
          ],
          "correct": 0,
          "explanation": "Het Grote Boek was het grote spanningspunt van 2025."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wie komt in november vaak aan in Nederland (in verhalen en op tv)?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "answers": [
            "Sinterklaas",
            "De Paashaas",
            "De Kerstman (te vroeg!)",
            "Een gigantische aardappel"
          ],
          "correct": 0,
          "explanation": "In november komt Sinterklaas 'aan' in Nederland."
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
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "November: wat is het meest gedeelde 'Sinterklaas-gevoel' online?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Inpakstress + 'waar is de tape?'",
            "Iedereen is altijd rustig",
            "Niemand koopt ooit cadeaus",
            "Collectieve stilte in speelgoedwinkels"
          ],
          "correct": 0,
          "explanation": "Rond Sinterklaas: cadeaustress, verlanglijstjes en vooral… tape-tekort."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één typisch Sinterklaascadeau dat je vaak ziet (klassiek of modern).",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Chocoladeletter / speelgoed / boek",
            "alternatives": [
              "chocoladeletter",
              "pepernoten",
              "speelgoed",
              "boek",
              "bordspel",
              "lego"
            ]
          },
          "explanation": "Alles telt, behalve 'een factuur'."
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
          "question_text": "Wie ontving in december 2025 de Nobelprijs voor de Vrede?",
          "target_audience": "adults",
          "points": 2,
          "humor_level": 2,
          "media": {
            "type": "image",
            "url": "https://d3pc1xvrcw35tl.cloudfront.net/ln/feedImages/1200x900/ANI-20251010092211_202510.jpg",
            "alt_text": "Nobelprijs voor de Vrede 2025"
          },
          "answers": [
            "María Corina Machado",
            "Volodymyr Zelensky",
            "Greta Thunberg",
            "Degene die Kerst zonder ruzie regelde"
          ],
          "correct": 0,
          "explanation": "Machado kreeg de prijs voor haar rol in de Venezolaanse democratische oppositie."
        },
        {
          "slot_type": "kids",
          "question_type": "multiple_choice",
          "question_text": "Wat staat er vaak in huis met Kerst?",
          "target_audience": "kids",
          "points": 1,
          "humor_level": 1,
          "media": {
            "type": "none"
          },
          "answers": [
            "Een kerstboom",
            "Een strandstoel",
            "Een paashaas",
            "Een voetbalveld"
          ],
          "correct": 0,
          "explanation": "Met Kerst hebben veel mensen een kerstboom in huis."
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
        },
        {
          "slot_type": "viral",
          "question_type": "multiple_choice",
          "question_text": "December: wat is de meest voorkomende 'kerst-viral' op social media?",
          "target_audience": "mixed",
          "points": 1,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "answers": [
            "Fail-video's met kerstlichtjes (en een ladder)",
            "Iedereen doet aan stilte-retreat",
            "Tutorial: hoe eet ik een steen",
            "Video's van mensen die belasting betalen"
          ],
          "correct": 0,
          "explanation": "Kerstlichtjes + ladder + haast = internetcontent."
        },
        {
          "slot_type": "buurt",
          "question_type": "open_question",
          "question_text": "Noem één gerecht dat bij veel Nederlanders rond Kerst op tafel staat.",
          "target_audience": "mixed",
          "points": 2,
          "humor_level": 3,
          "media": {
            "type": "none"
          },
          "payload": {
            "correct_answer": "Gourmet / kerstdiner / rollade / kalkoen",
            "alternatives": [
              "gourmet",
              "rollade",
              "kalkoen",
              "kerstdiner",
              "biefstuk",
              "stoofpot",
              "desserttafel"
            ]
          },
          "explanation": "Gourmetten is nationale topsport: iedereen verbrandt z'n vingers in stilte."
        }
      ]
    }
  ]
};
