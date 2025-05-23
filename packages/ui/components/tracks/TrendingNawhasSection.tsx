import React from 'react'
import { H2, ScrollView, XStack, YStack } from 'tamagui'
import { TrackCard } from '../tracks'

export interface TrendingTrack {
  id: string | number
  title: string
  subtitle: string
  artist: string
  year?: string
  image?: string
}

export interface TrendingNawhasSectionProps {
  tracks: TrendingTrack[]
  onTrackPress?: (trackId: string | number) => void
}

export const TrendingNawhasSection = ({
  tracks,
  onTrackPress,
}: TrendingNawhasSectionProps) => {
  return (
    <YStack space="$4">
      <H2 color="white">Trending Nawhas</H2>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingRight: 20 }}>
        <XStack space="$4">
          {tracks.map((track) => (
            <TrackCard
              key={track.id}
              id={track.id}
              title={track.title}
              subtitle={track.subtitle}
              artist={track.artist}
              year={track.year}
              image={track.image}
              onPress={() => onTrackPress?.(track.id)}
            />
          ))}
        </XStack>
      </ScrollView>
    </YStack>
  )
} 