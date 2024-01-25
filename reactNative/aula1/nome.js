import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import styles from './estilos/estilos';

export default function Nome() {
   const [nome, setNome] = useState('')
   const [idade, setIdade] = useState(0)
   const [visivel, setVisivel] = useState(false)
   const [erro, setErro] = useState()

   function show() {
      setErro('')
      if (nome == '') {
         setErro("Informe o nome")
         return
      }

      if (idade == '' || idade == 0) {
         setErro("Informe o idade")
         return
      }
      setVisivel(true)
   }

   return (
      <View style={styles.container}>
         <Text style={styles.titulo}>Minha Agenda</Text>
         <TextInput
            style={styles.input}
            placeholder='Informe nome'
            defaultValue={nome}
            onChangeText={(text) => setNome(text)}
         />

         <TextInput
            style={styles.input}
            placeholder='Informe idade'
            defaultValue={idade}
            onChangeText={(text) => setIdade(text)}
         />

         <TouchableOpacity
            style={styles.btGravar}
            onPress={show}
         >
            <Text>Gravar</Text>
         </TouchableOpacity>
         {
            visivel && <View>
               <Text>Nome: {nome}</Text>
               <Text>Idade: {idade}</Text>
            </View>
         }
         <View>
            <Text>{erro}</Text>
         </View>

         <StatusBar style="auto" />
      </View>
   );
}

