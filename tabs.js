import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Home';
import NewsScreen from './News';
import AddItem from './AddItem';
import List from './List';


//name our screen names and which component theyre being used with
export default createBottomTabNavigator({
    Home: HomeScreen,
    News: NewsScreen,
    Add: AddItem,
    List: List
  })