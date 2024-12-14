import { type SvgProps } from "react-native-svg";

import AddLine from "@/assets/icons/add-line.svg";
import ArrowDown from "@/assets/icons/arrow-down.svg";
import ArrowLeft from "@/assets/icons/arrow-left.svg";
import ArrowRight from "@/assets/icons/arrow-right.svg";
import BulkInformation from "@/assets/icons/bulk-information.svg";
import ChevronDown from "@/assets/icons/chevron-down.svg";
import ChevronRight from "@/assets/icons/chevron-right.svg";
import Copy from "@/assets/icons/copy.svg";
import DotsV from "@/assets/icons/dots-v.svg";
import EmptyState from "@/assets/icons/empty-state.svg";
import Graph from "@/assets/icons/graph.svg";
import Multiply from "@/assets/icons/multiply.svg";
import PencilEdit from "@/assets/icons/pencil-edit.svg";
import Scan from "@/assets/icons/scan.svg";
import Search from "@/assets/icons/search.svg";
import Send from "@/assets/icons/send.svg";
import Settings from "@/assets/icons/settings.svg";
import Share from "@/assets/icons/share.svg";
import Swap from "@/assets/icons/swap.svg";
import SwitchVertical from "@/assets/icons/switch-vertical.svg";
import VerifiedTick from "@/assets/icons/verified-tick.svg";

const icons = {
  "add-line": AddLine,
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "bulk-information": BulkInformation,
  "chevron-down": ChevronDown,
  "chevron-right": ChevronRight,
  copy: Copy,
  "dots-v": DotsV,
  empty: EmptyState,
  graph: Graph,
  multiply: Multiply,
  "pencil-edit": PencilEdit,
  scan: Scan,
  search: Search,
  send: Send,
  settings: Settings,
  share: Share,
  swap: Swap,
  "switch-vertical": SwitchVertical,
  "verified-tick": VerifiedTick,
};

export interface IconProps extends SvgProps {
  iconName: keyof typeof icons;
}

const Icon = ({ iconName, ...rest }: IconProps) => {
  const SvgIcon = icons[iconName];
  if (!SvgIcon) return null;

  return <SvgIcon {...rest} />;
};

export default Icon;
