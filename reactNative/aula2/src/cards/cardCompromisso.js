import { Pressable, Text, View } from "react-native"
import styles from "../estilos/estilos"
import { useEffect, useState } from "react"
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

export default function CardCompromisso(props) {
    const [contatos, setContatos] = useState([])
    const [locais, setLocais] = useState([])
    const [nomecontato, setNomecontato] = useState('')
    const [nomelocal, setNomelocal] = useState('')

    useEffect(() => {
        fetch('http://localhost:3000/contatos')
            .then(data => data.json())
            .then(res => {
                setContatos(res)
            })
        fetch('http://localhost:3000/locais')
            .then(data => data.json())
            .then(res => {
                setLocais(res)
            })
    }, [])
    useEffect(() => {
        setNomecontato(encontrarCtId(parseInt(props.compromisso.contatoselec)))
        setNomelocal(encontrarLcId(parseInt(props.compromisso.localselec)))
    }, [contatos, locais])

    function encontrarCtId(id) {
        const contato = contatos.find((ct) => ct.id === id)
        return contato ? contato.nome : 'Contato não encontrado'
    }

    function encontrarLcId(id) {
        const local = locais.find((lc) => lc.id === id)
        return local ? local.nome : 'Local não encontrado'
    }

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}> Compromisso {props.compromisso.id} </Text>
            <Text> Descrição: {props.compromisso.descricao} </Text>
            <Text> Contato: {nomecontato} </Text>
            <Text> Local: {nomelocal} </Text>
            <View style={styles.cardBody}>
                <Pressable onPress={() => props.rota.navigate('edicaocp',
                    { navigation: props.rota, idcompromisso: props.compromisso.id })} style={styles.cardButtonEditar}>
                    <Text>Editar</Text></Pressable>
                <Pressable onPress={() => props.rota.navigate('exclusaocp',
                    { navigation: props.rota, idcompromisso: props.compromisso.id })} style={styles.cardButtonExcluir}>
                    <Text>Excluir</Text></Pressable>
            </View>
        </View>
    )
}