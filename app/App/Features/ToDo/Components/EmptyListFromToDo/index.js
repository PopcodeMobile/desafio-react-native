import React from 'react'
import { View, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import styles from './styles'

export default function EmptyListFromToDo () {
  return (
    <View style={styles.container}>
      <Icon name='playlist-add-check' color='#000' size={42} />
      <Text>Adicione um novo Lembrete</Text>
      <Text> tocando em '+'.</Text>
    </View>
  )
}
