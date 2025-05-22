import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

type DestinationCardProps = {
  title: string;
  image: any; // Image source
  region: string;
};

export default function DestinationCard({
  title,
  image,
  region,
}: DestinationCardProps) {
  const theme =
    useColorScheme() === "light"
      ? { backgroundColor: Colors.custumColors.cardWhite }
      : { backgroundColor: Colors.custumColors.cardBlack };
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => router.push("/DestinationDetails")}
        style={[styles.card, theme]}
      >
        <View>
          <Image source={image} style={styles.image} />
          <TouchableOpacity
            onPress={(event) => {
              event.stopPropagation();
              setIsFavorite(!isFavorite);
              // Ajoutez ici la logique pour gérer le clic sur l'icône de cœur
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
        <ThemedText type="defaultSemiBold" style={styles.place}>
          {title}
        </ThemedText>
        <View style={styles.lieu}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Ionicons
              name="location-outline"
              size={16}
              color={Colors.custumColors.vertClair}
            />
            <Text style={styles.region}>{region}</Text>
          </View>
          <Text
            style={{ color: Colors.custumColors.grisClair, fontWeight: "600" }}
          >
            17.000fr / pers
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },

  card: {
    width: 250,
    height: 250,
    borderRadius: GlobalStyle.borderRadius,
    padding: 10,
  },
  image: {
    width: "100%",
    resizeMode: "cover",
    height: 150,
    borderRadius: 14,
  },
  place: {
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  lieu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  region: {
    color: Colors.custumColors.vertClair,
  },
});
