import HeartIcon from "@/components/HeartIcon";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import {
  Dimensions,
  Image,
  ImageSourcePropType,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

type RenderCircleProps = {
  item: {
    uri: ImageSourcePropType; // Remplacez 'any' par le type approprié pour votre image
  };
  isFavorite: boolean;
  handleFavoritePress: () => void;
};

export default function RenderImageDetail({
  item,
  isFavorite,
  handleFavoritePress,
}: RenderCircleProps) {
  const { width } = Dimensions.get("window"); // Obtient la largeur de l'écran

  return (
    <>
      <Image source={item.uri} style={{ width: width, ...styles.image }} />
      <TouchableOpacity
        onPress={handleFavoritePress}
        style={{ ...GlobalStyle.heartIcon, ...styles.heartIcon }}
      >
        <HeartIcon onPress={handleFavoritePress} isFavorite={isFavorite} />
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 300,
    resizeMode: "cover",
    borderRadius: GlobalStyle.borderRadius,
  },
  heartIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
});
