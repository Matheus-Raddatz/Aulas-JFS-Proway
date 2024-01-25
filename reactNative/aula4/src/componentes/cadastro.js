import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import styles from "../estilos";
import Toast from 'react-native-toast-message';
import Criptografar from "./cripto";
import { Picker } from '@react-native-picker/picker';

export default function Cadastro() {
    const [nome, setNome] = useState('')
    const [fone, setFone] = useState('')
    const [email, setEmail] = useState('')
    const [tipo, setTipo] = useState('')
    const tipos = [
        {id:1, nome:'Pessoal'},
        {id:2, nome:'Profissional'},
        {id:3, nome:'Outros'}
    ]

    function Gravar() {
        if (nome !== '' && fone !== '' && email !== '') {
            Toast.show(
                { type: 'success', text1: 'AVISO', text2: 'Contato salvo com Sucesso!' }
            )
            console.log(Criptografar(nome))
        } else {
            Toast.show(
                { type: 'error', text1: 'AVISO', text2: 'Informe todos os Dados!' }
            )
        }
    }

    return (
        <View>
            <Text style={styles.title}>Cadastro de Contatos</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe o nome'
                defaultValue={nome}
                onChangeText={(text) => setNome(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe o telefone'
                defaultValue={fone}
                onChangeText={(text) => setFone(text)}
            />

            <TextInput
                style={styles.input}
                placeholder='Informe o email'
                defaultValue={email}
                onChangeText={(text) => setEmail(text)}
            />

            <Text style={styles.title}>Selecione o Tipo de Contato</Text>

            <Picker
                style={styles.input}
                selectedValue={tipo}
                onValueChange={(itemValue, itemIndex) =>
                    setTipo(itemValue)
                }>
                    {
                        tipos.map((tipo) =>
                        <Picker.Item
                            label={tipo.nome}
                            value={tipo.id}
                        />)
                    }
            </Picker>

            <Pressable onPress={Gravar} style={styles.btGravar}>
                <Text>Gravar</Text>
            </Pressable>
        </View>
    )
}