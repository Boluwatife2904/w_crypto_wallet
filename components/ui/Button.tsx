import { Text, TouchableOpacity } from "react-native";
import Icon, { type IconProps } from "../Icon";

const BUTTON_VARIANTS = {
  primary: { body: "bg-[#684FCF]", text: "text-white" },
  gray: { body: "bg-[#E9E9E9]", text: "text-[#101928]" },
  white: { body: "bg-white", text: "text-[#6E56CF]" },
  dark: { body: "bg-[#101928]", text: "text-white" },
};

interface ButtonProps {
  variant?: keyof typeof BUTTON_VARIANTS;
  label: string;
  icon?: IconProps["iconName"];
  onPress?: () => void;
}

const Button = (props: ButtonProps) => {
  const { variant = "primary", icon, label = "", onPress } = props;

  return (
    <TouchableOpacity
      style={{ gap: 8 }}
      className={`${BUTTON_VARIANTS[variant].body} w-full flex-row items-center justify-center py-4 rounded-[44px]`}
      activeOpacity={0.7}
      onPress={onPress}
    >
      {!!icon && <Icon iconName={icon} />}
      <Text className={`${BUTTON_VARIANTS[variant].text} font-inter_semibold text-[16px] leading-7`}>{label}</Text>
    </TouchableOpacity>
  );
};

export default Button;
