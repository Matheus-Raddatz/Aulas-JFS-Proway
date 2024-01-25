import { NavigationContainer } from '@react-navigation/native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import RotasAdm from './src/componentes/rotas/rotasAdm';
import RotasCompras from './src/componentes/rotas/rotasCompras';
import RotasFinanceiro from './src/componentes/rotas/rotasFinanceiro';

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="ADM" component={RotasAdm} />
        <Tab.Screen name="Compras" component={RotasCompras} />
        <Tab.Screen name="Financeiro" component={RotasFinanceiro} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

