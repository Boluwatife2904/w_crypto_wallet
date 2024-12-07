import { type PropsWithChildren } from "react";
import { View, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomSafeAreaView = (props: PropsWithChildren) => {
  const { children, ...rest } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      style={{ flex: 1, backgroundColor: "#F9FAFB", paddingBottom: bottom, paddingTop: 20, paddingHorizontal: 24 }}
      // contentContainerStyle={{ paddingBottom: bottom + 38, paddingTop: 20, paddingHorizontal: 24 }}
      // showsVerticalScrollIndicator={false}
      {...rest}
    >
      {children}
    </View>
  );
};

export default CustomSafeAreaView;
