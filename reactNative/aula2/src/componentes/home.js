import { StatusBar } from 'expo-status-bar';
import { Text, Pressable, View } from 'react-native'
import styles from '../estilos/estilos'

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Melhor Agenda de Todas!!</Text>
            <StatusBar style="auto"/>
        </View>
    )
}