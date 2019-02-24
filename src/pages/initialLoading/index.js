// @flow
import React from 'react';

import { View, Text, ActivityIndicator } from 'react-native';

import styles from './styles';

const InitialLoading = () => (
  <View style={styles.container}>
    <Text style={styles.title}>TodoApp</Text>
    <ActivityIndicator />
  </View>
);

export default InitialLoading;
