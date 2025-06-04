import HeroSection from "@/app/destinantion/components/HeroSection";
import OtherDestinantionCard from "@/app/destinantion/components/OtherDestinationCard";
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
