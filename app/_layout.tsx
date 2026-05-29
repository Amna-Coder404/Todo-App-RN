import { ConvexProvider, ConvexReactClient } from "convex/react";

import { ThemeProvider } from "@/hooks/useTheme";
import { Stack } from "expo-router";

const convex = new ConvexReactClient(process.env.EXPO_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function RootLayout() {
  return (
    <ConvexProvider client={convex}>
      <ThemeProvider>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{
            title: "Home"
          }} />
        </Stack>
      </ThemeProvider>
    </ConvexProvider>
  );
}
