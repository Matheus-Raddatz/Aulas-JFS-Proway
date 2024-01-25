import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/FontAwesome'
import Cadastroct from '../componentes/cadastroct';
import Consultact from '../componentes/consultact';

const Drawer = createDrawerNavigator();

export default function RotaContato() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Cadastrar Contato'
                component={Cadastroct}
                options={() => ({ drawerIcon: () => <Icon name='user-plus' size={26} color='black' /> })} />

            <Drawer.Screen
                name='Consultar Contatos'
                component={Consultact}
                options={() => ({ drawerIcon: () => <Icon name='bars' size={26} color='black' /> })} />
        </Drawer.Navigator>
    );
}