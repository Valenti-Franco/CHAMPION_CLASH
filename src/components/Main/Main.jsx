import React, { useEffect, useRef, useState } from 'react'
import style from "./index.module.css";
import Player from '../Player/Player';
import Game from '../Game/Game';
import { AnimatePresence, motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import Logo from '../Svg/Logo';
import Pelota from '../Svg/Pelota';
import JugadorNob from '../Svg/JugadorNob';
import getRandomPlayerIndexes from '../../Logic/getRandomPlayerIndexes';
import useSound from 'use-sound';

import tema1 from '../../assets/sound/tema1.mp3';
import tema2 from '../../assets/sound/tema2.mp3';
import tema3 from '../../assets/sound/tema3.mp3';
import referiSound from '../../assets/sound/referi.mp3';
import confettiSound from '../../assets/sound/festejo.mp3';


import {Sound} from '../Sound/Sound';
import Header from '../Header/Header';
const Main = () => {

    // useEffect(() => {
    //     fetch("https://v3.football.api-sports.io/players/topscorers?season=2022&league=135", {
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "v3.football.api-sports.io",
    //             "x-rapidapi-key": "e4e68634fe7c14eb878dea59e2658255"
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(data => {
    //         if (data && data.response && data.response.length > 0) {
    //             const playerDataArray = data.response.map(playerData => {
    //                 const { player } = playerData;
    //                 const { duels, passes, goals, team, league, dribbles } = playerData.statistics[0];
    //                 return {
    //                     player,
    //                     duels,
    //                     passes,
    //                     goals,
    //                         dribbles,
    //                     team,
    //                     league
    //                 };
    //             });
    
    //             console.log(playerDataArray);
    //         }
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     });
    // }, []);

   let PlayersJson = [
    
        {
            "player": {
                "id": 2780,
                "name": "V. Osimhen",
                "firstname": "Victor James",
                "lastname": "Osimhen",
                "age": 25,
                "birth": {
                    "date": "1998-12-29",
                    "place": "Lagos",
                    "country": "Nigeria"
                },
                "nationality": "Nigeria",
                "height": "185 cm",
                "weight": "78 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/2780.png"
            },
            "duels": {
                "total": 317,
                "won": 137
            },
            "passes": {
                "total": 372,
                "key": 34,
                "accuracy": 8
            },
            "goals": {
                "total": 26,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 60,
                "success": 24,
                "past": null
            },
            "team": {
                "id": 492,
                "name": "Napoli",
                "logo": "https://media-2.api-sports.io/football/teams/492.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 217,
                "name": "L. Martínez",
                "firstname": "Lautaro Javier",
                "lastname": "Martínez",
                "age": 26,
                "birth": {
                    "date": "1997-08-22",
                    "place": "Bahía Blanca",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "174 cm",
                "weight": "72 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/217.png"
            },
            "duels": {
                "total": 331,
                "won": 153
            },
            "passes": {
                "total": 655,
                "key": 46,
                "accuracy": 13
            },
            "goals": {
                "total": 21,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 59,
                "success": 28,
                "past": null
            },
            "team": {
                "id": 505,
                "name": "Inter",
                "logo": "https://media-1.api-sports.io/football/teams/505.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 22015,
                "name": "B. Dia",
                "firstname": "Boulaye",
                "lastname": "Dia",
                "age": 27,
                "birth": {
                    "date": "1996-11-16",
                    "place": "Oyonnax",
                    "country": "France"
                },
                "nationality": "Senegal",
                "height": "180 cm",
                "weight": "75 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/22015.png"
            },
            "duels": {
                "total": 294,
                "won": 106
            },
            "passes": {
                "total": 564,
                "key": 33,
                "accuracy": 13
            },
            "goals": {
                "total": 16,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 70,
                "success": 32,
                "past": null
            },
            "team": {
                "id": 514,
                "name": "Salernitana",
                "logo": "https://media-2.api-sports.io/football/teams/514.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-1.api-sports.io/football/leagues/135.png",
                "flag": "https://media-3.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 22236,
                "name": "Rafael Leão",
                "firstname": "Rafael Alexandre",
                "lastname": "da Conceição Leão",
                "age": 24,
                "birth": {
                    "date": "1999-06-10",
                    "place": "Almada",
                    "country": "Portugal"
                },
                "nationality": "Portugal",
                "height": "188 cm",
                "weight": "81 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/22236.png"
            },
            "duels": {
                "total": 307,
                "won": 135
            },
            "passes": {
                "total": 732,
                "key": 49,
                "accuracy": 16
            },
            "goals": {
                "total": 15,
                "conceded": 0,
                "assists": 8,
                "saves": null
            },
            "dribbles": {
                "attempts": 146,
                "success": 68,
                "past": null
            },
            "team": {
                "id": 489,
                "name": "AC Milan",
                "logo": "https://media-3.api-sports.io/football/teams/489.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 18767,
                "name": "A. Lookman",
                "firstname": "Ademola Lookman Olajade",
                "lastname": "Alade Aylola Lookman",
                "age": 26,
                "birth": {
                    "date": "1997-10-20",
                    "place": "London",
                    "country": "England"
                },
                "nationality": "Nigeria",
                "height": "174 cm",
                "weight": "71 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/18767.png"
            },
            "duels": {
                "total": 214,
                "won": 85
            },
            "passes": {
                "total": 598,
                "key": 39,
                "accuracy": 15
            },
            "goals": {
                "total": 13,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 70,
                "success": 33,
                "past": null
            },
            "team": {
                "id": 499,
                "name": "Atalanta",
                "logo": "https://media-2.api-sports.io/football/teams/499.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 2295,
                "name": "O. Giroud",
                "firstname": "Olivier Jonathan",
                "lastname": "Giroud",
                "age": 37,
                "birth": {
                    "date": "1986-09-30",
                    "place": "Chambéry",
                    "country": "France"
                },
                "nationality": "France",
                "height": "193 cm",
                "weight": "91 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/2295.png"
            },
            "duels": {
                "total": 260,
                "won": 136
            },
            "passes": {
                "total": 547,
                "key": 23,
                "accuracy": 10
            },
            "goals": {
                "total": 13,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 12,
                "success": 7,
                "past": null
            },
            "team": {
                "id": 489,
                "name": "AC Milan",
                "logo": "https://media-3.api-sports.io/football/teams/489.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 31318,
                "name": "M&apos;Bala Nzola",
                "firstname": "M'Bala",
                "lastname": "Nzola",
                "age": 27,
                "birth": {
                    "date": "1996-08-18",
                    "place": null,
                    "country": "Angola"
                },
                "nationality": "Angola",
                "height": "185 cm",
                "weight": "82 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/31318.png"
            },
            "duels": {
                "total": 382,
                "won": 128
            },
            "passes": {
                "total": 588,
                "key": 28,
                "accuracy": 14
            },
            "goals": {
                "total": 13,
                "conceded": 0,
                "assists": 2,
                "saves": null
            },
            "dribbles": {
                "attempts": 76,
                "success": 30,
                "past": null
            },
            "team": {
                "id": 515,
                "name": "Spezia",
                "logo": "https://media-1.api-sports.io/football/teams/515.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 2522,
                "name": "A. Sanabria",
                "firstname": "Arnaldo Antonio",
                "lastname": "Sanabria Ayala",
                "age": 27,
                "birth": {
                    "date": "1996-03-04",
                    "place": "San Lorenzo",
                    "country": "Paraguay"
                },
                "nationality": "Paraguay",
                "height": "180 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/2522.png"
            },
            "duels": {
                "total": 333,
                "won": 142
            },
            "passes": {
                "total": 662,
                "key": 24,
                "accuracy": 15
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 30,
                "success": 19,
                "past": null
            },
            "team": {
                "id": 503,
                "name": "Torino",
                "logo": "https://media-1.api-sports.io/football/teams/503.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 483,
                "name": "K. Kvaratskhelia",
                "firstname": "Khvicha",
                "lastname": "Kvaratskhelia",
                "age": 22,
                "birth": {
                    "date": "2001-02-12",
                    "place": "Tbilisi",
                    "country": "Georgia"
                },
                "nationality": "Georgia",
                "height": "183 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/483.png"
            },
            "duels": {
                "total": 371,
                "won": 166
            },
            "passes": {
                "total": 1000,
                "key": 52,
                "accuracy": 25
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 10,
                "saves": null
            },
            "dribbles": {
                "attempts": 175,
                "success": 71,
                "past": null
            },
            "team": {
                "id": 492,
                "name": "Napoli",
                "logo": "https://media-3.api-sports.io/football/teams/492.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 1863,
                "name": "C. Immobile",
                "firstname": "Ciro",
                "lastname": "Immobile",
                "age": 33,
                "birth": {
                    "date": "1990-02-20",
                    "place": "Torre Annunziata",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "185 cm",
                "weight": "78 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/1863.png"
            },
            "duels": {
                "total": 165,
                "won": 66
            },
            "passes": {
                "total": 611,
                "key": 26,
                "accuracy": 14
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 37,
                "success": 17,
                "past": null
            },
            "team": {
                "id": 487,
                "name": "Lazio",
                "logo": "https://media-2.api-sports.io/football/teams/487.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-3.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 875,
                "name": "P. Dybala",
                "firstname": "Paulo Exequiel",
                "lastname": "Dybala",
                "age": 30,
                "birth": {
                    "date": "1993-11-15",
                    "place": "Laguna Larga",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "177 cm",
                "weight": "75 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/875.png"
            },
            "duels": {
                "total": 201,
                "won": 99
            },
            "passes": {
                "total": 739,
                "key": 53,
                "accuracy": 24
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 52,
                "success": 25,
                "past": null
            },
            "team": {
                "id": 497,
                "name": "AS Roma",
                "logo": "https://media-2.api-sports.io/football/teams/497.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 30537,
                "name": "D. Berardi",
                "firstname": "Domenico",
                "lastname": "Berardi",
                "age": 29,
                "birth": {
                    "date": "1994-08-01",
                    "place": "Cariati Marina",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "183 cm",
                "weight": "72 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/30537.png"
            },
            "duels": {
                "total": 233,
                "won": 107
            },
            "passes": {
                "total": 812,
                "key": 45,
                "accuracy": 22
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 7,
                "saves": null
            },
            "dribbles": {
                "attempts": 41,
                "success": 21,
                "past": null
            },
            "team": {
                "id": 488,
                "name": "Sassuolo",
                "logo": "https://media-1.api-sports.io/football/teams/488.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 30488,
                "name": "R. Orsolini",
                "firstname": "Riccardo",
                "lastname": "Orsolini",
                "age": 26,
                "birth": {
                    "date": "1997-01-24",
                    "place": "Rotella",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "183 cm",
                "weight": "73 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/30488.png"
            },
            "duels": {
                "total": 285,
                "won": 122
            },
            "passes": {
                "total": 762,
                "key": 45,
                "accuracy": 16
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 77,
                "success": 33,
                "past": null
            },
            "team": {
                "id": 500,
                "name": "Bologna",
                "logo": "https://media-1.api-sports.io/football/teams/500.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 30937,
                "name": "M. Zaccagni",
                "firstname": "Mattia",
                "lastname": "Zaccagni",
                "age": 28,
                "birth": {
                    "date": "1995-06-16",
                    "place": "Cesena",
                    "country": "Italy"
                },
                "nationality": "Italy",
                "height": "177 cm",
                "weight": "63 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/30937.png"
            },
            "duels": {
                "total": 403,
                "won": 235
            },
            "passes": {
                "total": 975,
                "key": 35,
                "accuracy": 23
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 95,
                "success": 60,
                "past": null
            },
            "team": {
                "id": 487,
                "name": "Lazio",
                "logo": "https://media-3.api-sports.io/football/teams/487.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 125743,
                "name": "Beto",
                "firstname": "Norberto",
                "lastname": "Bercique Gomes Betuncal",
                "age": 25,
                "birth": {
                    "date": "1998-01-31",
                    "place": "Lisboa",
                    "country": "Portugal"
                },
                "nationality": "Portugal",
                "height": "194 cm",
                "weight": "88 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/125743.png"
            },
            "duels": {
                "total": 336,
                "won": 142
            },
            "passes": {
                "total": 289,
                "key": 23,
                "accuracy": 5
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 70,
                "success": 30,
                "past": null
            },
            "team": {
                "id": 494,
                "name": "Udinese",
                "logo": "https://media-1.api-sports.io/football/teams/494.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-1.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 907,
                "name": "R. Lukaku",
                "firstname": "Romelu Menama",
                "lastname": "Lukaku Bolingoli",
                "age": 30,
                "birth": {
                    "date": "1993-05-13",
                    "place": "Antwerpen",
                    "country": "Belgium"
                },
                "nationality": "Belgium",
                "height": "191 cm",
                "weight": "93 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/907.png"
            },
            "duels": {
                "total": 147,
                "won": 59
            },
            "passes": {
                "total": 352,
                "key": 31,
                "accuracy": 11
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 27,
                "success": 15,
                "past": null
            },
            "team": {
                "id": 505,
                "name": "Inter",
                "logo": "https://media-1.api-sports.io/football/teams/505.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 36899,
                "name": "T. Koopmeiners",
                "firstname": "Teun",
                "lastname": "Koopmeiners",
                "age": 25,
                "birth": {
                    "date": "1998-02-28",
                    "place": "Amsterdam",
                    "country": "Netherlands"
                },
                "nationality": "Netherlands",
                "height": "184 cm",
                "weight": "77 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/36899.png"
            },
            "duels": {
                "total": 285,
                "won": 139
            },
            "passes": {
                "total": 1536,
                "key": 57,
                "accuracy": 36
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 51,
                "success": 28,
                "past": null
            },
            "team": {
                "id": 499,
                "name": "Atalanta",
                "logo": "https://media-2.api-sports.io/football/teams/499.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-3.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 30415,
                "name": "D. Vlahović",
                "firstname": "Dušan",
                "lastname": "Vlahović",
                "age": 23,
                "birth": {
                    "date": "2000-01-28",
                    "place": "Beograd",
                    "country": "Serbia"
                },
                "nationality": "Serbia",
                "height": "190 cm",
                "weight": "88 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/30415.png"
            },
            "duels": {
                "total": 220,
                "won": 87
            },
            "passes": {
                "total": 373,
                "key": 21,
                "accuracy": 10
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 2,
                "saves": null
            },
            "dribbles": {
                "attempts": 32,
                "success": 14,
                "past": null
            },
            "team": {
                "id": 496,
                "name": "Juventus",
                "logo": "https://media-1.api-sports.io/football/teams/496.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-2.api-sports.io/football/leagues/135.png",
                "flag": "https://media-2.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 18830,
                "name": "M. Arnautović",
                "firstname": "Marko",
                "lastname": "Arnautović",
                "age": 34,
                "birth": {
                    "date": "1989-04-19",
                    "place": "Wien",
                    "country": "Austria"
                },
                "nationality": "Austria",
                "height": "192 cm",
                "weight": "83 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/18830.png"
            },
            "duels": {
                "total": 115,
                "won": 49
            },
            "passes": {
                "total": 447,
                "key": 22,
                "accuracy": 15
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": null,
                "saves": null
            },
            "dribbles": {
                "attempts": 21,
                "success": 10,
                "past": null
            },
            "team": {
                "id": 500,
                "name": "Bologna",
                "logo": "https://media-3.api-sports.io/football/teams/500.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-3.api-sports.io/flags/it.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 1856,
                "name": "S. Milinković-Savić",
                "firstname": "Sergej",
                "lastname": "Milinković-Savić",
                "age": 28,
                "birth": {
                    "date": "1995-02-27",
                    "place": "Lleida",
                    "country": "Spain"
                },
                "nationality": "Serbia",
                "height": "192 cm",
                "weight": "83 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/1856.png"
            },
            "duels": {
                "total": 515,
                "won": 264
            },
            "passes": {
                "total": 1878,
                "key": 42,
                "accuracy": 40
            },
            "goals": {
                "total": 9,
                "conceded": 0,
                "assists": 8,
                "saves": null
            },
            "dribbles": {
                "attempts": 68,
                "success": 35,
                "past": null
            },
            "team": {
                "id": 487,
                "name": "Lazio",
                "logo": "https://media-3.api-sports.io/football/teams/487.png"
            },
            "league": {
                "id": 135,
                "name": "Serie A",
                "country": "Italy",
                "logo": "https://media-3.api-sports.io/football/leagues/135.png",
                "flag": "https://media-3.api-sports.io/flags/it.svg",
                "season": 2022
            }
        }
    ,
    
        {
            "player": {
                "id": 1100,
                "name": "E. Haaland",
                "firstname": "Erling",
                "lastname": "Braut Haaland",
                "age": 23,
                "birth": {
                    "date": "2000-07-21",
                    "place": "Leeds",
                    "country": "England"
                },
                "nationality": "Norway",
                "height": "194 cm",
                "weight": "88 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/1100.png"
            },
            "duels": {
                "total": 217,
                "won": 88
            },
            "passes": {
                "total": 479,
                "key": 30,
                "accuracy": 10
            },
            "goals": {
                "total": 36,
                "conceded": 0,
                "assists": 8,
                "saves": null
            },
            "dribbles": {
                "attempts": 29,
                "success": 11,
                "past": null
            },
            "team": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media-1.api-sports.io/football/teams/50.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-1.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 184,
                "name": "H. Kane",
                "firstname": "Harry Edward",
                "lastname": "Kane",
                "age": 30,
                "birth": {
                    "date": "1993-07-28",
                    "place": "London",
                    "country": "England"
                },
                "nationality": "England",
                "height": "188 cm",
                "weight": "86 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/184.png"
            },
            "duels": {
                "total": 407,
                "won": 174
            },
            "passes": {
                "total": 851,
                "key": 57,
                "accuracy": 16
            },
            "goals": {
                "total": 30,
                "conceded": 0,
                "assists": 3,
                "saves": null
            },
            "dribbles": {
                "attempts": 90,
                "success": 37,
                "past": null
            },
            "team": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media-1.api-sports.io/football/teams/47.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 19974,
                "name": "I. Toney",
                "firstname": "Ivan Benjamin Elijah",
                "lastname": "Toney",
                "age": 27,
                "birth": {
                    "date": "1996-03-16",
                    "place": "Northampton",
                    "country": "England"
                },
                "nationality": "England",
                "height": "179 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/19974.png"
            },
            "duels": {
                "total": 479,
                "won": 220
            },
            "passes": {
                "total": 736,
                "key": 27,
                "accuracy": 13
            },
            "goals": {
                "total": 20,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 43,
                "success": 14,
                "past": null
            },
            "team": {
                "id": 55,
                "name": "Brentford",
                "logo": "https://media-3.api-sports.io/football/teams/55.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 306,
                "name": "Mohamed Salah",
                "firstname": "Mohamed",
                "lastname": "Salah Hamed Mahrous Ghaly",
                "age": 31,
                "birth": {
                    "date": "1992-06-15",
                    "place": "Muḥāfaẓat al Gharbiyya",
                    "country": "Egypt"
                },
                "nationality": "Egypt",
                "height": "175 cm",
                "weight": "71 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/306.png"
            },
            "duels": {
                "total": 324,
                "won": 111
            },
            "passes": {
                "total": 1120,
                "key": 66,
                "accuracy": 23
            },
            "goals": {
                "total": 19,
                "conceded": 0,
                "assists": 12,
                "saves": null
            },
            "dribbles": {
                "attempts": 121,
                "success": 49,
                "past": null
            },
            "team": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media-3.api-sports.io/football/teams/40.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 2939,
                "name": "C. Wilson",
                "firstname": "Callum Eddie Graham",
                "lastname": "Wilson",
                "age": 31,
                "birth": {
                    "date": "1992-02-27",
                    "place": "Coventry",
                    "country": "England"
                },
                "nationality": "England",
                "height": "180 cm",
                "weight": "66 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/2939.png"
            },
            "duels": {
                "total": 195,
                "won": 73
            },
            "passes": {
                "total": 235,
                "key": 23,
                "accuracy": 5
            },
            "goals": {
                "total": 18,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 31,
                "success": 12,
                "past": null
            },
            "team": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media-3.api-sports.io/football/teams/34.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-2.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 909,
                "name": "M. Rashford",
                "firstname": "Marcus",
                "lastname": "Rashford",
                "age": 26,
                "birth": {
                    "date": "1997-10-31",
                    "place": "Manchester",
                    "country": "England"
                },
                "nationality": "England",
                "height": "180 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/909.png"
            },
            "duels": {
                "total": 302,
                "won": 117
            },
            "passes": {
                "total": 779,
                "key": 30,
                "accuracy": 17
            },
            "goals": {
                "total": 17,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 127,
                "success": 54,
                "past": null
            },
            "team": {
                "id": 33,
                "name": "Manchester United",
                "logo": "https://media-2.api-sports.io/football/teams/33.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-2.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 37127,
                "name": "M. Ødegaard",
                "firstname": "Martin",
                "lastname": "Ødegaard",
                "age": 25,
                "birth": {
                    "date": "1998-12-17",
                    "place": "Drammen",
                    "country": "Norway"
                },
                "nationality": "Norway",
                "height": "178 cm",
                "weight": "68 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/37127.png"
            },
            "duels": {
                "total": 280,
                "won": 123
            },
            "passes": {
                "total": 1689,
                "key": 77,
                "accuracy": 38
            },
            "goals": {
                "total": 15,
                "conceded": 0,
                "assists": 7,
                "saves": null
            },
            "dribbles": {
                "attempts": 77,
                "success": 48,
                "past": null
            },
            "team": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media-3.api-sports.io/football/teams/42.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 127769,
                "name": "Gabriel Martinelli",
                "firstname": "Gabriel Teodoro",
                "lastname": "Martinelli Silva",
                "age": 22,
                "birth": {
                    "date": "2001-06-18",
                    "place": "Guarulhos",
                    "country": "Brazil"
                },
                "nationality": "Brazil",
                "height": "178 cm",
                "weight": "75 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/127769.png"
            },
            "duels": {
                "total": 367,
                "won": 141
            },
            "passes": {
                "total": 977,
                "key": 59,
                "accuracy": 22
            },
            "goals": {
                "total": 15,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 114,
                "success": 59,
                "past": null
            },
            "team": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media-1.api-sports.io/football/teams/42.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 19366,
                "name": "O. Watkins",
                "firstname": "Oliver George Arthur",
                "lastname": "Watkins",
                "age": 28,
                "birth": {
                    "date": "1995-12-30",
                    "place": "Torbay",
                    "country": "England"
                },
                "nationality": "England",
                "height": "180 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/19366.png"
            },
            "duels": {
                "total": 362,
                "won": 144
            },
            "passes": {
                "total": 549,
                "key": 31,
                "accuracy": 10
            },
            "goals": {
                "total": 15,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 53,
                "success": 17,
                "past": null
            },
            "team": {
                "id": 66,
                "name": "Aston Villa",
                "logo": "https://media-1.api-sports.io/football/teams/66.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-3.api-sports.io/football/leagues/39.png",
                "flag": "https://media-1.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 1460,
                "name": "B. Saka",
                "firstname": "Bukayo Ayoyinka Temidayo",
                "lastname": "Saka",
                "age": 22,
                "birth": {
                    "date": "2001-09-05",
                    "place": "London",
                    "country": "England"
                },
                "nationality": "England",
                "height": "178 cm",
                "weight": "72 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/1460.png"
            },
            "duels": {
                "total": 430,
                "won": 203
            },
            "passes": {
                "total": 1235,
                "key": 76,
                "accuracy": 26
            },
            "goals": {
                "total": 14,
                "conceded": 0,
                "assists": 11,
                "saves": null
            },
            "dribbles": {
                "attempts": 128,
                "success": 59,
                "past": null
            },
            "team": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media-3.api-sports.io/football/teams/42.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-1.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 2825,
                "name": "A. Mitrović",
                "firstname": "Aleksandar",
                "lastname": "Mitrović",
                "age": 29,
                "birth": {
                    "date": "1994-09-16",
                    "place": "Smederevo",
                    "country": "Serbia"
                },
                "nationality": "Serbia",
                "height": "189 cm",
                "weight": "89 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/2825.png"
            },
            "duels": {
                "total": 401,
                "won": 177
            },
            "passes": {
                "total": 489,
                "key": 16,
                "accuracy": 12
            },
            "goals": {
                "total": 14,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 45,
                "success": 23,
                "past": null
            },
            "team": {
                "id": 36,
                "name": "Fulham",
                "logo": "https://media-2.api-sports.io/football/teams/36.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 18778,
                "name": "H. Barnes",
                "firstname": "Harvey Lewis",
                "lastname": "Barnes",
                "age": 26,
                "birth": {
                    "date": "1997-12-09",
                    "place": "Burnley",
                    "country": "England"
                },
                "nationality": "England",
                "height": "174 cm",
                "weight": "66 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/18778.png"
            },
            "duels": {
                "total": 332,
                "won": 118
            },
            "passes": {
                "total": 727,
                "key": 19,
                "accuracy": 15
            },
            "goals": {
                "total": 13,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 79,
                "success": 26,
                "past": null
            },
            "team": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media-2.api-sports.io/football/teams/46.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-2.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 935,
                "name": "Rodrigo",
                "firstname": "Rodrigo",
                "lastname": "Moreno Machado",
                "age": 32,
                "birth": {
                    "date": "1991-03-06",
                    "place": "Rio de Janeiro",
                    "country": "Brazil"
                },
                "nationality": "Spain",
                "height": "182 cm",
                "weight": "77 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/935.png"
            },
            "duels": {
                "total": 224,
                "won": 80
            },
            "passes": {
                "total": 516,
                "key": 16,
                "accuracy": 12
            },
            "goals": {
                "total": 13,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 26,
                "success": 11,
                "past": null
            },
            "team": {
                "id": 63,
                "name": "Leeds",
                "logo": "https://media-2.api-sports.io/football/teams/63.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 631,
                "name": "P. Foden",
                "firstname": "Philip Walter",
                "lastname": "Foden",
                "age": 23,
                "birth": {
                    "date": "2000-05-28",
                    "place": "Stockport",
                    "country": "England"
                },
                "nationality": "England",
                "height": "171 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/631.png"
            },
            "duels": {
                "total": 209,
                "won": 104
            },
            "passes": {
                "total": 1003,
                "key": 44,
                "accuracy": 27
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 70,
                "success": 40,
                "past": null
            },
            "team": {
                "id": 50,
                "name": "Manchester City",
                "logo": "https://media-1.api-sports.io/football/teams/50.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-3.api-sports.io/football/leagues/39.png",
                "flag": "https://media-2.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 302,
                "name": "Roberto Firmino",
                "firstname": "Roberto Firmino",
                "lastname": "Barbosa de Oliveira",
                "age": 32,
                "birth": {
                    "date": "1991-10-02",
                    "place": "Maceió",
                    "country": "Brazil"
                },
                "nationality": "Brazil",
                "height": "181 cm",
                "weight": "76 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/302.png"
            },
            "duels": {
                "total": 139,
                "won": 51
            },
            "passes": {
                "total": 546,
                "key": 21,
                "accuracy": 18
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 23,
                "success": 13,
                "past": null
            },
            "team": {
                "id": 40,
                "name": "Liverpool",
                "logo": "https://media-3.api-sports.io/football/teams/40.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-2.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 2507,
                "name": "M. Almirón",
                "firstname": "Miguel Ángel",
                "lastname": "Almirón Rejala",
                "age": 29,
                "birth": {
                    "date": "1994-02-10",
                    "place": "Asunción",
                    "country": "Paraguay"
                },
                "nationality": "Paraguay",
                "height": "174 cm",
                "weight": "70 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/2507.png"
            },
            "duels": {
                "total": 232,
                "won": 118
            },
            "passes": {
                "total": 932,
                "key": 26,
                "accuracy": 23
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 2,
                "saves": null
            },
            "dribbles": {
                "attempts": 66,
                "success": 32,
                "past": null
            },
            "team": {
                "id": 34,
                "name": "Newcastle",
                "logo": "https://media-2.api-sports.io/football/teams/34.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-1.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 643,
                "name": "Gabriel Jesus",
                "firstname": "Gabriel Fernando",
                "lastname": "de Jesus",
                "age": 26,
                "birth": {
                    "date": "1997-04-03",
                    "place": "São Paulo",
                    "country": "Brazil"
                },
                "nationality": "Brazil",
                "height": "175 cm",
                "weight": "73 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/643.png"
            },
            "duels": {
                "total": 423,
                "won": 176
            },
            "passes": {
                "total": 674,
                "key": 32,
                "accuracy": 21
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 92,
                "success": 43,
                "past": null
            },
            "team": {
                "id": 42,
                "name": "Arsenal",
                "logo": "https://media-1.api-sports.io/football/teams/42.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 186,
                "name": "Son Heung-Min",
                "firstname": "Heung-Min",
                "lastname": "Son",
                "age": 31,
                "birth": {
                    "date": "1992-07-08",
                    "place": "Chuncheon",
                    "country": "Korea Republic"
                },
                "nationality": "Korea Republic",
                "height": "184 cm",
                "weight": "77 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/186.png"
            },
            "duels": {
                "total": 255,
                "won": 101
            },
            "passes": {
                "total": 785,
                "key": 63,
                "accuracy": 17
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 72,
                "success": 32,
                "past": null
            },
            "team": {
                "id": 47,
                "name": "Tottenham",
                "logo": "https://media-2.api-sports.io/football/teams/47.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-3.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 8598,
                "name": "T. Awoniyi",
                "firstname": "Taiwo Micheal",
                "lastname": "Awoniyi",
                "age": 26,
                "birth": {
                    "date": "1997-08-12",
                    "place": "Ilorin",
                    "country": "Nigeria"
                },
                "nationality": "Nigeria",
                "height": "183 cm",
                "weight": "84 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/8598.png"
            },
            "duels": {
                "total": 188,
                "won": 61
            },
            "passes": {
                "total": 219,
                "key": 10,
                "accuracy": 5
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 17,
                "success": 5,
                "past": null
            },
            "team": {
                "id": 65,
                "name": "Nottingham Forest",
                "logo": "https://media-2.api-sports.io/football/teams/65.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-1.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 18784,
                "name": "J. Maddison",
                "firstname": "James Daniel",
                "lastname": "Maddison",
                "age": 27,
                "birth": {
                    "date": "1996-11-23",
                    "place": "Coventry",
                    "country": "England"
                },
                "nationality": "England",
                "height": "175 cm",
                "weight": "73 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/18784.png"
            },
            "duels": {
                "total": 318,
                "won": 179
            },
            "passes": {
                "total": 1013,
                "key": 69,
                "accuracy": 26
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 9,
                "saves": null
            },
            "dribbles": {
                "attempts": 85,
                "success": 45,
                "past": null
            },
            "team": {
                "id": 46,
                "name": "Leicester",
                "logo": "https://media-2.api-sports.io/football/teams/46.png"
            },
            "league": {
                "id": 39,
                "name": "Premier League",
                "country": "England",
                "logo": "https://media-2.api-sports.io/football/leagues/39.png",
                "flag": "https://media-3.api-sports.io/flags/gb.svg",
                "season": 2022
            }
        },
    
            {
            "player": {
                "id": 6420,
                "name": "M. Retegui",
                "firstname": "Mateo",
                "lastname": "Retegui",
                "age": 24,
                "birth": {
                    "date": "1999-04-29",
                    "place": "San Fernando",
                    "country": "Argentina"
                },
                "nationality": "Italy",
                "height": "186 cm",
                "weight": "81 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/6420.png"
            },
            "duels": {
                "total": 358,
                "won": 149
            },
            "passes": {
                "total": 576,
                "key": 33,
                "accuracy": 11
            },
            "goals": {
                "total": 22,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 50,
                "success": 21,
                "past": null
            },
            "team": {
                "id": 452,
                "name": "Tigre",
                "logo": "https://media-3.api-sports.io/football/teams/452.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 5635,
                "name": "E. Copetti",
                "firstname": "Enzo Nahuel",
                "lastname": "Copetti",
                "age": 27,
                "birth": {
                    "date": "1996-01-16",
                    "place": "Roque Sáenz Peña",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "180 cm",
                "weight": "88 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/5635.png"
            },
            "duels": {
                "total": 428,
                "won": 205
            },
            "passes": {
                "total": 730,
                "key": 46,
                "accuracy": 13
            },
            "goals": {
                "total": 19,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 31,
                "success": 9,
                "past": null
            },
            "team": {
                "id": 436,
                "name": "Racing Club",
                "logo": "https://media-2.api-sports.io/football/teams/436.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 10254,
                "name": "M. Boselli",
                "firstname": "Mauro",
                "lastname": "Boselli",
                "age": 38,
                "birth": {
                    "date": "1985-05-22",
                    "place": "Buenos Aires",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "181 cm",
                "weight": "72 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/10254.png"
            },
            "duels": {
                "total": 186,
                "won": 76
            },
            "passes": {
                "total": 405,
                "key": 16,
                "accuracy": 8
            },
            "goals": {
                "total": 17,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 18,
                "success": 3,
                "past": null
            },
            "team": {
                "id": 450,
                "name": "Estudiantes L.P.",
                "logo": "https://media-3.api-sports.io/football/teams/450.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 6546,
                "name": "F. Cristaldo",
                "firstname": "Franco Sebastián",
                "lastname": "Cristaldo",
                "age": 27,
                "birth": {
                    "date": "1996-08-15",
                    "place": "Morón",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "170 cm",
                "weight": "69 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/6546.png"
            },
            "duels": {
                "total": 409,
                "won": 214
            },
            "passes": {
                "total": 1573,
                "key": 89,
                "accuracy": 31
            },
            "goals": {
                "total": 17,
                "conceded": 0,
                "assists": 10,
                "saves": null
            },
            "dribbles": {
                "attempts": 85,
                "success": 47,
                "past": null
            },
            "team": {
                "id": 445,
                "name": "Huracan",
                "logo": "https://media-2.api-sports.io/football/teams/445.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-3.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 11490,
                "name": "R. López",
                "firstname": "Renzo",
                "lastname": "López Patrón",
                "age": 29,
                "birth": {
                    "date": "1994-04-16",
                    "place": "Montevideo",
                    "country": "Uruguay"
                },
                "nationality": "Uruguay",
                "height": "192 cm",
                "weight": "89 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/11490.png"
            },
            "duels": {
                "total": 434,
                "won": 229
            },
            "passes": {
                "total": 469,
                "key": 24,
                "accuracy": 8
            },
            "goals": {
                "total": 16,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 27,
                "success": 7,
                "past": null
            },
            "team": {
                "id": 1065,
                "name": "Central Cordoba de Santiago",
                "logo": "https://media-1.api-sports.io/football/teams/1065.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 35579,
                "name": "M. Cauteruccio",
                "firstname": "Martín",
                "lastname": "Cauteruccio Rodríguez",
                "age": 36,
                "birth": {
                    "date": "1987-04-14",
                    "place": "Montevideo",
                    "country": "Uruguay"
                },
                "nationality": "Uruguay",
                "height": "179 cm",
                "weight": "76 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/35579.png"
            },
            "duels": {
                "total": 222,
                "won": 89
            },
            "passes": {
                "total": 516,
                "key": 21,
                "accuracy": 12
            },
            "goals": {
                "total": 15,
                "conceded": 0,
                "assists": 3,
                "saves": null
            },
            "dribbles": {
                "attempts": 35,
                "success": 19,
                "past": null
            },
            "team": {
                "id": 463,
                "name": "Aldosivi",
                "logo": "https://media-1.api-sports.io/football/teams/463.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-3.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 6038,
                "name": "L. Díaz",
                "firstname": "Leandro Nicolás",
                "lastname": "Díaz",
                "age": 31,
                "birth": {
                    "date": "1992-06-06",
                    "place": "San Miguel de Tucumán",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "182 cm",
                "weight": "80 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/6038.png"
            },
            "duels": {
                "total": 366,
                "won": 157
            },
            "passes": {
                "total": 541,
                "key": 21,
                "accuracy": 10
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 40,
                "success": 24,
                "past": null
            },
            "team": {
                "id": 450,
                "name": "Estudiantes L.P.",
                "logo": "https://media-1.api-sports.io/football/teams/450.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 2478,
                "name": "D. Benedetto",
                "firstname": "Darío Ismael",
                "lastname": "Benedetto",
                "age": 33,
                "birth": {
                    "date": "1990-05-17",
                    "place": "Berazategui",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "177 cm",
                "weight": "75 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/2478.png"
            },
            "duels": {
                "total": 195,
                "won": 83
            },
            "passes": {
                "total": 383,
                "key": 18,
                "accuracy": 9
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 2,
                "saves": null
            },
            "dribbles": {
                "attempts": 20,
                "success": 12,
                "past": null
            },
            "team": {
                "id": 451,
                "name": "Boca Juniors",
                "logo": "https://media-3.api-sports.io/football/teams/451.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-3.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 5919,
                "name": "M. Ojeda",
                "firstname": "Martín Exequiel",
                "lastname": "Ojeda",
                "age": 25,
                "birth": {
                    "date": "1998-11-27",
                    "place": "Gualeguaychú",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "176 cm",
                "weight": "59 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/5919.png"
            },
            "duels": {
                "total": 343,
                "won": 144
            },
            "passes": {
                "total": 1310,
                "key": 132,
                "accuracy": 24
            },
            "goals": {
                "total": 12,
                "conceded": 0,
                "assists": 12,
                "saves": null
            },
            "dribbles": {
                "attempts": 111,
                "success": 47,
                "past": null
            },
            "team": {
                "id": 439,
                "name": "Godoy Cruz",
                "logo": "https://media-1.api-sports.io/football/teams/439.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-3.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 51871,
                "name": "S. Rodríguez",
                "firstname": "Ederson Salomón",
                "lastname": "Rodríguez Lima",
                "age": 23,
                "birth": {
                    "date": "2000-02-16",
                    "place": "San Gregorio de Polanco",
                    "country": "Uruguay"
                },
                "nationality": "Uruguay",
                "height": "187 cm",
                "weight": "81 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/51871.png"
            },
            "duels": {
                "total": 374,
                "won": 142
            },
            "passes": {
                "total": 453,
                "key": 23,
                "accuracy": 6
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 55,
                "success": 21,
                "past": null
            },
            "team": {
                "id": 439,
                "name": "Godoy Cruz",
                "logo": "https://media-3.api-sports.io/football/teams/439.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 6483,
                "name": "G. Ávalos",
                "firstname": "Gabriel",
                "lastname": "Ávalos Stumpfs",
                "age": 33,
                "birth": {
                    "date": "1990-07-09",
                    "place": "Edelira",
                    "country": "Paraguay"
                },
                "nationality": "Paraguay",
                "height": "188 cm",
                "weight": "91 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/6483.png"
            },
            "duels": {
                "total": 519,
                "won": 252
            },
            "passes": {
                "total": 814,
                "key": 42,
                "accuracy": 16
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 7,
                "saves": null
            },
            "dribbles": {
                "attempts": 57,
                "success": 26,
                "past": null
            },
            "team": {
                "id": 458,
                "name": "Argentinos JRS",
                "logo": "https://media-2.api-sports.io/football/teams/458.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-3.api-sports.io/football/leagues/128.png",
                "flag": "https://media-3.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 35551,
                "name": "A. Bareiro",
                "firstname": "Adam Fernando",
                "lastname": "Bareiro Gamarra",
                "age": 27,
                "birth": {
                    "date": "1996-07-26",
                    "place": "Asunción",
                    "country": "Paraguay"
                },
                "nationality": "Paraguay",
                "height": "184 cm",
                "weight": "84 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/35551.png"
            },
            "duels": {
                "total": 566,
                "won": 222
            },
            "passes": {
                "total": 670,
                "key": 28,
                "accuracy": 12
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 3,
                "saves": null
            },
            "dribbles": {
                "attempts": 52,
                "success": 19,
                "past": null
            },
            "team": {
                "id": 460,
                "name": "San Lorenzo",
                "logo": "https://media-2.api-sports.io/football/teams/460.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 6009,
                "name": "J. Álvarez",
                "firstname": "Julián",
                "lastname": "Álvarez",
                "age": 23,
                "birth": {
                    "date": "2000-01-31",
                    "place": "Cachín",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "170 cm",
                "weight": "71 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/6009.png"
            },
            "duels": {
                "total": 124,
                "won": 54
            },
            "passes": {
                "total": 362,
                "key": 28,
                "accuracy": 21
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 2,
                "saves": null
            },
            "dribbles": {
                "attempts": 39,
                "success": 23,
                "past": null
            },
            "team": {
                "id": 435,
                "name": "River Plate",
                "logo": "https://media-3.api-sports.io/football/teams/435.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 5218,
                "name": "S. Lomónaco",
                "firstname": "Sebastián Ariel",
                "lastname": "Lomónaco",
                "age": 25,
                "birth": {
                    "date": "1998-09-17",
                    "place": "Avellaneda",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "173 cm",
                "weight": "66 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/5218.png"
            },
            "duels": {
                "total": 358,
                "won": 115
            },
            "passes": {
                "total": 787,
                "key": 45,
                "accuracy": 14
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 75,
                "success": 27,
                "past": null
            },
            "team": {
                "id": 459,
                "name": "Arsenal Sarandi",
                "logo": "https://media-1.api-sports.io/football/teams/459.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-3.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 6161,
                "name": "L. Janson",
                "firstname": "Lucas Ezequiel",
                "lastname": "Janson",
                "age": 29,
                "birth": {
                    "date": "1994-08-16",
                    "place": "Olavarría",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "171 cm",
                "weight": "67 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/6161.png"
            },
            "duels": {
                "total": 345,
                "won": 167
            },
            "passes": {
                "total": 1080,
                "key": 51,
                "accuracy": 21
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 3,
                "saves": null
            },
            "dribbles": {
                "attempts": 95,
                "success": 38,
                "past": null
            },
            "team": {
                "id": 438,
                "name": "Velez Sarsfield",
                "logo": "https://media-2.api-sports.io/football/teams/438.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-1.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 6663,
                "name": "L. Rodríguez",
                "firstname": "Luis Miguel",
                "lastname": "Rodríguez",
                "age": 38,
                "birth": {
                    "date": "1985-01-01",
                    "place": "San Miguel de Tucumán",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "167 cm",
                "weight": "67 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/6663.png"
            },
            "duels": {
                "total": 177,
                "won": 58
            },
            "passes": {
                "total": 651,
                "key": 56,
                "accuracy": 14
            },
            "goals": {
                "total": 11,
                "conceded": 0,
                "assists": 4,
                "saves": null
            },
            "dribbles": {
                "attempts": 34,
                "success": 14,
                "past": null
            },
            "team": {
                "id": 448,
                "name": "Colon Santa Fe",
                "logo": "https://media-3.api-sports.io/football/teams/448.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 129875,
                "name": "F. Kruspzky",
                "firstname": "Facundo Daniel",
                "lastname": "Kruspzky",
                "age": 21,
                "birth": {
                    "date": "2002-07-28",
                    "place": "Avellaneda",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "181 cm",
                "weight": "74 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/129875.png"
            },
            "duels": {
                "total": 467,
                "won": 225
            },
            "passes": {
                "total": 832,
                "key": 32,
                "accuracy": 18
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 5,
                "saves": null
            },
            "dribbles": {
                "attempts": 87,
                "success": 40,
                "past": null
            },
            "team": {
                "id": 459,
                "name": "Arsenal Sarandi",
                "logo": "https://media-3.api-sports.io/football/teams/459.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 5979,
                "name": "R. Ábila",
                "firstname": "Ramón Darío",
                "lastname": "Ábila",
                "age": 34,
                "birth": {
                    "date": "1989-10-14",
                    "place": "Córdoba",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "175 cm",
                "weight": "84 kg",
                "injured": false,
                "photo": "https://media-1.api-sports.io/football/players/5979.png"
            },
            "duels": {
                "total": 181,
                "won": 52
            },
            "passes": {
                "total": 404,
                "key": 33,
                "accuracy": 8
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 1,
                "saves": null
            },
            "dribbles": {
                "attempts": 50,
                "success": 14,
                "past": null
            },
            "team": {
                "id": 448,
                "name": "Colon Santa Fe",
                "logo": "https://media-3.api-sports.io/football/teams/448.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-1.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 5312,
                "name": "C. Tarragona",
                "firstname": "Cristian Alberto",
                "lastname": "Tarragona",
                "age": 32,
                "birth": {
                    "date": "1991-04-09",
                    "place": "Santa Fe",
                    "country": "Argentina"
                },
                "nationality": "Argentina",
                "height": "180 cm",
                "weight": "77 kg",
                "injured": false,
                "photo": "https://media-2.api-sports.io/football/players/5312.png"
            },
            "duels": {
                "total": 256,
                "won": 113
            },
            "passes": {
                "total": 354,
                "key": 23,
                "accuracy": 14
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": null,
                "saves": null
            },
            "dribbles": {
                "attempts": 32,
                "success": 18,
                "past": null
            },
            "team": {
                "id": 434,
                "name": "Gimnasia L.P.",
                "logo": "https://media-2.api-sports.io/football/teams/434.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
        {
            "player": {
                "id": 44577,
                "name": "B. Alemán",
                "firstname": "Brahian Milton",
                "lastname": "Alemán Athaydes",
                "age": 34,
                "birth": {
                    "date": "1989-12-23",
                    "place": "Montevideo",
                    "country": "Uruguay"
                },
                "nationality": "Uruguay",
                "height": "178 cm",
                "weight": "79 kg",
                "injured": false,
                "photo": "https://media-3.api-sports.io/football/players/44577.png"
            },
            "duels": {
                "total": 561,
                "won": 307
            },
            "passes": {
                "total": 1254,
                "key": 93,
                "accuracy": 23
            },
            "goals": {
                "total": 10,
                "conceded": 0,
                "assists": 6,
                "saves": null
            },
            "dribbles": {
                "attempts": 98,
                "success": 55,
                "past": null
            },
            "team": {
                "id": 434,
                "name": "Gimnasia L.P.",
                "logo": "https://media-1.api-sports.io/football/teams/434.png"
            },
            "league": {
                "id": 128,
                "name": "Liga Profesional Argentina",
                "country": "Argentina",
                "logo": "https://media-2.api-sports.io/football/leagues/128.png",
                "flag": "https://media-2.api-sports.io/flags/ar.svg",
                "season": 2022
            }
        },
    
    {
        "player": {
            "id": 521,
            "name": "R. Lewandowski",
            "firstname": "Robert",
            "lastname": "Lewandowski",
            "age": 35,
            "birth": {
                "date": "1988-08-21",
                "place": "Warszawa",
                "country": "Poland"
            },
            "nationality": "Poland",
            "height": "185 cm",
            "weight": "81 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/521.png"
        },
        "duels": {
            "total": 308,
            "won": 145
        },
        "passes": {
            "total": 763,
            "key": 38,
            "accuracy": 17
        },
        "goals": {
            "total": 23,
            "conceded": 0,
            "assists": 7,
            "saves": null
        },
        "dribbles": {
            "attempts": 58,
            "success": 30,
            "past": null
        },
        "team": {
            "id": 529,
            "name": "Barcelona",
            "logo": "https://media-1.api-sports.io/football/teams/529.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-2.api-sports.io/football/leagues/140.png",
            "flag": "https://media-3.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 759,
            "name": "K. Benzema",
            "firstname": "Karim Mostafa",
            "lastname": "Benzema",
            "age": 36,
            "birth": {
                "date": "1987-12-19",
                "place": "Lyon",
                "country": "France"
            },
            "nationality": "France",
            "height": "185 cm",
            "weight": "81 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/759.png"
        },
        "duels": {
            "total": 130,
            "won": 49
        },
        "passes": {
            "total": 1057,
            "key": 48,
            "accuracy": 38
        },
        "goals": {
            "total": 19,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 41,
            "success": 19,
            "past": null
        },
        "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media-3.api-sports.io/football/teams/541.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-2.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 18907,
            "name": "Joselu",
            "firstname": "José Luis",
            "lastname": "Sanmartín Mato",
            "age": 33,
            "birth": {
                "date": "1990-03-27",
                "place": "Stuttgart",
                "country": "Germany"
            },
            "nationality": "Spain",
            "height": "192 cm",
            "weight": "80 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/18907.png"
        },
        "duels": {
            "total": 481,
            "won": 273
        },
        "passes": {
            "total": 740,
            "key": 22,
            "accuracy": 13
        },
        "goals": {
            "total": 16,
            "conceded": 0,
            "assists": 2,
            "saves": null
        },
        "dribbles": {
            "attempts": 40,
            "success": 17,
            "past": null
        },
        "team": {
            "id": 540,
            "name": "Espanyol",
            "logo": "https://media-2.api-sports.io/football/teams/540.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-2.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 56,
            "name": "A. Griezmann",
            "firstname": "Antoine",
            "lastname": "Griezmann",
            "age": 32,
            "birth": {
                "date": "1991-03-21",
                "place": "Mâcon",
                "country": "France"
            },
            "nationality": "France",
            "height": "176 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/56.png"
        },
        "duels": {
            "total": 325,
            "won": 164
        },
        "passes": {
            "total": 1456,
            "key": 85,
            "accuracy": 31
        },
        "goals": {
            "total": 15,
            "conceded": 0,
            "assists": 16,
            "saves": null
        },
        "dribbles": {
            "attempts": 75,
            "success": 47,
            "past": null
        },
        "team": {
            "id": 530,
            "name": "Atletico Madrid",
            "logo": "https://media-1.api-sports.io/football/teams/530.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-2.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 50048,
            "name": "V. Muriqi",
            "firstname": "Vedat",
            "lastname": "Muriqi",
            "age": 29,
            "birth": {
                "date": "1994-04-24",
                "place": "Prizren",
                "country": "Kosovo"
            },
            "nationality": "Kosovo",
            "height": "194 cm",
            "weight": "92 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/50048.png"
        },
        "duels": {
            "total": 523,
            "won": 255
        },
        "passes": {
            "total": 803,
            "key": 21,
            "accuracy": 13
        },
        "goals": {
            "total": 15,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 27,
            "success": 12,
            "past": null
        },
        "team": {
            "id": 798,
            "name": "Mallorca",
            "logo": "https://media-3.api-sports.io/football/teams/798.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-1.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 47348,
            "name": "Borja Iglesias",
            "firstname": "Borja",
            "lastname": "Iglesias Quintás",
            "age": 30,
            "birth": {
                "date": "1993-01-17",
                "place": "Santiago de Compostela",
                "country": "Spain"
            },
            "nationality": "Spain",
            "height": "187 cm",
            "weight": "86 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/47348.png"
        },
        "duels": {
            "total": 242,
            "won": 96
        },
        "passes": {
            "total": 517,
            "key": 22,
            "accuracy": 11
        },
        "goals": {
            "total": 15,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 26,
            "success": 11,
            "past": null
        },
        "team": {
            "id": 543,
            "name": "Real Betis",
            "logo": "https://media-3.api-sports.io/football/teams/543.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 47499,
            "name": "E. Ünal",
            "firstname": "Enes",
            "lastname": "Ünal",
            "age": 26,
            "birth": {
                "date": "1997-05-10",
                "place": "Bursa",
                "country": "Türkiye"
            },
            "nationality": "Türkiye",
            "height": "187 cm",
            "weight": "78 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/47499.png"
        },
        "duels": {
            "total": 573,
            "won": 271
        },
        "passes": {
            "total": 701,
            "key": 25,
            "accuracy": 13
        },
        "goals": {
            "total": 14,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 39,
            "success": 20,
            "past": null
        },
        "team": {
            "id": 546,
            "name": "Getafe",
            "logo": "https://media-3.api-sports.io/football/teams/546.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 59,
            "name": "Álvaro Morata",
            "firstname": "Álvaro Borja",
            "lastname": "Morata Martín",
            "age": 31,
            "birth": {
                "date": "1992-10-23",
                "place": "Madrid",
                "country": "Spain"
            },
            "nationality": "Spain",
            "height": "190 cm",
            "weight": "84 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/59.png"
        },
        "duels": {
            "total": 267,
            "won": 146
        },
        "passes": {
            "total": 412,
            "key": 17,
            "accuracy": 7
        },
        "goals": {
            "total": 13,
            "conceded": 0,
            "assists": 2,
            "saves": null
        },
        "dribbles": {
            "attempts": 37,
            "success": 20,
            "past": null
        },
        "team": {
            "id": 530,
            "name": "Atletico Madrid",
            "logo": "https://media-2.api-sports.io/football/teams/530.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 50856,
            "name": "V. Castellanos",
            "firstname": "Valentín Mariano José",
            "lastname": "Castellanos Giménez",
            "age": 25,
            "birth": {
                "date": "1998-10-03",
                "place": "Mendoza",
                "country": "Argentina"
            },
            "nationality": "Argentina",
            "height": "178 cm",
            "weight": "70 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/50856.png"
        },
        "duels": {
            "total": 293,
            "won": 122
        },
        "passes": {
            "total": 382,
            "key": 16,
            "accuracy": 6
        },
        "goals": {
            "total": 13,
            "conceded": 0,
            "assists": null,
            "saves": null
        },
        "dribbles": {
            "attempts": 33,
            "success": 12,
            "past": null
        },
        "team": {
            "id": 547,
            "name": "Girona",
            "logo": "https://media-1.api-sports.io/football/teams/547.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-1.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 283058,
            "name": "N. Jackson",
            "firstname": "Nicolas",
            "lastname": "Jackson",
            "age": 22,
            "birth": {
                "date": "2001-06-20",
                "place": "Banjul",
                "country": "Gambia"
            },
            "nationality": "Senegal",
            "height": "186 cm",
            "weight": "78 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/283058.png"
        },
        "duels": {
            "total": 189,
            "won": 75
        },
        "passes": {
            "total": 318,
            "key": 22,
            "accuracy": 9
        },
        "goals": {
            "total": 12,
            "conceded": 0,
            "assists": 4,
            "saves": null
        },
        "dribbles": {
            "attempts": 34,
            "success": 23,
            "past": null
        },
        "team": {
            "id": 533,
            "name": "Villarreal",
            "logo": "https://media-3.api-sports.io/football/teams/533.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 8492,
            "name": "A. Sørloth",
            "firstname": "Alexander",
            "lastname": "Sørloth",
            "age": 28,
            "birth": {
                "date": "1995-12-05",
                "place": "Trondheim",
                "country": "Norway"
            },
            "nationality": "Norway",
            "height": "195 cm",
            "weight": "90 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/8492.png"
        },
        "duels": {
            "total": 314,
            "won": 123
        },
        "passes": {
            "total": 469,
            "key": 31,
            "accuracy": 9
        },
        "goals": {
            "total": 12,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 68,
            "success": 28,
            "past": null
        },
        "team": {
            "id": 548,
            "name": "Real Sociedad",
            "logo": "https://media-3.api-sports.io/football/teams/548.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 47445,
            "name": "Iago Aspas",
            "firstname": "Iago",
            "lastname": "Aspas Juncal",
            "age": 36,
            "birth": {
                "date": "1987-08-01",
                "place": "Moaña",
                "country": "Spain"
            },
            "nationality": "Spain",
            "height": "176 cm",
            "weight": "67 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/47445.png"
        },
        "duels": {
            "total": 262,
            "won": 117
        },
        "passes": {
            "total": 1116,
            "key": 82,
            "accuracy": 24
        },
        "goals": {
            "total": 12,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 45,
            "success": 21,
            "past": null
        },
        "team": {
            "id": 538,
            "name": "Celta Vigo",
            "logo": "https://media-1.api-sports.io/football/teams/538.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-1.api-sports.io/football/leagues/140.png",
            "flag": "https://media-3.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 182504,
            "name": "Gabri Veiga",
            "firstname": "Gabriel",
            "lastname": "Veiga Novas",
            "age": 21,
            "birth": {
                "date": "2002-05-27",
                "place": "O Porriño",
                "country": "Spain"
            },
            "nationality": "Spain",
            "height": "184 cm",
            "weight": "76 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/182504.png"
        },
        "duels": {
            "total": 289,
            "won": 142
        },
        "passes": {
            "total": 702,
            "key": 28,
            "accuracy": 15
        },
        "goals": {
            "total": 11,
            "conceded": 0,
            "assists": 4,
            "saves": null
        },
        "dribbles": {
            "attempts": 71,
            "success": 37,
            "past": null
        },
        "team": {
            "id": 538,
            "name": "Celta Vigo",
            "logo": "https://media-3.api-sports.io/football/teams/538.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-1.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 762,
            "name": "Vinícius Júnior",
            "firstname": "Vinícius José",
            "lastname": "Paixão de Oliveira Júnior",
            "age": 23,
            "birth": {
                "date": "2000-07-12",
                "place": "São Gonçalo",
                "country": "Brazil"
            },
            "nationality": "Brazil",
            "height": "176 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/762.png"
        },
        "duels": {
            "total": 555,
            "won": 267
        },
        "passes": {
            "total": 1063,
            "key": 64,
            "accuracy": 25
        },
        "goals": {
            "total": 10,
            "conceded": 0,
            "assists": 9,
            "saves": null
        },
        "dribbles": {
            "attempts": 266,
            "success": 112,
            "past": null
        },
        "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media-2.api-sports.io/football/teams/541.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 2737,
            "name": "M. Braithwaite",
            "firstname": "Martin",
            "lastname": "Christensen Braithwaite",
            "age": 32,
            "birth": {
                "date": "1991-06-05",
                "place": "Esbjerg",
                "country": "Denmark"
            },
            "nationality": "Denmark",
            "height": "180 cm",
            "weight": "77 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/2737.png"
        },
        "duels": {
            "total": 251,
            "won": 118
        },
        "passes": {
            "total": 425,
            "key": 12,
            "accuracy": 9
        },
        "goals": {
            "total": 10,
            "conceded": 0,
            "assists": 2,
            "saves": null
        },
        "dribbles": {
            "attempts": 42,
            "success": 16,
            "past": null
        },
        "team": {
            "id": 540,
            "name": "Espanyol",
            "logo": "https://media-1.api-sports.io/football/teams/540.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-1.api-sports.io/football/leagues/140.png",
            "flag": "https://media-2.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 47294,
            "name": "I. Williams",
            "firstname": "Iñaki Arthuer",
            "lastname": "Dannis Williams",
            "age": 29,
            "birth": {
                "date": "1994-06-15",
                "place": "Bilbao",
                "country": "Spain"
            },
            "nationality": "Ghana",
            "height": "186 cm",
            "weight": "81 kg",
            "injured": false,
            "photo": "https://media-2.api-sports.io/football/players/47294.png"
        },
        "duels": {
            "total": 302,
            "won": 130
        },
        "passes": {
            "total": 710,
            "key": 38,
            "accuracy": 14
        },
        "goals": {
            "total": 10,
            "conceded": 0,
            "assists": 3,
            "saves": null
        },
        "dribbles": {
            "attempts": 94,
            "success": 45,
            "past": null
        },
        "team": {
            "id": 531,
            "name": "Athletic Club",
            "logo": "https://media-3.api-sports.io/football/teams/531.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-2.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 128398,
            "name": "Oihan Sancet",
            "firstname": "Oihan",
            "lastname": "Sancet Tirapu",
            "age": 23,
            "birth": {
                "date": "2000-04-25",
                "place": "Pamplona",
                "country": "Spain"
            },
            "nationality": "Spain",
            "height": "188 cm",
            "weight": "73 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/128398.png"
        },
        "duels": {
            "total": 312,
            "won": 151
        },
        "passes": {
            "total": 946,
            "key": 45,
            "accuracy": 21
        },
        "goals": {
            "total": 10,
            "conceded": 0,
            "assists": 2,
            "saves": null
        },
        "dribbles": {
            "attempts": 70,
            "success": 46,
            "past": null
        },
        "team": {
            "id": 531,
            "name": "Athletic Club",
            "logo": "https://media-2.api-sports.io/football/teams/531.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-3.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 746,
            "name": "Marco Asensio",
            "firstname": "Marco",
            "lastname": "Asensio Willemsen",
            "age": 27,
            "birth": {
                "date": "1996-01-21",
                "place": "Palma de Mallorca",
                "country": "Spain"
            },
            "nationality": "Spain",
            "height": "182 cm",
            "weight": "76 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/746.png"
        },
        "duels": {
            "total": 99,
            "won": 59
        },
        "passes": {
            "total": 710,
            "key": 42,
            "accuracy": 20
        },
        "goals": {
            "total": 9,
            "conceded": 0,
            "assists": 6,
            "saves": null
        },
        "dribbles": {
            "attempts": 31,
            "success": 24,
            "past": null
        },
        "team": {
            "id": 541,
            "name": "Real Madrid",
            "logo": "https://media-1.api-sports.io/football/teams/541.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 32862,
            "name": "T. Kubo",
            "firstname": "Takefusa",
            "lastname": "Kubo",
            "age": 22,
            "birth": {
                "date": "2001-06-04",
                "place": "Kawasaki",
                "country": "Japan"
            },
            "nationality": "Japan",
            "height": "173 cm",
            "weight": "64 kg",
            "injured": false,
            "photo": "https://media-3.api-sports.io/football/players/32862.png"
        },
        "duels": {
            "total": 328,
            "won": 156
        },
        "passes": {
            "total": 786,
            "key": 39,
            "accuracy": 17
        },
        "goals": {
            "total": 9,
            "conceded": 0,
            "assists": 4,
            "saves": null
        },
        "dribbles": {
            "attempts": 99,
            "success": 48,
            "past": null
        },
        "team": {
            "id": 548,
            "name": "Real Sociedad",
            "logo": "https://media-2.api-sports.io/football/teams/548.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-1.api-sports.io/football/leagues/140.png",
            "flag": "https://media-1.api-sports.io/flags/es.svg",
            "season": 2022
        }
    },
    {
        "player": {
            "id": 53,
            "name": "Á. Correa",
            "firstname": "Ángel Martín",
            "lastname": "Correa Martínez",
            "age": 28,
            "birth": {
                "date": "1995-03-09",
                "place": "Rosario",
                "country": "Argentina"
            },
            "nationality": "Argentina",
            "height": "171 cm",
            "weight": "68 kg",
            "injured": false,
            "photo": "https://media-1.api-sports.io/football/players/53.png"
        },
        "duels": {
            "total": 166,
            "won": 59
        },
        "passes": {
            "total": 491,
            "key": 23,
            "accuracy": 12
        },
        "goals": {
            "total": 9,
            "conceded": 0,
            "assists": 1,
            "saves": null
        },
        "dribbles": {
            "attempts": 54,
            "success": 21,
            "past": null
        },
        "team": {
            "id": 530,
            "name": "Atletico Madrid",
            "logo": "https://media-1.api-sports.io/football/teams/530.png"
        },
        "league": {
            "id": 140,
            "name": "La Liga",
            "country": "Spain",
            "logo": "https://media-3.api-sports.io/football/leagues/140.png",
            "flag": "https://media-3.api-sports.io/flags/es.svg",
            "season": 2022
        }
    }
]
    const [soundLoaded, setSoundLoaded] = useState(false);
    const [volume, setVolume] = useState(0.5); // Valor de volumen inicial (rango de 0 a 1)
    const [isPlaying, setIsPlaying] = useState(false); // Estado para controlar si el sonido está en reproducción
    const [reset, setReset] = useState(false); // Estado para controlar si el sonido está en reproducción


    const songs = [tema1, tema2, tema3];
    const [currentSongIndex, setCurrentSongIndex] = useState(0);

    // UseSound hook para reproducir el sonido con opciones de volumen
    const [playSound, { stop, pause, sound }] = useSound(songs[currentSongIndex], {
    volume,
    onend: () => setIsPlaying(false), // Al finalizar la reproducción, establecemos isPlaying en false
    onload: () => setSoundLoaded(true) // Cuando el sonido se carga, establecemos soundLoaded en true
    });

    const [winPlayer, setWinPlayer] = useState(false);
    const [failPlayer, setFailPlayer] = useState(false);

    const [numero, setNumero] = useState(1);

    const [currentPlayers, setCurrentPlayers] = useState([]);
    const [shownPlayers, setShownPlayers] = useState([]);
    const [pivote, setPivote] = useState(2);
    const [puntos, setPuntos] = useState(0);

    const [vidas, setVidas] = useState(3);
    const [game, setGame] = useState("Goles");
    const [stopPlayer, setStop] = useState(false)

    const [player1, setPlayer1] = useState({});
    const [player2, setPlayer2] = useState({});

     const handleButtonClickReset = () => {

        setCurrentPlayers([]);
        setShownPlayers([]);
        setPivote(2);
        setVidas(3);
        setPlayer1({});
        setPlayer2({});
        setPuntos(0)
        setVolume(0.5)
        setReset(true)
        

    }
// 
useEffect(() => {
    // Carga la música (tema1) aquí y cuando esté cargada, establece soundLoaded en true
    // Esto asegurará que el sonido esté listo antes de que renderices el botón
    // Puedes utilizar una función de carga del paquete de sonido que estés utilizando
    // O usar el elemento Audio de JavaScript para cargar y gestionar el recurso de audio.

    // Ejemplo usando Audio de JavaScript:
    const audio = new Audio(tema1);
    audio.addEventListener('canplaythrough', () => {
      setSoundLoaded(true);
    });
    audio.load(); // Inicia la carga del recurso de audio

    // Otras limpiezas al desmontar el componente, si es necesario
    return () => {
      audio.removeEventListener('canplaythrough', () => {
        setSoundLoaded(true);
      });
    };
  }, []);

    const juego = ["Asistencias", "Goles", "PartidosGanados", "Gambetas", "Pases", "Altura", "Edad"];
    // const juego = [ "Goles"];

    // ,,

    
   
 
    function handleButtonClick() {
        // if (soundLoaded) {
        //     playSound();
        //     console.log("first");
        //   } else {
        //     console.log("Sound is still loading...");
        //   }
        
        const randomIndexes = getRandomPlayerIndexes({shownPlayers});
        // console.log(randomIndexes)
        setPlayer1(
             PlayersJson[randomIndexes[0]]
            
        );
        setPlayer2(
            PlayersJson[randomIndexes[1]]
            
        );
    
        setShownPlayers(randomIndexes);


    }
    useEffect(() => {

        setCurrentPlayers([player1, player2]);

    }, [player1, player2])

    const [volumeSound, setVolumeSound] = useState(0.5);
    const [playReferiSound] = useSound(referiSound, { volume });
  const [playConfettiSound] = useSound(confettiSound, { volume });


    function updateCurrentPlayers(Player,num, correcto) {


        // console.log(Player)
        // console.log(shownPlayers)
        // console.log(num)
        // console.log(correcto)
        if (correcto) {

            
            
            setNumero(num)
            setPuntos(puntos + 1)
            playConfettiSound()
            confetti({
                particleCount: 80, // Más partículas
                spread: 180, // Más dispersión
                startVelocity: 50, // Más velocidad inicial
                decay: 0.95, // Mayor duración de las partículas
                scalar: 1.5 // Partículas más grandes
            });

            setTimeout(() => {
            setWinPlayer(false)
                
            }, 2000);
            setWinPlayer(num-1)

        }else{
            setTimeout(() => {
                
            setFailPlayer(false)
            
                
            }, 2000);
        setFailPlayer(num-1)
        }
        setPivote(pivote + 1)

// console.log(Player)
        if (num === 1) {
            setPlayer1(Player);
    
            setPlayer2(
                PlayersJson[shownPlayers[pivote]]
                
            );
        }else{
            setPlayer2(Player);
    
            setPlayer1(PlayersJson[shownPlayers[pivote]]);
        }
       

        const indiceAleatorio = Math.floor(Math.random() * juego.length);
        const juegoAleatorio = juego[indiceAleatorio];
        setGame(juegoAleatorio);

        // } else if (winningPlayer === player2) {
        //   setPlayer2({
        //     player: nextPlayer,
        //     statistics: players[randomIndexes[nextPlayerIndex]].statistics
        //   });
        // }




    }
    const [vidaMenos,setVidaMenos] = useState(false);
    useEffect(() => {
      
    if(vidas === 2){
        setTimeout(() => {
        setVidaMenos(false)

        }, 2000);
        setVidaMenos(true)
        playReferiSound();
        

    }
    if(vidas === 1){
        setTimeout(() => {
        setVidaMenos(false)

        }, 2000);
        setVidaMenos(true)
        playReferiSound();

    }
    if(vidas === 0){
        {Confetti()}
        {playConfettiSound()}

        setTimeout(() => {
            if(vidas === 0){
                {Confetti()}
        {playConfettiSound()}
            }
            

        }, 300);
    }
    
    }, [vidas])
    
    const svgVariants = {
        hidden: { rotate: -180 },
        visible: {
          rotate: 0,
          transition: { duration: 1.5, repeat: Infinity, ease: "linear" },
        },
    }
    const svgArbitro = {
        hidden:{y: "100%",
        transition: { duration: .5 },},
        visible: {
            y: "0",
          transition: { duration: .5 },
        },
    }
    const pathVariantsPelota = { 
        hidden:{
        opacity:0.4,
        pathLength: 0,
        // scale:0,
        },
        visible:{
        // scale:1,
    
            opacity:1,
        pathLength: 5,
        transition: { duration: 4}
    
        }
    }

    const Confetti = () => {

        {
            confetti({
                particleCount: 400, // Más partículas
                spread: 360, // Más dispersión
                startVelocity: 60, // Más velocidad inicial
                decay: .95, // Mayor duración de las partículas
                scalar: 2.5 // Partículas más grandes
            })
        }





    }
    const [showContent, setShowContent] = useState(false);

    useEffect(() => {
      // Después de 5000 ms (5 segundos), se establecerá el estado para mostrar el contenido
      const timeoutId = setTimeout(() => {
        setShowContent(true);
      }, 1000);
  
      // Limpia el temporizador cuando el componente se desmonte para evitar problemas de memoria
      return () => clearTimeout(timeoutId);
    }, []);
// console.log(currentPlayers)

    return (
        <main>
            <>
            {JSON.stringify(currentPlayers) === JSON.stringify([{}, { }]) ? (
                <>
                <div className={style.ContainerLogo}>
                      <Logo />
                </div>
                <motion.div 
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  transition={{
                    duration: 2, // Adjust the duration of the animation (in seconds)
                  }}
                
                className={style.containerStart}>
                    <h1 className={style.title}>Champion Clash</h1>
                    <p className={style.textStart}>¡Bienvenido a Champion Clash, el juego de fútbol donde se encuentran la emoción y la estrategia! En esta épica confrontación, tendrás que tomar decisiones cruciales al elegir entre dos jugadores de fútbol de las ligas principales.</p>

                    <p className={style.textStart1}>¿Estás listo para demostrar tu experiencia en el fútbol y liderar a tu equipo hacia la victoria? Antes de comenzar el juego, echemos un vistazo rápido a '¿CÓMO JUGAR?' para familiarizarte con las reglas y los controles</p>
                    <button className={style.btnStart}>¿CÓMO JUGAR?</button>

                    <p className={style.textStart2}>¡Presiona 'EMPEZAR' cuando estés preparado para iniciar el Choque de Campeones!</p>
                    <button className={style.btnStart} onClick={() => handleButtonClick()}>EMPEZAR</button>

                </motion.div>
               
                 
               
              </>

            ) : (
                <>
                    
                    {vidas > 0 ? (
                        <>
                    <Header 
                    handleButtonClickReset={handleButtonClickReset}
                 

                    />
                            
                            <motion.div
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, x: '100%', duration: 1500 }}

                                className={style.container}>

                                    <Logo />
                                    
                                    {vidaMenos ?
                                    
                                        vidas === 2 ?
                                     (
                                        
                                    // <svg className={style.Arbitro} fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 475.615 475.615" xml:space="preserve"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M316.18,225.854c6.483,3.791,11.669,6.822,16.65,7.439c6.548,2.106,29.255,11.093,48.237,18.907 c2.008,0.833,4.088,1.218,6.123,1.218c6.328,0,12.34-3.763,14.9-9.974c3.378-8.218-0.537-17.629-8.765-21.013 c-31.791-13.094-46.675-19.067-54.886-20.953c-7.342-3.887-33.186-19.791-55.848-34.127c-1.442-0.908-2.989-1.491-4.561-1.898 c-0.04-0.266-0.071-0.44-0.071-0.44s-15.377-2.126-38.514-3.737c-5.663,3.917-12.505,6.248-19.895,6.248 c-8.359,0-15.95-3.058-21.981-7.965c-0.892-0.008-1.797-0.016-2.688-0.022l-55.034-57.67l-37.267-53.163h23.912V0H91.254v40.719 c-4.073-0.731-8.423,0.096-12.083,2.661c-5.626,3.947-7.96,10.844-6.374,17.13c0.463,1.844,1.272,3.641,2.426,5.29l38.938,55.551 c0.471,0.659,0.979,1.289,1.537,1.877l57.865,60.626c1.587,1.663,3.455,2.897,5.452,3.729c2.046,27.052,5.021,65.039,6.127,72.46 L161.272,316.3c-0.549,1.286-0.958,2.629-1.223,4l-25.663,131.327c-2.128,10.899,4.983,21.479,15.889,23.611 c1.302,0.261,2.597,0.377,3.879,0.377c9.425,0,17.849-6.664,19.725-16.263l25.257-129.263l27.146-63.959 c6.428,0.177,13.052,0.276,19.442,0.288l23.929,58.657l26.289,124.018c2.007,9.47,10.362,15.954,19.66,15.954 c1.383,0,2.793-0.145,4.195-0.438c10.872-2.312,17.817-13,15.509-23.872l-26.665-125.781c-0.253-1.174-0.598-2.315-1.05-3.426 l-20.851-51.119c1.619-9.874-0.514-33.224-3.082-54.349c3.646,2.271,7.542,4.689,11.478,7.104 C303.937,218.561,311.006,222.831,316.18,225.854z"></path> <path d="M206.428,159.714c3.99,1.932,8.41,3.111,13.145,3.111c3.851,0,7.508-0.793,10.9-2.104 c11.361-4.39,19.452-15.349,19.452-28.254c0-16.771-13.587-30.36-30.353-30.36c-16.771,0-30.36,13.589-30.36,30.36 C189.212,144.503,196.269,154.799,206.428,159.714z"></path> </g> </g> </g></svg>
                                    <motion.svg 
                                    variants={svgArbitro}
                                         animate="visible"
                                         initial="hidden"
                                         
                                    className={style.Arbitro} width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="football-referee-raising-card-svgrepo-com 1" clip-path="url(#clip0_105_156)">
                                        <g id="Group">
                                        <g id="Group_2">
                                        <path id="Vector" d="M88.5916 152.086C77.9037 153.881 67.9141 157.525 58.9299 162.668V234.997H88.5916V152.086Z" fill="black"/>
                                        <path id="Vector_2" d="M140.562 158.557C129.948 153.849 118.209 151.108 105.816 150.84V235H140.562V158.557Z" fill="black"/>
                                        <path id="Vector_3" d="M41.7111 175.422C25.8228 190.672 16 211.732 16 234.996H41.7111V175.422Z" fill="black"/>
                                        <path id="Vector_4" d="M160.93 207.336C159.829 207.094 158.788 206.738 157.784 206.323V234.995H191.598C191.598 227.471 190.534 220.199 188.602 213.261L160.93 207.336Z" fill="black"/>
                                        <g id="CardYellow">
                                        <path id="card" d="M149.775 181.094C147.871 189.981 153.531 198.731 162.417 200.635L188.562 206.24C197.449 208.148 206.198 202.483 208.103 193.597L217.374 150.359C219.279 141.476 213.614 132.726 204.732 130.818L178.591 125.216C169.705 123.311 160.955 128.974 159.05 137.856L149.775 181.094Z" fill="#FFE600"/>
                                        <path id="!" d="M186.418 151.562L185.676 171.152H180.656L179.914 151.562H186.418ZM179.738 177.227C179.738 176.354 180.051 175.618 180.676 175.02C181.301 174.421 182.128 174.121 183.156 174.121C184.172 174.121 184.986 174.421 185.598 175.02C186.223 175.618 186.535 176.354 186.535 177.227C186.535 178.112 186.223 178.854 185.598 179.453C184.986 180.039 184.172 180.332 183.156 180.332C182.128 180.332 181.301 180.039 180.676 179.453C180.051 178.854 179.738 178.112 179.738 177.227Z" fill="black"/>
                                        </g>
                                        <g id="face">
                                        <g id="SVGRepo_bgCarrier">
                                        <path id="Vector_5" d="M166.165 76.5C166.165 41.8911 138.109 13.835 103.5 13.835C68.8911 13.835 40.835 41.8911 40.835 76.5C40.835 111.109 68.8911 139.165 103.5 139.165C138.109 139.165 166.165 111.109 166.165 76.5Z" fill="#A8978A"/>
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                        <path id="Vector_6" d="M103.5 20.4832C72.5607 20.4832 47.4832 45.5607 47.4832 76.5C47.4832 107.439 72.5607 132.517 103.5 132.517C134.439 132.517 159.517 107.439 159.517 76.5C159.454 45.5869 134.413 20.5461 103.505 20.4832H103.5ZM103.5 137.388C69.871 137.388 42.6124 110.129 42.6124 76.5C42.6124 42.871 69.871 15.6124 103.5 15.6124C137.129 15.6124 164.388 42.871 164.388 76.5V76.5787C164.388 110.16 137.166 137.382 103.584 137.382C103.558 137.382 103.526 137.382 103.5 137.382H103.505L103.5 137.388Z" fill="black"/>
                                        <path id="Vector_7" d="M103.5 139.417C68.8224 139.238 40.7616 111.178 40.5833 76.5157V76.5C40.5833 41.7543 68.7543 13.5833 103.5 13.5833C138.246 13.5833 166.417 41.7543 166.417 76.5C166.417 111.246 138.246 139.417 103.5 139.417ZM103.5 17.6415C70.9931 17.6415 44.6415 43.9931 44.6415 76.5C44.6415 109.007 70.9931 135.359 103.5 135.359C136.007 135.359 162.359 109.007 162.359 76.5C162.338 44.0035 135.996 17.6677 103.505 17.6415H103.5ZM103.5 134.95C71.444 134.95 45.4541 108.96 45.4541 76.9037C45.4541 44.8477 71.444 18.8578 103.5 18.8578C135.556 18.8578 161.546 44.8477 161.546 76.9037C161.546 108.96 135.556 134.95 103.5 134.95ZM103.5 22.5123C73.6828 22.5123 49.5123 46.6827 49.5123 76.5C49.5123 106.317 73.6828 130.488 103.5 130.488C133.317 130.488 157.488 106.317 157.488 76.5C157.351 46.7404 133.265 22.6486 103.516 22.5123H103.505H103.5Z" fill="black"/>
                                        <path id="Vector_8" d="M76.708 113.034C76.708 98.2377 88.7041 86.2416 103.5 86.2416C118.296 86.2416 130.292 98.2377 130.292 113.034H76.708Z" fill="black"/>
                                        <path id="Vector_9" d="M91.3204 65.542C91.3204 71.5925 86.4129 76.5 80.3624 76.5C74.3119 76.5 69.4044 71.5925 69.4044 65.542C69.4044 59.4915 74.3119 54.584 80.3624 54.584H80.4096C86.4391 54.584 91.3256 59.4706 91.3256 65.5001V65.5473L91.3204 65.542Z" fill="black"/>
                                        <path id="Vector_10" d="M138.005 65.542V65.5892C138.005 71.6187 133.118 76.5052 127.089 76.5052C127.073 76.5052 127.057 76.5052 127.041 76.5052C121.017 76.4318 116.152 71.5715 116.083 65.5525C116.083 65.5368 116.083 65.5158 116.083 65.5001C116.083 59.4706 120.97 54.584 126.999 54.584H127.047C133.05 54.7046 137.884 59.5387 138.005 65.5315V65.542Z" fill="black"/>
                                        <path id="Vector_11" d="M92.9457 52.146C92.8881 52.1513 92.8251 52.1565 92.7622 52.1565C92.3585 52.1565 91.9967 51.9992 91.7294 51.737L78.3333 43.6208C77.8405 43.1647 77.4315 42.6299 77.1327 42.0269L77.117 41.9955C77.1065 41.9168 77.1012 41.8277 77.1012 41.7385C77.1012 41.23 77.2585 40.7528 77.5259 40.3649L77.5207 40.3753C77.9768 39.8825 78.5116 39.4735 79.1146 39.1747L79.146 39.159C79.2247 39.1485 79.3138 39.1432 79.4029 39.1432C79.9115 39.1432 80.3886 39.3005 80.7766 39.5679L80.7661 39.5627L94.1621 47.6789C94.655 48.1351 95.0639 48.6699 95.3628 49.2728L95.3785 49.3043C95.389 49.3829 95.3943 49.472 95.3943 49.5612C95.3943 50.0698 95.237 50.5469 94.9696 50.9349L94.9748 50.9244C94.5973 51.6532 93.8475 52.1408 92.9877 52.1408C92.972 52.1408 92.9615 52.146 92.9457 52.146Z" fill="black"/>
                                        <path id="Vector_12" d="M92.9457 54.1751C92.0335 54.0859 91.2051 53.7923 90.4868 53.3467L90.513 53.3624L77.117 45.2461C76.147 44.5698 75.4287 43.5841 75.0984 42.4411L75.0879 42.4044C74.9935 42.0636 74.9359 41.6756 74.9359 41.2772C74.9359 40.4959 75.1403 39.7672 75.5021 39.138L75.4916 39.159C76.168 38.189 77.1537 37.4707 78.2966 37.1404L78.3334 37.1299C78.6741 37.0355 79.0621 36.9778 79.4606 36.9778C80.2418 36.9778 80.9706 37.1823 81.5998 37.5441L81.5788 37.5336L94.9748 45.6499C95.9448 46.3262 96.6631 47.3119 96.9934 48.4549L97.0039 48.4916C97.0982 48.8324 97.1559 49.2204 97.1559 49.6189C97.1559 50.4001 96.9514 51.1289 96.5897 51.758L96.6002 51.737C96.0024 53.1789 94.613 54.1751 92.9825 54.1751C92.9667 54.1751 92.9562 54.1751 92.9405 54.1751H92.9457ZM79.9587 41.5917H79.555V41.9955L92.951 50.1117L93.3547 49.708L79.9587 41.5917Z" fill="black"/>
                                        <path id="Vector_13" d="M114.054 52.146C114.044 52.146 114.028 52.146 114.012 52.146C113.147 52.146 112.403 51.6584 112.03 50.9401L112.025 50.9296C111.763 50.5469 111.606 50.075 111.606 49.5612C111.606 49.4721 111.611 49.3829 111.622 49.2938V49.3043C111.742 48.5807 112.198 47.9883 112.827 47.6842L112.838 47.6789L126.234 39.5627C126.617 39.3005 127.089 39.1432 127.602 39.1432C127.691 39.1432 127.781 39.1485 127.87 39.159H127.859C128.583 39.2795 129.175 39.7357 129.479 40.3649L129.485 40.3753C129.747 40.7581 129.904 41.23 129.904 41.7438C129.904 41.8329 129.899 41.922 129.888 42.0112V42.0007C129.768 42.7242 129.312 43.3167 128.682 43.6208L128.672 43.626L115.276 51.7423C115.009 51.9992 114.642 52.1617 114.243 52.1617C114.18 52.1617 114.112 52.1513 114.054 52.146Z" fill="black"/>
                                        <path id="Vector_14" d="M114.054 54.1751H114.033C112.508 54.1751 111.165 53.3729 110.416 52.1617L110.405 52.146C110.054 51.5378 109.849 50.8038 109.849 50.0278C109.849 49.6241 109.902 49.2361 110.007 48.8691L110.001 48.9006C110.3 47.6999 111.029 46.709 112.015 46.0693L112.03 46.0588L125.426 37.9426C126.035 37.5913 126.769 37.3868 127.545 37.3868C127.948 37.3868 128.336 37.4392 128.703 37.5441L128.672 37.5389C129.873 37.8377 130.864 38.5665 131.503 39.5522L131.514 39.5679C131.865 40.1761 132.069 40.9101 132.069 41.6861C132.069 42.0898 132.017 42.4778 131.912 42.8448L131.917 42.8134C131.619 44.014 130.89 45.005 129.904 45.6446L129.888 45.6551L116.492 53.7714C115.889 54.0387 115.192 54.1908 114.453 54.1908C114.311 54.1908 114.175 54.1856 114.039 54.1751H114.054ZM113.645 50.1169L127.445 42.4044V42.0007L125.82 39.9716L127.036 41.597L113.64 49.7132L111.611 51.3386L113.645 50.1169Z" fill="black"/>
                                        </g>
                                        </g>
                                        </g>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_105_156">
                                        <rect width="224" height="224" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </motion.svg>


                                    ):( 
                                
                                    <motion.svg 
                                    variants={svgArbitro}
                                         animate="visible"
                                         initial="hidden"
                                         
                                    className={style.Arbitro} width="224" height="224" viewBox="0 0 224 224" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g id="football-referee-raising-card-svgrepo-com 1" clip-path="url(#clip0_105_156)">
                                        <g id="Group">
                                        <g id="Group_2">
                                        <path id="Vector" d="M88.5916 152.086C77.9037 153.881 67.9141 157.525 58.9299 162.668V234.997H88.5916V152.086Z" fill="black"/>
                                        <path id="Vector_2" d="M140.562 158.557C129.948 153.849 118.209 151.108 105.816 150.84V235H140.562V158.557Z" fill="black"/>
                                        <path id="Vector_3" d="M41.7111 175.422C25.8228 190.672 16 211.732 16 234.996H41.7111V175.422Z" fill="black"/>
                                        <path id="Vector_4" d="M160.93 207.336C159.829 207.094 158.788 206.738 157.784 206.323V234.995H191.598C191.598 227.471 190.534 220.199 188.602 213.261L160.93 207.336Z" fill="black"/>
                                        <g id="CardYellow">
                                        <path id="card" d="M149.775 181.094C147.871 189.981 153.531 198.731 162.417 200.635L188.562 206.24C197.449 208.148 206.198 202.483 208.103 193.597L217.374 150.359C219.279 141.476 213.614 132.726 204.732 130.818L178.591 125.216C169.705 123.311 160.955 128.974 159.05 137.856L149.775 181.094Z" fill="#ff0000"/>
                                        <path id="!" d="M186.418 151.562L185.676 171.152H180.656L179.914 151.562H186.418ZM179.738 177.227C179.738 176.354 180.051 175.618 180.676 175.02C181.301 174.421 182.128 174.121 183.156 174.121C184.172 174.121 184.986 174.421 185.598 175.02C186.223 175.618 186.535 176.354 186.535 177.227C186.535 178.112 186.223 178.854 185.598 179.453C184.986 180.039 184.172 180.332 183.156 180.332C182.128 180.332 181.301 180.039 180.676 179.453C180.051 178.854 179.738 178.112 179.738 177.227Z" fill="black"/>
                                        </g>
                                        <g id="face">
                                        <g id="SVGRepo_bgCarrier">
                                        <path id="Vector_5" d="M166.165 76.5C166.165 41.8911 138.109 13.835 103.5 13.835C68.8911 13.835 40.835 41.8911 40.835 76.5C40.835 111.109 68.8911 139.165 103.5 139.165C138.109 139.165 166.165 111.109 166.165 76.5Z" fill="#A8978A"/>
                                        </g>
                                        <g id="SVGRepo_iconCarrier">
                                        <path id="Vector_6" d="M103.5 20.4832C72.5607 20.4832 47.4832 45.5607 47.4832 76.5C47.4832 107.439 72.5607 132.517 103.5 132.517C134.439 132.517 159.517 107.439 159.517 76.5C159.454 45.5869 134.413 20.5461 103.505 20.4832H103.5ZM103.5 137.388C69.871 137.388 42.6124 110.129 42.6124 76.5C42.6124 42.871 69.871 15.6124 103.5 15.6124C137.129 15.6124 164.388 42.871 164.388 76.5V76.5787C164.388 110.16 137.166 137.382 103.584 137.382C103.558 137.382 103.526 137.382 103.5 137.382H103.505L103.5 137.388Z" fill="black"/>
                                        <path id="Vector_7" d="M103.5 139.417C68.8224 139.238 40.7616 111.178 40.5833 76.5157V76.5C40.5833 41.7543 68.7543 13.5833 103.5 13.5833C138.246 13.5833 166.417 41.7543 166.417 76.5C166.417 111.246 138.246 139.417 103.5 139.417ZM103.5 17.6415C70.9931 17.6415 44.6415 43.9931 44.6415 76.5C44.6415 109.007 70.9931 135.359 103.5 135.359C136.007 135.359 162.359 109.007 162.359 76.5C162.338 44.0035 135.996 17.6677 103.505 17.6415H103.5ZM103.5 134.95C71.444 134.95 45.4541 108.96 45.4541 76.9037C45.4541 44.8477 71.444 18.8578 103.5 18.8578C135.556 18.8578 161.546 44.8477 161.546 76.9037C161.546 108.96 135.556 134.95 103.5 134.95ZM103.5 22.5123C73.6828 22.5123 49.5123 46.6827 49.5123 76.5C49.5123 106.317 73.6828 130.488 103.5 130.488C133.317 130.488 157.488 106.317 157.488 76.5C157.351 46.7404 133.265 22.6486 103.516 22.5123H103.505H103.5Z" fill="black"/>
                                        <path id="Vector_8" d="M76.708 113.034C76.708 98.2377 88.7041 86.2416 103.5 86.2416C118.296 86.2416 130.292 98.2377 130.292 113.034H76.708Z" fill="black"/>
                                        <path id="Vector_9" d="M91.3204 65.542C91.3204 71.5925 86.4129 76.5 80.3624 76.5C74.3119 76.5 69.4044 71.5925 69.4044 65.542C69.4044 59.4915 74.3119 54.584 80.3624 54.584H80.4096C86.4391 54.584 91.3256 59.4706 91.3256 65.5001V65.5473L91.3204 65.542Z" fill="black"/>
                                        <path id="Vector_10" d="M138.005 65.542V65.5892C138.005 71.6187 133.118 76.5052 127.089 76.5052C127.073 76.5052 127.057 76.5052 127.041 76.5052C121.017 76.4318 116.152 71.5715 116.083 65.5525C116.083 65.5368 116.083 65.5158 116.083 65.5001C116.083 59.4706 120.97 54.584 126.999 54.584H127.047C133.05 54.7046 137.884 59.5387 138.005 65.5315V65.542Z" fill="black"/>
                                        <path id="Vector_11" d="M92.9457 52.146C92.8881 52.1513 92.8251 52.1565 92.7622 52.1565C92.3585 52.1565 91.9967 51.9992 91.7294 51.737L78.3333 43.6208C77.8405 43.1647 77.4315 42.6299 77.1327 42.0269L77.117 41.9955C77.1065 41.9168 77.1012 41.8277 77.1012 41.7385C77.1012 41.23 77.2585 40.7528 77.5259 40.3649L77.5207 40.3753C77.9768 39.8825 78.5116 39.4735 79.1146 39.1747L79.146 39.159C79.2247 39.1485 79.3138 39.1432 79.4029 39.1432C79.9115 39.1432 80.3886 39.3005 80.7766 39.5679L80.7661 39.5627L94.1621 47.6789C94.655 48.1351 95.0639 48.6699 95.3628 49.2728L95.3785 49.3043C95.389 49.3829 95.3943 49.472 95.3943 49.5612C95.3943 50.0698 95.237 50.5469 94.9696 50.9349L94.9748 50.9244C94.5973 51.6532 93.8475 52.1408 92.9877 52.1408C92.972 52.1408 92.9615 52.146 92.9457 52.146Z" fill="black"/>
                                        <path id="Vector_12" d="M92.9457 54.1751C92.0335 54.0859 91.2051 53.7923 90.4868 53.3467L90.513 53.3624L77.117 45.2461C76.147 44.5698 75.4287 43.5841 75.0984 42.4411L75.0879 42.4044C74.9935 42.0636 74.9359 41.6756 74.9359 41.2772C74.9359 40.4959 75.1403 39.7672 75.5021 39.138L75.4916 39.159C76.168 38.189 77.1537 37.4707 78.2966 37.1404L78.3334 37.1299C78.6741 37.0355 79.0621 36.9778 79.4606 36.9778C80.2418 36.9778 80.9706 37.1823 81.5998 37.5441L81.5788 37.5336L94.9748 45.6499C95.9448 46.3262 96.6631 47.3119 96.9934 48.4549L97.0039 48.4916C97.0982 48.8324 97.1559 49.2204 97.1559 49.6189C97.1559 50.4001 96.9514 51.1289 96.5897 51.758L96.6002 51.737C96.0024 53.1789 94.613 54.1751 92.9825 54.1751C92.9667 54.1751 92.9562 54.1751 92.9405 54.1751H92.9457ZM79.9587 41.5917H79.555V41.9955L92.951 50.1117L93.3547 49.708L79.9587 41.5917Z" fill="black"/>
                                        <path id="Vector_13" d="M114.054 52.146C114.044 52.146 114.028 52.146 114.012 52.146C113.147 52.146 112.403 51.6584 112.03 50.9401L112.025 50.9296C111.763 50.5469 111.606 50.075 111.606 49.5612C111.606 49.4721 111.611 49.3829 111.622 49.2938V49.3043C111.742 48.5807 112.198 47.9883 112.827 47.6842L112.838 47.6789L126.234 39.5627C126.617 39.3005 127.089 39.1432 127.602 39.1432C127.691 39.1432 127.781 39.1485 127.87 39.159H127.859C128.583 39.2795 129.175 39.7357 129.479 40.3649L129.485 40.3753C129.747 40.7581 129.904 41.23 129.904 41.7438C129.904 41.8329 129.899 41.922 129.888 42.0112V42.0007C129.768 42.7242 129.312 43.3167 128.682 43.6208L128.672 43.626L115.276 51.7423C115.009 51.9992 114.642 52.1617 114.243 52.1617C114.18 52.1617 114.112 52.1513 114.054 52.146Z" fill="black"/>
                                        <path id="Vector_14" d="M114.054 54.1751H114.033C112.508 54.1751 111.165 53.3729 110.416 52.1617L110.405 52.146C110.054 51.5378 109.849 50.8038 109.849 50.0278C109.849 49.6241 109.902 49.2361 110.007 48.8691L110.001 48.9006C110.3 47.6999 111.029 46.709 112.015 46.0693L112.03 46.0588L125.426 37.9426C126.035 37.5913 126.769 37.3868 127.545 37.3868C127.948 37.3868 128.336 37.4392 128.703 37.5441L128.672 37.5389C129.873 37.8377 130.864 38.5665 131.503 39.5522L131.514 39.5679C131.865 40.1761 132.069 40.9101 132.069 41.6861C132.069 42.0898 132.017 42.4778 131.912 42.8448L131.917 42.8134C131.619 44.014 130.89 45.005 129.904 45.6446L129.888 45.6551L116.492 53.7714C115.889 54.0387 115.192 54.1908 114.453 54.1908C114.311 54.1908 114.175 54.1856 114.039 54.1751H114.054ZM113.645 50.1169L127.445 42.4044V42.0007L125.82 39.9716L127.036 41.597L113.64 49.7132L111.611 51.3386L113.645 50.1169Z" fill="black"/>
                                        </g>
                                        </g>
                                        </g>
                                        </g>
                                        </g>
                                        <defs>
                                        <clipPath id="clip0_105_156">
                                        <rect width="224" height="224" fill="white"/>
                                        </clipPath>
                                        </defs>
                                    </motion.svg>
                                    ):null}
                                    
                                
                                <svg className={style.Jugador} width="857" height="511" viewBox="0 0 857 511" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g id="undraw_junior_soccer_6sop 1" clip-path="url(#clip0_103_41)">
                                        <g id={style.Brazo}>
                                            <path id="Vector" d="M283.344 180.239C283.344 180.239 244.809 168.235 250.725 187.984C256.64 207.733 289.098 197.757 289.098 197.757L283.344 180.239Z" fill="#FFB8B8" />
                                            <path id="Vector_2" d="M430.646 106.114C430.646 106.114 410.898 79.1272 391.711 107.143C372.487 135.213 354.613 158.258 354.613 158.258L306.868 173.825L279.245 176.276L286.855 200.834L367.168 189.183C367.168 189.183 456.582 136.069 430.646 106.114Z" fill="#2F2E41" />
                                        </g>
                                        <path id="Vector_3" d="M409 305.065C409 305.065 407 342.065 412 357.065C417 372.065 422 428.065 422 428.065H450C450 428.065 463 379.065 447 357.065C447 357.065 442 328.065 456 314.065L409 305.065Z" fill="#FFB8B8" />
                                        <path id="Vector_4" d="M402.5 202.565C402.5 202.565 337.5 243.565 337.5 256.565L389.5 299.565L407.5 279.565L405.5 309.565L461.5 320.565C461.5 320.565 481.5 244.565 480.5 241.565C479.5 238.565 476.5 194.565 476.5 194.565L402.5 202.565Z" fill="#2F2E41" />
                                        <g id={style.PieJuego}>
                                            <path id="Vector_5" d="M342.5 255.565C342.5 255.565 312.5 276.565 314.5 295.565C316.5 314.565 329.5 366.565 329.5 366.565L356.5 362.565C356.5 362.565 359.5 322.565 349.5 307.565L397.5 280.565L342.5 255.565Z" fill="#FFB8B8" />
                                            <path id="Vector_6" d="M356.5 357.565L327.5 363.565L332.652 384.748C335.188 395.173 335.477 406.019 333.5 416.565C333.5 416.565 363.5 424.565 363.5 420.565C363.5 416.565 356.5 400.565 358.5 389.565C360.5 378.565 356.5 357.565 356.5 357.565Z" fill="#6C63FF" />
                                            <path id={style.botin} d="M371.5 432.565C370.5 428.565 362.192 410.43 361.846 413.497C361.5 416.565 345.5 421.565 339.5 415.565C339.5 415.565 331.5 408.565 328.5 415.565C325.5 422.565 319.5 434.565 319.5 434.565C319.5 434.565 292.5 447.565 296.5 454.565C297.309 455.981 299.55 456.578 302.611 456.631C302.539 456.816 302.501 457.012 302.5 457.211V457.92C302.5 458.356 302.673 458.775 302.982 459.083C303.291 459.392 303.709 459.565 304.146 459.565H304.854C305.291 459.565 305.709 459.392 306.018 459.083C306.327 458.775 306.5 458.356 306.5 457.92V457.211C306.498 456.956 306.437 456.704 306.32 456.477C307.138 456.406 307.987 456.311 308.859 456.196C308.628 456.484 308.501 456.842 308.5 457.211V457.92C308.5 458.356 308.673 458.775 308.982 459.083C309.291 459.392 309.709 459.565 310.146 459.565H310.854C311.291 459.565 311.709 459.392 312.018 459.083C312.327 458.775 312.5 458.356 312.5 457.92V457.211C312.499 456.918 312.42 456.63 312.27 456.378C312.12 456.126 311.906 455.919 311.649 455.778C313.951 455.394 316.353 454.905 318.742 454.364C318.585 454.619 318.501 454.912 318.5 455.211V455.92C318.5 456.356 318.673 456.775 318.982 457.083C319.291 457.392 319.709 457.565 320.146 457.565H320.854C321.291 457.565 321.709 457.392 322.018 457.083C322.327 456.775 322.5 456.356 322.5 455.92V455.211C322.5 454.893 322.407 454.582 322.234 454.315C322.06 454.048 321.813 453.838 321.522 453.709C323.313 453.272 325.069 452.817 326.74 452.366C326.584 452.62 326.501 452.912 326.5 453.211V453.92C326.5 454.356 326.673 454.775 326.982 455.083C327.291 455.392 327.709 455.565 328.146 455.565H328.854C329.291 455.565 329.709 455.392 330.018 455.083C330.327 454.775 330.5 454.356 330.5 453.92V453.211C330.499 452.861 330.386 452.52 330.178 452.239C329.97 451.958 329.677 451.75 329.343 451.647C335.215 449.993 339.5 448.565 339.5 448.565C339.5 448.565 344.476 446.755 350.5 444.309V444.92C350.5 445.356 350.673 445.775 350.982 446.083C351.291 446.392 351.709 446.565 352.146 446.565H352.854C353.291 446.565 353.709 446.392 354.018 446.083C354.327 445.775 354.5 445.356 354.5 444.92V444.211C354.499 443.961 354.442 443.715 354.331 443.492C354.221 443.268 354.061 443.072 353.864 442.92C355.073 442.411 356.293 441.889 357.5 441.357V441.92C357.5 442.356 357.673 442.775 357.982 443.083C358.291 443.392 358.709 443.565 359.146 443.565H359.854C360.291 443.565 360.709 443.392 361.018 443.083C361.327 442.775 361.5 442.356 361.5 441.92V441.211C361.5 440.946 361.436 440.685 361.313 440.451C361.19 440.216 361.013 440.015 360.796 439.864C362.101 439.255 363.357 438.647 364.516 438.051C364.511 438.105 364.5 438.156 364.5 438.211V438.92C364.5 439.356 364.673 439.775 364.982 440.083C365.291 440.392 365.709 440.565 366.146 440.565H366.854C367.291 440.565 367.709 440.392 368.018 440.083C368.327 439.775 368.5 439.356 368.5 438.92V438.211C368.5 437.832 368.369 437.464 368.129 437.17C367.889 436.876 367.555 436.674 367.183 436.598C369.979 434.975 371.742 433.534 371.5 432.565Z" fill="#2F2E41" />
                                        </g>
                                        <path id="Vector_8" d="M452 423.565L420.32 421.565C420.32 421.565 422.24 454.565 418.4 465.565C414.56 476.565 416.48 480.565 416.48 480.565L444.32 482.565L452 423.565Z" fill="#6C63FF" />
                                        <path id="Vector_9" d="M452.39 496.5C452.246 492.379 447.901 472.91 446.924 475.838C445.946 478.766 429.255 480.32 424.638 473.201C424.638 473.201 418.273 464.687 413.879 470.908C409.486 477.128 401.116 487.614 401.116 487.614C401.116 487.614 371.999 494.698 374.451 502.378C374.947 503.932 377.015 504.983 379.997 505.672C379.888 505.838 379.81 506.023 379.768 506.217L379.62 506.91C379.529 507.337 379.611 507.782 379.849 508.148C380.086 508.515 380.459 508.772 380.886 508.863L381.579 509.01C382.006 509.101 382.452 509.019 382.818 508.782C383.184 508.544 383.441 508.171 383.532 507.744L383.68 507.051C383.731 506.801 383.723 506.542 383.657 506.296C384.472 506.396 385.321 506.481 386.198 506.55C385.912 506.784 385.714 507.107 385.636 507.468L385.488 508.161C385.397 508.588 385.479 509.033 385.717 509.4C385.954 509.766 386.327 510.023 386.754 510.114L387.447 510.261C387.874 510.352 388.32 510.27 388.686 510.033C389.052 509.795 389.309 509.422 389.4 508.995L389.548 508.302C389.608 508.015 389.59 507.717 389.497 507.44C389.403 507.162 389.236 506.915 389.014 506.723C391.345 506.827 393.797 506.85 396.246 506.819C396.039 507.035 395.896 507.304 395.833 507.597L395.685 508.29C395.594 508.717 395.676 509.162 395.914 509.529C396.151 509.895 396.525 510.152 396.951 510.243L397.644 510.39C398.071 510.481 398.517 510.399 398.883 510.162C399.249 509.924 399.506 509.551 399.597 509.124L399.745 508.431C399.811 508.12 399.785 507.796 399.671 507.499C399.557 507.202 399.359 506.945 399.101 506.758C400.944 506.705 402.757 506.625 404.485 506.532C404.28 506.749 404.137 507.017 404.074 507.309L403.926 508.002C403.835 508.429 403.917 508.874 404.155 509.241C404.392 509.607 404.766 509.864 405.193 509.955L405.886 510.102C406.312 510.193 406.758 510.111 407.124 509.874C407.49 509.636 407.747 509.263 407.838 508.836L407.986 508.143C408.058 507.8 408.019 507.444 407.874 507.125C407.729 506.807 407.486 506.543 407.18 506.372C413.269 505.979 417.757 505.476 417.757 505.476C417.757 505.476 423.001 504.743 429.403 503.607L429.275 504.204C429.184 504.631 429.266 505.076 429.504 505.442C429.741 505.809 430.115 506.066 430.542 506.157L431.235 506.304C431.661 506.395 432.107 506.313 432.473 506.076C432.839 505.838 433.096 505.465 433.187 505.038L433.335 504.345C433.386 504.101 433.381 503.848 433.32 503.606C433.259 503.364 433.143 503.14 432.982 502.949C434.271 502.704 435.573 502.448 436.864 502.179L436.747 502.729C436.656 503.156 436.738 503.602 436.976 503.968C437.213 504.334 437.586 504.591 438.013 504.682L438.706 504.83C439.133 504.921 439.579 504.838 439.945 504.601C440.311 504.363 440.568 503.99 440.659 503.563L440.807 502.87C440.862 502.611 440.853 502.343 440.782 502.088C440.711 501.833 440.58 501.599 440.399 501.406C441.802 501.083 443.158 500.75 444.415 500.409C444.399 500.46 444.378 500.508 444.366 500.562L444.219 501.255C444.128 501.682 444.21 502.127 444.447 502.493C444.685 502.86 445.058 503.116 445.485 503.207L446.178 503.355C446.605 503.446 447.05 503.364 447.417 503.126C447.783 502.889 448.04 502.516 448.131 502.089L448.278 501.396C448.357 501.025 448.306 500.638 448.132 500.3C447.959 499.963 447.674 499.696 447.327 499.544C450.4 498.539 452.425 497.498 452.39 496.5Z" fill="#2F2E41" />
                                        <path id="Vector_10" d="M491 189.065C491 189.065 490.998 78.7189 472.487 69.2134C453.987 59.7134 441.749 54.2913 441.749 54.2913C441.477 57.9121 440.448 61.4353 438.729 64.6335C437.01 67.8318 434.639 70.6337 431.769 72.8584C425.635 77.5941 419.524 81.5209 416.11 81.5335L416 81.0652L415.584 79.8764L405.5 95.5652C405.5 95.5652 396.5 97.5652 393.5 103.565C391.877 106.811 399.531 139.488 395 169.065C391.156 194.159 374.959 216.811 374.5 219.565C373.724 224.221 393.41 212.023 402.275 206.321C402.407 206.468 402.5 206.565 402.5 206.565C402.5 206.565 397.5 208.565 407.5 205.565C413.166 203.865 421.077 203.771 426.872 204.008C426.865 205.746 426.906 207.126 427 208.065C428 218.065 478 232.065 485 229.065C492 226.065 491 189.065 491 189.065Z" fill="#2F2E41" />
                                        <path id="Vector_11" d="M456 227.065C456 227.065 426 254.065 446 259.065C466 264.065 474 231.065 474 231.065L456 227.065Z" fill="#FFB8B8" />
                                        <path id="Vector_12" d="M421 297.065C421 297.065 435 284.065 443 291.065C451 298.065 456 303.065 456 303.065C456 303.065 433 289.065 421 297.065Z" fill="#6C63FF" />
                                        <path id="Vector_13" d="M424.636 452.614C424.636 452.614 432.527 445.286 437.036 449.232C441.545 453.177 444.364 455.995 444.364 455.995C444.364 455.995 431.4 448.105 424.636 452.614Z" fill="#2F2E41" />
                                        <path id="Vector_14" d="M336.233 384.459C336.233 384.459 341.65 375.152 347.112 377.615C352.574 380.077 356.091 381.953 356.091 381.953C356.091 381.953 341.392 378.177 336.233 384.459Z" fill="#2F2E41" />
                                        <path id="Vector_15" d="M483.444 82.9341C473.531 63.0081 443.369 73.8757 448.27 95.5848C448.344 95.9084 448.42 96.2352 448.5 96.5652C453.666 117.115 462.107 136.699 473.5 154.565L462.5 203.565L450.5 228.565L475.5 234.565L506.5 159.565C506.5 159.565 497.949 112.092 483.444 82.9341Z" fill="#2F2E41" />
                                        <path id="Vector_16" opacity="0.2" d="M469 156.065L450 228.065L466 194.065L469 156.065Z" fill="black" />
                                        <g id={style.Cabeza}>
                                            <path id="Vector_17" d="M402.5 72.5652C418.516 72.5652 431.5 59.5815 431.5 43.5652C431.5 27.549 418.516 14.5652 402.5 14.5652C386.484 14.5652 373.5 27.549 373.5 43.5652C373.5 59.5815 386.484 72.5652 402.5 72.5652Z" fill="#FFB8B8" />
                                            <path id="Vector_18" d="M428.5 40.5652C428.5 40.5652 444.5 60.5652 452.5 59.5652L417.5 86.5652C417.5 86.5652 413.5 69.5652 408.5 67.5652C403.5 65.5652 428.5 40.5652 428.5 40.5652Z" fill="#FFB8B8" />
                                            <path id="Vector_19" d="M420.713 9.76134C420.713 9.76134 404.683 -7.11515 388.547 3.51302C372.412 14.1412 364.758 24.4654 366.34 31.654C367.922 38.8426 372.604 48.8416 372.604 48.8416C372.604 48.8416 369.694 33.9489 383.055 32.8468C396.415 31.7447 414.874 22.9031 414.874 22.9031L427.359 49.567C427.359 49.567 429.124 43.3881 434.018 45.1603C438.912 46.9326 435.119 11.7381 420.713 9.76134Z" fill="#2F2E41" />
                                        </g>
                                        <motion.g
                                         variants={svgVariants}
                                         animate="visible"
                                         initial="hidden"
                                        id={style.Pelota}>
                                            <path id="Vector_20" d="M317 391.065C316.999 393.598 316.788 396.127 316.37 398.625V398.635C315.222 405.356 312.562 411.727 308.591 417.269C304.62 422.811 299.442 427.379 293.448 430.628C287.454 433.876 280.8 435.72 273.989 436.021C267.178 436.322 260.387 435.072 254.13 432.365H254.12C252.269 431.566 250.474 430.641 248.75 429.595C243.406 426.369 238.79 422.067 235.196 416.963C231.602 411.859 229.107 406.064 227.87 399.945C227.29 397.021 226.999 394.047 227 391.065C227 389.705 227.06 388.355 227.18 387.025V387.015C228.218 375.532 233.624 364.886 242.282 357.272C250.941 349.659 262.192 345.659 273.713 346.099C285.235 346.539 296.148 351.385 304.2 359.637C312.253 367.889 316.831 378.917 316.99 390.445V390.455C317 390.665 317 390.855 317 391.065Z" fill="#6C63FF" />
                                            <path id="Vector_21" d="M283.077 376.035H262.923L252.845 358.585L259.681 346.737L260.08 346.63C268.733 344.317 277.872 344.573 286.383 347.365L286.745 347.485L293.155 358.585L283.077 376.035ZM264.077 374.035H281.923L290.845 358.585L285.396 349.147C277.488 346.64 269.035 346.4 260.998 348.456L255.155 358.585L264.077 374.035Z" fill="white" />
                                            <path id="Vector_22" d="M282.077 412.036H261.923L251.845 394.582L261.923 377.128H282.077L292.155 394.582L282.077 412.036ZM263.077 410.036H280.923L289.845 394.582L280.923 379.128H263.077L254.155 394.582L263.077 410.036Z" fill="white" />
                                            <path id="Vector_23" d="M272 437.065C265.715 437.077 259.495 435.789 253.731 433.282L252.704 432.836L262.922 415.125H283.077L292.865 432.08L291.893 432.547C285.689 435.537 278.887 437.082 272 437.065ZM255.563 431.882C261.061 434.094 266.95 435.174 272.875 435.057C278.801 434.94 284.642 433.628 290.048 431.2L281.923 417.125H264.078L255.563 431.882Z" fill="white" />
                                            <path id="Vector_24" d="M316.077 394.035H295.923L285.845 376.585L295.922 359.125H305.1L305.396 359.436C313.354 367.809 317.853 378.881 317.99 390.432V390.722L316.077 394.035ZM297.077 392.035H314.923L315.986 390.194C315.793 379.386 311.608 369.032 304.237 361.125H297.078L288.155 376.585L297.077 392.035Z" fill="white" />
                                            <path id="Vector_25" d="M295.645 430.547L285.845 413.585L295.922 396.125H316.076L317.37 398.355L317.356 398.803C316.263 405.171 313.844 411.238 310.256 416.611C306.667 421.984 301.989 426.543 296.524 429.991L295.645 430.547ZM288.155 413.585L296.33 427.733C301.282 424.443 305.518 420.185 308.782 415.215C312.046 410.245 314.272 404.666 315.324 398.814L314.924 398.125H297.078L288.155 413.585Z" fill="white" />
                                            <path id="Vector_26" d="M249.106 430.978L248.233 430.451C242.772 427.15 238.055 422.752 234.382 417.535C230.708 412.318 228.157 406.395 226.89 400.141L226.815 399.771L228.923 396.125H249.078L259.155 413.585L249.106 430.978ZM228.926 400.116C230.141 405.858 232.489 411.299 235.833 416.122C239.177 420.944 243.449 425.051 248.4 428.202L256.845 413.585L247.922 398.125H230.077L228.926 400.116Z" fill="white" />
                                            <path id="Vector_27" d="M249.077 392.035H228.923L226.18 387.294V387.025C227.168 375.693 232.331 365.131 240.669 357.392L240.957 357.125H249.078L259.155 374.585L249.077 392.035ZM230.077 390.035H247.923L256.845 374.585L247.922 359.125H241.746C234.031 366.406 229.22 376.239 228.205 386.799L230.077 390.035Z" fill="white" />
                                        </motion.g>
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_103_41">
                                            <rect width="856.974" height="510.427" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                
                                {/* <JugadorNob/> */}
                                {/* <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M2.78199 11.2247L3.17811 10.9628C3.77244 10.57 4.16501 10.3091 4.44321 10.0759C4.70659 9.855 4.80654 9.70729 4.85896 9.56902C4.9114 9.43069 4.93452 9.25362 4.88378 8.91324C4.83021 8.55381 4.70933 8.09777 4.52501 7.40909L4.35773 6.78408C3.48023 8.06855 2.9178 9.58592 2.78199 11.2247ZM5.53164 5.38427C5.54096 5.40862 5.54911 5.43368 5.556 5.45942L5.98476 7.06144C6.15548 7.69921 6.29973 8.23811 6.3674 8.69211C6.40211 8.92503 6.41975 9.15288 6.40887 9.37862L8.90873 10.4321C8.96485 10.3754 9.02531 10.322 9.08995 10.2726L10.9265 8.86802C11.025 8.79263 11.1297 8.72909 11.2385 8.6774V5.96784C11.0301 5.89602 10.8296 5.79841 10.6306 5.68392C10.233 5.45513 9.78446 5.12398 9.25371 4.73217L7.87565 3.71494C7.00795 4.14758 6.21779 4.71286 5.53164 5.38427ZM9.53929 3.07858L10.111 3.50061C10.6843 3.92375 11.0642 4.20276 11.3788 4.38379C11.6767 4.5552 11.8494 4.59806 11.9966 4.59965C12.1438 4.60125 12.3174 4.56214 12.6189 4.39721C12.9373 4.22303 13.3231 3.9523 13.9054 3.54166L14.5266 3.1035C13.7201 2.87326 12.8687 2.75 11.9885 2.75C11.1406 2.75 10.3193 2.86438 9.53929 3.07858ZM16.1849 3.75719C16.156 3.78563 16.1245 3.81211 16.0903 3.83623L14.7359 4.79146C14.1968 5.1717 13.7412 5.49307 13.3387 5.7132C13.1416 5.82099 12.9435 5.9126 12.7385 5.97954V8.6774C12.8472 8.72909 12.9519 8.79263 13.0504 8.86802L14.887 10.2726C14.9527 10.3229 15.0142 10.3773 15.0711 10.4351L17.6319 9.37469C17.6214 9.15027 17.6391 8.92375 17.6736 8.6922C17.7412 8.23821 17.8855 7.6993 18.0562 7.06152L18.485 5.45951C18.4875 5.45005 18.4902 5.44067 18.4931 5.4314C17.8179 4.76108 17.0399 4.19442 16.1849 3.75719ZM19.6651 6.85194L19.516 7.40918C19.3316 8.09787 19.2108 8.5539 19.1572 8.91333C19.1065 9.25372 19.1296 9.43078 19.182 9.56911C19.2344 9.70739 19.3344 9.85509 19.5978 10.0759C19.876 10.3092 20.2685 10.5701 20.8629 10.9629L21.1911 11.1799C21.0514 9.58702 20.5084 8.11008 19.6651 6.85194ZM22.7195 12.402C22.7244 12.2686 22.7269 12.1346 22.7269 12C22.7269 6.06376 17.92 1.25 11.9885 1.25C6.05695 1.25 1.25 6.06376 1.25 12C1.25 17.9362 6.05695 22.75 11.9885 22.75C17.6136 22.75 22.2273 18.4207 22.6889 12.9104C22.7598 12.7465 22.7678 12.5665 22.7195 12.402ZM21.1769 12.9686L20.001 12.1913C19.4507 11.8276 18.9855 11.5201 18.634 11.2253C18.4652 11.0839 18.3106 10.9358 18.1756 10.7731L15.5633 11.8548C15.5513 11.9636 15.529 12.0722 15.4959 12.1794L14.7746 14.5164C14.7495 14.5978 14.7188 14.6764 14.683 14.7517L16.1511 16.4498C16.3756 16.3748 16.6105 16.3301 16.8555 16.302C17.3112 16.25 17.8686 16.25 18.528 16.25H20.1847C20.1886 16.25 20.1924 16.25 20.1962 16.2501C20.7142 15.2492 21.055 14.1415 21.1769 12.9686ZM19.2256 17.75H18.5696C17.8574 17.75 17.3863 17.7511 17.0258 17.7923C16.6846 17.8313 16.5201 17.8994 16.4006 17.9857C16.2809 18.072 16.1643 18.2069 16.0193 18.5189C15.8662 18.8484 15.7161 19.2956 15.4909 19.972L15.2647 20.6515C16.834 20.0554 18.1991 19.0434 19.2256 17.75ZM13.5269 21.1223L14.0808 19.4587C14.2894 18.8323 14.4656 18.303 14.659 17.8868C14.746 17.6995 14.8419 17.5226 14.9542 17.3589L13.5198 15.6998C13.3857 15.7327 13.2462 15.75 13.1036 15.75H10.8733C10.741 15.75 10.6114 15.7351 10.4863 15.7067L9.20983 17.3323C9.33009 17.5034 9.43168 17.6893 9.52346 17.8868C9.71686 18.303 9.89306 18.8323 10.1016 19.4587L10.6667 21.156C11.0984 21.218 11.5397 21.25 11.9885 21.25C12.5126 21.25 13.0266 21.2063 13.5269 21.1223ZM8.94614 20.7367L8.69154 19.972C8.46634 19.2956 8.31624 18.8484 8.16314 18.5189C8.01815 18.2069 7.90148 18.072 7.78185 17.9857C7.66228 17.8994 7.49784 17.8313 7.15658 17.7923C6.79611 17.7511 6.325 17.75 5.61279 17.75H4.75133C5.8285 19.1073 7.2785 20.1546 8.94614 20.7367ZM3.79507 16.2777C3.85952 16.2597 3.92748 16.25 3.99769 16.25H5.65443C6.31385 16.25 6.87124 16.25 7.32692 16.302C7.56165 16.3289 7.78702 16.371 8.00291 16.4405L9.30734 14.7793C9.26578 14.6956 9.23053 14.6078 9.20232 14.5164L8.48098 12.1794C8.44751 12.071 8.42506 11.9611 8.41316 11.851L5.86271 10.7762C5.72828 10.9376 5.57461 11.0847 5.407 11.2252C5.05544 11.52 4.59031 11.8275 4.03997 12.1912L2.80423 13.0081C2.93076 14.1772 3.27484 15.2808 3.79507 16.2777ZM11.9885 10.0084C11.935 10.0084 11.8824 10.0253 11.8377 10.0595L10.0012 11.4641C9.95905 11.4963 9.9294 11.5399 9.91426 11.589C9.89961 11.6364 9.89899 11.6876 9.91426 11.737L10.6356 14.074C10.651 14.1241 10.6807 14.166 10.7197 14.1967C10.7629 14.2308 10.8162 14.25 10.8733 14.25H13.1036C13.1607 14.25 13.214 14.2308 13.2572 14.1967C13.2962 14.166 13.3259 14.1241 13.3413 14.074L14.0626 11.737C14.0779 11.6876 14.0773 11.6364 14.0627 11.589C14.0475 11.5399 14.0179 11.4963 13.9757 11.4641L12.1392 10.0595C12.0945 10.0253 12.0419 10.0084 11.9885 10.0084Z" fill="#1C274C"></path> </g></svg> */}
                                <div className={style.containerPlayers}>
                                    
                                    {currentPlayers.map((currentPlayer, index) => (
                                        <React.Fragment key={index}>



                                            <Player
                                                index={index}
                                                currentPlayer={currentPlayer}
                                                getRandomPlayerIndexes={getRandomPlayerIndexes}
                                                updateCurrentPlayers={updateCurrentPlayers}
                                                // players={players}
                                                players={PlayersJson}
                                                // compareGoals={compareStatistics}
                                                setVidas={setVidas}
                                                player1={player1}
                                                player2={player2}
                                                vidas={vidas}
                                                game={game}
                                                setStop={setStop}
                                                stop={stopPlayer}
                                                setCurrentPlayers={setCurrentPlayers}
                                                WinPlayer={winPlayer}
                                                failPlayer={failPlayer}

                                            />

                                            {index < currentPlayers.length - 1 &&
                                             <Game 
                                             vidas={vidas}
                                              numero={numero}
                                               currentPlayer={currentPlayers}
                                                game={game}
                                                 puntos={puntos}
                                                  stop={stopPlayer} />}
                                        </React.Fragment>
                                    ))}

                                </div>
                                

                            </motion.div>
                            <Sound
                             key={sound}
                             reset={reset}
                             setReset={setReset}

                             sound={sound}
                            soundLoaded={soundLoaded}
                            setSoundLoaded={setSoundLoaded}
                            volume={volume}
                            setVolume={setVolume}
                            isPlaying={isPlaying}
                            setIsPlaying={setIsPlaying}
                            songs={songs}
                            currentSongIndex={currentSongIndex}
                            setCurrentSongIndex={setCurrentSongIndex}
                            playSound={playSound}
                            stop={stop}
                            pause={pause}
                            />


                        </>
                        
                        
                    ) : (
                        <> 
                        <div className={style.containerPuntos}>
                            <h1>  Puntos: {puntos} </h1>
                            <motion.button
                                initial={{ opacity: 0, scale: 0.5 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, x: '100%', duration: 1500 }}
                                onClick={() => {
                                   
                                    handleButtonClickReset();
                                  }}>REINTENTAR</motion.button>
                            

                        </div>
                      
                        </>
                    )}
                </>
            )}
            </>
        </main>
    );
}
export default Main