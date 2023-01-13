import React, { useState } from 'react';
import Logo from '../../components/Logo/Logo';
import InputField from '../../components/InputField/InputField';
import Button from '../../components/Button/Button';
import { emailValidator } from '../../validators/emailValidator';
import { View } from 'react-native';
import { Card } from '@rneui/base';
import { AuthContext } from "../../providers/AuthProvider";
import styles from './ResetPasswordScreen.style';
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

export default function ResetPasswordScreen(props) {
  const [email, setEmail] = useState({ value: '', error: '' })

  return (
    <AuthContext.Consumer>
        {(authContext)=>(
            <View style={styles.container}>
                <Logo />
                <Card>
                    <Card.Title style={styles.title}>Restore Password</Card.Title>
                    <InputField
                        label="Email"
                        placeholder="Email"
                        returnKeyType="done"
                        value={email.value}
                        onChangeText={(text) => setEmail({ value: text, error: '' })}
                        error={!!email.error}
                        errorText={email.error}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        description="You will receive email with password reset link."
                    />
                    <Button
                        mode="contained"
                        onPress={() => {
                            const emailError = emailValidator(email.value);
                            if (emailError) {
                              setEmail({ ...email, error: emailError });
                              return;
                            }
                            const auth = getAuth();
                            sendPasswordResetEmail(auth, email.value)
                            .then(() => {
                                alert("Password reset email sent. Check email.");
                            })
                            .catch((error) => {
                                const errorCode = error.code;
                                const errorMessage = error.message;
                                console.log(error);
                                alert("Error sending password reset email. Try again later.")
                            });
                            props.navigation.navigate('SignIn');
                        }}
                    >
                        Send Instructions
                    </Button>
                </Card>
            </View>
        )}
    </AuthContext.Consumer>
    
  )
}
