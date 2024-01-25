import React, { useEffect, useState } from 'react';
import { View, TextInput, Text, Pressable, FlatList, Picker } from 'react-native';
import styles from '../estilos/estilos';

export default function Cadastrocp() {
    const [contatoselec, setContatoselec] = useState("1")
    const [localselec, setLocalselec] = useState("1")
    const [descricao, setDescricao] = useState('')
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
    }, [])

    const Gravar = () => {
        fetch('http://localhost:3000/compromissos', {
            method: 'POST',
            body: JSON.stringify({ descricao, contatoselec, localselec }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(() => navigation.navigate('Consultar Compromissos'))
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Novo Compromisso</Text>
            <TextInput
                style={styles.input}
                placeholder='Informe a descrição'
                defaultValue={descricao}
                onChangeText={(text) => setDescricao(text)}
            />
            
            <Picker
                style={styles.input}
                selectedValue={contatoselec}
                onValueChange={(itemValue, itemIndex) => setContatoselec(itemValue)}
            >
                {contatos.map((ct, index) => (
                    <Picker.Item key={index} label={ct.nome} value={ct.id} />
                ))}
            </Picker>

            <Picker
                style={styles.input}
                selectedValue={localselec}
                onValueChange={(itemValue, itemIndex) => setLocalselec(itemValue)}
            >
                {locais.map((lc, index) => (
                    <Picker.Item key={index} label={lc.nome} value={lc.id} />
                ))}
            </Picker>
            <Pressable style={styles.btGravar} onPress={Gravar}><Text>Salvar</Text></Pressable>
        </View>
    );
}
