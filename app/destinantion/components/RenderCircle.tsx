import { GlobalStyle } from "@/constants/GlobaleStyle";
import { View } from "react-native";

export default function RenderCircle({ images, currentIndex }) {
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
