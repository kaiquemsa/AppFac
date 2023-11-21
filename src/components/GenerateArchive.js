import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { useChartData } from './ChartDataContext';

import * as Print from 'expo-print';
import Toast from 'react-native-root-toast';

const PDFScreen = ({ navigation, route }) => {
    const { chartData } = useChartData();

    const { firstChartData, secondChartData } = route.params || {};

    const createPDF = async () => {
        let htmlContent = `
            <h2>Gráfico de Performance:</h2>
            <p>${JSON.stringify(firstChartData)}</p>
            <h2>Gráfico de Presença:</h2>
            <p>${JSON.stringify(secondChartData)}</p>
        `;

        try {
            const { uri } = await Print.printToFileAsync({ html: htmlContent });
            console.log(`PDF criado em: ${uri}`);
            Toast.show('PDF criado com sucesso!', {
                duration: Toast.durations.LONG,
            });
        } catch (err) {
            console.error(err);
            Toast.show('Erro ao criar PDF.', {
                duration: Toast.durations.LONG,
            });
        }
    }

    return (
        <>
        <View style={styles.container}>
            <Text style={{fontSize: 20, fontWeight: 600, color: '#99CC6A', marginBottom: 20}}>Para gerar o certificado clique no botão</Text>
            <TouchableOpacity style={styles.fab} onPress={createPDF}>
                <Text style={styles.fabIcon}>+</Text>
            </TouchableOpacity>
        </View>
        </>
    )
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
      fab: {
        width: 56,
        height: 56,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#99CC6A',
        borderRadius: 30,
        elevation: 8
    },
    fabIcon: {
        fontSize: 24,
        color: 'white'
    }
})

export default PDFScreen;
