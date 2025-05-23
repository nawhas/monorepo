import React from 'react'
import { Button, H3, Paragraph, YStack, XStack, Image } from 'tamagui'

export interface ReciterCardProps {
  id: string | number
  name: string
  image?: string
  popularTrack?: string
  onPress?: () => void
}

export const ReciterCard = ({
  id,
  name,
  image,
  popularTrack,
  onPress,
}: ReciterCardProps) => {
  return (
    <YStack 
      width={200} 
      backgroundColor="#111" 
      borderRadius="$4"
      overflow="hidden"
      space="$2"
    >
      <YStack height={120} justifyContent="center" alignItems="center" backgroundColor="#222">
        {image ? (
          <Image 
            source={{ uri: image || "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" }} 
            width="100%" 
            height="100%" 
            resizeMode="cover"
          />
        ) : (
          <Image 
            source={{ uri: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" }} 
            width={80}
            height={80}
            resizeMode="contain"
          />
        )}
      </YStack>
      <YStack padding="$3" space="$1">
        <H3 size="$3" color="white">{name}</H3>
        {popularTrack && (
          <Paragraph size="$2" color="#aaa">{popularTrack}</Paragraph>
        )}
        <XStack paddingTop="$2">
          <Button 
            size="$2" 
            onPress={onPress}
            backgroundColor="#333"
            color="white"
            borderRadius="$2"
            width="100%"
          >
            Listen
          </Button>
        </XStack>
      </YStack>
    </YStack>
  )
} 