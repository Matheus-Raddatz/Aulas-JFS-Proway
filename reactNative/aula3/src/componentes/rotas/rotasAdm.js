import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastrarUsuario from '../adm/caduser';
import ConsultarUsuario from '../adm/conUser';
import Home from '../home';
const Stack = createNativeStackNavigator();

export default function RotasAdm() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Cadastro User' component={CadastrarUsuario} />
            <Stack.Screen name='Consulta User' component={ConsultarUsuario} />
        </Stack.Navigator>
    )
}