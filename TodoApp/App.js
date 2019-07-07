import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Container from './containers/Container';
import { Header } from 'react-native-elements';
//import Header from './containers/Header';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'Todo App', style: { color: '#fff', fontWeight: 'bold' } }}
        rightComponent={{ icon: 'home', color: '#fff' }}
      />
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
