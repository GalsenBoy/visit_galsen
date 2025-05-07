import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { Image, StyleSheet, TouchableOpacity } from "react-native";

export default function DestinationCard() {
  return (
    <ThemedView>
      <TouchableOpacity>
        <Image
          source={require("@/assets/images/plage.jpg")}
          style={styles.image}
        />
        <ThemedText type="presubtitle" style={styles.place}>
          Réserve de Bandia
        </ThemedText>
        <ThemedView style={styles.lieu}>
          <Ionicons name="location-outline" size={24} color="gray" />
          <ThemedText>Thiès</ThemedText>
        </ThemedView>
      </TouchableOpacity>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  image: {
    width: 200,
    resizeMode: "cover",
    height: 150,
    borderRadius: GlobalStyle.borderRadius,
  },
  place: {
    lineHeight: 15,
    padding: 10,
  },
  lieu: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
});
