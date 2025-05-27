"use client"

import { useState } from "react";
import { Button, H3, Text, useMedia, XStack, YStack, Popover } from "tamagui";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Browse', href: '/reciters' },
  { name: 'Library', href: '/library' },
  { name: 'About', href: '/about' },
];

export function Navbar() {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  const media = useMedia();
  const isMobile = media.ltMd;

  return (
    <XStack
      height={60}
      alignItems="center"
      justifyContent="space-between"
      paddingHorizontal="$4"
      borderBottomWidth={1}
      borderBottomColor="$borderColor"
      backgroundColor="$background"
      zIndex={10}
    >
      {isMobile && (
        <H3 color="$color" onPress={() => console.log('Navigate to Home')}>N</H3>
      )}
      {!isMobile && (
        <H3 color="$color" onPress={() => console.log('Navigate to Home')}>Nawhas.com</H3>
      )}
      {/* Desktop Navigation */}
      {!isMobile && (
        <XStack space="$3" alignItems="center">
          {navItems.map((item) => (
            <Button
              key={item.name}
              onPress={() => {
                console.log(`Navigating to ${item.name}`);
              }}
              chromeless
              paddingHorizontal="$3"
              paddingVertical="$2"
            >
              <Text color="$color" fontSize="$4"> {item.name}</Text>
            </Button>
          ))}
        </XStack>
      )}

      {/* Mobile Navigation */}
      {isMobile && (
        <Popover
          open={isDrawerOpen}
          onOpenChange={setDrawerOpen}
          placement="bottom-end"
        >
          <Popover.Trigger asChild>
            <Button
              onPress={() => setDrawerOpen(!isDrawerOpen)}
              circular
              chromeless
              padding="$2"
            >
              <Text fontSize={18} fontWeight="bold">
                {isDrawerOpen ? "×" : "≡"}
              </Text>
            </Button>
          </Popover.Trigger>

          <Popover.Content
            borderWidth={1}
            borderColor="$borderColor"
            enterStyle={{ y: -10, opacity: 0 }}
            exitStyle={{ y: -10, opacity: 0 }}
            animation="quick"
            padding="$4"
            backgroundColor="$background"
          >
            <YStack
              width={250}
              justifyContent="flex-start"
              alignItems="stretch"
              space="$3"
            >
              <H3 textAlign="center" marginBottom="$4">
                Navigation
              </H3>
              {navItems.map((item) => (
                <Button
                  key={item.name}
                  onPress={() => {
                    console.log(`Navigating to ${item.name} from drawer`);
                    closeDrawer();
                    // Add navigation logic here
                  }}
                  theme="alt1" // A slightly different theme for drawer buttons
                  size="$4"
                  justifyContent="flex-start"
                  paddingLeft="$2" // Align text to the left
                >
                  {item.name}
                </Button>
              ))}
              <Button
                onPress={closeDrawer}
                marginTop="$5" // Push close button down
                theme="active" // A more prominent theme for close
                aria-label="Close navigation drawer"
              >
                <Text marginRight="$2">×</Text>
                Close
              </Button>
            </YStack>
          </Popover.Content>
        </Popover>
      )}
    </XStack>
  );
}
