import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TodoList from './pages/TodoList';
import TodoActive from './pages/TodoActive';
import TodoComplete from './pages/TodoComplete';

export default createAppContainer(
    createBottomTabNavigator({
        Add: { screen: TodoList },
        Actives: { screen: TodoActive },
        Completes: { screen: TodoComplete },
    }, {
            initialRouteName: 'Add',
            defaultNavigationOptions: {
                headerTintColor: '#000',
                headerTitle: 'App Todo',
                headerBackTitle: null,
            },
            tabBarOptions: {
                activeTintColor: 'tomato',
                inactiveTintColor: 'gray',
            },
            animationEnabled: true,
            swipeEnabled: true,
        })
);