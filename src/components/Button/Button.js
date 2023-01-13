import React from 'react';
import { Button as PaperButton } from "react-native-paper";
import styles from "./Button.style";
import theme from "../../core/theme";

const Button = function Button({ mode, style, ...props }) {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && { backgroundColor: theme.colors.surface },
        style,
      ]}
      labelStyle={styles.text}
      mode={mode}
      {...props}
    />
  )
}

export default Button;