import React, { useState } from "react";
import { View } from "react-native";
import { Button, Card } from "@rneui/themed";
import { AuthContext } from "../../providers/AuthProvider";

import { signInWithEmailAndPassword } from "firebase/auth";
import {auth} from "../../firebase/firebase";
import Logo from "../../components/Logo/Logo";
import styles from "./SignInScreen.style";
import PandaButton from "../../components/Button/Button";
import {emailValidator} from "../../validators/emailValidator";
import {passwordValidator} from "../../validators/passwordValidator";
import InputField from "../../components/InputField/InputField";

const SignInScreen = (props) => {
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  return (
    <AuthContext.Consumer>
      {(authContext) => (
        <View style={styles.container}>
          <Logo />
          <Card>
            <Card.Title style={styles.title}>Sign In</Card.Title>
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
              onPress={
                () => {
                  const emailError = emailValidator(email.value);
                  const passwordError = passwordValidator(password.value);

                  if (emailError || passwordError) {
                    setEmail({ ...email, error: emailError });
                    setPassword({ ...password, error: passwordError });
                    return;
                  }

                  signInWithEmailAndPassword(auth, email.value, password.value)
                    .then((userCredential) => {
                      const user = userCredential.user;
                      authContext.setCurrentUser(user);
                      authContext.setIsLoggedIn(true);
                    })
                    .catch((error) => {
                      const errorMessage = error.message;
                      if(errorMessage.includes("wrong-password")){
                        setPassword({ ...password, error: "Wrong Password" });
                      }
                      else{
                        alert(errorMessage);
                      }
                    });
                }
              }
            >
              Sign In
            </PandaButton>
            <Button 
              title="Forgot your password?"
              type="clear"
              onPress={
                () => props.navigation.navigate("ResetPassword")
              }
            />
            <Button
              title="Don't have an Account? Sign Up"
              type="clear"
              onPress={
                () => props.navigation.navigate("SignUp")
              }
            />
          </Card>
        </View>
      )}
    </AuthContext.Consumer>
  );
};

export default SignInScreen;
