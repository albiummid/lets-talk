import React, { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';
const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () => {
        auth.signInWithEmailAndPassword(email, password)
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage);
            });
    }
    useEffect(() => {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                navigation.replace('chat')
            } else {
                navigation.canGoBack() &&
                    navigation.popToTop();
                // No user is signed in.
            }
        });
    }, [])
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter Your Email"
                label="Email"
                leftIcon={{ type: 'material', name: 'email' }}
                value={email}
                onChangeText={text => setEmail(text)}
            />
            <Input
                placeholder="Enter Your Password"
                label="Password"
                leftIcon={{ type: 'material', name: 'lock' }}
                value={password}
                onChangeText={text => setPassword(text)}
                secureTextEntry
            />
            <Button title="Sign In" style={styles.button} onPress={signIn} />
            <Button title="Register" style={styles.button} onPress={() => navigation.navigate('Register')} />
        </View>
    );
};

export default LoginScreen;


const styles = StyleSheet.create({
    button: {
        width: 200,
        marginTop: 10
    },
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
})