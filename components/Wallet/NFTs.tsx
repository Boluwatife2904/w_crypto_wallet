import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { BlurView } from "expo-blur";
import { ArrowRightIcon } from "@/constants/icons";

const NFTS = [
  { name: "Blue heads", code: "#122", image: require("@/assets/images/nfts/1.jpg") },
  { name: "Cute eyes", code: "#01", image: require("@/assets/images/nfts/2.jpg") },
  { name: "Turnips", code: "#65", image: require("@/assets/images/nfts/3.jpg") },
  { name: "Turnips", code: "#44", image: require("@/assets/images/nfts/4.jpg") },
  { name: "Turnips", code: "#12", image: require("@/assets/images/nfts/5.jpg") },
  { name: "Turnips", code: "#29", image: require("@/assets/images/nfts/6.jpg") },
];

const WalletNFTs = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 48 }}>
      <View style={{ gap: 24 }} className="flex-row flex-wrap">
        {NFTS.map((nft, index) => (
          <TouchableOpacity key={index} activeOpacity={0.7} className="flex-[1_1_46%] rounded-xl overflow-hidden">
            <Image source={nft.image} className="block h-[200px] w-full object-cover object-center" />
            <BlurView
              style={{ borderRadius: 12, overflow: "hidden" }}
              tint="light"
              intensity={40}
              className="flex-row items-center justify-between p-1.5 pl-[11px] absolute bottom-[11px] left-[10px] w-full max-w-[90%]"
            >
              <View style={{ gap: 8 }} className="flex-row items-center">
                <Text className="text-white font-dmsans_medium text-[12px] leading-7">{nft.name}</Text>
                <Text className="text-white font-dmsans_medium text-[12px] leading-7">{nft.code}</Text>
              </View>
              <View className="bg-[#684FCF] p-2 rounded-md">
                <ArrowRightIcon />
              </View>
            </BlurView>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

export default WalletNFTs;
