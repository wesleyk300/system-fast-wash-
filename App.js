import { createAppContainer, createStackNavigator } from 'react-navigation';
import LoginPage from './src/pages/LoginPage';
import CadastroCliente from './src/pages/CadastroCliente';

const AppNavigator = createStackNavigator({
     'Login': {
      screen: LoginPage
    },
    
    'Cadastro': {
      screen: CadastroCliente
    },

}, {
    defaultNavigationOptions:{
        title:"System Fast Wash",
        headerTintColor: "white",
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