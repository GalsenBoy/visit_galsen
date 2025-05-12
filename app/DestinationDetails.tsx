import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function DestinationDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image
          source={require("@/assets/images/plage.jpg")}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={(event) => {
            event.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          style={GlobalStyle.heartIcon as any}
        >
          <Ionicons
            name={isFavorite ? "heart" : "heart-outline"}
            size={20}
            color={Colors.custumColors.rougeTerre}
          />
        </TouchableOpacity>
      </View>
      <ThemedText type="subtitle" style={styles.place}>
        Réserve de Bandia
      </ThemedText>
      <View style={styles.lieu}>
        <View style={styles.alignRow}>
          <Ionicons
            name="location-outline"
            size={16}
            color={Colors.custumColors.vertClair}
          />
          <ThemedText style={{ color: Colors.custumColors.vertClair }}>
            Saly
          </ThemedText>
        </View>
        <ThemedText
          type="defaultSemiBold"
          style={{ color: Colors.custumColors.grisClair }}
        >
          17.000fr / pers
        </ThemedText>
      </View>
      <View style={styles.alignRow}>
        <Ionicons
          name="time-outline"
          size={16}
          color={Colors.custumColors.grisClair}
          style={{ marginRight: 5 }}
        />
        <ThemedText type="defaultSemiBold">09:00 - 17:00</ThemedText>
      </View>
      <ThemedText type="defaultSemiBold" style={{ marginTop: 15 }}>
        Description
      </ThemedText>
      <ThemedText>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
        deserunt, dignissimos voluptatem dicta laudantium nam soluta in laborum
        doloremque eveniet aut deleniti, fuga, voluptates eius. Necessitatibus
        fuga dolores minima minus!
      </ThemedText>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: GlobalStyle.padding,
  },
  alignRow: {
    flexDirection: "row",
    alignItems: "center",
    // gap: 5,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: GlobalStyle.borderRadius,
  },
  lieu: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  place: {
    marginVertical: 15,
  },
});
