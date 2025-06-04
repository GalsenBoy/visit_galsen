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
  id: string;
  title: string;
  image: any; // Image source
  region: string;
};

export default function DestinationCard({
  title,
  image,
  region,
  id,
}: DestinationCardProps) {
  const theme =
    useColorScheme() === "light"
      ? { backgroundColor: Colors.custumColors.cardWhite }
      : { backgroundColor: Colors.custumColors.cardBlack };
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/destinantionDetails/[id]",
            params: { id: id },
          })
        }
        // activeOpacity={0.8}
        style={[styles.card, theme]}
      >
        <View>
          <Image source={image} style={styles.image} />
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
        <ThemedText type="smallText" style={styles.place}>
          {title}
        </ThemedText>
        <View style={styles.lieu}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Ionicons
              name="location-outline"
              size={14}
              color={Colors.custumColors.vertClair}
            />
            <ThemedText style={styles.region}>{region}</ThemedText>
          </View>
          <Text
            style={{
              color: Colors.custumColors.grisClair,
              fontWeight: "600",
            }}
          >
            17.000fr
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
    width: 200,
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
    fontWeight: "bold",
    lineHeight: 20,
  },
  lieu: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  region: {
    color: Colors.custumColors.vertClair,
    fontSize: 14,
  },
});
