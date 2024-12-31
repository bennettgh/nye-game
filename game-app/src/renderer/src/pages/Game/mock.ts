import { Game } from '@renderer/context/types'

export const mockGameState: Game = {
  roomCode: 'NPUZ',
  players: [
    {
      userId: '15',
      socketId: 'ypWS2LS9a0pvK8ydAAAn',
      roomCode: 'NPUZ',
      nickname: 'ANDREW',
      avatarId: '1'
    },
    {
      userId: '16',
      socketId: 'm3o_vU_nulqgRjtFAAAp',
      roomCode: 'NPUZ',
      nickname: 'FROG',
      avatarId: '1'
    },
    {
      userId: '17',
      socketId: '0yiCXIQOZgXNB_liAAAr',
      roomCode: 'NPUZ',
      nickname: 'MOBIN',
      avatarId: '3'
    },
    {
      userId: '18',
      socketId: 'qzgbT9OtYAvzja7HAAAt',
      roomCode: 'NPUZ',
      nickname: 'HANK',
      avatarId: '9'
    }
  ],
  gameMaster: {
    userId: '14',
    socketId: 'TQBmP0o0EWlxDhrvAAAl',
    roomCode: 'NPUZ'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'outro',
      prompt: 'Turkey ate my ______!',
      answers: [
        {
          answer: 'POODLE',
          userId: '15',
          votes: [
            {
              userId: '17'
            }
          ]
        },
        {
          answer: 'HAM AND CHEESE SANDWICH',
          userId: '16',
          votes: []
        },
        {
          answer:
            'WELL I HAD A REALLY LONG DINNER WITH TONS OF CORN AND TURKEY ATE EVERYTHING EXCEPT FOR THE CORN, IT WAS A SUPER TRAGEDY',
          userId: '17',
          votes: [
            {
              userId: '18'
            },
            {
              userId: '16'
            },
            {
              userId: '15'
            }
          ]
        },
        {
          answer: 'P',
          userId: '18',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}

export const mockGameState2: Game = {
  roomCode: 'KPPC',
  players: [
    {
      userId: '5',
      socketId: '0LH4LxOQ-QJ-cw-eAAAX',
      roomCode: 'KPPC',
      nickname: 'ANDREW',
      avatarId: '1'
    },
    {
      userId: '6',
      socketId: '2KGBrHVodWC9xygLAAAZ',
      roomCode: 'KPPC',
      nickname: 'BRUNO',
      avatarId: '3'
    },
    {
      userId: '7',
      socketId: 'yu8J7UGu_6fD6ATSAAAb',
      roomCode: 'KPPC',
      nickname: 'MOBIN',
      avatarId: '6'
    },
    {
      userId: '8',
      socketId: 'MoyyDh8AdYUZ5suXAAAd',
      roomCode: 'KPPC',
      nickname: 'FROG',
      avatarId: '5'
    }
  ],
  gameMaster: {
    userId: '4',
    socketId: 'wOaSzCkFt9eUnFujAAAV',
    roomCode: 'KPPC'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'answers',
      prompt: 'Frog had a rough day at Sobotec, and ordered _______ on UberEats',
      answers: [
        {
          answer: 'POODLE',
          userId: '7',
          votes: []
        },
        {
          answer: 'ABBY IS EATING 10 POODLES',
          userId: '6',
          votes: []
        },
        {
          answer: 'WELL, A LONG TIME AGO IN A LAND FAR FAR AWAY THERE WAS A POODLE NAMED ZOONIE ',
          userId: '5',
          votes: []
        },
        {
          answer:
            "THE BIGGEST POODLE IN THE UNIVERSE, ABBY, WENT TO MOBIN'S HOUSE AND FOUND CAPER EATING HANKS LAPTOP. ITWAS A SAD SAD DAY FOR ALL OF US",
          userId: '8',
          votes: []
        },
        {
          answer: 'POODLE',
          userId: '7',
          votes: []
        },
        {
          answer: 'ABBY IS EATING 10 POODLES',
          userId: '6',
          votes: []
        },
        {
          answer: 'WELL, A LONG TIME AGO IN A LAND FAR FAR AWAY THERE WAS A POODLE NAMED ZOONIE ',
          userId: '5',
          votes: []
        },
        {
          answer:
            "THE BIGGEST POODLE IN THE UNIVERSE, ABBY, WENT TO MOBIN'S HOUSE AND FOUND CAPER EATING HANKS LAPTOP. ITWAS A SAD SAD DAY FOR ALL OF US",
          userId: '8',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}

export const mockGameState3: Game = {
  roomCode: 'JLOS',
  players: [
    {
      userId: '7',
      socketId: 'MmgFKcBZ-b6-lkXkAAAN',
      roomCode: 'JLOS',
      nickname: 'ANDREW',
      avatarId: '1'
    },
    {
      userId: '8',
      socketId: '1lDSaBoLDxmX5JOrAAAP',
      roomCode: 'JLOS',
      nickname: 'ASIODF]',
      avatarId: '5'
    },
    {
      userId: '9',
      socketId: '5Zw4IPm6VdqaULEXAAAR',
      roomCode: 'JLOS',
      nickname: 'ASKDF',
      avatarId: '9'
    }
  ],
  gameMaster: {
    userId: '6',
    socketId: 'hOQ2TV71wRPxk424AAAL',
    roomCode: 'JLOS'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'voting',
      prompt: "Abby switched departments at work. She's now taking care of _______",
      answers: [
        {
          answer: 'POODLE',
          userId: '7',
          votes: []
        },
        {
          answer: 'OODLES OF POODLES EVERYWHERE',
          userId: '8',
          votes: []
        },
        {
          answer: "I CAN'T STAND POODLES I HATE THEM SO MUCH THAT I'M GOING TO DIE",
          userId: '9',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}

export const mockGameStateGameOver: Game = {
  roomCode: 'ITFF',
  players: [
    {
      userId: '9',
      socketId: 'IpLRBK5k1fDOi4uwAAAT',
      roomCode: 'ITFF',
      nickname: 'ANDREW',
      avatarId: '1'
    },
    {
      userId: '10',
      socketId: 'CMcxyaasF0j-L7-rAAAV',
      roomCode: 'ITFF',
      nickname: 'BEAN',
      avatarId: '9'
    },
    {
      userId: '11',
      socketId: 'wWmbY7mMQL-XMZSAAAAX',
      roomCode: 'ITFF',
      nickname: 'BRUNO',
      avatarId: '5'
    },
    {
      userId: '12',
      socketId: 'Kvkpsd2oraZSlaYdAAAZ',
      roomCode: 'ITFF',
      nickname: 'BUZZ',
      avatarId: '3'
    }
  ],
  gameMaster: {
    userId: '8',
    socketId: 'KcS2xf1ALDY6nt_5AAAR',
    roomCode: 'ITFF'
  },
  started: true,
  gameOver: true,
  rounds: [
    {
      roundNumber: 1,
      phase: 'outro',
      prompt:
        'The person sitting furthest on the left started calling their significant other ______',
      answers: [
        {
          answer: 'TEST1',
          userId: '12',
          votes: [
            {
              userId: '9'
            }
          ]
        },
        {
          answer: 'TEST2 TEST2 TEST2',
          userId: '11',
          votes: []
        },
        {
          answer: 'TEST3 TEST3 TEST3 TEST3 TEST3 TEST3 TEST3 TEST3 ',
          userId: '10',
          votes: []
        },
        {
          answer:
            'TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 ',
          userId: '9',
          votes: [
            {
              userId: '10'
            },
            {
              userId: '11'
            },
            {
              userId: '12'
            }
          ]
        }
      ]
    }
  ],
  scores: {}
}

export const mockGameState4: Game = {
  roomCode: 'ITFF',
  players: [
    {
      userId: '9',
      socketId: 'IpLRBK5k1fDOi4uwAAAT',
      roomCode: 'ITFF',
      nickname: 'ANDREW',
      avatarId: '1'
    },
    {
      userId: '10',
      socketId: 'CMcxyaasF0j-L7-rAAAV',
      roomCode: 'ITFF',
      nickname: 'BEAN',
      avatarId: '9'
    },
    {
      userId: '11',
      socketId: 'wWmbY7mMQL-XMZSAAAAX',
      roomCode: 'ITFF',
      nickname: 'BRUNO',
      avatarId: '5'
    },
    {
      userId: '12',
      socketId: 'Kvkpsd2oraZSlaYdAAAZ',
      roomCode: 'ITFF',
      nickname: 'BUZZ',
      avatarId: '3'
    }
  ],
  gameMaster: {
    userId: '8',
    socketId: 'KcS2xf1ALDY6nt_5AAAR',
    roomCode: 'ITFF'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'outro',
      prompt:
        'The person sitting furthest on the left started calling their significant other ______',
      answers: [
        {
          answer: 'TEST1',
          userId: '12',
          votes: [
            {
              userId: '9'
            }
          ]
        },
        {
          answer: 'TEST2 TEST2 TEST2',
          userId: '11',
          votes: []
        },
        {
          answer: 'TEST3 TEST3 TEST3 TEST3 TEST3 TEST3 TEST3 TEST3 ',
          userId: '10',
          votes: []
        },
        {
          answer:
            'TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 TEST4 ',
          userId: '9',
          votes: [
            {
              userId: '10'
            },
            {
              userId: '11'
            },
            {
              userId: '12'
            }
          ]
        }
      ]
    }
  ],
  scores: {}
}

export const mgsQuestion: Game = {
  roomCode: 'IDZB',
  players: [
    {
      userId: '25',
      socketId: '37ddhiRaDiIx9X9BAAAx',
      roomCode: 'IDZB',
      nickname: 'GILLY',
      avatarId: '5'
    },
    {
      userId: '26',
      socketId: 'IMmm3q0LjJW80DwSAAAz',
      roomCode: 'IDZB',
      nickname: 'MOBIN',
      avatarId: '4'
    },
    {
      userId: '27',
      socketId: 'Lae2y9vqzCPHJNEGAAA1',
      roomCode: 'IDZB',
      nickname: 'BEANO',
      avatarId: '3'
    },
    {
      userId: '28',
      socketId: 'piV5wk1kw7gjUC9QAAA3',
      roomCode: 'IDZB',
      nickname: 'FROGGER',
      avatarId: '6'
    },
    {
      userId: '29',
      socketId: 'fS1_qgJLg2f7ooufAAA5',
      roomCode: 'IDZB',
      nickname: 'ZOONIE',
      avatarId: '8'
    },
    {
      userId: '30',
      socketId: 'xADi3pktrdwag0duAAA7',
      roomCode: 'IDZB',
      nickname: 'ABBY',
      avatarId: '1'
    }
  ],
  gameMaster: {
    userId: '24',
    socketId: 'VVleAnOJKPdAZi85AAAv',
    roomCode: 'IDZB'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'question',
      prompt: 'Fil watched a new documentary. What lifestyle changes is he making?',
      answers: [
        {
          answer: 'NO MORE PIZZA',
          userId: '30',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}

export const mgsAnswers: Game = {
  roomCode: 'IDZB',
  players: [
    {
      userId: '25',
      socketId: '37ddhiRaDiIx9X9BAAAx',
      roomCode: 'IDZB',
      nickname: 'GILLY',
      avatarId: '5'
    },
    {
      userId: '26',
      socketId: 'IMmm3q0LjJW80DwSAAAz',
      roomCode: 'IDZB',
      nickname: 'MOBIN',
      avatarId: '4'
    },
    {
      userId: '27',
      socketId: 'Lae2y9vqzCPHJNEGAAA1',
      roomCode: 'IDZB',
      nickname: 'BEANO',
      avatarId: '3'
    },
    {
      userId: '28',
      socketId: 'piV5wk1kw7gjUC9QAAA3',
      roomCode: 'IDZB',
      nickname: 'FROGGER',
      avatarId: '6'
    },
    {
      userId: '29',
      socketId: 'fS1_qgJLg2f7ooufAAA5',
      roomCode: 'IDZB',
      nickname: 'ZOONIE',
      avatarId: '8'
    },
    {
      userId: '30',
      socketId: 'xADi3pktrdwag0duAAA7',
      roomCode: 'IDZB',
      nickname: 'ABBY',
      avatarId: '1'
    }
  ],
  gameMaster: {
    userId: '24',
    socketId: 'VVleAnOJKPdAZi85AAAv',
    roomCode: 'IDZB'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'answers',
      prompt: 'Fil watched a new documentary. What lifestyle changes is he making?',
      answers: [
        {
          answer: 'NO MORE PIZZA',
          userId: '30',
          votes: []
        },
        {
          answer: 'EATING WAY MORE PIZZA',
          userId: '25',
          votes: []
        },
        {
          answer: 'DONI DEE = WIFE',
          userId: '26',
          votes: []
        },
        {
          answer: 'HE AINT TAKING ANY MORE HOT SHOWERS',
          userId: '27',
          votes: []
        },
        {
          answer: 'WELL WHEN ZOONIE WAS BORN A LONG TIME AGO WE LEARNED HE HAD A GREEN HOG',
          userId: '29',
          votes: []
        },
        {
          answer: 'POODLES',
          userId: '28',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}

export const mgsVoting: Game = {
  roomCode: 'IDZB',
  players: [
    {
      userId: '25',
      socketId: '37ddhiRaDiIx9X9BAAAx',
      roomCode: 'IDZB',
      nickname: 'GILLY',
      avatarId: '5'
    },
    {
      userId: '26',
      socketId: 'IMmm3q0LjJW80DwSAAAz',
      roomCode: 'IDZB',
      nickname: 'MOBIN',
      avatarId: '4'
    },
    {
      userId: '27',
      socketId: 'Lae2y9vqzCPHJNEGAAA1',
      roomCode: 'IDZB',
      nickname: 'BEANO',
      avatarId: '3'
    },
    {
      userId: '28',
      socketId: 'piV5wk1kw7gjUC9QAAA3',
      roomCode: 'IDZB',
      nickname: 'FROGGER',
      avatarId: '6'
    },
    {
      userId: '29',
      socketId: 'fS1_qgJLg2f7ooufAAA5',
      roomCode: 'IDZB',
      nickname: 'ZOONIE',
      avatarId: '8'
    },
    {
      userId: '30',
      socketId: 'xADi3pktrdwag0duAAA7',
      roomCode: 'IDZB',
      nickname: 'ABBY',
      avatarId: '1'
    }
  ],
  gameMaster: {
    userId: '24',
    socketId: 'VVleAnOJKPdAZi85AAAv',
    roomCode: 'IDZB'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'answers',
      prompt: 'Fil watched a new documentary. What lifestyle changes is he making?',
      answers: [
        {
          answer: 'NO MORE PIZZA',
          userId: '30',
          votes: []
        },
        {
          answer: 'EATING WAY MORE PIZZA',
          userId: '25',
          votes: []
        },
        {
          answer: 'DONI DEE = WIFE',
          userId: '26',
          votes: []
        },
        {
          answer: 'HE AINT TAKING ANY MORE HOT SHOWERS',
          userId: '27',
          votes: []
        },
        {
          answer: 'WELL WHEN ZOONIE WAS BORN A LONG TIME AGO WE LEARNED HE HAD A GREEN HOG',
          userId: '29',
          votes: []
        },
        {
          answer: 'POODLES',
          userId: '28',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}

export const mgsOutro: Game = {
  roomCode: 'IDZB',
  players: [
    {
      userId: '25',
      socketId: '37ddhiRaDiIx9X9BAAAx',
      roomCode: 'IDZB',
      nickname: 'GILLY',
      avatarId: '5'
    },
    {
      userId: '26',
      socketId: 'IMmm3q0LjJW80DwSAAAz',
      roomCode: 'IDZB',
      nickname: 'MOBIN',
      avatarId: '4'
    },
    {
      userId: '27',
      socketId: 'Lae2y9vqzCPHJNEGAAA1',
      roomCode: 'IDZB',
      nickname: 'BEANO',
      avatarId: '3'
    },
    {
      userId: '28',
      socketId: 'piV5wk1kw7gjUC9QAAA3',
      roomCode: 'IDZB',
      nickname: 'FROGGER',
      avatarId: '6'
    },
    {
      userId: '29',
      socketId: 'fS1_qgJLg2f7ooufAAA5',
      roomCode: 'IDZB',
      nickname: 'ZOONIE',
      avatarId: '8'
    },
    {
      userId: '30',
      socketId: 'xADi3pktrdwag0duAAA7',
      roomCode: 'IDZB',
      nickname: 'ABBY',
      avatarId: '1'
    }
  ],
  gameMaster: {
    userId: '24',
    socketId: 'VVleAnOJKPdAZi85AAAv',
    roomCode: 'IDZB'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'answers',
      prompt: 'Fil watched a new documentary. What lifestyle changes is he making?',
      answers: [
        {
          answer: 'NO MORE PIZZA',
          userId: '30',
          votes: []
        },
        {
          answer: 'EATING WAY MORE PIZZA',
          userId: '25',
          votes: [{ userId: '30' }]
        },
        {
          answer: 'DONI DEE = WIFE',
          userId: '26',
          votes: []
        },
        {
          answer: 'HE AINT TAKING ANY MORE HOT SHOWERS',
          userId: '27',
          votes: [{ userId: '29' }]
        },
        {
          answer: 'WELL WHEN ZOONIE WAS BORN A LONG TIME AGO WE LEARNED HE HAD A GREEN HOG',
          userId: '29',
          votes: [{ userId: '25' }, { userId: '26' }, { userId: '27' }, { userId: '28' }]
        },
        {
          answer: 'POODLES',
          userId: '28',
          votes: []
        }
      ]
    }
  ],
  scores: {}
}
