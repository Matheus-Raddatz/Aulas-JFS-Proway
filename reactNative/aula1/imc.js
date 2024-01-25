import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './estilos/estilos';

export default function Imc() {
  const [peso, setPeso] = useState(45)
  const [altura, setAltura] = useState(1.66)
  const [imc, setImc] = useState(peso / (altura * altura))
  const [situacao, setSituacao] = useState()

  function verificarSituacao() {
    let imc = peso / (altura * altura)
    if (imc < 17) {
      setSituacao("Muito abaixo do peso")
    }
    else if (imc >= 17 && imc < 18.49) {
      setSituacao("Abaixo do peso")
    }
    else if (imc >= 18.49 && imc < 24.99) {
      setSituacao("Peso normal")
    }
    else if (imc >= 24.99 && imc < 29.99) {
      setSituacao("Acima do peso")
    }
    else if (imc >= 29.99 && imc < 34.99) {
      setSituacao("Obesidade I")
    }

    setImc(imc)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Calculadora IMC</Text>
      <TextInput
        style={styles.input}
        defaultValue={peso}
        placeholder='Informe peso'
        onChangeText={(text) => setPeso(text)}
      />

      <TextInput
        style={styles.input}
        defaultValue={altura}
        placeholder='Informe altura'
        onChangeText={(text) => setAltura(text)}
      />

      <TouchableOpacity
        style={styles.btGravar}
        onPress={verificarSituacao}
      >
        <Text>Calcular</Text>
      </TouchableOpacity>

      <View>
        <Text>IMC: {imc} </Text>
        <Text>Situação: {situacao}</Text>
      </View>

      <StatusBar style="auto" />
    </View>

  );
}

