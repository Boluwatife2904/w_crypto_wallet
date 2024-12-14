import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";

import WalletAssets from "./Assets";
import Icon from "../Icon";

const filters = ["1H", "24H", "1W", "1M", "6M", "1Y", "All"];

const WalletTokens = () => {
  const [activeFilter, setActiveFilter] = useState("1H");

  return (
    <ScrollView contentContainerStyle={{ gap: 31, flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <View className="bg-white px-4 pt-3 pb-6 border border-[#F0F2F5] rounded-3xl">
        <View style={{ gap: 4 }} className="mb-[25px] pt-[14px] pl-[15px]">
          <Text className="font-inter_semibold text-[24px] tracking-[.8px] text-[#101928]">
            <Text className="text-[12px]">$</Text>274.<Text className="text-[#98A2B3]">00</Text>
          </Text>
          <Text className="text-[14px] font-inter_medium -tracking-[0.3px] text-[#40B869]">+10% ($2) Today</Text>
        </View>
        <View className="mb-10">
          <Icon iconName="graph" />
        </View>
        <ScrollView contentContainerStyle={{ flexGrow: 1, gap: 16 }} horizontal showsHorizontalScrollIndicator={false}>
          {filters.map((filter, index) => (
            <TouchableOpacity
              key={index}
              className={`${filter === activeFilter ? "bg-[#ECF4FF] border-[#0063F5]" : "bg-[#F8F9FA] border-[#DFE2E4]"} flex-1 border rounded-full py-1.5 pl-[10px] pr-[7px]`}
              onPress={() => setActiveFilter(filter)}
            >
              <Text className={`${filter === activeFilter ? "text-[#0063F5]" : "text-[#6C757D]"} text-center font-inter text-[12px]`}>{filter}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <WalletAssets />
    </ScrollView>
  );
};

export default WalletTokens;
