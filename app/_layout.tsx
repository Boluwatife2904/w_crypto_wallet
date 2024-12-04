import { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";

import "../assets/css/global.css";

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

  return <Stack screenOptions={{ headerShown: false }} />;
}
