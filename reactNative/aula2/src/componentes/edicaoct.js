import { useEffect, useState, useContext } from "react"
import { StatusBar, Text, TextInput, View, Pressable } from "react-native"
import styles from "../estilos/estilos"

export default function Edicaoct({ navigation, route }) {
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

    function gravar() {
        fetch(`http://localhost:3000/contatos/${route.params.idcontato}`, {
            method: 'PUT',
            body: JSON.stringify({ id: route.params.idcontato, nome, email, fone }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => navigation.navigate('Consultar Contatos'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edição de Contato com ID: {route.params.idcontato}</Text>

            <TextInput
                style={styles.input}
                placeholder='Informe o nome'
                defaultValue={nome}
                onChangeText={(text) => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe o email'
                defaultValue={email}
                onChangeText={(text) => setEmail(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe o telefone'
                defaultValue={fone}
                onChangeText={(text) => setFone(text)}
            />

            <Pressable
                style={styles.btGravar}
                onPress={gravar}
            >
                <Text>Salvar</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}