// @flow
import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import ToDoScreen from '../Features/ToDo/Containers/ToDoScreen';

function AppNavigation() {
  return (
    <Stack.Navigator initialRouteName="ToDo" headerMode="none">
      <Stack.Screen name="ToDo" component={ToDoScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigation;
