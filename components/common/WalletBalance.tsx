import { View, Text, Image } from "react-native";

const WalletBalance = () => {
  return (
    <View style={{ gap: 13 }} className="flex-row">
      <Image source={require("@/assets/images/w-avatar.png")} resizeMode="contain" className="size-[45px] block" />
      <View style={{ gap: 4 }}>
        <Text className="font-inter_medium text-[16px] -tracking-[0.3px] text-[#98A2B3]">0x74d5...35da</Text>
        <Text className="text-[20px] font-inter_medium text-[#1D2739] leading-7">
          <Text className="text-[12px]">$</Text>
          0.
          <Text className="text-[#98A2B3]">00</Text>
        </Text>
      </View>
    </View>
  );
};

export default WalletBalance;
