import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Text as TextSvg } from 'react-native-svg'
import Speedometer, {
  Indicator,
  Progress,
  Arc
} from 'react-native-cool-speedometer'

const GaugeChart =  ({data}) => {
  const center = 250 / 2
  const sum = data.datasets[0].data.reduce((a, b) => a + b, 0);
  const avg = (sum / data.datasets[0].data.length) || 0;
  const percentage = Math.round(avg);

  return (
    <View style={styles.container}>
      <Speedometer
        value={percentage}
        max={100}
        angle={180}
        lineCap="round"
        accentColor="#99CC6A"
      >
        <Arc arcWidth={30} />
        <Progress arcWidth={30} />
        <Indicator>
          {(value, textProps) => (
            <TextSvg
            {...textProps}
            fontSize={40}
            fill="#99CC6A"
            x={center - 10}
            y={center}
            textAnchor="middle"
            alignmentBaseline="middle"
          >
            {value}%
          </TextSvg>
          )}
        </Indicator>
      </Speedometer>
      <Text style={styles.labelRight}>100</Text>
      <Text style={styles.labelTop}>50</Text>
      <Text style={styles.labelLeft}>0</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: 80
  },
  labelTop: {
    position: 'absolute',
    top: -95,
    color: '#99CC6A'
  },
  labelLeft: {
    position: 'absolute',
    left: -20,
    color: '#99CC6A'
  },
  labelRight: {
    position: 'absolute',
    right: -30,
    color: '#99CC6A'
  },
});

export default GaugeChart;
