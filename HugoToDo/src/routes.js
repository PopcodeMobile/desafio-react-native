import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Task from './pages/Task';
import Splash from './pages/Splash';

const MainStack = createStackNavigator({ Task }, { initialRouteName: 'Task', headerMode: 'none' });

const Routes = createAppContainer(createSwitchNavigator({ Splash, MainStack }));

export default Routes;
