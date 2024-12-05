import { View, Text } from "react-native";

import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";
import SwapCoinPicker from "@/components/Swap/CoinPicker";

import { SwitchVerticalIcon } from "@/constants/icons";

const SwapScreen = () => {
  return (
    <>
      <PageHeader title="Swap" />
      <CustomSafeAreaView>
        <View style={{ gap: 12 }} className="border rounded-2xl border-[#F0F2F5] bg-white py-6">
          <SwapCoinPicker action="source" />

          <View className="">
            <View className="size-11 bg-white items-center justify-center border border-[#F0F2F5] rounded-full mx-auto z-[1]">
              <SwitchVerticalIcon />
            </View>
            <View className="border-t border-[#F0F2F5] -top-[20px]" />
          </View>

          <SwapCoinPicker action="destination" />
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default SwapScreen;
