import React, { useState } from "react";
import { View } from "react-native";
import { Input, Button, Card } from "@rneui/themed";
import styles from "./SignInScreen.style";
import { AuthContext } from "../../providers/AuthProvider";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";

const SignInScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <View>
          <Card>
            <Card.Title>Welcome to AuthApp</Card.Title>
            <Card.Divider />
            <Input placeholder="Email Address" onChangeText={setEmail}/>
            <Input placeholder="Password" onChangeText={setPassword}/>
            <Button
              title="Sign In!"
              type="solid"
              onPress={() => {
                signInWithEmailAndPassword(auth, email, password)
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
