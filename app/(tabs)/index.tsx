import FilterCategory from "@/components/home/filter/FilterCategory";
import HeroSection from "@/components/home/homeSection/HeroSection";
import OtherDestinantionCard from "@/components/home/homeSection/OtherDestinationCard";
import Header from "@/components/layout/Header";
import { ScrollView, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <Header />
        <FilterCategory />
        <HeroSection />
        <OtherDestinantionCard />
      </ScrollView>
    </View>
  );
}
