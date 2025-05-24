"use client"

import { Text, XStack, YStack, useMedia } from "tamagui";
import { useState, useEffect } from "react";

export function Logo() {
  const media = useMedia();
  const [isMounted, setIsMounted] = useState(false);
  
  // Only use media queries after component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // For server-side rendering, always render the full logo to ensure consistency
  // Only after mounting on client, dynamically adjust based on screen size
  
  return (
    <XStack alignItems="center" space="$2">
      <YStack
        width={40}
        height={40}
        borderRadius={20}
        backgroundColor="$blue10"
        justifyContent="center"
        alignItems="center"
      >
        <Text color="white" fontWeight="bold" fontSize={20}>
          N
        </Text>
      </YStack>
      
      {/* 
        Instead of conditional opacity, we use conditional visibility
        The element is always rendered with the same opacity on both server and client
        but can be hidden with display:none after mounting
      */}
      <Text 
        fontWeight="bold" 
        fontSize="$5"
        fontFamily="$heading"
        color="$color"
        display={isMounted && !media.gtSm ? "none" : "flex"}
      >
        Nawhas.com
      </Text>
    </XStack>
  );
} 