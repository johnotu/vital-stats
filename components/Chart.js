import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils';

const Chart = (props) => {
  const {title} = props;
  return (
    <View style={styles.chart}>
      <Text style={styles.chartTitle}>{title}</Text>
    </View>
  );
};

export default Chart;

const styles = StyleSheet.create({
  chart: {
    height: 240,
    padding: 15,
    backgroundColor: Colors.lighter,
    borderRadius: 5,
  },
  chartTitle: {
    color: Colors.primary,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
  },
});
