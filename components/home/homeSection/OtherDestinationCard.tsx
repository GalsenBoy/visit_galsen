import { ThemedText } from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import Ionicons from "@expo/vector-icons/Ionicons";
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
      <TouchableOpacity onPress={() => router.push("/DestinationDetails")}>
        <View
          style={[
            styles.card,
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

          <View style={styles.titles}>
            <View>
              <ThemedText type="presubtitle" style={{ marginBottom: 5 }}>
                Réserve de Bandia
              </ThemedText>
              <ThemedText
                style={{
                  color: Colors.custumColors.grisClair,
                  fontWeight: "600",
                }}
                numberOfLines={2}
                ellipsizeMode="tail"
              >
                50.000fr / pers
              </ThemedText>
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons
                name="location-outline"
                size={16}
                color={Colors.custumColors.vertClair}
              />
              <ThemedText style={styles.region}>Thiès</ThemedText>
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

  card: {
    flexDirection: "row",
    alignItems: "center",
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
