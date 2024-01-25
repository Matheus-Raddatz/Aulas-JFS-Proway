import { useEffect, useState, useContext } from "react"
import { StatusBar, Text, TextInput, View, Pressable, Picker } from "react-native"
import styles from "../estilos/estilos"

export default function Edicaocp({ navigation, route }) {
    const [descricao, setDescricao] = useState('')
    const [contato, setContato] = useState('1')
    const [local, setLocal] = useState('1')
    const [contatos, setContatos] = useState([])
    const [locais, setLocais] = useState([])

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
        fetch(`http://localhost:3000/compromissos/${route.params.idcompromisso}`)
            .then(data => data.json())
            .then(response => {
                setDescricao(response.descricao)
                setContato(response.contatoselec)
                setLocal(response.localselec)
            })
    }, [])

    function gravar() {
        fetch(`http://localhost:3000/compromissos/${route.params.idcompromisso}`, {
            method: 'PUT',
            body: JSON.stringify({ id: route.params.idcompromisso, descricao, contato, local }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => navigation.navigate('Consultar Compromissos'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Edição de Compromisso com ID: {route.params.idcompromisso}</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe a descrição'
                defaultValue={descricao}
                onChangeText={(text) => setDescricao(text)}
            />
            <Picker
                style={styles.input}
                selectedValue={contato}
                onValueChange={(itemValue, itemIndex) => setContato(itemValue)}
            >
                {contatos.map((ct, index) => (
                    <Picker.Item key={index} label={ct.nome} value={ct.id} />
                ))}
            </Picker>
            <Picker
                style={styles.input}
                selectedValue={local}
                onValueChange={(itemValue, itemIndex) => setLocal(itemValue)}
            >
                {locais.map((lc, index) => (
                    <Picker.Item key={index} label={lc.nome} value={lc.id} />
                ))}
            </Picker>
            <Pressable style={styles.btGravar} onPress={gravar}><Text>Salvar</Text></Pressable>
        </View>
    )
}