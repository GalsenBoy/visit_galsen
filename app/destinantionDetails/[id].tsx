import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { dataSection } from "@/constants/dataSection";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function DestinationDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { width } = Dimensions.get("window"); // Obtient la largeur de l'écran
  const [isCut, setIsCut] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    { id: "1", uri: require("@/assets/images/plage.jpg") },
    { id: "2", uri: require("@/assets/images/logo.png") },
    { id: "3", uri: require("@/assets/images/icon.png") },
  ];
  const { id } = useLocalSearchParams();

  const data = dataSection.find((item) => item.id === id);

  const [str, setStr] = useState(
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil totam iusto exercitationem culpa id asperiores nesciunt tenetur modi suscipit? Perferendis, perspiciatis alias vel fugit quas debitis tempore mollitia neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quia totam vero ea eos nemo praesentium sed qui harum nulla iusto, repellendus illo, doloremque quae natus numquam quisquam ratione dicta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores, molestias. Distinctio numquam delectus expedita, eius fuga enim. Animi natus dolores quas, neque quisquam voluptatibus est, beatae tempora, quo corrupti doloremque? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi eaque, totam, odit officiis, nostrum officia sed a error necessitatibus cumque voluptate doloribus soluta sit recusandae deleniti id aliquam eius est."
  );
  const onScroll = (event) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    // Calcule l'index de la slide visible
    const index = Math.floor(contentOffset / slideSize);
    setCurrentIndex(index);
  };

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };
  const renderCercle = () => (
    <View style={styles.dotContainer}>
      {images.map((_, index) => (
        <View
          key={index}
          style={index === currentIndex ? styles.activeDot : styles.dot}
        />
      ))}
    </View>
  );

  const renderItem = ({ item }) => (
    <>
      <Image source={item.uri} style={{ width: width, ...styles.image }} />
      <TouchableOpacity
        onPress={handleFavoritePress}
        style={{ ...GlobalStyle.heartIcon, ...styles.heartIcon }}
      >
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={20}
          color={Colors.custumColors.rougeTerre}
        />
      </TouchableOpacity>
    </>
  );
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            onScroll={onScroll} // Gère le défilement
            data={images} // Tes données
            renderItem={renderItem} // Comment rendre chaque élément
            keyExtractor={(item) => item.id} // Clé unique pour chaque élément
            horizontal // Défilement horizontal
            pagingEnabled // Défilement par page
            showsHorizontalScrollIndicator={false} // Cache l'indicateur
            scrollEventThrottle={16}
          />
          {renderCercle()}
        </View>
        <View style={{ paddingHorizontal: GlobalStyle.padding }}>
          <ThemedText type="subtitle" style={styles.place}>
            {data?.title}
          </ThemedText>
          <View style={styles.lieu}>
            <View style={styles.alignRow}>
              <Ionicons
                name="location-outline"
                size={16}
                color={Colors.custumColors.vertClair}
              />
              <ThemedText style={{ color: Colors.custumColors.vertClair }}>
                {data?.region}
              </ThemedText>
            </View>
            <Text
              style={{
                fontSize: 16,
                color: Colors.custumColors.grisClair,
                fontWeight: "600",
              }}
            >
              {data?.price} / pers
            </Text>
          </View>
          <View style={styles.alignRow}>
            <Ionicons
              name="time-outline"
              size={16}
              color={Colors.custumColors.grisClair}
            />
            <ThemedText type="defaultSemiBold">09:00 - 17:00</ThemedText>
          </View>
          <ThemedText type="defaultSemiBold" style={{ marginTop: 15 }}>
            Description
          </ThemedText>
          <ThemedText>{isCut ? str : str.slice(0, 250) + "..."}</ThemedText>
          <TouchableOpacity onPress={() => setIsCut(!isCut)}>
            <ThemedText
              type="defaultSemiBold"
              style={{
                color: Colors.custumColors.vertDoux,
              }}
            >
              {isCut ? "Voir moins" : "Voir plus"}
            </ThemedText>
          </TouchableOpacity>

          <TouchableOpacity style={GlobalStyle.button as any}>
            <Text style={styles.reserver}>Réserver Maintenant</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  alignRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 3,
  },
  dotContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 10,
    width: "100%",
  },

  heartIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  reserver: {
    color: Colors.light.text,
    fontSize: 16,
    fontWeight: "700",
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.custumColors.grisClair,
    marginHorizontal: 5,
  },
  activeDot: {
    width: 10,
    height: 10,
    borderRadius: 50,
    backgroundColor: Colors.custumColors.rougeTerre,
    marginHorizontal: 5,
  },

  image: {
    height: 300,
    resizeMode: "cover",
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
