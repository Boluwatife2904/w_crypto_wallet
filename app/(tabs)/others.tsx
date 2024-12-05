import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";

const OthersScreen = () => {
  return (
    <>
      <PageHeader title="Others" />
      <CustomSafeAreaView>
        <Text>Others</Text>
      </CustomSafeAreaView>
    </>
  );
};

export default OthersScreen;
