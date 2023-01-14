import { StyleSheet } from "react-native";
import theme from "../../core/theme";
const styles = StyleSheet.create({
    background: { 
      alignItems: "center", 
      width:'100%', 
      backgroundColor: theme.colors.primary, 
      paddingTop: 50
    },
    searchBar: {
      // backgroundColor: "rgb(0, 81, 90)", 
      width: '80%', 
      height: 100, 
      justifyContent: "center", 
      alignItems: "center",
      flexDirection: "row"
    },
    textStyle: {
      fontSize: 30,
      color: "white",
    },
    card: {
      marginRight: 10,
      marginLeft: 10,
      justifyContent: "space-between"
    },
    logoutButton:{
      alignItems: "flex-start",
      borderRadius: 10
    }
  });

export default styles;