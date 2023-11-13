import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Animatable from 'react-native-animatable';
import { useActiveIcon } from './ActiveIconProvider';

const Toolbar = ({ navigation }) => {
    const { activeIcon, setActiveIcon } = useActiveIcon();

    const handleIconPress = (iconName) => {
        setActiveIcon(iconName);
        navigation.navigate(iconName);
    }

    return (
        <View style={styles.container}>
           <TouchableOpacity onPress={() => handleIconPress('Home')} style={[styles.IconButton, {marginLeft: 22, backgroundColor: activeIcon === 'Home' ? 'rgba(153, 204, 106, 0.2)' : 'transparent', padding: activeIcon === 'Home' ? 12 : 0, borderRadius: 12}]}>
                <Icon name='home' size={25} color={activeIcon === 'Home' ? '#99CC6A' : '#8696BB'} />
                {activeIcon === 'Home' && <Animatable.Text animation="fadeInUp" style={{color:'#99CC6A'}}>Home</Animatable.Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('PDF')} style={[styles.IconButton, {marginTop: 16, backgroundColor: activeIcon === 'PDF' ? 'rgba(153, 204, 106, 0.2)' : 'transparent', padding: activeIcon === 'PDF' ? 12 : 0, borderRadius: 12}]}>
                <Icon name='file-text-o' size={25} color={activeIcon === 'PDF' ? '#99CC6A' : '#8696BB'} />
                {activeIcon === 'PDF' && <Animatable.Text animation="fadeInUp" style={{color:'#99CC6A'}}>PDF</Animatable.Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('Chart')} style={[styles.IconButton, {backgroundColor: activeIcon === 'Chart' ? 'rgba(153, 204, 106, 0.2)' : 'transparent', padding: activeIcon === 'Chart' ? 12 : 0, borderRadius: 12}]}>
                <Icon name='line-chart' size={22} color={activeIcon === 'Chart' ? '#99CC6A' : '#8696BB'} />
                {activeIcon === 'Chart' && <Animatable.Text animation="fadeInUp" style={{color:'#99CC6A'}}>Chart</Animatable.Text>}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleIconPress('Profile')} style={[styles.IconButton, {marginRight: 22, backgroundColor: activeIcon === 'Profile' ? 'rgba(153, 204, 106, 0.2)' : 'transparent', padding: activeIcon === 'Profile' ? 12 : 0, borderRadius: 12}]}>
                <Icon name='user-o' size={22} color={activeIcon === 'Profile' ? '#99CC6A' : '#8696BB'} />
                {activeIcon === 'Profile' && <Animatable.Text animation="fadeInUp" style={{color:'#99CC6A'}}>Profile</Animatable.Text>}
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        width: "100%",
        height: 80,
        position: "absolute",
        bottom: 0,
        backgroundColor: "#FFFFFF",
        borderWidth: 1,
        borderColor: '#F9F9F9',
        justifyContent: 'space-between',
        gap: 10
    },
    IconButton: {
        marginTop: 16,
        marginBottom: 16,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 16,
    }
})


export default Toolbar;