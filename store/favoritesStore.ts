import { DestinationCardProps } from "@/types/DestinantionCardProps";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";

type FavoritesState = {
    favorites: DestinationCardProps[];
    loadFavorites: () => Promise<void>;
    addFavorite: (item: DestinationCardProps) => void;
    removeFavorite: (id: string) => void;
    isFavorite: (id: string) => boolean;
};

export const useFavoritesStore = create<FavoritesState>((set, get) => ({
    favorites: [],

    loadFavorites: async () => {
        const stored = await AsyncStorage.getItem("favorites");
        if (stored) {
            set({ favorites: JSON.parse(stored) });
        }
    },

    addFavorite: async (item) => {
        const current = get().favorites;
        const updated = [...current, item];
        await AsyncStorage.setItem("favorites", JSON.stringify(updated));
        set({ favorites: updated });
    },

    removeFavorite: async (id) => {
        const current = get().favorites;
        const updated = current.filter((fav) => fav.id !== id);
        await AsyncStorage.setItem("favorites", JSON.stringify(updated));
        set({ favorites: updated });
    },

    isFavorite: (id) => {
        return get().favorites.some((fav) => fav.id === id);
    },
}));
