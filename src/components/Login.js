import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Button, StyleSheet, ImageBackground, Image } from 'react-native';

const Login = ({ navigation }) => {
    return (
        <><ImageBackground
            source={require('../../src/assets/woman_app.png')}
            style={styles.background}
            resizeMode='contain'
        >
        </ImageBackground><View style={styles.container}>
                <Text style={styles.title}>Ótimo dia!</Text>
                <Text style={styles.subtitle}>Como deseja acessar?</Text>
                <TouchableOpacity style={styles.button}>
                    <Image source={require('./../assets/google.png')} style={styles.icon}></Image>
                    <Text style={styles.buttonText}>Entrar com o Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.secondButton} onPress={() => navigation.navigate('Signin')}>
                    <Text style={styles.secondButtonText}>Outras formas</Text>
                </TouchableOpacity>
            </View></>
      );
    };

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 30,
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        flexDirection: 'row',
        padding: 10,
        width: '80%',
        padding: 15,
        backgroundColor: '#99CC6A',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginBottom: 10,
    },
    secondButton: {
        width: '80%',
        padding: 15,
        backgroundColor: '#FFFFF',
        borderColor: '#D7D7D7',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        borderWidth: 2,
        marginBottom: 10,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
    },
    secondButtonText: {
        color: '#232F38',
        fontSize: 16,
    },
    icon: {
        width: 30,
        height: 30,
        position: 'absolute',
        left: 10,
        width: 30,
        height: 30,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
        marginLeft: 30,
        marginBottom: -60,
    }
});
export default Login;