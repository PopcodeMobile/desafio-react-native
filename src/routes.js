import React from 'react';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import ListTodos from './components/ListTodos';
import MainButton from './components/MainButton';
import PaperTodo from './components/PaperTodo';
import Find from './components/Search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

/**
 * Screens for the buttons navigation in ListTodos
*/
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

const ButtonCircleScreen = {
	screen: ListTodos,
	navigationOptions: () => ({
		tabBarButtonComponent: () => (<MainButton />),
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

const Search = {
	screen: Find,
	navigationOptions: () => ({
		tabBarIcon: ({ tintColor }) => (
			<AntDesign
				name="search1"
				color={tintColor}
				size={20}
			/>
		),
	}),
};

/**
 * Principal navigation
*/
const Route = createStackNavigator({
	ListTodos: {
		screen: createBottomTabNavigator({
				Pendding: PenddingScreen,
				Finished: FinishedScreen,
				Search: Search,
				ButtonCircle: ButtonCircleScreen,
        }, 
        {
			tabBarOptions: {
				activeTintColor: '#fff',
				inactiveTintColor: '#000',
				style: {
					backgroundColor: '#584594',
				},
				showLabel: false,
			},
		}),
		navigationOptions: {
			title: 'Minha lista de tarefas',
			headerStyle: {
				backgroundColor: "#584594",
			},
			headerTintColor: "#fff",
		}
	},
	PaperTodo: PaperTodo,
});

export default createAppContainer(Route);