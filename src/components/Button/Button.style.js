import { StyleSheet } from "react-native";
import theme from '../../core/theme';

const styles = StyleSheet.create({
    button: {
      width: '100%',
      marginVertical: 10,
      paddingVertical: 2,
      color: theme.colors.primary
    },
    text: {
      fontWeight: 'bold',
      fontSize: 15,
      lineHeight: 26,
    },
  })

export default styles;