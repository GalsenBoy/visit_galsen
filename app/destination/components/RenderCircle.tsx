import { GlobalStyle } from "@/constants/GlobaleStyle";
import { ImageSourcePropType, View } from "react-native";

type RenderCircleProps = {
  images: ImageSourcePropType[]; // Assuming images is an array of image URLs or paths
  currentIndex: number; // The index of the currently active image
};

export default function RenderCircle({
  images,
  currentIndex,
}: RenderCircleProps) {
  return (
    <View style={[styles.dotContainer, GlobalStyle.alignRow as any]}>
      {images.map((_, index) => (
        <View
          key={index}
          style={index === currentIndex ? styles.activeDot : styles.dot}
        />
      ))}
    </View>
  );
}

const styles = {
  dotContainer: {
    position: "absolute",
    bottom: 10,
    left: "50%",
    transform: [{ translateX: -50 }],
    flexDirection: "row",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#ccc",
    marginHorizontal: 4,
  },
  activeDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#000",
    marginHorizontal: 4,
  },

  image: {
    height: 300,
    resizeMode: "cover",
    borderRadius: GlobalStyle.borderRadius,
  },
};
