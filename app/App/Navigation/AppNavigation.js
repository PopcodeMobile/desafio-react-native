// @flow
import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import ToDoFeature from '../Features/ToDo'

const Stack = createStackNavigator()

function AppNavigation () {
  return (
    <Stack.Navigator initialRouteName='ToDo' headerMode='none'>
      <Stack.Screen name='ToDo' component={ToDoFeature.screens.ContextProvider} />
    </Stack.Navigator>
  )
}

export default AppNavigation
