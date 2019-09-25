import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import LoginPage from './src/pages/LoginPage';
import CadastroCliente from './src/pages/CadastroCliente';
import MenuApp from './src/pages/MenuApp';
import SolicitarPedido from './src/pages/SolicitarPedido';
import CadastroClienteLogin from './src/pages/CadastroClienteLogin';
import test from './src/pages/test';

const AppNavigator = createStackNavigator({


  

  'Login': {
    screen: LoginPage
  },
  
  'test': {
    screen: test
  },

'Cadastro': {
      screen: CadastroCliente
    },


    'CadastroClienteLogin': {
      screen: CadastroClienteLogin
    },
    
   'SolicitarPedido': {
      screen: SolicitarPedido
    },
    
  'Menu': {
      screen: MenuApp
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