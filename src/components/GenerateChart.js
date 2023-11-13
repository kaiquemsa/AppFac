import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Button } from 'react-native';
import { useChartData } from './ChartDataContext';

const ChartScreen = ({ navigation }) => {

    const initialChartData = {
        firstChart: {
            labels: [],
            datasets: [{ data: [] }]
        },
        secondChart: {
            labels: [],
            datasets: [{ data: [] }]
        }
    };
    
    const { chartData = initialChartData, setChartData } = useChartData();
    

    const handleInputChange = (text, index, isLabel, isSecondChart) => {
        setChartData(prevChartData => {
            const newChartData = { ...prevChartData };
            if (isSecondChart) {
                if (!newChartData.secondChart) {
                    newChartData.secondChart = {
                        labels: [],
                        datasets: [{ data: [] }]
                    };
                }
                if (isLabel) {
                    newChartData.secondChart.labels[index] = text;
                } else {
                    newChartData.secondChart.datasets[0].data[index] = Number(text);
                }
            } else {
                if (!newChartData.firstChart) {
                    newChartData.firstChart = {
                        labels: [],
                        datasets: [{ data: [] }]
                    };
                }
                if (isLabel) {
                    newChartData.firstChart.labels[index] = text;
                } else {
                    newChartData.firstChart.datasets[0].data[index] = Number(text);
                }
            }
            return newChartData;
        });
    };
    

    const handleCreateChart = () => {
        // console.log(chartData);
    };

    return (
        <>
        <View style={styles.container}>
        <Text style={styles.title}>Insira os dados de performance:</Text>
            {Array.from({ length: 5 }, (_, i) => (
                <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        placeholder="Label"
                        onChangeText={text => handleInputChange(text, i, true, false)}
                        style={styles.input}
                    />
                    <TextInput
                        placeholder="Data"
                        onChangeText={text => handleInputChange(text, i, false, false)}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>
            ))}
            <Text style={[styles.title, {marginTop: 20}]}>Insira os dados de preseça:</Text>
            {Array.from({ length: 5 }, (_, i) => (
                <View key={i} style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <TextInput
                        placeholder="Data"
                        onChangeText={text => handleInputChange(text, i, false, true)}
                        keyboardType="numeric"
                        style={styles.input}
                    />
                </View>
            ))}
            <Button title="Criar gráfico" onPress={handleCreateChart} />
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
    title: {
        fontSize: 24,
        fontWeight: 'semibold',
        marginBottom: 24,
        color: '#99CC6A'
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 16,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 4,
        paddingLeft: 8,
    },
})

export default ChartScreen;
