import React from 'react'
import { View, StyleSheet } from 'react-native'
import { storiesOf, addDecorator } from '@storybook/react-native'

import ToDo from './index'

addDecorator(storyFn => <View style = { styles.decorator } > { storyFn() } </View>)

    storiesOf('ToDo', module)
    .add('Default ToDo', () => < ToDo text = 'Title'
      toggled = { false }
      onPressText = {
        () => {
          
        } }
      toggleToDo = {
        () => {} }
      />)
      .add('Toggled ToDo', () => < ToDo text = 'Title'
        toggled onPressText = {
          () => {} }
        toggleToDo = {
          () => {} }
        />)

        const styles = StyleSheet.create({
          decorator: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }
        })