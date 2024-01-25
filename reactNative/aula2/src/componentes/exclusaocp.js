import { useEffect, useState } from "react"
import { Pressable, StatusBar, Text, View } from "react-native"
import styles from "../estilos/estilos"

export default function Exclusaocp({ navigation, route }) {
    const [descricao, setDescricao] = useState('')
    const [contato, setContato] = useState('')
    const [local, setLocal] = useState('')
    const [nomecontato, setNomecontato] = useState('')
    const [nomelocal, setNomelocal] = useState('')
    const [contatos, setContatos] = useState([])
    const [locais, setLocais] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/compromissos/${route.params.idcompromisso}`)
            .then(data => data.json())
            .then(response => {
                setDescricao(response.descricao)
                setContato(response.contatoselec)
                setLocal(response.localselec)
            })
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
        setNomecontato(encontrarCtId(parseInt(contato)))
        setNomelocal(encontrarLcId(parseInt(local)))
    }, [contatos, locais])

    function encontrarCtId(id) {
        const contatof = contatos.find((ct) => ct.id === id)
        return contatof ? contatof.nome : 'Contato não encontrado'
    }

    function encontrarLcId(id) {
        const localf = locais.find((lc) => lc.id === id)
        return localf ? localf.nome : 'Local não encontrado'
    }

    function excluir() {
        fetch(`http://localhost:3000/compromissos/${route.params.idcompromisso}`, {
            method: 'DELETE',
        })
            .then(() => navigation.navigate('Consultar Compromissos'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Exclusão do Compromisso com ID: {route.params.idcompromisso}</Text>

            <Text style={styles.input}>{descricao}</Text>

            <Text style={styles.input}>{nomecontato}</Text>

            <Text style={styles.input}>{nomelocal}</Text>

            <Pressable style={styles.btGravar} onPress={excluir}><Text>Excluir</Text></Pressable>

            <Pressable style={styles.btEditar} onPress={() => navigation.navigate('consultacp')}><Text>Cancelar</Text></Pressable>

            <StatusBar style="auto" />
        </View >
    )
}