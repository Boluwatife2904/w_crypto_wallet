import { View, Text, Image } from "react-native";

import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";

import { AddLineIcon, ChevronRightIcon, EmptyStateIcon, PencilEditIcon, SearchIcon, SettingsIcon } from "@/constants/icons";

const HomeScreen = () => {
  return (
    <>
      <PageHeader showBackButton={false} showOptionsButton={false} LeftContent={<SettingsIcon />} RightContent={<SearchIcon />} />
      <CustomSafeAreaView>
        <View style={{ gap: 16, marginBottom: 20 }}>
          <View className="flex-row items-center justify-between">
            <Text className="font-inter_medium text-[#1D2739] text-[18px] -tracking-[0.3px]">My wallets</Text>
            <View style={{ gap: 12 }} className="flex-row">
              <AddLineIcon />
              <PencilEditIcon />
            </View>
          </View>
          <View className="border border-[#F0F2F5] p-4 bg-white rounded-xl flex-row items-start justify-between">
            <View style={{ gap: 13 }} className="flex-row">
              <Image source={require("@/assets/images/w-avatar.png")} resizeMode="contain" height={45} width={45} />
              <View style={{ gap: 4 }}>
                <Text className="font-inter_medium text-[16px] -tracking-[0.3px] text-[#98A2B3]">0x74d5...35da</Text>
                <Text className="text-[16px] font-inter_medium text-[#1D2739] leading-7">
                  <Text className="text-[12px]">$</Text>
                  0.
                  <Text className="text-[#98A2B3]">00</Text>
                </Text>
              </View>
            </View>
            <View style={{ gap: 8 }} className="flex-row items-center">
              <Text className="text-[#98A2B3] text-[14px] font-inter_medium">+0%</Text>
              <ChevronRightIcon strokeWidth={0.5} stroke={"#40B869"} />
            </View>
          </View>
        </View>
        <View style={{ gap: 20 }} className="items-center justify-center">
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-[#1D2739] text-[18px] font-inter_medium">Recent activity</Text>
            <ChevronRightIcon stroke={"#98A2B3"} height={18} width={18} strokeWidth={0.5} />
          </View>
          <EmptyStateIcon />
          <Text className="text-center text-[#667185] -tracking-[0.3px] text-[16px] font-inter_medium">No transactions yet</Text>
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default HomeScreen;
