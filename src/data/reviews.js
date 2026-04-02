export const reviews = [
  {
    id: 'REV001',
    gameId: 'G001',
    userId: 'P001',
    rating: 5,
    reviewText: 'Ironveil is an outstanding strategy game with incredible depth. The resource management mechanics are well-balanced, and the political intrigue adds a layer of complexity that keeps every playthrough fresh. Highly recommended for strategy fans!',
    postDate: '2026-02-20',
    isFlagged: false,
    helpfulCount: 127,
    moderationStatus: 'approved',
  }
]

export const getReviewById = (id) => reviews.find(review => review.id === id)
export const getReviewsByGame = (gameId) => reviews.filter(review => review.gameId === gameId)
export const getReviewsByUser = (userId) => reviews.filter(review => review.userId === userId)
