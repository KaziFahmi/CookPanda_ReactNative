import { StyleSheet } from "react-native"
import theme from "../../core/theme"
const styles = StyleSheet.create({
    image: {
      justifyContent:"center",
      alignContent:"center",
      width: 110,
      height: 110,
      marginBottom: 8
    },
    header: {
      fontSize: 56,
      color: theme.colors.primary,
      fontWeight: "bold",
      paddingVertical: 12,
    },
    container: {
      marginTop: 60,
      justifyContent: "center",
      alignContent: "space-between",
      alignItems: "center"
    }
  })

export default styles;