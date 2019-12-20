import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Main from './pages/Main';
import Completed from './pages/Completed';
import Deleted from './pages/Deleted';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Main,
      Completed,
      Deleted,
    },
    {
      headerLayoutPreset: 'center',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#c1dbcf',
          size: 50,
        },
        headerTintColor: '#4a4a4a',
        headerTitleStyle: 'bold',
      },
    }
  )
);

export default Routes;
