import {createSwitchNavigator,createAppContainer} from 'react-navigation';

import Home from './pages/Home';
import NewTask from './pages/NewTask';
import EditTask from './pages/EditTask';

const Routes = createAppContainer(
    createSwitchNavigator({
        Home,
        NewTask,
        EditTask     
    })
);
export default Routes;