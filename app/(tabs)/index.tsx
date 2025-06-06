import HeroSection from "@/app/destination/components/HeroSection";
import OtherDestinantionCard from "@/app/destination/components/OtherDestinationCard";
import FilterCategory from "@/components/home/filter/FilterCategory";
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
