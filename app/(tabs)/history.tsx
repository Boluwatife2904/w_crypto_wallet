import { View, Text, Image } from "react-native";

import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";

const HistoryScreen = () => {
  const transactions = [
    {
      title: "Send",
      address: "0x74d5...35da",
      amount: "-200 USDT",
      charge: "$200",
      type: "outflow",
      image: require("@/assets/images/coins/usdt.png"),
    },
    {
      title: "Receive",
      address: "0x74d5...35da",
      amount: "+200 USDC",
      charge: "$200",
      type: "inflow",
      image: require("@/assets/images/coins/usdc.png"),
    },
    {
      title: "Trade",
      address: "0x74d5...35da",
      amount: "+0.00087 ETH",
      charge: "-0.0002 BTC",
      type: "inflow",
      image: require("@/assets/images/coins/swap.png"),
    },
  ];

  return (
    <>
      <PageHeader title="History" />
      <CustomSafeAreaView>
        <View style={{ gap: 20 }} className="bg-white rounded-2xl py-6 px-5">
          {transactions.map((transaction, index) => (
            <View
              key={index}
              className={`flex-row items-start justify-between ${index !== transactions.length - 1 && "pb-5 border-b border-[#F0F2F5]"}`}
            >
              <View style={{ gap: 14 }} className="flex-row items-center">
                <Image className="block mx-auto size-10" source={transaction.image} resizeMode="contain" />
                <View style={{ gap: 8 }}>
                  <Text className="text-[16px] text-[#1D2739] font-inter_medium">{transaction.title}</Text>
                  <Text className="text-[#98A2B3] font-inter text-[16px] -tracking-[0.3px] ">{transaction.address}</Text>
                </View>
              </View>
              <View style={{ gap: 8 }}>
                <Text className={`text-right font-inter_medium text-[16px] ${transaction.type === "inflow" && "text-success"} `}>
                  {transaction.amount}
                </Text>
                <Text className="text-right font-inter_medium text-[16px] text-[#98A2B3]">{transaction.charge}</Text>
              </View>
            </View>
          ))}
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default HistoryScreen;
