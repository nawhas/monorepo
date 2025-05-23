import React from 'react'
import { H3, Paragraph, YStack, Image, XStack } from 'tamagui'

export interface TrackCardProps {
  id: string | number
  title: string
  subtitle: string
  artist: string
  year?: string
  image?: string
  onPress?: () => void
}

export const TrackCard = ({
  id,
  title,
  subtitle,
  artist,
  year,
  image,
  onPress,
}: TrackCardProps) => {
  return (
    <YStack 
      width={240} 
      height={180}
      backgroundColor="rgba(0,0,0,0.5)" 
      borderRadius="$4"
      overflow="hidden"
      position="relative"
      onPress={onPress}
      pressStyle={{ opacity: 0.8 }}
    >
      {/* Background image */}
      <Image 
        source={{ uri: image || "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" }} 
        width="100%" 
        height="100%" 
        position="absolute"
        opacity={0.6}
        resizeMode="cover"
      />
      
      {/* Content overlay */}
      <YStack 
        flex={1} 
        padding="$3" 
        justifyContent="flex-end"
      >
        <H3 color="white" size="$4">{title}</H3>
        <Paragraph color="white" size="$2">{subtitle}</Paragraph>
        <XStack space="$2" marginTop="$2">
          <Paragraph color="white" size="$1">{artist}</Paragraph>
          {year && (
            <>
              <Paragraph color="white" size="$1">•</Paragraph>
              <Paragraph color="white" size="$1">{year}</Paragraph>
            </>
          )}
        </XStack>
      </YStack>
    </YStack>
  )
} 