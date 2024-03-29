import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen816963Navigator from '../features/BlankScreen816963/navigator';
import BlankScreen616961Navigator from '../features/BlankScreen616961/navigator';
import BlankScreen416958Navigator from '../features/BlankScreen416958/navigator';
import BlankScreen216952Navigator from '../features/BlankScreen216952/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen816963: { screen: BlankScreen816963Navigator },
BlankScreen616961: { screen: BlankScreen616961Navigator },
BlankScreen416958: { screen: BlankScreen416958Navigator },
BlankScreen216952: { screen: BlankScreen216952Navigator },

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
