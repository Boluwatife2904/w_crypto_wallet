import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { ReactNode, type PropsWithChildren } from "react";

import { ArrowLeftIcon, DotsVIcon } from "@/constants/icons";

interface HeaderProps extends PropsWithChildren {
  title?: string;
  showBackButton?: boolean;
  showOptionsButton?: boolean;
  LeftContent?: ReactNode;
  RightContent?: ReactNode;
}

const PageHeader = (props: HeaderProps) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();
  const { title, showBackButton = true, showOptionsButton = true, children, LeftContent, RightContent } = props;

  return (
    <View
      style={{ paddingTop: insets.top + 20, paddingHorizontal: 24, paddingBottom: 20, gap: 10 }}
      className="bg-white px-6 flex-row justify-between items-center border-b border-[#F0F2F5]"
    >
      <View>
        {showBackButton && (
          <TouchableOpacity onPress={router.back}>
            <ArrowLeftIcon />
          </TouchableOpacity>
        )}
        {LeftContent}
      </View>
      <View>
        {Boolean(title) && <Text className="text-[#1D2739] font-inter_medium text-[18px] -tracking-[0.3px]">{title}</Text>}
        {children}
      </View>
      <View>
        {showOptionsButton && (
          <TouchableOpacity>
            <DotsVIcon />
          </TouchableOpacity>
        )}
        {RightContent}
      </View>
    </View>
  );
};

export default PageHeader;
