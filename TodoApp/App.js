import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './containers/Container';
import Header from './containers/Header';

export default function App() {
  return (
    <View style={{flex: 1}}>
       <Header />
      <Container />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
