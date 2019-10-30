//this page imports all of our main screens, as well as the react navigation tabs package

import { createBottomTabNavigator } from 'react-navigation-tabs';
import HomeScreen from './Home';
import NewsScreen from './News';
import AddItem from './AddItem';
import List from './List';

//name our screen names and which component theyre being used with
//this basically indicates what the structure of the tabs will be and you can change the names of the tabs.
export default createBottomTabNavigator({
    Home: HomeScreen,
    News: NewsScreen,
    Add: AddItem,
    List: List
  })