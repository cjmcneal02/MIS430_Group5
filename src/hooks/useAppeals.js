import { getAppealsByUser, getAppealById } from '../data'

export const useAppeals = (userId) => {
  const appeals = getAppealsByUser(userId)

  const pendingAppeals = appeals.filter(
    a => a.appealStatus === 'Pending' || a.appealStatus === 'UnderReview'
  )

  const recentAppeals = [...appeals].sort((a, b) =>
    new Date(b.submitDate) - new Date(a.submitDate)
  )

  return {
    appeals: recentAppeals,
    totalCount: appeals.length,
    pendingCount: pendingAppeals.length,
    findAppealById: getAppealById,
  }
}
