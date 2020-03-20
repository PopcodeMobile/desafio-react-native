// @flow
import React, { useCallback, useState } from 'react'
import { View, Text, TextInput } from 'react-native'
import { useDispatch } from 'react-redux'
import { actions as UserActionsUI } from '../Features/User/Redux/Ui'
import Button from '../Components/Button'
import styles from './HomeScreen.style'

type Props = {
  navigation: *,
  getUser: (user: string) => mixed
}

type GetUserType = (user: string) => void

const HomeScreen = ({ navigation }: Props) => {
  const dispatch = useDispatch()
  const getUser: GetUserType = useCallback(user => dispatch(UserActionsUI.request(user)))

  const [typedText, setTypedText] = useState('')

  return (
    <View style={styles.container}>
      <Text>User</Text>
      <TextInput
        autoCapitalize='none'
        onChangeText={text => setTypedText(text)}
        placeholder='Digite o seu usário do GitHub'
        style={styles.textInput}
      />
      <Button
        disabled={!typedText}
        text='Navegar para Tela de Perfil'
        onPress={() => {
          getUser(typedText)
          navigation.push('Profile')
        }}
      />
    </View>
  )
}

export default HomeScreen
