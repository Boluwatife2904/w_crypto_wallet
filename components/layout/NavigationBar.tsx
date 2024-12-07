import { type ReactElement } from "react";
import { View, TouchableOpacity } from "react-native";

import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import Home from "@/assets/icons/tab-home.svg";
import Swap from "@/assets/icons/tab-swap.svg";
import History from "@/assets/icons/tab-history.svg";
import Others from "@/assets/icons/tab-others.svg";

const ACTIVE_TAB_COLOR = "#684FCF";
const INACTIVE_TAB_COLOR = "#9E9E9E";

const iconMaps: Record<string, (isFocused: boolean) => ReactElement> = {
  home: (isFocused?: boolean) => <Home color={isFocused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} />,
  swap: (isFocused?: boolean) => <Swap color={isFocused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} />,
  history: (isFocused?: boolean) => <History color={isFocused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} />,
  others: (isFocused?: boolean) => <Others color={isFocused ? ACTIVE_TAB_COLOR : INACTIVE_TAB_COLOR} />,
};

const NavigationBar = ({ state, descriptors, navigation }: BottomTabBarProps) => {
  return (
    <View className="bg-white absolute left-[5%] bottom-[38px] w-full max-w-[90%] rounded-full border border-[#F0F2F5] mx-auto flex-row justify-between py-5 px-11">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {iconMaps[route.name](isFocused)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default NavigationBar;
