import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements';
import { auth } from '../firebase';

const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURL, setImageUrl] = useState('');
    const register = () => {
        auth.createUserWithEmailAndPassword(email, password)
            .then((userCredential) => {
                // Signed in 
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name,
                    photoURL: imageURL ? imageURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png"
                }).catch(function (error) {
                    alert(error);
                });
                navigation.replace('Chat');
            })
            .catch((error) => {
                var errorMessage = error.message;
                alert(errorMessage)

            });
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="Enter Your Name"
                label="Name"
                leftIcon={{ type: 'material', name: 'badge' }}
                value={name}
                onChangeText={text => setName(text)}
            />
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
            <Input
                placeholder="Enter Your Image URL"
                label="Profile Picture"
                leftIcon={{ type: 'material', name: 'face' }}
                value={imageURL}
                onChangeText={text => setImageUrl(text)}
            />

            <Button title="Register" style={styles.button} onPress={register} />
        </View>
    );
};

export default RegisterScreen;


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