# Nawhas Monorepo

This is a monorepo for the Nawhas platform.

## App Structure

This Turborepo includes the following packages/apps:

### Apps and Packages

- `apps/web`: Main Next.js web application
- `apps/mobile`: React Native mobile application (planned)
- `packages/ui`: Shared UI component library used across all applications
- `packages/api`: API client and types (planned)
- `packages/db`: Database schema and client (planned)
- `packages/eslint-config`: ESLint configurations
- `packages/typescript-config`: TypeScript configurations

### UI Component Library

Our UI component library is built with Tamagui and includes:

- **Reciter Components**
  - `ReciterCard`: Card display for individual reciters
  - `RecitersSection`: Section displaying multiple reciter cards
  
- **Track Components**
  - `TrackCard`: Card display for individual tracks/recitations
  - `TrendingNawhasSection`: Horizontal scrollable section for trending tracks
  
- **Layout Components**
  - `HeroSection`: Hero banner for the homepage
  - Various layout utilities and screens

## Development

To develop all apps and packages, run the following command:

```
pnpm dev
```

### Build

To build all apps and packages, run the following command:

```
pnpm build
```

## Tech Stack

- **Frontend**: React, Next.js
- **Mobile**: React Native/Expo
- **UI**: Tamagui
- **Tooling**: TypeScript, ESLint, Prettier
- **Monorepo Management**: Turborepo, pnpm
