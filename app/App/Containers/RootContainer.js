// @flow
import React from 'react'
import { View } from 'react-native'
import AppNavigation from '../Navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

const RootContainer = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationContainer>
        <AppNavigation />
      </NavigationContainer>
    </View>
  )
}

export default RootContainer
