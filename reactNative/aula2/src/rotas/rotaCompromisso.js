import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from '@expo/vector-icons/FontAwesome'
import Cadastrocp from '../componentes/cadastrocp';
import Consultacp from '../componentes/consultacp';

const Drawer = createDrawerNavigator();

export default function RotaCompromisso() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='Cadastrar Compromisso'
                component={Cadastrocp}
                options={() => ({ drawerIcon: () => <Icon name='calendar-plus-o' size={26} color='black' /> })} />

            <Drawer.Screen
                name='Consultar Compromissos'
                component={Consultacp}
                options={() => ({ drawerIcon: () => <Icon name='bars' size={26} color='black' /> })} />
        </Drawer.Navigator>
    );
}