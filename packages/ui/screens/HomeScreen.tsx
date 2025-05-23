import React from 'react'
import { YStack, ScrollView } from 'tamagui'
import { RecitersSection } from '../components/reciters'
import { TrendingNawhasSection } from '../components/tracks'
import { HeroSection } from '../components/hero'

export const HomeScreen = () => {
  // Sample reciter data
  const reciters = [
    { id: 1, name: 'Tejani Brothers', popularTrack: 'Babul Hawaij', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 2, name: 'Nadeem Sarwar', popularTrack: 'Janum Ya Hussain', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 3, name: 'Mir Hasan Mir', popularTrack: 'Abbas Tera Haq Hai', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 4, name: 'Irfan Haider', popularTrack: 'Ya Ali Madad', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
  ]

  // Sample trending data
  const trendingTracks = [
    { id: 1, title: 'Shia', subtitle: 'Shia', artist: 'Tejani Brothers', year: '2019', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 2, title: 'Our Blood Will Write Hussain (AS)', subtitle: 'Our Blood Will Write Hussain (AS)', artist: 'Tejani Brothers', year: '2013', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 3, title: 'Babul Hawaij', subtitle: 'Labbayk Ya Maula', artist: 'Tejani Brothers', year: '2017', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 4, title: 'Abbas Tera Haq Hai Zamana', subtitle: 'Abbas Tera Haq Hai', artist: 'Mir Hasan Mir', year: '2017', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 5, title: 'Janum Ya Hussain', subtitle: 'Janum Ya Hussain', artist: 'Nadeem Sarwar', year: '2019', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
    { id: 6, title: 'Maaf Karna', subtitle: 'Labbayk Ya Maula', artist: 'Tejani Brothers', year: '2017', image: "https://nawhas.com/_nuxt/img/default-reciter-avatar.5d27d9e.png" },
  ]

  const handleReciterPress = (reciterId: string | number) => {
    console.log(`Reciter ${reciterId} selected`)
  }

  const handleTrackPress = (trackId: string | number) => {
    console.log(`Track ${trackId} selected`)
  }

  return (
    <ScrollView>
      <YStack flex={1} padding="$4" space="$8" backgroundColor="#000">
        {/* Hero Section */}
        <HeroSection 
          title="Welcome to Nawhas"
          subtitle="Listen to the best recitations from around the world"
          onGetStarted={() => console.log('Get Started pressed')}
          onLearnMore={() => console.log('Learn More pressed')}
        />

        {/* Top Reciters Section */}
        <RecitersSection 
          reciters={reciters}
          onReciterPress={handleReciterPress}
        />

        {/* Trending Section */}
        <TrendingNawhasSection 
          tracks={trendingTracks}
          onTrackPress={handleTrackPress}
        />
      </YStack>
    </ScrollView>
  );
};