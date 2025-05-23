import React from 'react'
import { H2, XStack, YStack } from 'tamagui'
import { ReciterCard } from './ReciterCard'

export interface Reciter {
  id: string | number
  name: string
  popularTrack?: string
  image?: string
}

export interface RecitersSection {
  reciters: Reciter[]
  onReciterPress?: (reciterId: string | number) => void
}

export const RecitersSection = ({
  reciters,
  onReciterPress,
}: RecitersSection) => {
  return (
    <YStack space="$4">
      <H2 color="white">Top Reciters</H2>
      <XStack flexWrap="wrap" justifyContent="space-between" gap="$4">
        {reciters.map((reciter) => (
          <ReciterCard
            key={reciter.id}
            id={reciter.id}
            name={reciter.name}
            image={reciter.image}
            popularTrack={reciter.popularTrack}
            onPress={() => onReciterPress?.(reciter.id)}
          />
        ))}
      </XStack>
    </YStack>
  )
} 