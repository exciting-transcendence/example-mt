import { MantineProvider } from '@mantine/core'

import { Group, Text } from '@mantine/core'
import { UserCardImage } from './Profile'
import { User } from './User.dto'

const user: User = {
  id: 'exampleID',
  name: 'Example User',
  avatar: 'https://picsum.photos/200',
  status: 'ONLINE',
  friends: [],
  blocks: [],
  stat: {
    wins: 0,
    loses: 0,
    draws: 0,
    rating: 0,
  },
}

export function App() {
  return (
    <MantineProvider>
      <Text>Hello World!</Text>
      <Group position="center">
        <UserCardImage user={user} />
      </Group>
    </MantineProvider>
  )
}

export default App
