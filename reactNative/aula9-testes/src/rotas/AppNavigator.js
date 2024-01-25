import { createStackNavigator } from '@react-navigation/stack'
import DetailsScreen from '../componentes/DetailsScreen'
import Form from '../componentes/form'
import HomeScreen from '../componentes/HomeScreen'

const Stack = createStackNavigator()

export default function AppNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Details' component={DetailsScreen} />
            <Stack.Screen name='Form' component={Form} />
        </Stack.Navigator>
    )
}