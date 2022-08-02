import {
  createStyles,
  Card,
  Avatar,
  Text,
  Group,
  Button,
  Overlay,
} from '@mantine/core'
import { Stat, User } from './User.dto'

const useStyles = createStyles(theme => ({
  card: {
    backgroundColor:
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  avatar: {
    border: `2px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white
    }`,
  },
}))

interface UserCardImageProps {
  user: User
}

export function UserCardImage({ user }: UserCardImageProps) {
  const { id, stat, avatar, name, status } = user
  const { classes, theme } = useStyles()

  const items = Object.entries(stat).map(([key, value]) => (
    <div key={key}>
      <Text align="center" size="lg" weight={500}>
        {key}
      </Text>
      <Text align="center" size="sm" color="dimmed">
        {value}
      </Text>
    </div>
  ))

  return (
    <Card withBorder p="xl" radius="md" className={classes.card}>
      <Card.Section
        sx={{
          backgroundImage: `url(${avatar})`,
          height: 140,
          filter: ['blur(4px)'],
        }}
      />
      <Avatar
        src={avatar}
        size={120}
        radius={120}
        mx="auto"
        mt={-80}
        className={classes.avatar}
      />
      <Group position="center">
        <Text align="center" size="lg" weight={500} mt="sm">
          {name}
        </Text>
        <Text align="right" size="sm" color="dimmed" mt="sm">
          {id}
        </Text>
      </Group>
      <Group mt="md" position="center" spacing={30}>
        {items}
      </Group>
      <Group position="center">
        <Button>Follow</Button>
        <Button color={'red'}>Block</Button>
      </Group>
    </Card>
  )
}
