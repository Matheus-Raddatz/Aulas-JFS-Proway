import { View } from 'react-native';
import Cadastro from './src/componentes/cadastro';
import styles from './src/estilos';
import Toast from 'react-native-toast-message';

export default function App() {
  return (
    <View style={styles.container}>
      <Cadastro />
      <Toast
        position='top'
        visibilityTime='5000'
        topOffset='10'
      />
    </View>
  );
}