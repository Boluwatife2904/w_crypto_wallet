import { View, Text } from "react-native";
import React from "react";
import PageHeader from "@/components/layout/PageHeader";
import CustomSafeAreaView from "@/components/layout/SafeAreaView";

const HistoryScreen = () => {
  return (
    <>
      <PageHeader title="History" />
      <CustomSafeAreaView>
        <Text>HistoryScreen</Text>
      </CustomSafeAreaView>
    </>
  );
};

export default HistoryScreen;
