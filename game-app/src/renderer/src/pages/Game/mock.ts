export const mockGameState: any = {
  roomCode: 'MYOO',
  players: [
    {
      userId: '2',
      socketId: '15u36iOIMh-AgqAyAAAN',
      roomCode: 'MYOO',
      nickname: 'ASDF',
      avatarId: '1'
    },
    {
      userId: '3',
      socketId: 'lQEDKG8DULaHY2WHAAAP',
      roomCode: 'MYOO',
      nickname: 'ASDF',
      avatarId: '1'
    },
    {
      userId: '4',
      socketId: '-UPXcM8iltKLbyJmAAAR',
      roomCode: 'MYOO',
      nickname: 'ASODJF',
      avatarId: '1'
    }
  ],
  gameMaster: {
    userId: '1',
    socketId: 'COfa9ff708N0Mri9AAAL',
    roomCode: 'MYOO'
  },
  started: true,
  gameOver: false,
  rounds: [
    {
      roundNumber: 1,
      phase: 'outro',
      prompt: 'Patty is back from retirement. She just asked Gilly to _______',
      answers: [
        {
          answer: 'Zoonies lost poodle barker!',
          userId: '4',
          votes: [
            {
              userId: '2'
            },
            {
              userId: '3'
            }
          ]
        },
        {
          answer: 'Beef Stew',
          userId: '3',
          votes: []
        },
        {
          answer:
            'This is a long story about how once a dog wa asdf askdf asdfaj sdf jasdfs a dog and it was a dog',
          userId: '2',
          votes: [
            {
              userId: '4'
            }
          ]
        }
      ]
    }
  ],
  scores: {}
}
