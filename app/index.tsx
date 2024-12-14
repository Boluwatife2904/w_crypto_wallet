import { useRouter } from "expo-router";
import { ImageBackground, Text, View, Image, Modal, TouchableOpacity } from "react-native";
import { useState } from "react";
import Animated, { FadeInDown, FadeIn } from "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";
import { SheetManager } from "react-native-actions-sheet";

import Button from "@/components/ui/Button";
import WalletBalance from "@/components/common/WalletBalance";
import Icon from "@/components/Icon";

export default function Index() {
  const router = useRouter();

  const [modalVisible, setModalVisible] = useState(false);

  const steps = ["👋 Hello, wallet is initiating", "⚡️ Preparing secure networks", "🔗 Your wallet goes life in 3..2...1", "🪄 Final steps..."];

  const getStarted = async () => {
    const response = await SheetManager.show("add-wallet-sheet");
    if (response) {
      setTimeout(() => {
        setModalVisible(true);
      }, 10);
    }
  };

  return (
    <View className="flex-1">
      <ImageBackground source={require("@/assets/images/splash-bg.png")} resizeMode="cover" className="flex-1 items-end justify-center px-6">
        <SafeAreaView style={{ flex: 1, flexGrow: 1, justifyContent: "space-between" }} className="w-full pb-9">
          <View style={{ gap: 5 }} className="pt-5 flex-row items-center w-full">
            {[0, 1, 2].map((value) => (
              <View key={value} className="h-[5px] flex-1 bg-white rounded-[20px]" />
            ))}
          </View>
          <View style={{ gap: 10 }}>
            <Image source={require("@/assets/images/w-logo.png")} resizeMode="contain" resizeMethod="scale" className="block mx-auto" />
            <View style={{ gap: 52 }} className="w-full">
              <View>
                {["Crypto at", "the speed of", "light ⚡️"].map((value) => (
                  <Text key={value} className="text-white mx-3 text-[48px] leading-[60px] font-gelica_bold text-left tracking-[1px]">
                    {value}
                  </Text>
                ))}
              </View>
              <Button label="Get started" variant="white" onPress={getStarted} />
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>

      <Modal visible={modalVisible} animationType="slide" presentationStyle="pageSheet" onRequestClose={() => setModalVisible(false)}>
        <View className="pt-8 pb-10 px-7 flex-1 z-[10]">
          <View className="mb-[30px]">
            <TouchableOpacity className="p-2 -left-3 -top-3 w-fit absolute z-[1]" onPress={() => setModalVisible(false)}>
              <Icon iconName="multiply" height={24} width={24} />
            </TouchableOpacity>
            <Text className="font-inter_medium text-[18px] text-center">Creating a new wallet</Text>
          </View>

          <View style={{ gap: 43.05 }} className="pb-[117px] items-center justify-center">
            <Animated.Image
              entering={FadeIn.duration(1000)}
              source={require("@/assets/images/w-icon.png")}
              style={{ height: 49.26, width: 49.26 }}
              className="items-center justify-center"
            />
            {steps.map((step, index) => (
              <Animated.Text
                key={step}
                entering={FadeInDown.duration(450).delay(100 + index * 180)}
                className="w-fit mx-auto leading-5 text-center py-[16px] rounded-full px-[28.5px] bg-[#F4F2FF] font-inter_medium text-[14px] text-[#684FCF]"
              >
                {step}
              </Animated.Text>
            ))}
            <View
              style={{
                borderColor: "#684FCF",
                borderStyle: "dashed",
                borderWidth: 0.3,
                borderRadius: 1,
                width: 1,
                height: 500,
                position: "absolute",
                top: 40,
                zIndex: -1,
              }}
            />
          </View>

          <Animated.View
            entering={FadeInDown.duration(500).delay(600)}
            style={{ shadowRadius: 60, shadowOffset: { height: -1, width: -2 }, shadowOpacity: 0.15 }}
            className="border border-[#F0F2F5] rounded-xl p-4 bg-white"
          >
            <WalletBalance />
          </Animated.View>

          <Animated.View className="mt-auto" entering={FadeInDown.duration(500).delay(700)}>
            <Button
              label="View your wallet"
              onPress={() => {
                setModalVisible(false);
                setTimeout(() => {
                  router.push("/home");
                }, 0);
              }}
            />
          </Animated.View>
        </View>
      </Modal>
    </View>
  );
}
