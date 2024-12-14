import { View, Text, TouchableOpacity } from "react-native";

import Icon from "../Icon";

const WalletPicker = () => {
  return (
    <TouchableOpacity style={{ gap: 2 }}>
      <Text className="text-[#667185] text-center font-inter_medium text-[14px]">0x74d5...35da</Text>
      <View style={{ gap: 6 }} className="flex-row items-center justify-center">
        <Text className="text-center text-[12px] font-inter text-[#667185]">All networks</Text>
        <Icon iconName="chevron-down" />
      </View>
    </TouchableOpacity>
  );
};

export default WalletPicker;
