import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { 
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation';

// Importação dos arquivos das telas
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Concluidas from './src/screens/Concluidas';
import Tarefa from './src/screens/Tarefa';
import Editar from './src/screens/Editar';

// Navegação da tela de carregamento
const SplashNavigator = createStackNavigator(
  {
    Splash: {
      screen: Splash,
    },
  },
);

// Navegação da Home
const HomeNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
);

// Navegação da tela de concluidas
const ConcluidasNavigator = createStackNavigator(
  {
    Concluidas: {
      screen: Concluidas,
    },
  },
);

// Navegação da tela de tarefas
const TarefaNavigator = createStackNavigator(
  {
    Tarefa: {
      screen: Tarefa,
    },
  },
);

// Navegação da tela de editar tarefas
const EditarNavigator = createStackNavigator(
  {
    Editar: {
      screen: Editar,
    },
  },
);

// Navegação da Tab Bar
const TabNavigator = createBottomTabNavigator(
  {
    HomeNavigator: {
      screen: HomeNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="list-ol" size={25} color={tintColor} />
        )
      },
    },
    ConcluidasNavigator: {
      screen: ConcluidasNavigator,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="check" size={25} color={tintColor} />
        )
      },
    },
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: '#ffffff',
      inactiveTintColor: '#a6a6a6',
      style: {
          backgroundColor: '#9400D3',
      }
    },
    initialRouteName: 'HomeNavigator',
  },
);

// Componete que altera as rotas do aplicativo
const AppNavigator = createSwitchNavigator(
  {
    HomeRoute: TabNavigator,
    TarefaRoute: TarefaNavigator,
    EditarRoute: EditarNavigator,
    SplashRoute: SplashNavigator,
  },
  {
    initialRouteName: 'SplashRoute',
  },
);

// Encapsulamento das rotas para exportação
const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;
