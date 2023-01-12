import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import styles from "./HomeScreen.style"
import { AuthContext } from "../providers/AuthProvider";

const HomeScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View>
          <Text style={styles.textStyle}>Welcome To HomeScreen</Text>
          <Button
            type="outline"
            title="log out"
            onPress={() => {
              auth.setIsLoggedIn(false);
            }}
          />
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default HomeScreen;
