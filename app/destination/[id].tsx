import { dataSection } from "@/app/destination/constants/dataSection";
import LocationIcon from "@/components/LocationIcon";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import RenderCircle from "./components/RenderCircle";
import RenderImageDetail from "./components/RenderImageDetail";

export default function DestinationDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
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
  const onScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const slideSize = event.nativeEvent.layoutMeasurement.width;
    const contentOffset = event.nativeEvent.contentOffset.x;
    // Calcule l'index de la slide visible
    const index = Math.floor(contentOffset / slideSize);
    setCurrentIndex(index);
  };

  const handleFavoritePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <FlatList
            onScroll={onScroll}
            data={images}
            renderItem={({ item, index }) => (
              <RenderImageDetail
                item={item}
                isFavorite={isFavorite}
                handleFavoritePress={handleFavoritePress}
              />
            )}
            keyExtractor={(item) => item.id}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            scrollEventThrottle={16}
          />
          <RenderCircle images={images} currentIndex={currentIndex} />
        </View>
        <View style={{ paddingHorizontal: GlobalStyle.padding }}>
          <ThemedText type="subtitle" style={styles.place}>
            {data?.title}
          </ThemedText>
          <View style={[styles.lieu, GlobalStyle.alignRow as any]}>
            <View style={[styles.alignRow, GlobalStyle.alignRow as any]}>
              <LocationIcon />
              <ThemedText style={{ color: Colors.custumColors.vertClair }}>
                {data?.region}
              </ThemedText>
            </View>
            <Text style={styles.price}>{data?.price} / pers</Text>
          </View>
          <View style={[styles.alignRow, GlobalStyle.alignRow as any]}>
            <Ionicons
              name="time-outline"
              size={16}
              color={Colors.custumColors.grisClair}
            />
            <ThemedText type="defaultSemiBold">{data?.hourly}</ThemedText>
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
  price: {
    fontSize: 16,
    color: Colors.custumColors.grisClair,
    fontWeight: "600",
  },
  alignRow: {
    gap: 3,
  },
  dotContainer: {
    justifyContent: "center",
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

  image: {
    height: 300,
    resizeMode: "cover",
    borderRadius: GlobalStyle.borderRadius,
  },
  lieu: {
    justifyContent: "space-between",
    marginVertical: 10,
  },
  place: {
    marginVertical: 15,
  },
});
