// @flow
import React from 'react'
import { TouchableOpacity, Text, View, Image } from 'react-native'
import { Images } from '../../../Themes'
import styles from './ToDo.style'

type Props = {
  text: string,
  onPressText: () => mixed,
  toggled: boolean,
  toggleToDo: () => mixed
}

const ToDo = ({ text, onPressText, toggled, toggleToDo }: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleToDo} style={[styles.radioButton, toggled && styles.toggledRadioButton]}>
        {toggled && <Image source={Images.check} />}
      </TouchableOpacity>
      <Text onPress={onPressText} style={[styles.text, toggled && styles.toggledText]}>
        {text}
      </Text>
    </View>
  )
}

export default ToDo
