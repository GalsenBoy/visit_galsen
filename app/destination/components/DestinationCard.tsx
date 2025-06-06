import HeartIcon from "@/components/HeartIcon";
import LocationIcon from "@/components/LocationIcon";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import { DestinationCardProps } from "@/types/DestinantionCardProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
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

export default function DestinationCard({
  title,
  image,
  region,
  id,
  price,
}: DestinationCardProps) {
  const theme =
    useColorScheme() === "light"
      ? { backgroundColor: Colors.custumColors.cardWhite }
      : { backgroundColor: Colors.custumColors.cardBlack };
  const [isFavorite, setIsFavorite] = useState(false);

  const handleAddToFavorites = async () => {
    const cardValue = {
      id: id,
      title: title,
      image: image,
      region: region,
      price: price,
    };
    try {
      const jsonValue = JSON.stringify(cardValue);
      await AsyncStorage.setItem("id", jsonValue);
    } catch (e) {
      console.error("Error saving to AsyncStorage:", e);
    }

    if (isFavorite) {
      const favorites = JSON.parse(
        (await AsyncStorage.getItem("favorites")) || "[]"
      );
      const updatedFavorites = favorites.filter((item: any) => item.id !== id);
      await AsyncStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      const favorites = JSON.parse(
        (await AsyncStorage.getItem("favorites")) || "[]"
      );
      favorites.push(cardValue);
      await AsyncStorage.setItem("favorites", JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/destination/[id]",
            params: { id: id },
          })
        }
        // activeOpacity={0.8}
        style={[styles.card, theme]}
      >
        <View>
          <Image source={image} style={styles.image} />
          <HeartIcon
            isFavorite={isFavorite}
            onPress={() => handleAddToFavorites()}
          />
        </View>
        <ThemedText type="smallText" style={styles.place}>
          {title}
        </ThemedText>
        <View style={[styles.lieu, GlobalStyle.alignRow as any]}>
          <View style={GlobalStyle.alignRow as any}>
            <LocationIcon />
            <ThemedText style={styles.region}>{region}</ThemedText>
          </View>
          <Text style={styles.price}>{price}</Text>
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
    justifyContent: "space-between",
    paddingHorizontal: 8,
  },
  region: {
    color: Colors.custumColors.vertClair,
    fontSize: 14,
  },
  price: {
    color: Colors.custumColors.grisClair,
    fontWeight: "600",
  },
});
