import { useEffect, useState } from "react"
import { Pressable, StatusBar, Text, View } from "react-native"
import styles from "../estilos/estilos"
export default function Exclusaolc({ navigation, route }) {
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [descricao, setDescricao] = useState('')

    useEffect(() => {
        fetch(`http://localhost:3000/locais/${route.params.idlocal}`)
            .then(data => data.json())
            .then(response => {
                setCep(response.cep)
                setRua(response.rua)
                setBairro(response.bairro)
                setCidade(response.cidade)
                setEstado(response.estado)
                setDescricao(response.descricao)
            })
    }, [])

    function excluir() {
        fetch(`http://localhost:3000/locais/${route.params.idlocal}`, {
            method: 'DELETE',
        })
            .then(() => navigation.navigate('Consultar Locais'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exclusão do Local com ID: {route.params.idlocal}</Text>

            <Text style={styles.input}>{cep}</Text>

            <Text style={styles.input}>{rua}</Text>

            <Text style={styles.input}>{bairro}</Text>

            <Text style={styles.input}>{cidade}</Text>
            
            <Text style={styles.input}>{estado}</Text>

            <Text style={styles.input}>{descricao}</Text>

            <Pressable style={styles.btGravar} onPress={excluir}><Text>Excluir</Text></Pressable>

            <Pressable style={styles.btEditar} onPress={() => navigation.navigate('consultact')}><Text>Cancelar</Text></Pressable>

            <StatusBar style="auto" />
        </View >
    )
}