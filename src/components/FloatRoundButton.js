/* @flow */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

type propsFloatRoundButton = { addTask : any, style? : Object };

const FloatRoundButton = ({addTask, style} : propsFloatRoundButton) => (
  <TouchableOpacity
    style={style? [styles.button, style] : styles.button}
    onPress={addTask}
  >
    <Text style={styles.buttonText}> + </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    zIndex: 11,
    right: 20,
    bottom: 30,
    backgroundColor: '#E91E63',
    width: 60,
    height: 60,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 24
  }
});

export default FloatRoundButton;
