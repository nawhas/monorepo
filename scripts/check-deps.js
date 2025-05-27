#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Packages to check
const PACKAGES_TO_CHECK = [
  'tamagui',
  '@tamagui/animations-css',
  '@tamagui/core',
  '@tamagui/lucide-icons',
  '@tamagui/shorthands',
  '@tamagui/themes',
  '@tamagui/config',
  '@tamagui/next-plugin',
  '@tamagui/babel-plugin',
  'react',
  'react-dom',
  'react-native-web',
  'next'
];

// Directories to check
const DIRS_TO_CHECK = [
  'packages/ui',
  'apps/web',
  'apps/mobile',
];

// Get the package.json content
function getPackageJson(dir) {
  const pkgPath = path.join(process.cwd(), dir, 'package.json');
  if (fs.existsSync(pkgPath)) {
    return JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
  }
  return null;
}

// Main function
function main() {
  console.log('Checking dependency versions across packages...\n');
  
  const packages = {};
  
  // Collect all versions
  DIRS_TO_CHECK.forEach(dir => {
    const pkg = getPackageJson(dir);
    if (!pkg) {
      console.log(`Warning: No package.json found in ${dir}`);
      return;
    }
    
    const deps = { ...pkg.dependencies, ...pkg.devDependencies };
    
    PACKAGES_TO_CHECK.forEach(packageName => {
      if (deps[packageName]) {
        if (!packages[packageName]) {
          packages[packageName] = {};
        }
        packages[packageName][dir] = deps[packageName];
      }
    });
  });
  
  // Check for inconsistencies
  let hasInconsistencies = false;
  
  Object.keys(packages).forEach(packageName => {
    const versions = Object.values(packages[packageName]);
    const uniqueVersions = [...new Set(versions)];
    
    if (uniqueVersions.length > 1) {
      hasInconsistencies = true;
      console.log(`Inconsistent versions for ${packageName}:`);
      
      Object.entries(packages[packageName]).forEach(([dir, version]) => {
        console.log(`  ${dir}: ${version}`);
      });
      
      console.log('');
    }
  });
  
  if (!hasInconsistencies) {
    console.log('All checked dependencies have consistent versions!');
  } else {
    console.log('Consider using pnpm overrides in the root package.json to enforce consistent versions.');
    process.exit(1);
  }
}

main(); 