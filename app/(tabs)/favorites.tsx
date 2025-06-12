import HeartIcon from "@/components/HeartIcon";
import LocationIcon from "@/components/LocationIcon";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import { useFavoritesStore } from "@/store/favoritesStore";
import { DestinationCardProps } from "@/types/DestinantionCardProps";
import { router } from "expo-router";
import { useEffect } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from "react-native";

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites);
  const loadFavorites = useFavoritesStore((state) => state.loadFavorites);
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);
  const theme = useColorScheme();
  const cardBackground =
    theme === "light"
      ? Colors.custumColors.cardWhite
      : Colors.custumColors.cardBlack;

  useEffect(() => {
    loadFavorites();
  }, []);
  const renderItem = ({ item }: { item: DestinationCardProps }) => (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: cardBackground }]}
      onPress={() =>
        router.push({
          pathname: "/destination/[id]",
          params: { id: item.id },
        })
      }
    >
      <Image source={item.image} style={styles.image} />
      <HeartIcon
        style={{ position: "absolute", top: 20, right: 20 }}
        isFavorite
        onPress={() => removeFavorite(item.id)}
      />
      <Text style={styles.title}>{item.title}</Text>
      <View style={styles.bottomRow}>
        <View style={styles.regionRow}>
          <LocationIcon />
          <Text style={styles.region}>{item.region}</Text>
        </View>
        <Text style={styles.price}>{item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Mes Favoris</Text>
      <FlatList
        data={favorites}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
    // backgroundColor: Colors.background,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 12,
  },
  listContent: {
    paddingBottom: 20,
  },
  card: {
    borderRadius: GlobalStyle.borderRadius,
    marginBottom: 16,
    padding: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 4,
    paddingHorizontal: 4,
  },
  bottomRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 4,
  },
  regionRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  region: {
    color: Colors.custumColors.vertClair,
    marginLeft: 4,
    fontSize: 14,
  },
  price: {
    fontWeight: "600",
    color: Colors.custumColors.grisClair,
  },
  emptyText: {
    textAlign: "center",
    marginTop: 30,
    fontSize: 16,
    color: Colors.custumColors.grisClair,
  },
});
