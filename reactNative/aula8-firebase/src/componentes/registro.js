import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "../estilos";
import app from '../config/firebaseConfig'
import { useState } from "react";
import Toast from 'react-native-toast-message';

export default function Registro({ navigation }) {
    const auth = getAuth(app)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [senha2, setSenha2] = useState('')
    const [senhaok, setSenhaok] = useState(false)

    const criarUser = () => {
        if (senha === senha2) {
            createUserWithEmailAndPassword(auth, email, senha)
                .then((userCredential) => {
                    const user = userCredential.user
                    console.log(user)
                })
                .catch((error) => {
                    console.log(error)
                })
        } else {
            Toast.show({
                type: 'error',
                position: 'top',
                text1: 'Erro ao registrar o Usuário',
                text2: 'As duas senhas não condizem',
                
            })
        }
    }
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                placeholder="Email"
                value={email}
                onChangeText={(texto) => setEmail(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                value={senha}
                onChangeText={(texto) => setSenha(texto)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha Novamente"
                value={senha2}
                onChangeText={(texto) => setSenha2(texto)}
            />

            <Pressable
                onPress={criarUser}
                style={styles.btGravar}
            ><Text>Criar</Text></Pressable>

            <Pressable
                style={styles.btEditar}
                onPress={() => navigation.navigate('Login')}
            ><Text>Já possui uma conta?</Text></Pressable>
        </View>
    )
}