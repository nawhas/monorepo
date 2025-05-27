"use client"

import { useState } from "react";
import { Button, H3, Text, useMedia, XStack, YStack, Sheet, PortalProvider } from "tamagui";

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
    <PortalProvider>
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
          <>
            <Button
              onPress={() => setDrawerOpen(true)}
              circular
              chromeless
              padding="$2"
            >
              <Text fontSize={18} fontWeight="bold">
                ≡
              </Text>
            </Button>

            {/* Mobile Menu Sheet */}
            <Sheet
              open={isDrawerOpen}
              onOpenChange={setDrawerOpen}
              snapPoints={[90]}
              dismissOnSnapToBottom
              position={0}
              modal
            >
              <Sheet.Overlay 
                animation="medium"
                enterStyle={{ opacity: 0 }}
                exitStyle={{ opacity: 0 }}
              />
              
              <Sheet.Handle />
              
              <Sheet.Frame
                backgroundColor="$background"
                padding="$4"
              >
                <YStack
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
              </Sheet.Frame>
            </Sheet>
          </>
        )}
      </XStack>
    </PortalProvider>
  );
}
