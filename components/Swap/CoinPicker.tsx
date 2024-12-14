import { View, Text, Modal, TouchableOpacity, TextInput, Image, ScrollView } from "react-native";
import { useState } from "react";

import Icon from "../Icon";

interface PickerProps {
  action: "source" | "destination";
}

const POPULAR_COINS = [
  { image: require("@/assets/images/coins/usdc.png"), name: "USDC Coin", verified: true },
  { image: require("@/assets/images/coins/dai.png"), name: "Dai stablecoin", verified: true },
  { image: require("@/assets/images/coins/bnb.png"), name: "BNB", verified: true },
  { image: require("@/assets/images/coins/shiba.png"), name: "SHIBA INU", verified: true },
  { image: require("@/assets/images/coins/xrp.png"), name: "Ripple", verified: true },
  { image: require("@/assets/images/coins/pepe.png"), name: "Pepe", verified: true },
];

const CoinPicker = (props: PickerProps) => {
  const { action = "source" } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const handleCurrencySelect = () => {
    setModalVisible(false);
  };

  return (
    <>
      <View style={{ gap: 9 }} className="px-5">
        <Text className="font-inter text-[#1D2739] text-[14px] leading-5">{action === "source" ? "Pay with" : "Receive"}</Text>
        <View className="flex-row justify-between">
          <View style={{ gap: 9 }}>
            <TouchableOpacity style={{ gap: 12 }} className="flex-row items-center" onPress={() => setModalVisible(true)}>
              <Image
                className="size-6"
                source={action === "source" ? require("@/assets/images/coins/eth.png") : require("@/assets/images/coins/usdc.png")}
              />
              <View style={{ gap: 8 }} className="flex-row items-center">
                <Text className="font-inter_medium text-[24px]">{action === "source" ? "ETH" : "USDC"}</Text>
                <Icon iconName="arrow-down" />
              </View>
            </TouchableOpacity>
            <Text className="font-inter_medium text-[14px] leading-5 text-[#98A2B3]">Balance: {action === "source" ? "0.0004747" : "0"}</Text>
          </View>
          <View style={{ gap: 9 }} className="max-w-[148px]">
            <TextInput
              placeholder="0.00"
              placeholderTextColor="#98A2B3"
              className="text-[24px] text-right font-inter_medium text-[#1D2739]"
              inputMode="decimal"
            />
            {action === "source" && <Text className="text-right text-[#684FCF] font-inter_medium text-[14px]">Max</Text>}
          </View>
        </View>
      </View>

      <Modal visible={modalVisible} presentationStyle="pageSheet" animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={{ gap: 20 }} className="px-[23px] py-8">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Icon iconName="multiply" height={24} width={24} />
            </TouchableOpacity>
            <Text className="font-inter_medium flex-1 text-[18px] text-center -tracking-[0.3px]">Select a token</Text>
          </View>
          <View>
            <View className="absolute flex top-2 left-4 z-[1]">
              <Icon iconName="search" color={"#5B7083"} />
            </View>
            <TextInput
              className="bg-[#F0F2F5] pl-[50px] py-[10px] pr-6 text-[16px] font-inter_medium -tracking-[0.3px] rounded-full"
              placeholder="Search"
              placeholderTextColor={"#5B7083"}
            />
          </View>
          <Text className="font-inter_medium text-[#98A2B3] text-[16px]">Popular</Text>
          <ScrollView contentContainerStyle={{ gap: 20 }}>
            {POPULAR_COINS.map((coin, index) => (
              <TouchableOpacity
                key={index}
                style={{ gap: 12 }}
                className={`flex-row items-center ${index !== POPULAR_COINS.length && "pb-5 border-b border-[#F0F2F5]"}`}
                onPress={handleCurrencySelect}
              >
                <Image source={coin.image} className="size-9" resizeMode="contain" />
                <View style={{ gap: 8 }} className="flex-row items-center">
                  <Text className="font-inter_medium text-[20px] text-[#1D2739]">{coin.name}</Text>
                  {coin.verified && <Icon iconName="verified-tick" />}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </Modal>
    </>
  );
};

export default CoinPicker;
