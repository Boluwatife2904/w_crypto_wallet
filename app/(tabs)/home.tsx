import { View, Text, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";

import Icon from "@/components/Icon";
import WalletBalance from "@/components/common/WalletBalance";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <>
      <PageHeader
        showBackButton={false}
        showOptionsButton={false}
        LeftContent={<Icon iconName="settings" />}
        RightContent={<Icon iconName="search" color="black" />}
      />
      <CustomSafeAreaView>
        <View style={{ gap: 16, marginBottom: 20 }}>
          <View className="flex-row items-center justify-between">
            <Text className="font-inter_medium text-[#1D2739] text-[18px] -tracking-[0.3px]">My wallets</Text>
            <View style={{ gap: 12 }} className="flex-row">
              <Icon iconName="add-line" />
              <Icon iconName="pencil-edit" />
            </View>
          </View>
          <TouchableOpacity
            className="border border-[#F0F2F5] p-4 bg-white rounded-xl flex-row items-start justify-between"
            activeOpacity={0.7}
            onPress={() => router.push("/wallets/1")}
          >
            <WalletBalance />
            <View style={{ gap: 8 }} className="flex-row items-center">
              <Text className="text-[#98A2B3] text-[14px] font-inter_medium">+0%</Text>
              <Icon iconName="chevron-right" strokeWidth={0.5} stroke={"#40B869"} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ gap: 20 }} className="items-center justify-center">
          <View className="w-full flex-row items-end justify-between">
            <Text className="text-[#1D2739] text-[18px] font-inter_medium">Recent activity</Text>
            <Icon iconName="chevron-right" stroke={"#98A2B3"} height={18} width={18} strokeWidth={0.5} />
          </View>
          <Icon iconName="empty" />
          <Text className="text-center text-[#667185] -tracking-[0.3px] text-[16px] font-inter_medium">No transactions yet</Text>
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default HomeScreen;
