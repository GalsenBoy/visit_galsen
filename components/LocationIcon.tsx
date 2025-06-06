import { Colors } from "@/constants/Colors";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function LocationIcon({ size = 14 }: { size?: number }) {
  return (
    <Ionicons
      name="location-outline"
      size={size}
      color={Colors.custumColors.vertClair}
    />
  );
}
