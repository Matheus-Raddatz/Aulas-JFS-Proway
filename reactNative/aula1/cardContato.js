import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import styles from './estilos/estilos';

export default function CarContato( props ) {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Contato</Text>
      <Text>Nome: {props.nome }</Text>
      <Text>Email: {props.email }</Text>
      <Text>Celular: {props.celular }</Text>
      <StatusBar style="auto" />
    </View>
  );
}


