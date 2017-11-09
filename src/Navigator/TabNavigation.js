import { TabNavigator } from 'react-navigation';
import TabNavigationHomeScreen from '../Screens/TabNavigationHome'
import TabNavigationNotificationScreen from '../Screens/TabNavigationNotification'

const TabNavigation = TabNavigator(
  {
    Home: {
      screen: TabNavigationHomeScreen
    },
    Notifications: {
      screen: TabNavigationNotificationScreen
    }
  },
  {
    tabBarPosition: 'top',
    // animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#e91e63'
    }
  });

export default TabNavigation;