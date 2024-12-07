import { ChevronRightIcon } from "@/constants/icons";
import { View, Text, Image } from "react-native";

const ASSETS = [
  { image: require("@/assets/images/coins/btc.png"), name: "BTC", balance: "0.002 BTC", value: "$200.00", increase: "+10%" },
  { image: require("@/assets/images/coins/usdc.png"), name: "USDC", balance: "36 USDC", value: "$36.10", increase: "+0.001%" },
  { image: require("@/assets/images/coins/eth.png"), name: "ETH", balance: "0.00001 ETH", value: "$4.10", increase: "+0.001%" },
];

const WalletAssets = () => {
  return (
    <View style={{ gap: 20 }}>
      <View className="flex-row justify-between items-center">
        <Text className="text-[18px] font-inter_medium text-[#1D2739]">Assets</Text>
        <ChevronRightIcon height={24} width={24} color="#98A2B3" />
      </View>
      <View style={{ gap: 20 }} className="bg-white px-5 py-8">
        {ASSETS.map((asset, index) => (
          <View key={index} className={`${index !== ASSETS.length - 1 && "pb-5 border-b border-[#F0F2F5]"} flex-row justify-between`}>
            <View style={{ gap: 14 }} className="flex-row items-center">
              <Image source={asset.image} className="block size-11" />
              <View style={{ gap: 8 }}>
                <Text className="font-inter_medium text-[16px] text-[#1D2739s]">{asset.name}</Text>
                <Text className="font-inter text-[#98A2B3] text-[16px] -tracking-[0.3px]">{asset.balance}</Text>
              </View>
            </View>
            <View style={{ gap: 8 }}>
              <Text className="text-[#101928] text-right font-inter_medium text-[16px]">{asset.value}</Text>
              <Text className="font-inter text-right text-[#40B869] text-[16px]">{asset.increase}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default WalletAssets;
