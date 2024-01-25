import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RotaContato from './src/rotas/rotaContato';
import RotaLocal from './src/rotas/rotaLocal';
import RotaCompromisso from './src/rotas/rotaCompromisso';
import Home from './src/componentes/home';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Info' component={Home} />
        <Tab.Screen name='Contato' component={RotaContato} />
        <Tab.Screen name='Local' component={RotaLocal} />
        <Tab.Screen name='Compromisso' component={RotaCompromisso} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}