/**
 * VitalStats App
 * https://github.com/johnotu/vital-stats
 *
 */

import React from 'react';
import {SafeAreaView, StyleSheet, View, Text, StatusBar} from 'react-native';
import {Colors} from './utils';

import Header from './components/Header';
import Panel from './components/Panel';
import PressureChart from './components/PressureChart';
import GlucoseChart from './components/GlucoseChart';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Header />
        <View style={styles.body}>
          <View style={styles.panelContainer}>
            <Panel />
          </View>
          <View style={styles.chartsContainer}>
            <PressureChart
              systolic={[111, 128, 129, 122, 120, 115, 120]}
              diastolic={[62, 88, 88, 84, 80, 76, 82]}
            />
          </View>
          <View style={styles.chartsContainer}>
            <GlucoseChart levels={[10.2, 13.4, 15.6, 14.3, 9.6, 4.3, 6.2]} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  panelContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  chartsContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
