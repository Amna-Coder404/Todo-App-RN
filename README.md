# Todo App RN

A modern React Native todo application with Expo and Convex backend.

## Features

- ✅ Create, read, update, delete todos
- 🎨 Dark/light theme toggle
- 📊 Progress stats and performance tracking
- 📱 Cross-platform (iOS, Android, Web)
- ⚡ Real-time sync with Convex

## Tech Stack

- **Frontend:** React Native, Expo Router, TypeScript
- **Backend:** Convex (serverless backend)
- **UI:** expo-linear-gradient, Ionicons
- **Theme:** Custom useTheme hook

## Quick Start

```bash
# Install dependencies
npm install

# Set environment variable
echo "EXPO_PUBLIC_CONVEX_URL=YOUR_CONVEX_URL" > .env.local

# Start dev server
npm start

# Run on platform
npm run ios      # iOS simulator
npm run android  # Android emulator
npm run web      # Web browser
