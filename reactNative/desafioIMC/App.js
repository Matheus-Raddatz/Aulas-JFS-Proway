import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View, ImageBackground, Animated } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [visivel, setVisivel] = useState(false)
  const [IMC, setIMC] = useState('')
  const [situacao, setSituacao] = useState('')

  function calcSituacao() {
    const imc = (((parseInt(peso) / 1000) / ((parseInt(altura) / 100) ** 2)).toFixed(1))
    if (imc < 17) {
      setSituacao('Muito abaixo do peso.')
    } else if (imc < 18.5) {
      setSituacao('Abaixo do peso')
    } else if (imc < 25) {
      setSituacao('Peso normal')
    } else if (imc < 30) {
      setSituacao('Acima do peso')
    } else if (imc < 35) {
      setSituacao('Obesidade grau I')
    } else if (imc < 40.1) {
      setSituacao('Obesidade grau II')
    } else {
      setSituacao('Obesidade grau III')
    }
  }
  function show() {
    if (visivel == false && peso !== '' && altura !== '') {
      setIMC(((parseInt(peso) / 1000) / ((parseInt(altura) / 100) ** 2)).toFixed(1))
      if (IMC !== peso || IMC > 1 || IMC < 100) {
        calcSituacao()
        setVisivel(true)
      } else {
        alert('Favor inserir nas unidades indicadas!!')
      }
    } else if (visivel == true && peso !== '' && altura != '') {
      setVisivel(false)
    } else {
      setVisivel(false)
      alert('Insira um peso e altura válidos!!')
    }
  }
  return (

    <View style={styles.container}>
      <Text style={styles.title}>Cálculo de IMC</Text>

      <TextInput
        style={styles.input}
        placeholder='Insira seu Peso em G'
        defaultValue={peso}
        onChangeText={(text) => setPeso(text)}
      ></TextInput>

      <TextInput
        style={styles.input}
        placeholder='Insira sua Altura em CM'
        defaultValue={altura}
        onChangeText={(text) => setAltura(text)}
      ></TextInput>

      <Pressable
        onPress={show}
        style={styles.button}>
        <Text style={styles.text}></Text>
      </Pressable>

      {
        visivel &&
        <View>
          <Text> IMC: {IMC} </Text>
          <Text> Situação: {situacao} </Text>
        </View>
      }

      <StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 'xx-large',
  },
  button: {
    backgroundColor: 'red',
    padding: 20,
    margin: 20,
    borderWidth: 5,
    borderStyle: 'dotted',
    borderColor: 'Black',
    borderRadius: 1000,
  },
  input: {
    padding: 10,
    margin: 10,
    borderBottomWidth: 2
  },
  title: {
    fontSize: 24,
    marginBottom: 20
  }
});