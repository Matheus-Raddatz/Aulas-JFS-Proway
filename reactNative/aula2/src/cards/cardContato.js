import { Pressable, Text, View } from "react-native"
import styles from "../estilos/estilos"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function CardContato(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> Contato {props.contato.id} </Text>
            
            <Text> Nome: {props.contato.nome} </Text>
            <Text> Email: {props.contato.email} </Text>
            <Text> Fone: {props.contato.fone} </Text>

            <View style={styles.cardBody}>
                <Pressable onPress={() => props.rota.navigate('edicaoct',
                    { navigation: props.rota, idcontato: props.contato.id })} style={styles.cardButtonEditar}>
                    <Text>Editar</Text></Pressable>

                <Pressable onPress={() => props.rota.navigate('exclusaoct',
                    { navigation: props.rota, idcontato: props.contato.id })} style={styles.cardButtonExcluir}>
                    <Text>Excluir</Text></Pressable>
            </View>
        </View>
    )
}