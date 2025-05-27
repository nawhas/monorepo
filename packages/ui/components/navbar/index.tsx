"use client"

import { useState } from "react";
import { Button, H3, Text, useMedia, XStack, YStack, Sheet, PortalProvider, isWeb, YStackProps } from "tamagui";

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'Browse', href: '/reciters' },
  { name: 'Library', href: '/library' },
  { name: 'About', href: '/about' },
];

// A simpler mobile menu for React Native that doesn't use Sheet
function NativeMobileMenu({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  if (!isOpen) return null;
  
  return (
    <YStack
      position="absolute"
      top={60}
      left={0}
      right={0}
      bottom={0}
      backgroundColor="$background"
      padding="$4"
      zIndex={1000}
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
              onClose();
              // Add navigation logic here
            }}
            theme="alt1"
            size="$4"
            justifyContent="flex-start"
            paddingLeft="$2"
          >
            {item.name}
          </Button>
        ))}
        <Button
          onPress={onClose}
          marginTop="$5"
          theme="active"
          aria-label="Close navigation drawer"
        >
          <Text marginRight="$2">×</Text>
          Close
        </Button>
      </YStack>
    </YStack>
  );
}

export function Navbar(props: YStackProps) {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const closeDrawer = () => setDrawerOpen(false);
  const media = useMedia();
  const isMobile = media.ltMd;
  const isNative = !isWeb;

  return (
    <PortalProvider shouldAddRootHost>
      <XStack
        height={60}
        alignItems="center"
        justifyContent="space-between"
        paddingHorizontal="$4"
        borderBottomWidth={1}
        borderBottomColor="$borderColor"
        backgroundColor="$background"
        zIndex={10}
        {...props}
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

            {/* Use platform-specific implementation */}
            {isWeb ? (
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
                        theme="alt1"
                        size="$4"
                        justifyContent="flex-start"
                        paddingLeft="$2"
                      >
                        {item.name}
                      </Button>
                    ))}
                    <Button
                      onPress={closeDrawer}
                      marginTop="$5"
                      theme="active"
                      aria-label="Close navigation drawer"
                    >
                      <Text marginRight="$2">×</Text>
                      Close
                    </Button>
                  </YStack>
                </Sheet.Frame>
              </Sheet>
            ) : (
              <NativeMobileMenu isOpen={isDrawerOpen} onClose={closeDrawer} />
            )}
          </>
        )}
      </XStack>
    </PortalProvider>
  );
}
