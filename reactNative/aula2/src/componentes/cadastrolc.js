import React, { useState } from 'react';
import { View, TextInput, Text, Pressable, StatusBar } from 'react-native';
import styles from '../estilos/estilos';

export default function Cadastrolc() {
  const [cep, setCep] = useState('')
  const [erro, setErro] = useState('')
  const [nome, setNome] = useState('')
  const [rua, setRua] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [descricao, setDescricao] = useState('')

  const handleMudaCep = (text) => {
    setCep(text)
    setErro('')
  }

  const handleChecaCep = async () => {
    try {
      const res = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await res.json()

      if (!data.erro) {
        setRua(data.logradouro)
        setBairro(data.bairro)
        setCidade(data.localidade)
        setEstado(data.uf)
        setErro('')
      } else {
        setErro('CEP não encontrado')
      }
    } catch (error) {
      setErro('CEP não encontrado')
    }
  }

  const Gravar = async () => {
    fetch('http://localhost:3000/locais', {
      method: 'POST',
      body: JSON.stringify({ cep, nome, rua, bairro, cidade, estado, descricao }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => navigation.navigate('Consultar Locais'))
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Novo Local</Text>
      <TextInput
        style={styles.input}
        placeholder='Informe o CEP'
        label="CEP"
        value={cep}
        onChangeText={handleMudaCep}
        onBlur={handleChecaCep}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder='Informe o Nome'
        defaultValue={nome}
        onChangeText={(text) => setNome(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe a Rua'
        defaultValue={rua}
        onChangeText={(text) => setRua(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe o Bairro'
        defaultValue={bairro}
        onChangeText={(text) => setBairro(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe a Cidade'
        defaultValue={cidade}
        onChangeText={(text) => setCidade(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe o Estado'
        defaultValue={estado}
        onChangeText={(text) => setEstado(text)}
      />
      <TextInput
        style={styles.input}
        placeholder='Informe a Descrição'
        defaultValue={descricao}
        onChangeText={(text) => setDescricao(text)}
      />
      <Pressable
        style={styles.btGravar}
        onPress={Gravar}
      >
        <Text>Salvar</Text>
      </Pressable>
      <StatusBar style="auto" />
      <Text>{erro}</Text>
    </View >
  );
}