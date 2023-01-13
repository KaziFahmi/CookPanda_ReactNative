import React, { useState } from "react";
import styles from "./SignUpScreen.style";
import { View } from "react-native";
import { Button, Card } from "@rneui/themed";
import { AuthContext } from "../../providers/AuthProvider";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

import Logo from "../../components/Logo/Logo";
import PandaButton from "../../components/Button/Button";
import InputField from "../../components/InputField/InputField";
import {emailValidator} from "../../validators/emailValidator";
import {passwordValidator} from "../../validators/passwordValidator";


const SignUpScreen = (props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  return (
    <AuthContext.Consumer>
      {
        (authContext) => (
          <View style={styles.container}>
            <Logo />
            <Card>
              <Card.Title style={styles.title}>Sign Up</Card.Title>
              <InputField
                label="Email"
                returnKeyType="next"
                value={email.value}
                onChangeText={(text) => setEmail({ value: text, error: '' })}
                error={!!email.error}
                errorText={email.error}
                autoCapitalize="none"
                autoCompleteType="email"
                textContentType="emailAddress"
                keyboardType="email-address"
              />
              <InputField
                label="Password"
                returnKeyType="done"
                value={password.value}
                onChangeText={(text) => setPassword({ value: text, error: '' })}
                error={!!password.error}
                errorText={password.error}
                secureTextEntry
              />
              <PandaButton
                mode="contained"
                onPress={() => {
                  const emailError = emailValidator(email.value);
                  const passwordError = passwordValidator(password.value);
                  if (emailError || passwordError) {
                    setEmail({ ...email, error: emailError });
                    setPassword({ ...password, error: passwordError });
                    return;
                  }

                  createUserWithEmailAndPassword(auth, email.value, password.value)
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
              >
                Sign Up
              </PandaButton>
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
