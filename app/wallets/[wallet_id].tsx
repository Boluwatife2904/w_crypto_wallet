import { View, Text, Image, useWindowDimensions, TouchableOpacity } from "react-native";
import { useState } from "react";
import { TabView, SceneMap, TabBar, type TabBarProps } from "react-native-tab-view";

import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";
import WalletPicker from "@/components/common/WalletPicker";
import WalletTokens from "@/components/Wallet/Tokens";
import WalletHistory from "@/components/Wallet/History";
import WalletNFTs from "@/components/Wallet/NFTs";
import WalletActions from "@/components/Wallet/Actions";

const renderScene = SceneMap({
  tokens: () => <WalletTokens />,
  nfts: () => <WalletNFTs />,
  history: () => <WalletHistory />,
});
const routes = [
  { index: "0", key: "tokens", title: "Tokens" },
  { index: "1", key: "nfts", title: "NFTs & Collectibles" },
  { index: "2", key: "history", title: "History" },
];

const WalletScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);

  const renderTabBar = (props: TabBarProps<any>) => {
    return (
      <TabBar
        {...props}
        renderIndicator={() => null}
        renderTabBarItem={({ labelText, onLayout, onPress, onLongPress, route }) => (
          <TouchableOpacity
            className="flex-1 p-4 pt-2 w-full"
            style={{ borderBottomWidth: 2, borderBottomColor: String(index) === route.index ? "#6E56CF" : "transparent" }}
            onPress={onPress}
            onLongPress={onLongPress}
            onLayout={onLayout}
          >
            <Text className="font-inter_medium text-[#475367]">{labelText}</Text>
          </TouchableOpacity>
        )}
        style={{ backgroundColor: "transparent", borderBottomWidth: 1, marginBottom: 20, borderBottomColor: "#F0F2F5", width: "100%" }}
      />
    );
  };

  return (
    <>
      <PageHeader>
        <WalletPicker />
      </PageHeader>

      <CustomSafeAreaView>
        <View style={{ gap: 31, flex: 1 }}>
          <View style={{ gap: 16 }}>
            <View style={{ gap: 12 }} className="p-4 flex-row rounded-xl border border-[#F0F2F5] bg-white">
              <Image source={require("@/assets/images/w-avatar.png")} className="block w-[53px] h-[55px]" />
              <View style={{ gap: 7 }}>
                <Text className="font-inter_semibold text-[24px] tracking-[0.3px]">
                  <Text className="text-[14px] font-inter_medium">$ </Text>
                  274.
                  <Text className="text-[#667185]">00</Text>
                </Text>
                <Text className="text-[#40B869] font-inter_medium text-[14px]">+10% ($2)</Text>
              </View>
            </View>
            <WalletActions />
          </View>
          <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: layout.width }}
            renderTabBar={renderTabBar}
            lazy
          />
        </View>
      </CustomSafeAreaView>
    </>
  );
};

export default WalletScreen;
