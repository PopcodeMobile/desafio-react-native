import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Task from './pages/Task';
import Splash from './pages/Splash';

const Routes = createAppContainer(createSwitchNavigator({ Splash, Task }));

export default Routes;
