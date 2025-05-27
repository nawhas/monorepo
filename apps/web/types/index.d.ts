/**
 * React Native Web declarations for a Next.js project
 */

// Automatically use react-native-web types when importing from react-native
declare module 'react-native' {
  export * from 'react-native-web';
}

declare module 'react-native-svg' {
  export * from 'react-native-svg-web';
}

// Support for asset imports
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.svg'; 