import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Registro from './src/componentes/registro';
import Menu from './src/componentes/menu';
import Login from './src/componentes/login';
import Toast from 'react-native-toast-message';
import CadContatos from './src/componentes/cadContatos';
import { createDrawerNavigator } from '@react-navigation/drawer';
import RotasUsuario from './src/rotas/rotasUsuario';
import RotasContato from './src/rotas/rotasContato';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name='Usuário' component={RotasUsuario} />

        <Drawer.Screen name='Contato' component={RotasContato} />
      </Drawer.Navigator >
      <Toast
        position='top'
        visibilityTime='5000'
        topOffset='80'
      />
    </NavigationContainer>
  )
}