import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import Toolbar from './Toolbar';
import { useChartData } from './ChartDataContext';
import { LineChart, BarChart, ProgressChart } from 'react-native-chart-kit';
import GaugeChart from './GaugeChart';

const Dashboard = ({ navigation }) => {

    const { chartData } = useChartData();

    const isEmptyFirstChart = !chartData.firstChart || chartData.firstChart.labels.length === 0 && chartData.firstChart.datasets[0].data.length === 0;
    const isEmptySecondChart = !chartData.secondChart || chartData.secondChart.datasets[0].data.length === 0;

    const dataFirstChart = isEmptyFirstChart ? {
        labels: ["", "", "", "", "", ""],
        datasets: [{ data: [0, 0, 0, 0, 0, 0] }]
    } : chartData.firstChart;

    const dataSecondChart = isEmptySecondChart ? {
        datasets: [{ data: [0] }]
    } : chartData.secondChart;

    return (
        <>
        <ScrollView style={styles.container}
          contentContainerStyle={{
            alignItems: 'flex-start',
            justifyContent: 'center',
          }}
        >
            <Text style={{fontSize: 20, fontWeight: 600, color: '#99CC6A', marginBottom: 40, marginTop: 40}}>MEU DASHBOARD</Text>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <BarChart
                    data={dataFirstChart}
                    width={Dimensions.get("window").width - 60} 
                    height={220}
                    yAxisInterval={1} 
                    chartConfig={{
                        backgroundColor: "#FFFFFF",
                        backgroundGradientFrom: "#FFFFFF",
                        backgroundGradientTo: "#FFFFFF",
                        color: (opacity = 1) => `rgba(153, 204, 106, ${opacity})`,
                        labelColor: (opacity = 1) => `rgba(153, 204, 106, ${opacity})`,
                        style: {
                        borderRadius: 16,
                        },
                        propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#99CC6A"
                        }
                    }}
                    style={{
                        marginVertical: 8,
                        borderRadius: 16,
                        marginBottom: 40,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                />
                <View style={styles.GaugeBox}>
                    <GaugeChart data={dataSecondChart}/>
                </View>
            </View>
        </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        padding: 30,
        marginTop: 60,
    },
    GaugeBox: {
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: "#000",
        backgroundColor: 'white',
        padding: 30,
        height: 250,
        width: 320,
        borderRadius: 16,
        shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
    }
})

export default Dashboard;