import { dataSection } from "@/constants/dataSection";
import { FlatList, View } from "react-native";
import DestinationCard from "./DestinationCard";

export default function HeroSection() {
  return (
    <View>
      <FlatList
        renderItem={({ item }) => <DestinationCard {...item} />}
        data={dataSection}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}
