// @flow
import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './Button.style'

type Props = {
  onPress: () => mixed,
  disabled?: boolean,
  text: string
}

const Button = ({ text, onPress, disabled }: Props) => (
  <TouchableOpacity disabled={disabled} style={[styles.container, disabled && styles.disabled]} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
)

export default Button
