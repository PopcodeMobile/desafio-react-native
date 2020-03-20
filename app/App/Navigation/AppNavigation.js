// @flow
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../Containers/HomeScreen'
import UserScreen from '../Features/User/Containers/UserScreen'

const Stack = createStackNavigator()

function AppNavigation () {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen name='Home' component={HomeScreen} />
      <Stack.Screen name='Profile' component={UserScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
