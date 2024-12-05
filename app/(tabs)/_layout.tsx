import { Tabs } from "expo-router";
import NavigationBar from "@/components/layout/NavigationBar";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <NavigationBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ animation: "fade", title: "Home" }} />
      <Tabs.Screen name="swap" options={{ animation: "fade", title: "Swap" }} />
      <Tabs.Screen name="history" options={{ animation: "fade", title: "History" }} />
      <Tabs.Screen name="others" options={{ animation: "fade", title: "Others" }} />
    </Tabs>
  );
};

export default TabsLayout;
