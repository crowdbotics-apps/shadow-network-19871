import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import EmailAuth2195431Navigator from '../features/EmailAuth2195431/navigator';
import Feed2295430Navigator from '../features/Feed2295430/navigator';
import Settings2395429Navigator from '../features/Settings2395429/navigator';
import SignUp22495428Navigator from '../features/SignUp22495428/navigator';
import Settings95413Navigator from '../features/Settings95413/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
EmailAuth2195431: { screen: EmailAuth2195431Navigator },
Feed2295430: { screen: Feed2295430Navigator },
Settings2395429: { screen: Settings2395429Navigator },
SignUp22495428: { screen: SignUp22495428Navigator },
Settings95413: { screen: Settings95413Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
