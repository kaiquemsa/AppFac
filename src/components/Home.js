import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}> 
      <Text style={styles.title}>Bem-Vindo!</Text>
      <Button
        title="Login"
        onPress={() => navigation.navigate('Login')}
        style={styles.button}
      />
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
        style={styles.button}
      />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    button: {
      marginTop: 10,
    },
  });

export default Home;

