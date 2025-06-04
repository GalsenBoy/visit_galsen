import { Colors } from "./Colors";

const shadow = {
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,

};
export const GlobalStyle = {
    padding: 15,
    borderRadius: 12,
    shadow: {
        ...shadow,
        shadowColor: "#C0B8B0",

    },
    button: {
        backgroundColor: Colors.custumColors.jauneSable,
        padding: 15,
        borderRadius: 12,
        alignItems: "center",
        marginTop: 20,
    },
    heartIcon: {
        position: "absolute",
        top: 10,
        right: 10,
        backgroundColor: Colors.custumColors.cardWhite,
        borderRadius: 50,
        padding: 5,
    },
    darkShadow: {
        shadowColor: "#212121",
        ...shadow,
    },
    alignRow: {
        flexDirection: "row",
        alignItems: "center",
    },
}