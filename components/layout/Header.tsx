import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import LocationIcon from "../LocationIcon";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
export default function Header() {
  return (
    <ThemedView style={styles.header}>
      <Image
        source={require("@/assets/images/plage.jpg")}
        style={styles.image}
        resizeMode="cover"
      />
      <View style={styles.overlay}>
        <SafeAreaView style={styles.textContainer}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
            <LocationIcon size={16} />
            <ThemedText style={styles.pays} type="presubtitle">
              Dakar, Sénégal
            </ThemedText>
          </View>
          <Text style={styles.description}>
            Explorez le Sénégal, terre de couleurs et d’hospitalité.
          </Text>
          <ThemedView style={styles.searchSection}>
            <AntDesign
              style={styles.searchIcon}
              name="search1"
              size={24}
              color="gray"
            />
            <TextInput
              placeholder="Rechercher une destination..."
              style={styles.input}
              underlineColorAndroid="transparent"
            />
          </ThemedView>
        </SafeAreaView>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  header: {
    position: "relative",
    height: 300,
  },
  image: {
    width: "100%",
    height: "100%",
    overlayColor: "rgba(0, 0, 0, 0.5)",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.4)", // couche sombre
  },
  textContainer: {
    position: "absolute",
    top: 15,
    left: 20,
    right: 20,
    gap: 20,
  },
  description: {
    color: Colors.dark.text,
    fontSize: 20,
    lineHeight: 30,
    marginBottom: 20,
    fontWeight: "600",
  },
  searchSection: {
    flex: 1,
    backgroundColor: Colors.dark.background,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: GlobalStyle.borderRadius,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    flex: 1,
    color: Colors.custumColors.grisClair,
    fontWeight: "600",
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
  pays: {
    color: Colors.custumColors.vertClair,
  },
});
