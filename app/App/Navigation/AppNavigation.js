// @flow
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ToDoScreen from '../Features/ToDo/Containers/ToDoScreen'

const Stack = createStackNavigator() //uma tela em cima da outra

function AppNavigation () {
  return (
    <Stack.Navigator initialRouteName='ToDo' headerMode='none'>
      <Stack.Screen name='ToDo' component={ToDoScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
