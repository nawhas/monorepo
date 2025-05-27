import { withTamagui } from '@tamagui/next-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        'react-native',
        'react-native-web',
        'react-native-svg',
        'tamagui',
        '@tamagui/config',
        '@tamagui/next-theme',
        '@tamagui/lucide-icons',
        '@repo/ui',
    ],
    typescript: {
        ignoreBuildErrors: true,
    }
};

const tamaguiPlugin = withTamagui({
  config: './tamagui.config.ts',
  components: ['tamagui', '@repo/ui'],
  appDir: true,
})

export default tamaguiPlugin(nextConfig)
