import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/FontAwesome'
import Cotacoes from '../compras/cotacoes';
import Recebimentos from '../compras/recebimentos';

const Drawer = createDrawerNavigator();

export default function RotasCompras() {
  return (
      <Drawer.Navigator>
        <Drawer.Screen
          name='Cotações'
          component={Cotacoes}
          options={() => ({drawerIcon: () => <Icon name='pencil' size={26} color='sienna' />})}/>

        <Drawer.Screen
          name='Recebimentos'
          component={Recebimentos}
          options={() => ({drawerIcon: () => <Icon name='money' size={26} color='mediumaquamarine' />})}/>
      </Drawer.Navigator>
  );
}