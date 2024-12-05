import { type PropsWithChildren } from "react";
import { ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const CustomSafeAreaView = (props: PropsWithChildren) => {
  const { children, ...rest } = props;
  const { bottom } = useSafeAreaInsets();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9FAFB", paddingTop: 20, paddingBottom: bottom + 20, paddingHorizontal: 24 }} {...rest}>
      {children}
    </ScrollView>
  );
};

export default CustomSafeAreaView;
