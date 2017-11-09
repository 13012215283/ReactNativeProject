import { StackNavigator } from 'react-navigation';
import HomeScreen from '../Screens/Home';
import ProfileScreen from '../Screens/Profile';

const StackNavigaton = StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Profile: {
    path: 'people/:name',
    screen: ProfileScreen
  }
})

export default StackNavigaton;