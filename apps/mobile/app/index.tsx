import { Button, YStack, XStack, H1, Text } from 'tamagui'
import { View } from 'react-native'

export default function Home() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <YStack space="$4" alignItems="center">
        <H1>Tamagui Example</H1>
        <Text>Welcome to your app</Text>
        <XStack space="$2">
          <Button theme="active">Press me</Button>
        </XStack>
      </YStack>
    </View>
  )
}
