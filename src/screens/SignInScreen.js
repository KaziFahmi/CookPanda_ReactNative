import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Card } from "@rneui/themed";
import styles from "./SignInScreen.style";
import { AuthContext } from "../providers/AuthProvider";

const SignInScreen = (props) => {
  return (
    <AuthContext.Consumer>
      {(auth) => (
        <View>
          <Card>
            <Card.Title>Welcome to AuthApp</Card.Title>
            <Card.Divider />
            <Input placeholder="Email Address" />
            <Input placeholder="Password" />
            <Button
              title="Sign In!"
              type="solid"
              onPress={() => {
                auth.setIsLoggedIn(true);
              }}
            />
            <Button
              title="Dont have an Account? Sign Up"
              type="clear"
              onPress={() => {
                props.navigation.navigate("SignUp");
              }}
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default SignInScreen;
