import { StyleSheet } from "react-native";
import theme from "../../core/theme";

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "rgba(231, 244, 255, 0.5)",
        shadowOffset: {width: 1, height: 1},
        shadowColor: "#333",
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 10,
        marginVertical: 5,
        alignItems: "center"
    },
    cardContent: {
        alignItems: "center",
        marginHorizontal: 18,
        marginVertical: 10,
        alignContent: "space-between"
    },
    image: {
        height: 300,
        width: 300,
        borderRadius: 10
    },
    header: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        width: 300, 
        alignItems: "flex-start", 
        paddingBottom: 15

    }
})

export default styles;