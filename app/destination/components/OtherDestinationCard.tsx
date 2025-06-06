import HeartIcon from "@/components/HeartIcon";
import LocationIcon from "@/components/LocationIcon";
import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import { router } from "expo-router";
import { useState } from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";

export default function OtherDestinantionCard() {
  const theme = useColorScheme();
  const [isFavorite, setIsFavorite] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() =>
          router.push({
            pathname: "/destination/[id]",
            params: {
              id: "1",
            },
          })
        }
      >
        <View
          style={[
            styles.card,
            GlobalStyle.alignRow as any,
            theme === "light" ? GlobalStyle.shadow : GlobalStyle.darkShadow,
            { height: 160 },
            {
              backgroundColor:
                theme === "light"
                  ? Colors.custumColors.cardWhite
                  : Colors.custumColors.cardBlack,
            },
          ]}
        >
          <View>
            <Image
              source={require("@/assets/images/plage.jpg")}
              style={styles.image}
            />
            <HeartIcon
              isFavorite={isFavorite}
              onPress={() => setIsFavorite(!isFavorite)}
            />
          </View>

          <View style={styles.titles}>
            <View>
              <ThemedText type="defaultSemiBold" style={{ marginBottom: 5 }}>
                Réserve de Bandia
              </ThemedText>
              <ThemedText type="smallText" style={styles.price}>
                50.000fr
              </ThemedText>
            </View>
            <View style={GlobalStyle.alignRow as any}>
              <LocationIcon />
              <ThemedText type="smallText" style={styles.region}>
                Thiès
              </ThemedText>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: GlobalStyle.borderRadius,
    overflow: "hidden",
    flex: 1,
    padding: 10,
  },
  price: {
    color: Colors.custumColors.grisClair,
    fontWeight: "bold",
  },
  card: {
    gap: 24,
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: GlobalStyle.borderRadius,
  },
  titles: {
    height: "100%",
    justifyContent: "space-evenly",
    flexShrink: 1,
    color: Colors.light.tint,
  },
  region: {
    color: Colors.custumColors.vertClair,
  },
  image: {
    borderRadius: 15,
    overflow: "hidden",
    width: 175,
    height: 130,
  },
});
