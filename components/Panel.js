import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils';

const Panel = () => {
  return (
    <View style={styles.panel}>
      <View style={styles.vitals}>
        <View>
          <Text style={styles.vitalsHeader}>Weight</Text>
          <Text style={styles.vitalsText}>68</Text>
        </View>
        <View>
          <Text style={styles.vitalsHeader}>Glucose</Text>
          <Text style={styles.vitalsText}>6.4</Text>
        </View>
        <View>
          <Text style={styles.vitalsHeader}>Pressure</Text>
          <Text style={styles.vitalsText}>120/80</Text>
        </View>
      </View>
    </View>
  );
};

export default Panel;

const styles = StyleSheet.create({
  panel: {
    height: 100,
    padding: 15,
    backgroundColor: Colors.primary,
    borderRadius: 5,
  },
  vitals: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  vitalsHeader: {
    color: Colors.white,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  vitalsText: {
    color: Colors.white,
    fontSize: 36,
    fontWeight: '600',
    textAlign: 'center',
  },
});
