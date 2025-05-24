"use client"

import { Button, View, XStack, useMedia, Text } from "tamagui";
import { useState, useEffect } from "react";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavbarLink } from "./NavbarLink";
import { Container } from "../layout/Container";

export function Navbar() {
  const media = useMedia();
  const [isMounted, setIsMounted] = useState(false);
  
  // Only use media queries after component is mounted on the client
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Define fallback layout for server-rendering and initial client render
  // This helps prevent layout shifts during hydration
  const showMobileMenu = isMounted ? !media.gtSm : false;
  const showDesktopMenu = isMounted ? media.gtSm : true;
  
  return (
    <XStack
      backgroundColor="$background"
      borderBottomColor="$borderColor"
      borderBottomWidth={1}
      width="100%"
      justifyContent="center"
    >
      <Container>
        <XStack
          paddingVertical="$2"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <XStack space="$4" alignItems="center">
            <Logo />

            {/* Desktop navigation links - only show on medium screens and above */}
            {showDesktopMenu && (
              <XStack space="$4" alignItems="center">
                <NavbarLink href="/" label="Home" />
                <NavbarLink href="/browse" label="Browse" />
                <NavbarLink href="/library" label="Library" />
                <NavbarLink href="/about" label="About" />
              </XStack>
            )}
          </XStack>

          <XStack space="$4" alignItems="center">
            {/* Search icon can be shown on all screens */}
            <Button
              size="$3"
              circular
              icon={<SearchIcon />}
              transparent
            />

            {/* Profile icon can be shown on all screens */}
            <Button
              size="$3"
              circular
              icon={<UserIcon />}
              transparent
            />

            {/* Mobile menu button - only show on small screens */}
            {showMobileMenu && <MobileMenu />}
          </XStack>
        </XStack>
      </Container>
    </XStack>
  );
}

// We need to define these components as they are referenced in the code
function SearchIcon() {
  return <Text>🔍</Text>;
}

function UserIcon() {
  return <Text>👤</Text>;
}

export { NavbarLink } from "./NavbarLink";
export { Logo } from "./Logo"; 