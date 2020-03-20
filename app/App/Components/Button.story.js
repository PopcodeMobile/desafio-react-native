import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf, addDecorator } from '@storybook/react-native'

import Button from './Button'

addDecorator(storyFn => <View style={styles.decorator}>{storyFn()}</View>)

storiesOf('Button', module)
  .add('Default button ', () => <Button text='Text Button' onPress={() => {}} />)
  .add('Disabled button', () => <Button disabled text='Text Button' onPress={() => {}} />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
