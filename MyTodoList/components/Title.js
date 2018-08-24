import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ITitle } from '../interfaces/ITitle';

const styles = StyleSheet.create({
  title: {
    paddingTop: 10,
    paddingBottom: 5,
    fontSize: 25,
    color: '#030303'
  }
})

const Title = (props: ITitle) => {
  return <Text style={styles.title}>
    {props.title}
  </Text>
}

export default Title