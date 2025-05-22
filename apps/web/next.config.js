import { withTamagui } from '@tamagui/next-plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
    transpilePackages: [
        'react-native-web',
        'tamagui',
        '@tamagui/config',
        '@tamagui/next-theme',
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
