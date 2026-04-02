import { getDecisionsByUser } from '../data'

export const useDecisions = (userId) => {
  const decisions = getDecisionsByUser(userId)

  const appealableDecisions = decisions.filter(d => d.appealable)
  const recentDecisions = [...decisions].sort((a, b) =>
    new Date(b.decisionDate) - new Date(a.decisionDate)
  )

  return {
    decisions: recentDecisions,
    totalCount: decisions.length,
    appealableCount: appealableDecisions.length,
  }
}
