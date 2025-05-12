import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
    "en-US": { translation: en },
    "fr-FR": { translation: fr },
};

const initI18n = async () => {
    let savedLanguage = await AsyncStorage.getItem("language");

    if (!savedLanguage) {
        savedLanguage = Localization.locale;
    }

    i18n.use(initReactI18next).init({
        compatibilityJSON: "v4",
        resources,
        lng: savedLanguage,
        fallbackLng: "en-US",
        interpolation: {
            escapeValue: false,
        },
    });
};
initI18n();
export default i18n;