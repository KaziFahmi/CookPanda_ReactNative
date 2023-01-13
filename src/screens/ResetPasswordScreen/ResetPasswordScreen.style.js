import { StyleSheet } from "react-native";
import theme from "../../core/theme";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 25,
      color: theme.colors.primary,
      fontWeight: "bold"
    }
  });

export default styles;