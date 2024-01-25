import Icon from '@expo/vector-icons/FontAwesome'
import ContasAPagar from '../financeiro/contasAPagar';
import ContasAReceber from '../financeiro/contasAReceber';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();

export default function RotasFinanceiro() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Contas A Pagar"
                component={ContasAPagar}
                options={{ tabBarIcon: () => <Icon name='minus' size={26} color={'red'} /> }} />

            <Tab.Screen
                name="Contas A Receber"
                component={ContasAReceber}
                options={{ tabBarIcon: () => <Icon name='plus' size={26} color={'green'} /> }} />
        </Tab.Navigator>
    )
}

