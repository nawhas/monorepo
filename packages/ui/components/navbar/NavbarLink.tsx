"use client"

import { Button } from "tamagui";

export interface NavbarLinkProps {
  href: string;
  label: string;
  active?: boolean;
}

export function NavbarLink({ href, label, active }: NavbarLinkProps) {
  return (
    <Button
      href={href}
      size="$3"
      backgroundColor="transparent"
      color="$color"
      fontWeight={active ? "bold" : "normal"}
      textProps={{
        color: active ? "$color" : "$colorPress",
        fontWeight: active ? "bold" : "normal"
      }}
      hoverStyle={{
        backgroundColor: "$backgroundHover",
      }}
      pressStyle={{
        backgroundColor: "$backgroundPress",
      }}
      animation="quick"
      borderRadius="$4"
    >
      {label}
    </Button>
  );
} 