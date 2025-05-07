import { Colors } from "@/constants/Colors";
import { GlobalStyle } from "@/constants/GlobaleStyle";
import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { filterData } from "./filterData";

export default function FilterCategory() {
  const [activeCategory, setActiveCategory] = useState<string | null>("Tous");
  function FilterCategoriesUi({ category }: { category: string }) {
    const isActive = activeCategory === category;
    return (
      <TouchableOpacity
        onPress={() => setActiveCategory(category)}
        style={[
          styles.buttonFilter,
          isActive
            ? {
                backgroundColor: Colors.custumColors.jauneSable,
              }
            : [styles.notActive],
        ]}
      >
        <Text
          style={[
            styles.textButton,
            isActive
              ? { color: Colors.light.text }
              : { color: Colors.dark.text },
          ]}
        >
          {category}
        </Text>
      </TouchableOpacity>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        renderItem={({ item }) => {
          return <FilterCategoriesUi category={item.name} />;
        }}
        // estimatedItemSize={73}
        data={filterData}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  buttonFilter: {
    padding: 10,
    borderRadius: GlobalStyle.borderRadius,
    marginRight: 10,

    // backgroundColor: Colors.custumColors.jauneSable,
  },
  notActive: {
    backgroundColor: "#A9A9A9",
  },
  textButton: { fontWeight: "600" },
});
