import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    image: {
        height: 380,
        width: '100%',
        borderRadius: 10
    },
    header: {
        color: "black",
        fontSize: 25,
        fontWeight: "bold",
        width: 300, 
        alignItems: "flex-start", 
        padding: 10
    },
    content: {
        alignItems: "flex-start",
        width: '100%',
        padding: 10,
    },
    text: {
        fontSize: 15,
        fontWeight: 'bold'
    }
})

export default styles;