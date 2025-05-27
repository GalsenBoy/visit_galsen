import { FlatList, View } from "react-native";
import DestinationCard from "./DestinationCard";

export default function HeroSection() {
  const dataSection = [
    {
      id: 1,
      title: "Réserve de Bandia",
      image: require("@/assets/images/plage.jpg"),
      region: "Thiès",
    },
    {
      id: 2,
      title: "Lac Rose",
      image: require("@/assets/images/plage.jpg"),
      region: "Thiès",
    },
    {
      id: 3,
      title: "Île de Gorée",
      image: require("@/assets/images/plage.jpg"),
      region: "Dakar",
    },
    {
      id: 4,
      title: "Parc Niokolo-Koba",
      image: require("@/assets/images/plage.jpg"),
      region: "Kédougou",
    },
  ];

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
