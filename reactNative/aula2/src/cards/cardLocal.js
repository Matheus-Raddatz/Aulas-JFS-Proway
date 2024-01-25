import { Pressable, Text, View } from "react-native"
import styles from "../estilos/estilos"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function CardLocal(props) {
    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> Local {props.local.id} </Text>
            <Text> CEP: {props.local.cep} </Text>
            <Text> Nome: {props.local.nome} </Text>
            <Text> Rua: {props.local.rua} </Text>
            <Text> Bairro: {props.local.bairro} </Text>
            <Text> Cidade: {props.local.cidade} </Text>
            <Text> Estado: {props.local.estado} </Text>
            <Text> Descrição: {props.local.descricao} </Text>
            <View style={styles.cardBody}>
                <Pressable onPress={() => props.rota.navigate('edicaolc',
                    { navigation: props.rota, idlocal: props.local.id })} style={styles.cardButtonEditar}>
                    <Text>Editar</Text></Pressable>
                <Pressable onPress={() => props.rota.navigate('exclusaolc',
                    { navigation: props.rota, idlocal: props.local.id })} style={styles.cardButtonExcluir}>
                    <Text>Excluir</Text></Pressable>
            </View>
        </View>
    )
}