import { ImageSourcePropType } from "react-native";

export type DestinationCardProps = {
    id: string;
    title: string;
    image: ImageSourcePropType;
    region: string;
    price?: string;
};
