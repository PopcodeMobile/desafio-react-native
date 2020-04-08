import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf, addDecorator } from '@storybook/react-native'

import TogglableText from '.'

addDecorator(storyFn => <View style={styles.decorator}>{storyFn()}</View>)

storiesOf('Togglable Text', module)
  .add('Default Text', () => <TogglableText text='Text' toggled={false} onPressText={() => {}} />)
  .add('Toggled Text', () => <TogglableText text='Text' toggled onPressText={() => {}} />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
