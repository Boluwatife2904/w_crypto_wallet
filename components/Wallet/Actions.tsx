import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import Icon from "../Icon";

const ACTIONS = [
  { name: "Deposit", icon: <Icon iconName="scan" />, bodyClasses: "bg-[#684FCF] flex-[50%]", textClasses: "text-white", showName: true },
  { name: "Send", icon: <Icon iconName="send" />, bodyClasses: "flex-[25%] bg-white border border-[#F0F2F5]", showName: false },
  { name: "Swap", icon: <Icon iconName="swap" />, bodyClasses: "flex-[25%] bg-white border border-[#F0F2F5]", showName: false },
];

const WalletActions = () => {
  const router = useRouter();

  return (
    <View style={{ gap: 14 }} className="flex-row">
      {ACTIONS.map((action, index) => (
        <TouchableOpacity
          style={{ gap: 8 }}
          key={index}
          activeOpacity={0.7}
          className={`${action.bodyClasses} rounded-xl flex-row items-center justify-center py-[14px]`}
          onPress={() => router.push("/wallets/1/deposit")}
        >
          {action.icon}
          {action.showName && <Text className={`text-[16px] font-inter_semibold ${action.textClasses}`}>{action.name}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WalletActions;
