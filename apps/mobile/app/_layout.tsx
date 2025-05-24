import { Stack } from 'expo-router'
import { TamaguiProvider, YStack } from 'tamagui'
import { Navbar } from '@repo/ui'
import { useColorScheme } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { useEffect, useState } from 'react'
import appConfig from '../tamagui.config'

export default function RootLayout() {
  const colorScheme = useColorScheme()
  const [isMounted, setIsMounted] = useState(false)
  
  useEffect(() => {
    setIsMounted(true)
  }, [])
  
  return (
    <TamaguiProvider 
      config={appConfig} 
      defaultTheme={colorScheme || "light"}
      disableRootThemeClass={!isMounted}
    >
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: 'black' }}>
          <YStack f={1}>
            <Navbar />
            <Stack screenOptions={{ headerShown: false }}>
              <Stack.Screen name="index" />
            </Stack>
          </YStack>
        </SafeAreaView>
      </SafeAreaProvider>
    </TamaguiProvider>
  )
}