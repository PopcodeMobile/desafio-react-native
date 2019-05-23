import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

const splashImage = require('../../../assets/images/splash.jpg');

const style = StyleSheet.create({
  imageContainer: {
    flex: 1,
  },
});

const Splash = ({ navigation }) => {
  setTimeout(() => {
    navigation.navigate('Task');
  }, 2);

  return <ImageBackground source={splashImage} style={style.imageContainer} />;
};

export default Splash;
