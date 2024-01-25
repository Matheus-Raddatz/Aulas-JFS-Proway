import { useEffect, useState } from "react";
import { FlatList, Pressable, Text, TextInput, View } from "react-native";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import styles from "../estilos";
import app from '../config/firebaseConfig'
import CardContato from "../cards/cardContato";

export default function ConsultaContato() {
    const [contatos, setContatos] = useState([])
    const [contatoPesq, setContatoPesq] = useState('')
    const db = getFirestore(app)

    async function fetchData() {
        let query
        let i = 0
        if (i == 0) {
            query = await getDocs(collection(db, 'contatos'))
            i += 1
        }
        query.forEach((doc) => setContatos((ant) => [...ant, doc.data()]))
    }

    async function pesquisarPorNome() {
        await fetchData()
        const contatosFiltrados = contatos.filter((contato) =>
            contato.nome.toLowerCase().includes(contatoPesq.toLowerCase())
        )
        setContatos(contatosFiltrados)
    }

    useEffect(() => {
        fetchData()
    }, [])

    async function pesquisar() {
        const dados = query(
            collection(db, 'contatos'),
            where('email', '==', '')
        )
        let id
        let q = await getDocs(dados)
        q.forEach((doc) => { id = doc.id })
        return id
    }

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <TextInput placeholder={'___________________________'} value={contatoPesq} onChangeText={(txt) => setContatoPesq(txt)} />
                <Pressable onPress={pesquisarPorNome} style={{ paddingLeft: 5 }}
                ><Text>Pesquisar</Text></Pressable>
            </View>
            <FlatList
                data={contatos}
                renderItem={({ item }) => <CardContato contato={item} />}
            />
        </View>
    )
}