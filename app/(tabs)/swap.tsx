import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";

const SwapScreen = () => {
  return (
    <>
      <PageHeader title="Swap" />
      <CustomSafeAreaView>
        <Text>SwapScreen</Text>
      </CustomSafeAreaView>
    </>
  );
};

export default SwapScreen;
