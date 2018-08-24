import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import { ITitle } from '../interfaces/ITitle';

const styles = StyleSheet.create({
  titleSmall: {
    paddingTop: 2,
    paddingBottom: 2,
    fontSize: 20,
    color: '#070707'
  },
})

const Title = (props: ITitle) => {
  return <Text style={styles.titleSmall}>
    {props.title}
  </Text>
}

export default Title