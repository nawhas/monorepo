"use client"

import { Button, View, YStack, Text, XStack, Overlay, Portal, PortalProvider } from "tamagui";
import { useState, useEffect } from "react";
import { NavbarLink } from "./NavbarLink";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  
  // Only render modal component after mounting on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      <Button
        size="$3"
        circular
        icon={<MenuIcon />}
        transparent
        onPress={() => isMounted && setOpen(true)}
        disabled={!isMounted}
      />

      {isMounted && (
        <PortalProvider>
          {open && (
            <Portal>
              <Overlay
                animation="quick"
                opacity={0.5}
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
                onPress={() => setOpen(false)}
              />
              <YStack
                position="absolute"
                animation="quick"
                enterStyle={{ y: 200, opacity: 0 }}
                exitStyle={{ y: 200, opacity: 0 }}
                y={0}
                opacity={1}
                bottom={0}
                left={0}
                right={0}
                backgroundColor="$background"
                padding="$4"
                borderTopLeftRadius="$4"
                borderTopRightRadius="$4"
                elevation={10}
              >
                <XStack justifyContent="flex-end" marginBottom="$4">
                  <Button 
                    size="$2" 
                    circular 
                    icon={<CloseIcon />} 
                    onPress={() => setOpen(false)} 
                    transparent 
                  />
                </XStack>
                <YStack space="$4">
                  <NavbarLink href="/" label="Home" />
                  <NavbarLink href="/browse" label="Browse" />
                  <NavbarLink href="/library" label="Library" />
                  <NavbarLink href="/about" label="About" />
                </YStack>
              </YStack>
            </Portal>
          )}
        </PortalProvider>
      )}
    </>
  );
}

function MenuIcon() {
  return (
    <View width={24} height={24} justifyContent="center" alignItems="center">
      <Text fontSize={16} color="$color">☰</Text>
    </View>
  );
}

function CloseIcon() {
  return (
    <View width={24} height={24} justifyContent="center" alignItems="center">
      <Text fontSize={16} color="$color">✕</Text>
    </View>
  );
} 