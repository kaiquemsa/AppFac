import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Checkbox from 'expo-checkbox';


const Sign_in = ({ navigation }) => {

  const [isChecked, setChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Acesse</Text>
      <Text style={styles.subtitle}>Com e-mail e senha para entrar</Text>

      <View style={styles.email}>
        <Text>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail..."
        />
      </View>

      <View style={styles.password}>
        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha..."
          secureTextEntry
        />
      </View>

      <View style={styles.forgotLine}>
        <View style={styles.forgotPassword}>
          <Checkbox
            disabled={false}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#99CC6A' : undefined}
            style={styles.checkbox}
          />
          <Text style={styles.remember}>Lembrar minha senha</Text>
        </View>
        <Text style={styles.resetPassword}>Esqueci minha senha?</Text>
      </View>
      
      <View style={styles.entering}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main', { screen: 'Dashboard' })}>
            <Text style={styles.buttonText}>Acessar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonOutline} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonOutlineText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.continue}>
        <View style={[styles.lineStyle]} />
        <Text >Ou continue com </Text>
        <View style={[styles.lineStyle]} />
      </View>

      <View style={styles.icons}>
        <Image source={require('./../assets/google.png')} style={styles.icon}></Image>
        <Image source={require('./../assets/facebook.png')} style={styles.icon}></Image>
      </View>

    </View>
  );
}

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
    flexDirection: 'row',
    maxWidth: 150,
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
  lineStyle: {
    borderWidth: 0.8,
    borderColor:'#E0E2E4',
    width: '50%',
    marginRight: 30,
    marginLeft: 30,
  },
  icon: {
    width: 40,
    height: 40,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginLeft: '34%',
    marginTop: 40
  }
});

export default Sign_in;
