import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TouchableOpacity } from "react-native";

export default function HeartIcon({
  isFavorite,
  onPress,
  style,
  size = 20,
}: {
  isFavorite: boolean;
  onPress: () => void;
  size?: number;
  style?: object;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={[GlobalStyle.heartIcon, style]}>
      <Ionicons
        name={isFavorite ? "heart" : "heart-outline"}
        size={size}
        color={Colors.custumColors.rougeTerre}
      />
    </TouchableOpacity>
  );
}
