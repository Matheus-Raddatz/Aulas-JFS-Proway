import { useEffect, useState } from "react"
import { Pressable, StatusBar, Text, View } from "react-native"
import styles from "../estilos/estilos"
export default function Exclusaoct({ navigation, route }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/contatos/${route.params.idcontato}`)
            .then(data => data.json())
            .then(response => {
                setNome(response.nome)
                setEmail(response.email)
                setFone(response.fone)
            })
    }, [])

    function excluir() {
        fetch(`http://localhost:3000/contatos/${route.params.idcontato}`, {
            method: 'DELETE',
        })
            .then(() => navigation.navigate('Consultar Contatos'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exclusão do Contato com ID: {route.params.idcontato}</Text>

            <Text style={styles.input}>{nome}</Text>

            <Text style={styles.input}>{email}</Text>

            <Text style={styles.input}>{fone}</Text>

            <Pressable style={styles.btGravar} onPress={excluir}><Text>Excluir</Text></Pressable>

            <Pressable style={styles.btEditar} onPress={() => navigation.navigate('consultact')}><Text>Cancelar</Text></Pressable>

            <StatusBar style="auto" />
        </View >
    )
}