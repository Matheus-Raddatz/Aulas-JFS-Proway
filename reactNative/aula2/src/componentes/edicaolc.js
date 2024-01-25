import { useEffect, useState, useContext } from "react"
import { StatusBar, Text, TextInput, View, Pressable } from "react-native"
import styles from "../estilos/estilos"

export default function Edicaolc({ navigation, route }) {
    const [cep, setCep] = useState('')
    const [nome, setNome] = useState('')
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
                setNome(response.nome)
                setRua(response.rua)
                setBairro(response.bairro)
                setCidade(response.cidade)
                setEstado(response.estado)
                setDescricao(response.descricao)
            })
    }, [])

    function gravar() {
        fetch(`http://localhost:3000/locais/${route.params.idlocal}`, {
            method: 'PUT',
            body: JSON.stringify({ id: route.params.idlocal, cep, nome, rua, bairro, cidade, estado, descricao }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => navigation.navigate('Consultar Locais'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edição de Local com ID: {route.params.idlocal}</Text>

            <TextInput
                style={styles.input}
                placeholder='Informe o CEP'
                defaultValue={cep}
                onChangeText={(text) => setCep(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe o Nome'
                defaultValue={nome}
                onChangeText={(text) => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe a Rua'
                defaultValue={rua}
                onChangeText={(text) => setRua(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe o Bairro'
                defaultValue={bairro}
                onChangeText={(text) => setBairro(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Informe a Cidade'
                defaultValue={cidade}
                onChangeText={(text) => setCidade(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Informe o Estado'
                defaultValue={estado}
                onChangeText={(text) => setEstado(text)}
            />
            <TextInput
                style={styles.input}
                placeholder='Informe a Descrição'
                defaultValue={descricao}
                onChangeText={(text) => setDescricao(text)}
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