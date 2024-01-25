import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../componentes/login';
import Registro from '../componentes/registro';

const Tab = createMaterialBottomTabNavigator();

export default function RotasUsuario() {
    return (
        <Tab.Navigator>
            <Tab.Screen name='Login' component={Login} />
            <Tab.Screen name='Registro' component={Registro} />
        </Tab.Navigator>
    )
}