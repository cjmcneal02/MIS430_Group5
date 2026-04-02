export const games = [
  {
    id: 'G001',
    title: 'Ironveil',
    developerId: 'D001',
    genre: 'Strategy',
    releaseDate: '2024-11-20',
    price: 24.99,
    averageRating: 4.6,
    totalReviews: 3420,
    totalDownloads: 125000,
    description: 'A deep tactical strategy game set in a dark fantasy world where players must manage resources, build alliances, and navigate political intrigue.',
  },
  {
    id: 'G002',
    title: 'Neon Drift',
    developerId: 'D001',
    genre: 'Racing',
    releaseDate: '2025-02-10',
    price: 19.99,
    averageRating: 4.3,
    totalReviews: 1890,
    totalDownloads: 78000,
    description: 'A cyberpunk-themed arcade racer with stunning visuals, intense competition, and customizable vehicles.',
  }
]

export const getGameById = (id) => games.find(game => game.id === id)
export const getGamesByDeveloper = (developerId) => games.filter(game => game.developerId === developerId)
