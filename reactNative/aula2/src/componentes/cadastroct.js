import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import styles from '../estilos/estilos'

export default function Cadastroct({ navigation }) {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [fone, setFone] = useState('')
    function Gravar() {
        fetch('http://localhost:3000/contatos', {
            method: 'POST',
            body: JSON.stringify({ nome, email, fone }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => navigation.navigate('Consultar Contatos'))
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo Contato</Text>

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
                onPress={Gravar}
            >
                <Text>Salvar</Text>
            </Pressable>
            <StatusBar style="auto" />
        </View>
    )
}