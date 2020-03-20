// @flow
import React from 'react'
import { useSelector } from 'react-redux'
import { View, Text, Image, ActivityIndicator } from 'react-native'
import TextWithLabel from '../../../Components/TextWithLabel'
import Button from '../../../Components/Button'
import type { UserType } from '../Entities'
import UserUISelectors from '../Selectors/Ui'
import UserEntitySelectors from '../Selectors/Entity'
import styles from './UserScreen.style'

type Props = {
  navigation: *
}

const UserScreen = ({ navigation }: Props) => {
  const fetching: boolean = useSelector(UserUISelectors.fetching)
  const error: ?string = useSelector(UserUISelectors.error)
  const userData: UserType = useSelector(UserEntitySelectors.userData)
  return (
    <View style={styles.mainContainer}>
      {!!error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorMessage}>{error}</Text>
          <Text style={styles.errorDescription}>Não foi possível obter os dados do usuário</Text>
          <Button text='Voltar para tela anterior' onPress={() => navigation.pop()} />
        </View>
      )}
      {fetching && <ActivityIndicator size='large' style={styles.fetchingContainer} />}
      {!fetching && !error && (
        <>
          <Image style={styles.containerAvatar} source={{ uri: userData.urlAvatar }} />
          <Text style={styles.userName}>{userData.name}</Text>
          <TextWithLabel label='Login' text={userData.user} />
          <TextWithLabel label='URL Profile' text={userData.urlPerfil} />
          <TextWithLabel label='Company' text={userData.company} />
          <TextWithLabel label='Número de Repositórios' text={userData.numPublicRepos} />
          <TextWithLabel label='Número de Gists' text={userData.numPublicGists} />
          <View style={{ height: 1, backgroundColor: 'rgba(0,0,0,0.4)' }} />
        </>
      )}
    </View>
  )
}

export default UserScreen
