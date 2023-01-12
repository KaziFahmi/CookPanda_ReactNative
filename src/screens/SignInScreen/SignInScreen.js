import React, { useState } from "react";
import { View } from "react-native";
import { Input, Card } from "@rneui/themed";
import { AuthContext } from "../../providers/AuthProvider";

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";
import Logo from "../../components/Logo/Logo";
import styles from "./SignInScreen.style";
import Button from "../../components/Button/Button";
// import {Button} from "@rneui/themed";

const SignInScreen = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <View style={styles.containerStyle}>
          <Logo />
          <Card>
            <Card.Title>Sign In</Card.Title>
            <Card.Divider />
            <Input placeholder="Email Address" onChangeText={setEmail}/>
            <Input placeholder="Password" onChangeText={setPassword} secureTextEntry={true}/>
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
              title="Don't have an Account? Sign Up"
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
