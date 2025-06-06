import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default function HeartIcon({
  isFavorite,
  onPress,
  size = 20,
}: {
  isFavorite: boolean;
  onPress: () => void;
  size?: number;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={GlobalStyle.heartIcon as any}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={size}
        color={Colors.custumColors.rougeTerre}
      />
    </TouchableOpacity>
  );
}
