"use client"

import { ReactNode } from 'react'
import { styled, XStack } from 'tamagui'

export interface ContainerProps {
  children: ReactNode
  fullWidth?: boolean
}

// Create a styled component with a maximum width to contain content
export const Container = styled(XStack, {
  width: '100%',
  maxWidth: 1200,
  flex: 1,
  alignSelf: 'center',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingHorizontal: '$4',
  
  variants: {
    fullWidth: {
      true: {
        maxWidth: '100%',
      }
    }
  } as const
})

export function AppContainer({ children, fullWidth = false }: ContainerProps) {
  return (
    <Container fullWidth={fullWidth}>
      {children}
    </Container>
  )
} 