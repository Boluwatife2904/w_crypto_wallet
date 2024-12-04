import { SafeAreaView } from "react-native-safe-area-context";
import { ImageBackground, Text, View, Image } from "react-native";
import Button from "@/components/ui/Button";

export default function Index() {
  return (
    <ImageBackground source={require("@/assets/images/splash-background.png")} resizeMode="cover" className="flex-1 items-end justify-center px-6 ">
      <SafeAreaView style={{ flex: 1, flexGrow: 1, justifyContent: "space-between" }} className="w-full pb-9">
        <View style={{ gap: 5 }} className="pt-5 flex-row items-center w-full">
          {[0, 1, 2].map((value) => (
            <View key={value} className="h-[5px] flex-1 bg-white rounded-[20px]" />
          ))}
        </View>
        <View style={{ gap: 10 }}>
          <Image source={require("@/assets/images/w-logo.png")} resizeMode="contain" resizeMethod="scale" className="block mx-auto" />
          <View style={{ gap: 52 }} className="w-full">
            <View>
              {["Crypto at", "the speed of", "light ⚡️"].map((value) => (
                <Text className="text-white mx-3 text-[48px] leading-[60px] font-gelica_bold text-left tracking-[1px]">{value}</Text>
              ))}
            </View>
            <Button label="Get started" variant="white" />
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
}
