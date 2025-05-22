import { Stack } from 'expo-router'
import { TamaguiProvider } from 'tamagui'
import appConfig from '../tamagui.config'

export default function RootLayout() {
  return (
    <TamaguiProvider config={appConfig} defaultTheme="light">
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </TamaguiProvider>
  )
}