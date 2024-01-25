import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState } from "react"
import { View, Text, Pressable, TextInput } from "react-native"
import Criptografar from "../crypto/CryptoSenha"
import styles from "../estilos"

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function testeSenha(txt) {
        return /^[a-zA-Z0-9]+$/.test(txt)
    }

    async function criarUser() {
        try {
            if (testeSenha(senha)) {
                var usuarios = []
                let existeUser = await AsyncStorage.getItem('users')

                if (existeUser != null) {
                    usuarios = JSON.parse(existeUser)
                }

                let user = {nome: nome, email: email, senha: Criptografar(senha)}

                usuarios.push(user)
                AsyncStorage.setItem('users', JSON.stringify(usuarios))
            } else {
                console.log('A senha pode apenas conter letras de A - Z e números de 0 - 9')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View>
            <Text style={styles.title}>Cadastro de usuários</Text>

            <TextInput
                style={styles.input}
                placeholder="Nome de usuário"
                value={nome}
                onChangeText={(texto) => setNome(texto)}
            ></TextInput>

            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            ></TextInput>

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
            ></TextInput>

            <Pressable
                style={styles.btGravar}
                onPress={criarUser}
            ><Text>Criar Usuário</Text></Pressable>

        </View>
    )
}