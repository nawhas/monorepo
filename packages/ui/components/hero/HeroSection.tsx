import React from 'react'
import { Button, H1, Paragraph, XStack, YStack } from 'tamagui'

export interface HeroSectionProps {
  title: string
  subtitle: string
  onGetStarted?: () => void
  onLearnMore?: () => void
}

export const HeroSection = ({
  title,
  subtitle,
  onGetStarted,
  onLearnMore,
}: HeroSectionProps) => {
  return (
    <YStack space="$4" padding="$6" borderRadius="$4" backgroundColor="#111">
      <H1 textAlign="center" color="white">{title}</H1>
      <Paragraph size="$5" textAlign="center" color="white">
        {subtitle}
      </Paragraph>
      <XStack justifyContent="center" space="$4" marginTop="$4">
        <Button size="$4" onPress={onGetStarted}>Get Started</Button>
        <Button size="$4" variant="outlined" onPress={onLearnMore}>Learn More</Button>
      </XStack>
      {/* Placeholder for hero image */}
      <YStack height={200} borderRadius="$2" justifyContent="center" alignItems="center">
        <Paragraph color="#aaa">Hero Image Placeholder</Paragraph>
      </YStack>
    </YStack>
  )
} 