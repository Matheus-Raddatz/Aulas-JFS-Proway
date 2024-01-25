import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import CadastroContatos from '../componentes/cadContatos';
import ConsultaContato from '../componentes/consContato';

const Tab = createMaterialBottomTabNavigator();

export default function RotasContato() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Consulta' component={ConsultaContato} />
            <Tab.Screen name='Cadastro' component={CadastroContatos} />
        </Tab.Navigator>
    )
}