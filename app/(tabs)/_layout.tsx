import { Tabs } from "expo-router";
import NavigationBar from "@/components/layout/NavigationBar";

const TabsLayout = () => {
  return (
    <Tabs tabBar={(props) => <NavigationBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="home" options={{ animation: "shift", title: "Home" }} />
      <Tabs.Screen name="swap" options={{ animation: "shift", title: "Swap" }} />
      <Tabs.Screen name="history" options={{ animation: "shift", title: "History" }} />
      <Tabs.Screen name="others" options={{ animation: "shift", title: "Others" }} />
    </Tabs>
  );
};

export default TabsLayout;
