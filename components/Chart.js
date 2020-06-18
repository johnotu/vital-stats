import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../utils';

import {LineChart} from 'react-native-chart-kit';

const screenWidth = Dimensions.get('window').width;

const Chart = (props) => {
  const {title, data} = props;

  return (
    <View style={styles.chart}>
      <Text style={styles.chartTitle}>{title}</Text>

      <LineChart
        data={data}
        width={screenWidth * 0.82}
        height={180}
        // yAxisLabel={'$'}
        chartConfig={{
          backgroundGradientFrom: Colors.white,
          backgroundGradientTo: Colors.white,
          fillShadowGradient: Colors.white,
          decimalPlaces: 1, // optional, defaults to 2dp
          color: (opacity = 0) => `rgba(44, 62, 80, ${opacity})`,
          propsForDots: {
            r: '0',
          },
        }}
        bezier
        style={styles.chartInsert}
      />
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    height: 260,
    padding: 15,
    backgroundColor: Colors.lighter,
    borderRadius: 5,
  },
  chartTitle: {
    color: Colors.primaryDarker,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
  chartInsert: {
    marginVertical: 8,
    borderRadius: 5,
  },
});
