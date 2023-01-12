import React, { useState } from "react";
import styles from "./SignUpScreen.style";
import { View, Text } from "react-native";
import { Input, Card } from "@rneui/themed";
import { AuthContext } from "../../providers/AuthProvider";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";


const SignUpScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <AuthContext.Consumer>
      {
        (authContext) => (
          <View style={styles.containerStyle}>
            <Logo />
            <Card>
              <Card.Title>Sign Up</Card.Title>
              <Card.Divider />
              <Input placeholder="Email Address" onChangeText={setEmail} />
              <Input placeholder="Password" onChangeText={setPassword} secureTextEntry={true} />
              <Button
                title="Sign Up!"
                type="solid"
                onPress={() => {
                  // const authContext = getAuth();
                  createUserWithEmailAndPassword(auth, email, password)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      authContext.setCurrentUser(user);
                      authContext.setIsLoggedIn(true);
                    })
                    .catch((error) => {
                      const errorCode = error.code;
                      const errorMessage = error.message;
                      alert(errorMessage);
                    });
                }}
              />
              <Button
                title="Already Have an Account? Sign In!"
                type="clear"
                onPress={() => {
                  props.navigation.navigate("SignIn");
                }}
              />
            </Card>
          </View>
        )
      }
    </AuthContext.Consumer>
  );
};

export default SignUpScreen;
