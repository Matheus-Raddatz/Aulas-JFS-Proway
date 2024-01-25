import { getFirestore, collection, addDoc } from "firebase/firestore"
import app from "../config/firebaseConfig"
import { View, Pressable, Text, TextInput } from "react-native"
import styles from "../estilos"
import { useState } from "react"
import Toast from "react-native-toast-message"

export default function CadastroContatos() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    const db = getFirestore(app)

    async function Gravar() {
        if (nome, email, fone !== '') {
            let contato = await addDoc(collection(db, "contatos"),
                {
                    nome: nome,
                    email: email,
                    fone: fone
                }
            )
            console.log(`Nome: ${nome}\nEmail: ${email}\nTelefone: ${fone}`)
            Toast.show({
                type: 'success',
                position: 'top',
                text1: 'Sucsso ao salvar Contato',
                text2: 'Todos os dados foram salvos',
                
            })
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Erro ao salvar Contato',
                text2: 'Há dados não informados',
                
            })
        }

    }
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} value={nome} placeholder={'Nome'} onChangeText={(txt) => setNome(txt)} />

            <TextInput style={styles.input} value={email} placeholder={'Email'} onChangeText={(txt) => setEmail(txt)} />

            <TextInput style={styles.input} value={fone} placeholder={'Telefone'} onChangeText={(txt) => setFone(txt)} />

            <Pressable onPress={Gravar} style={styles.btGravar}><Text>Gravar</Text></Pressable>
        </View>
    )
}