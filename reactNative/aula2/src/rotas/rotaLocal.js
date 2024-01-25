import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/FontAwesome'
import Cadastrolc from '../componentes/cadastrolc';
import Consultalc from '../componentes/consultalc';

const Drawer = createDrawerNavigator();

export default function RotaLocal() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Cadastrar Local'
                component={Cadastrolc}
                options={() => ({ drawerIcon: () => <Icon name='plus-circle' size={26} color='black' /> })} />

            <Drawer.Screen
                name='Consultar Locais'
                component={Consultalc}
                options={() => ({ drawerIcon: () => <Icon name='bars' size={26} color='black' /> })} />
        </Drawer.Navigator>
    );
}