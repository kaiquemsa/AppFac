import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';

const Register = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    const data = `${email},${password}\n`;
    const fileUri = FileSystem.documentDirectory + 'users.txt';
    await FileSystem.writeAsStringAsync(fileUri, data, { append: true });
    Alert.alert('Sucesso', 'Usuário registrado com sucesso!');
    navigation.navigate('Signin');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastre-se</Text>
      <Text style={styles.subtitle}>Informe seu e-mail e crie uma senha </Text>

      <View style={styles.email}>
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail..."
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.email}>
          <Text>Repita seu e-mail</Text>
          <TextInput
            style={styles.input}
            placeholder="Repita seu e-mail..."
          />
        </View>

      <View style={styles.password}>
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          secureTextEntry
          onChangeText={text => setPassword(text)}
        />
      </View>
      <View style={styles.password}>
          <Text>Repita sua senha</Text>
          <TextInput
            style={styles.input}
            placeholder="Repita sua senha..."
            secureTextEntry
          />
      </View>

      <View style={styles.entering}>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'flex-start',
      backgroundColor: '#FFFFFF',
      padding: 30,
      marginTop: 60,
    },
    email: {
      width:'100%',
      gap: 10,
    },
    password: {
      width:'100%',
      gap: 10,
    },
    forgotLine: {
      flexDirection: 'row',
      marginBottom: 40,
      gap: 55
    },
    remember: {
      fontSize: 12,
      alignItems: 'center'
    },
    resetPassword: {
      fontSize: 12
    },
    forgotPassword: {
      flexDirection: 'row',
      gap: 5
    },
    checkbox: {
      backgroundColor: '#F2F5FD',
      borderColor: '#F2F5FD'
    },
    entering: {
      marginTop: 20,
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      gap: 30
    },
    title: {
      marginTop: 20,
      fontSize: 30,
      marginBottom: 10,
    },
    subtitle: {
      fontSize: 16,
      marginBottom: 40,
    },
    input: {
      width: '100%',
      height: 60,
      borderRadius: 5,
      marginBottom: 10,
      paddingLeft: 10,
      backgroundColor: '#F2F5FD',
      marginBottom: 30,
    },
    button: {
      width: '100%',
      padding: 15,
      backgroundColor: '#99CC6A',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonText: {
      color: '#FFFFFF',
      fontSize: 16,
    },
    buttonOutline: {
      width: '100%',
      padding: 15,
      borderColor: '#99CC6A',
      borderWidth: 1,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      marginBottom: 10,
    },
    buttonOutlineText: {
      color: '#232F38',
      fontSize: 16,
    },
    continue: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
      flexDirection: 'row'
    },
  });

export default Register;
