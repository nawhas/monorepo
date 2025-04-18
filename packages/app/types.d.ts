import { config } from 'tamagui-config'

export type Conf = typeof config

declare module 'tamagui-config' {
  interface TamaguiCustomConfig extends Conf {}
}
