import { DestinationCardProps } from "@/types/DestinantionCardProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function Favorites() {
  const [favorites, setFavorites] = useState<DestinationCardProps[]>([]);

  useEffect(() => {
    loadFavorites();
  }, [favorites]);

  const loadFavorites = async () => {
    await AsyncStorage.getItem("favorites").then((value) => {
      if (value !== null) {
        const getAllFavorites = JSON.parse(value) as DestinationCardProps[];
        setFavorites(getAllFavorites);
      }
    });
  };
  return (
    <View>
      <Text>Favorite</Text>
      <Text>Cette page est en cours de développement.</Text>
      {favorites.map((item) => (
        <View key={item.id}>
          <Text>{item.title}</Text>
          <Text>{item.region}</Text>
          <Text>{item.price}</Text>
          <Text>{favorites.length}</Text>
        </View>
      ))}
    </View>
  );
}
