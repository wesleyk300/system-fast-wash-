import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';

const AppNavigator = createStackNavigator({
    'Login': {
        screen: LoginPage
    },
}, {
    defaultNavigationOptions:{
        title:"System Fast Wash",
        headerTintColor: "wite",
        headerStyle:{
          backgroundColor: '#2E8B57',
          borderBottomWidth: 1,
          borderBottomColor: '#C5C5C5',
    },
    headerTitleStyle:{
          color:'white',
          fontSize: 20,
          
    }

  }
});

const AppContainer = createAppContainer (AppNavigator); 
export default AppContainer;