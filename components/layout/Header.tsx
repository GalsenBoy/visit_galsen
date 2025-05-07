import { GlobalStyle } from "@/constants/GlobaleStyle";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Image, StyleSheet, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
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
          <ThemedText type="presubtitle">Dakar, Sénégal</ThemedText>
          <ThemedText type="subtitle" style={{ lineHeight: 30 }}>
            Explorez le Sénégal, terre de couleurs et d’hospitalité.
          </ThemedText>
          <ThemedView style={styles.searchSection}>
            <AntDesign
              style={styles.searchIcon}
              name="search1"
              size={24}
              color="gray"
            />
            <TextInput
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
  searchSection: {
    flex: 1,
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
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
  },
});
