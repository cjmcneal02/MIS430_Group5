export const users = [
  {
    id: 'P001',
    type: 'player',
    username: 'Alex Mercer',
    email: 'alex.mercer@example.com',
    region: 'US-Southeast',
    joinDate: '2024-03-15',
    accountStatus: 'active',
  },
  {
    id: 'D001',
    type: 'developer',
    username: 'Nadia Volkov',
    email: 'nadia@vostokstudios.com',
    studioName: 'Vostok Indie',
    joinDate: '2023-08-22',
    accountStatus: 'active',
  }
]

export const getUserById = (id) => users.find(user => user.id === id)
