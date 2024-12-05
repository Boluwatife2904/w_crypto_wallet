import { useEffect } from "react";
import { Stack } from "expo-router";
import { SheetProvider } from "react-native-actions-sheet";

import * as SplashScreen from "expo-splash-screen";

import { useFonts } from "expo-font";

import "@/components/sheets";
import "@/assets/css/global.css";
import { StatusBar } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded] = useFonts({
    Inter: require("../assets/fonts/InterTight-Regular.ttf"),
    InterMedium: require("../assets/fonts/InterTight-Medium.ttf"),
    InterSemibold: require("../assets/fonts/InterTight-Semibold.ttf"),
    InterBold: require("../assets/fonts/InterTight-Semibold.ttf"),
    GelicaBold: require("../assets/fonts/Gelica-Bold.otf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SheetProvider context="global">
      <StatusBar barStyle={"dark-content"} translucent networkActivityIndicatorVisible />
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="(tabs)" />
      </Stack>
    </SheetProvider>
  );
}
