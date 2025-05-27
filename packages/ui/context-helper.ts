'use client'

import { createContext as reactCreateContext, useContext as reactUseContext } from 'react';

// This is a helper function to bridge Tamagui's createReactContext with React 19's createContext
export function createReactContext<T>(defaultValue: T) {
  const Context = reactCreateContext<T>(defaultValue);
  
  return {
    Provider: Context.Provider,
    Consumer: Context.Consumer,
    useContext: () => reactUseContext(Context)
  };
}

export default createReactContext; 