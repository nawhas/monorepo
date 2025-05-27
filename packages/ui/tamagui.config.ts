'use client'

import { shorthands } from '@tamagui/shorthands'
import { themes, tokens } from '@tamagui/themes'
import { createTamagui } from 'tamagui'
import { createAnimations } from '@tamagui/animations-css'
import createReactContext from './context-helper'

const animations = createAnimations({
  bouncy: {
    type: 'spring',
    damping: 9, // Adjusted for a slightly less aggressive bounce if preferred
    mass: 0.9,
    stiffness: 150,
  },
  fast: {
    type: 'spring',
    damping: 20,
    mass: 1.2,
    stiffness: 250,
  },
  medium: { // This is what Sheet's animation="medium" will use
    type: 'spring',
    damping: 15, // You can tweak these values
    mass: 1,
    stiffness: 100, // Softer than fast
  },
  slow: {
    type: 'spring',
    damping: 15, // Less 'springy'
    stiffness: 50,
  },
  // A simple timing animation
  lazy: {
    type: 'timing',
    duration: 300,
  },
});

const appConfig = createTamagui({
  themes,
  tokens,
  shorthands,
  defaultTheme: 'dark',
  createReactContext, // Use our custom context helper
  media: {
    xs: { maxWidth: 660 },
    gtXs: { minWidth: 660 + 1 },
    ltSm: { maxWidth: 860 - 1 },
    sm: { maxWidth: 860 },
    gtSm: { minWidth: 860 + 1 },
    ltMd: { maxWidth: 980 - 1 },
    md: { maxWidth: 980 },
    gtMd: { minWidth: 980 + 1 },
    ltLg: { maxWidth: 1120 - 1 },
    lg: { maxWidth: 1120 },
    gtLg: { minWidth: 1120 + 1 },
    short: { maxHeight: 820 },
    tall: { minHeight: 820 },
    hoverNone: { hover: 'none' },
    pointerCoarse: { pointer: 'coarse' },
  },
  animations,
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
export const tamaguiConfig = appConfig 