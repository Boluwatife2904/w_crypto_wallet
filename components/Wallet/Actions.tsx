import { View, Text, TouchableOpacity } from "react-native";
import { ScanIcon, SendIcon, SwapIcon } from "@/constants/icons";

const ACTIONS = [
  { name: "Deposit", icon: <ScanIcon />, bodyClasses: "bg-[#684FCF] flex-[50%]", textClasses: "text-white", showName: true },
  { name: "Send", icon: <SendIcon />, bodyClasses: "flex-[25%] bg-white border border-[#F0F2F5]", showName: false },
  { name: "Swap", icon: <SwapIcon />, bodyClasses: "flex-[25%] bg-white border border-[#F0F2F5]", showName: false },
];

const WalletActions = () => {
  return (
    <View style={{ gap: 14 }} className="flex-row">
      {ACTIONS.map((action, index) => (
        <TouchableOpacity
          style={{ gap: 8 }}
          key={index}
          activeOpacity={0.7}
          className={`${action.bodyClasses} rounded-xl flex-row items-center justify-center py-[14px]`}
        >
          {action.icon}
          {action.showName && <Text className={`text-[16px] font-inter_semibold ${action.textClasses}`}>{action.name}</Text>}
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default WalletActions;
