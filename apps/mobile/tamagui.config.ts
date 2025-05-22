import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'

const appConfig = createTamagui({
  themes,
  tokens,
  shorthands,
  defaultTheme: 'light',
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
export const tamaguiConfig = appConfig