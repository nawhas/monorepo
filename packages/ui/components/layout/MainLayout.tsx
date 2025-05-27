'use client'

import { ScrollView, YStack } from 'tamagui';
import { Navbar } from '../navbar';

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <YStack flex={1} backgroundColor="$background">
            <Navbar />
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
        </YStack>
    );
}