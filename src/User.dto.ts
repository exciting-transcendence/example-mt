type gameID = string

export interface Stat {
  wins: number
  loses: number
  draws: number
  rating: number // elo rating
}

export interface User {
  id: string
  name: string
  avatar: string
  status: 'ONLINE' | 'OFFLINE' | gameID
  friends: User[]
  blocks: User[]
  stat: Stat
}
