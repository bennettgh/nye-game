export const mockGameState: any = {
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
