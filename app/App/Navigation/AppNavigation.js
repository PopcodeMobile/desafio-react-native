// @flow
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ToDoScreen from '../Features/ToDo/Containers/ToDoScreen/ToDoScreen'

const Stack = createStackNavigator()

function AppNavigation () {
  return (
    <Stack.Navigator initialRouteName='ToDo' headerMode='none'>
      <Stack.Screen name='ToDo' component={ToDoScreen} />
    </Stack.Navigator>
  )
}

export default AppNavigation
