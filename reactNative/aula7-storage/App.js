import { View } from 'react-native';
import CadastroUser from './src/componentes/CadastroUser';
import ConsultaUser from './src/componentes/ConsultaUser';
import styles from './src/estilos';

export default function App() {
  return (
    <View style={styles.container}>
      <CadastroUser />
      <ConsultaUser />
    </View>
  )
}