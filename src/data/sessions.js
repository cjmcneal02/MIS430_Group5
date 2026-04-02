export const matchSessions = [
  {
    id: 'MS001',
    gameId: 'G001',
    sessionDate: '2026-03-14',
    gameMode: 'Ranked 1v1',
    matchmakingPool: 'Gold Tier',
    duration: 45,
  }
]

export const sessionParticipants = [
  {
    id: 'SP001',
    sessionId: 'MS001',
    userId: 'P001',
    outcome: 'Win',
    performanceScore: 1847,
    skillRatingChange: +23,
  }
]

export const getSessionById = (id) => matchSessions.find(session => session.id === id)
export const getParticipantsBySession = (sessionId) => sessionParticipants.filter(p => p.sessionId === sessionId)
export const getSessionsByUser = (userId) => {
  const userParticipations = sessionParticipants.filter(p => p.userId === userId)
  return matchSessions.filter(session =>
    userParticipations.some(p => p.sessionId === session.id)
  )
}
