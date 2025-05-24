'use client'

import '@tamagui/core/reset.css'
// import '@tamagui/font-inter/css/400.css'
// import '@tamagui/font-inter/css/700.css'
import '@tamagui/polyfill-dev'

import { ReactNode, useEffect, useState } from 'react'
// @ts-ignore
import { StyleSheet } from 'react-native'
import { useServerInsertedHTML } from 'next/navigation'
import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { TamaguiProvider } from 'tamagui'
import tamaguiConfig from '../tamagui.config'

interface NextTamaguiProviderProps {
  children: ReactNode;
  defaultTheme?: string;
}

export const NextTamaguiProvider = ({ 
  children, 
  defaultTheme = 'dark' 
}: NextTamaguiProviderProps) => {
  const [theme, setTheme] = useRootTheme()
  const [isMounted, setIsMounted] = useState(false)

  // Ensure theme application only happens on client
  useEffect(() => {
    setIsMounted(true)
  }, [])

  useServerInsertedHTML(() => {
    // @ts-ignore
    const rnwStyle = StyleSheet.getSheet()
    return (
      <>
        <style
          dangerouslySetInnerHTML={{ __html: rnwStyle.textContent }}
          id={rnwStyle.id}
        />
        <style
          dangerouslySetInnerHTML={{
            __html: tamaguiConfig.getCSS({
              // if you are using "outputCSS" option, you should use this "exclude"
              // if not, then you can leave the option out
              exclude: process.env.NODE_ENV === 'production' ? 'design-system' : null,
            }),
          }}
        />
      </>
    )
  })

  return (
    <NextThemeProvider
      skipNextHead
      onChangeTheme={(next) => {
        if (isMounted) {
          setTheme(next as any)
        }
      }}
      defaultTheme={defaultTheme}
    >
      <TamaguiProvider
        config={tamaguiConfig}
        defaultTheme={defaultTheme}
        disableInjectCSS
        disableRootThemeClass={!isMounted}
      >
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}