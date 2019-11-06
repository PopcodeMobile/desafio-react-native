import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ListTodos from './components/ListTodos';
import PaperTodo from './components/PaperTodo';

const FinishedScreen = {
    screen: ListTodos,
	navigationOptions: () => ({
		tabBarIcon: ({ tintColor }) => (
			<Icon
				name="playlist-check"
				color={tintColor}
				size={25}
			/>
		),
	}),
};


const PenddingScreen = {
	screen: ListTodos,
	navigationOptions: () => ({
		tabBarIcon: ({ tintColor }) => (
			<AntDesign
				name="clockcircleo"
				color={tintColor}
				size={20}
			/>
		),
	}),
};



const Route = createStackNavigator({
	ListTodos: {
		screen: createBottomTabNavigator({
				Pendentes: PenddingScreen,
				Finalizadas: FinishedScreen,
        }, 
        {
			tabBarOptions: {
				activeTintColor: '#fff',
				inactiveTintColor: '#000',
				style: {
					backgroundColor: '#1E90FF',
				},
				showLabel: true,
			},
		}),
		navigationOptions: {
			title: '[Popcode Challenge] To do App',
			headerStyle: {
				backgroundColor: "#1E90FF",
			},
			headerTintColor: "#fff",
		}
	},
	PaperTodo: PaperTodo,
});

export default createAppContainer(Route);