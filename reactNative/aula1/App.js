import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Text, View, TouchableOpacity, TextInput, FlatList } from 'react-native';
import CarContato from './cardContato';
import styles from './estilos/estilos';
const agenda = [
  {
    nome: 'ana',
    email: 'ana@gmail',
    celular: '(47) 9870-0987'
  },
  {
    nome: 'maria',
    email: 'maria@gmail',
    celular: '(47) 9870-0987'
  }
]
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Contatos</Text>
      <FlatList
        data={agenda}
        renderItem={({ item }) =>
          <CarContato
            nome={item.nome}
            email={item.email}
            celular={item.celular}
          />}
      />
    </View>
  );
}