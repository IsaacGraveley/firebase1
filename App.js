
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

//Import the tabs class from the tabs.js file, and the LoginScreen class from the login screen file.
import Tabs from './tabs';
import LoginScreen from './loginScreen';

//create a stack navigator with rhe variable stackNavigator, give it the properties Login and Tabs
const stackNavigator = createStackNavigator({
  Login: LoginScreen,
  Tabs: Tabs
},
  {

})

//Create an app container around the stacknavigator
export default createAppContainer(stackNavigator)
