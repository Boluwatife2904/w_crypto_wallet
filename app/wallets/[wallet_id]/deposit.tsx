import { View, Text, TouchableOpacity, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { useSharedValue, withSpring, withRepeat, withTiming } from "react-native-reanimated";

import PageHeader from "@/components/layout/PageHeader";
import WalletPicker from "@/components/common/WalletPicker";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";
import Button from "@/components/ui/Button";
import Icon from "@/components/Icon";
import { useEffect } from "react";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

const WalletDepositScreen = () => {
  const height = useSharedValue(287);

  useEffect(() => {
    height.value = withRepeat(withTiming(0, { duration: 1000 }), 3, true);
  }, []);

  return (
    <>
      <PageHeader>
        <WalletPicker />
      </PageHeader>
      <CustomSafeAreaView>
        <View
          style={{ gap: 13 }}
          className="bg-white rounded-full py-[10px] px-[41px] border border-[#F0F2F5] mb-7 items-center justify-center flex-row"
        >
          <Icon iconName="bulk-information" />
          <Text className="font-inter_medium text-[14px] text-[#1D2739]">Assets can only be sent within same network</Text>
        </View>

        <View style={{ marginBottom: 44 }} className="mx-auto overflow-hidden">
          <Image
            source={require("@/assets/images/qrcode.png")}
            className="mx-auto block"
            style={{ height: 319, width: 305, objectFit: "fill" }}
            resizeMode="cover"
            resizeMethod="resize"
          />
          <AnimatedLinearGradient
            colors={["#E9E9E900", "#e9e9e9ba"]}
            style={{
              borderTopColor: "#684FCF",
              borderTopWidth: 5,
              position: "absolute",
              bottom: 32,
              height,
              width: 270,
              left: 18,
              borderBottomLeftRadius: 6,
              borderBottomRightRadius: 6,
            }}
            dither={false}

            // className="absolute h-[287px] rounded-b-lg top-0 w-[270px] mx-auto left-[18px] border-t-[5px] border-red "
          />
        </View>

        <View style={{ gap: 16, marginBottom: 138 }}>
          <Text className="text-center w-[244px] font-inter_medium text-[18px] mx-auto text-[#101928]">
            0x74d5313<Text className="text-[#98A2B3]">y8hd98snsgfsusnbvw67bs</Text>35da
          </Text>
          <TouchableOpacity
            activeOpacity={0.8}
            style={{ gap: 8 }}
            className="bg-white border w-auto mx-auto border-[#F0F2F5] rounded-full py-2 px-[14.5px] justify-center flex-row items-center"
          >
            <Icon iconName="copy" />
            <Text className="font-inter text-[14px] text-[#1D2739] -tracking-[0.3px]">Copy Address</Text>
          </TouchableOpacity>
        </View>

        <View className="mt-auto">
          <Button label="Share Address" variant="dark" icon="share" />
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default WalletDepositScreen;
