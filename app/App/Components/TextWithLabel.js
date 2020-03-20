// @flow
import React from 'react'
import { Text, View } from 'react-native'
import styles from './TextWithLabel.style'

const TextWithLabel = ({ label, text }: { label: string, text: string | number }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.description}>{text}</Text>
  </View>
)

export default TextWithLabel
