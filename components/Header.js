import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../utils';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>VitalStats</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    height: 60,
    padding: 15,
    backgroundColor: Colors.white,
  },
  text: {
    color: Colors.primary,
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});
