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
import Chart from './components/Chart';

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
            <Chart title="Blood Pressure" />
          </View>
          <View style={styles.chartsContainer}>
            <Chart title="Glucose" />
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
