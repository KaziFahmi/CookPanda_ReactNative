import React, { useState } from "react";
import styles from "./SignUpScreen.style";
import { View, Button, Text } from "react-native";

const SignUpScreen = (props) => {
  return (
    <View>
      <Text style={styles.textStyle}>Welcome To SignUpScreen</Text>
      <Button
        title="Already Have an Account? Sign In!"
        onPress={() => {
          props.navigation.navigate("SignIn");
        }}
      />
    </View>
  );
};

export default SignUpScreen;
