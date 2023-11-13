import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Logo from './../assets/namLogo.svg';

export default function SplashScreen({ navigation }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#99CC6A' }}>
      <Logo width={220} height={80} />
    </View>
  );
}
