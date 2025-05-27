'use client'

import { useState } from 'react';
import { Button, H3, ScrollView, Sheet, Text, useMedia, XStack, YStack } from 'tamagui';
import { Menu, X } from '@tamagui/lucide-icons';

const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Browse', href: '/reciters' },
    { name: 'About', href: '/about' },
];

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    const [isDrawerOpen, setDrawerOpen] = useState(false);
    const media = useMedia();

    const closeDrawer = () => setDrawerOpen(false);

    return (
        <YStack flex={1} backgroundColor="$background">
            {/* Top Bar */}
            <XStack
                height={60}
                alignItems="center"
                justifyContent="space-between"
                paddingHorizontal="$4"
                borderBottomWidth={1}
                borderColor="$borderColor"
                backgroundColor="$background"
                zIndex={10}
            >
                {/* App Title/Logo */}
                <H3 color="$color" onPress={() => console.log('Navigate to Home')}>Nawhas.com</H3>

                {/* Desktop Navigation (shown on larger screens - md and up) */}
                {media.gtMd && (
                    <XStack space="$3" alignItems="center">
                        {navItems.map((item) => (
                            <Button
                                key={item.name}
                                onPress={() => {
                                    console.log(`Navigating to ${item.name}`);
                                    // Add navigation logic here, e.g., using React Router or your preferred navigation library
                                }}
                                chromeless // Makes button look more like a link
                                paddingHorizontal="$3"
                                paddingVertical="$2"
                            >
                                <Text color="$color" fontSize="$4"> {item.name}</Text>
                            </Button>
                        ))}
                    </XStack>
                )}

                {/* Menu Button (shown on smaller screens - sm and below) */}
                {media.ltMd && (
                    <Button
                        icon={isDrawerOpen ? X : Menu}
                        onPress={() => setDrawerOpen(!isDrawerOpen)}
                        circular
                        chromeless
                        padding="$2"
                    />
                )}
            </XStack>
            {/* Main Content Area */}
            <ScrollView
                flex={1}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingVertical: '$4',
                    paddingHorizontal: '$2',
                }}
                backgroundColor="$background"
            >
                <YStack
                    width="100%"
                    maxWidth={1200}
                    backgroundColor="$background"
                >
                    {children}
                </YStack>
            </ScrollView>

            {/* Navigation Drawer (Sheet) - only for smaller screens */}
            {media.ltMd && (
                <Sheet
                    forceRemoveScrollEnabled={isDrawerOpen}
                    modal
                    open={isDrawerOpen}
                    onOpenChange={setDrawerOpen}
                    snapPoints={[85]}
                    snapPointsMode="percent"
                    dismissOnSnapToBottom
                    zIndex={100_000}
                    animation="medium"
                >
                    <Sheet.Overlay
                        animation="lazy"
                        backgroundColor="$shadow6"
                        enterStyle={{ opacity: 0 }}
                        exitStyle={{ opacity: 0 }}
                    />
                    <Sheet.Handle />
                    <Sheet.Frame
                        padding="$4"
                        justifyContent="flex-start"
                        alignItems="stretch"
                        space="$3"
                        backgroundColor="$background"
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
                            icon={X}
                            onPress={closeDrawer}
                            marginTop="$5" // Push close button down
                            theme="active" // A more prominent theme for close
                            aria-label="Close navigation drawer"
                        >
                            Close
                        </Button>
                    </Sheet.Frame>
                </Sheet>
            )}
        </YStack>
    );
}