import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const BUTTON_VARIANTS = {
  primary: { body: "bg-[#684FCF]", text: "text-white" },
  gray: { body: "bg-[#E9E9E9]", text: "text-[#101928]" },
  white: { body: "bg-white", text: "text-[#6E56CF]" },
};

interface ButtonProps {
  variant?: keyof typeof BUTTON_VARIANTS;
  label: string;
  onPress?: () => void;
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", label = "", onPress } = props;

  return (
    <TouchableOpacity
      className={`${BUTTON_VARIANTS[variant].body} w-full items-center justify-center py-4 rounded-[44px]`}
      activeOpacity={0.7}
      onPress={onPress}
    >
      <Text className={`${BUTTON_VARIANTS[variant].text} font-inter_semibold text-[16px] leading-7`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
