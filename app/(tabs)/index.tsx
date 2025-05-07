import FilterCategory from "@/components/home/filter/FilterCategory";
import DestinationCard from "@/components/home/homeSection/DestinationCard";
import Header from "@/components/layout/Header";
import { View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <Header />
      <FilterCategory />
      <DestinationCard />
      {/* <HeroSection /> */}
    </View>
  );
}
