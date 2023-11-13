import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button as Button2 } from 'react-native';
import { Input, Button } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';


const Profile = ({ navigation }) => {
  const [nome, setNome] = useState('');
  const [escola, setEscola] = useState('');
  const [anoLetivo, setAnoLetivo] = useState('');
  const [fotoPerfil, setFotoPerfil] = useState(require('./../assets/userIcon.png'));
  const [isEditing, setIsEditing] = useState(false); // Adicione este estado

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setFotoPerfil(result.assets[0].uri);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.containerUp}>
          <Text style={{marginTop:20, color: 'white', fontWeight: 'bold', fontSize: 14}}>Edit Profile</Text>
          <TouchableOpacity style={styles.borderIcon} onPress={pickImage}>
          {fotoPerfil && <Image source={{ uri: fotoPerfil }} style={{ width: 145, height: 145, borderRadius: 100 }} />}
          </TouchableOpacity>
        </View>
        <View style={{alignItems: 'center'}}>
          <TouchableOpacity
              style={{backgroundColor: '#99CC6A', width: 105, height: 30, alignItems: 'center', justifyContent: 'center', borderRadius: 5}}
              onPress={() => setIsEditing(true)} // Ative a edição quando este botão for pressionado
          >
              <Text style={{color: 'white'}}>Edit Profile</Text>
          </TouchableOpacity>
          </View>
        <View style={{alignItems: 'center', marginTop: 50}}>
          <Input placeholder="Nome" value={nome} onChangeText={setNome} disabled={!isEditing}/>
          <Input placeholder="Escola" value={escola} onChangeText={setEscola} disabled={!isEditing}/> 
          <Input placeholder="Ano letivo" value={anoLetivo} onChangeText={setAnoLetivo} disabled={!isEditing}/> 
          {isEditing && <Button title="Salvar" onPress={() => {console.log('Perfil salvo'); setIsEditing(false);}} />}
        </View>
      </View>
    </>
  );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop: 60,
      },
    containerUp: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundColor: '#99CC6A',
        height: 225,
        width: '100%',
        marginBottom: 65
    },
    borderIcon: {
        backgroundColor:'#DDDDDD', 
        width: 150, 
        height: 150, 
        alignItems:'center', 
        justifyContent:'center',
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
        position: 'absolute',
        top: 130,
        left: 120
    }
})


export default Profile;