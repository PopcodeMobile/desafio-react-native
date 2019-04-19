import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
const icon = require('../imgs/todo3.png');



export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
       <Image source={icon}/>
       <Text style={styles.text}> My to do List </Text>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: 'white',
    padding: 8,
    
  },
  text:{
    paddingTop:10,
    fontSize:30,
  }
  
});
