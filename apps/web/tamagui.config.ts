import { defaultConfig } from '@tamagui/config/v4'
import { createTamagui } from 'tamagui'

const appConfig = createTamagui(defaultConfig)

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig