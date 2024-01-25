import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "../estilos";
import app from "../config/firebaseConfig"

export default function Login() {
    const auth = getAuth(app)
    const provider = new GoogleAuthProvider()
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    function logarUser({ navigation }) {
        signInWithPopup(auth, provider)
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result)
                const token = credential.accessToken
                console.log(token)
            }).catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={logarUser}
                style={styles.btGravar}
            ><Text>Logar</Text></Pressable>

            <Pressable
                onPress={() => navigation.navigate('Registro com Email e Senha')}
                style={styles.btEditar}
            ><Text>Ainda não possui uma conta?</Text></Pressable>
        </View>
    )
}