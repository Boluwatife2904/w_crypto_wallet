import { View, Text, TouchableOpacity } from "react-native";
import ActionSheet, { SheetManager } from "react-native-actions-sheet";

import Button from "../ui/Button";
import Icon from "../Icon";

const AddWalletSheet = () => {
  const confirmAction = async (action: "create" | "import") => {
    await SheetManager.hide("add-wallet-sheet", { payload: action });
  };

  return (
    <ActionSheet
      isModal={true}
      closable={false}
      backgroundInteractionEnabled={false}
      containerStyle={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}
    >
      <View className="px-6 py-[33.5px]">
        <View className="mb-[30px] relative">
          <TouchableOpacity className="absolute -top-2.5 -left-3 p-3 z-[1]" onPress={() => SheetManager.hide("add-wallet-sheet")}>
            <Icon iconName="multiply" />
          </TouchableOpacity>
          <Text className="font-inter_medium text-[18px] text-center -tracking-[0.3px]">Add wallet</Text>
        </View>
        <View style={{ gap: 12 }}>
          <Button label="Create new wallet" onPress={() => confirmAction("create")} />
          <Button variant="gray" label="Import existing wallet" onPress={() => confirmAction("import")} />
        </View>
      </View>
    </ActionSheet>
  );
};

export default AddWalletSheet;
