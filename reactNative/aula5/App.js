import { View } from 'react-native';
import Pai from './src/componentes/pai';
import styles from './src/estilos';

export default function App() {
  return (
    <View style={styles.container}>
      <Pai />
    </View>
  );
}