import React from 'react'
import { StyleSheet, View } from 'react-native'
import { addDecorator, storiesOf } from '@storybook/react-native'

import TextWithLabel from './TextWithLabel'

addDecorator(storyFn => <View style={styles.decorator}>{storyFn()}</View>)

storiesOf('Text with Label', module).add('Default', () => <TextWithLabel text='Description' label='Label' />)

const styles = StyleSheet.create({
  decorator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
