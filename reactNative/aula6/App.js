import { useRef, useState } from 'react';
import { Text, View, Animated, Pressable } from 'react-native';
import styles from './src/estilos';

export default function App() {
  const fadeIn = useRef(new Animated.Value(0)).current

  const corTexto = useRef(new Animated.Value(0)).current

  const corDeFundo = useRef(new Animated.Value(0)).current

  const [opacity, setOpacity] = useState(1)

  const [cor, setCor] = useState(1)

  const [corFundo, setCorFundo] = useState('white')

  const alternaCor = corTexto.interpolate({
    inputRange: [0, 1],
    outputRange: ['black', 'white'],
  })

  function mostrarView(valor) {
    setOpacity(valor)
    Animated.timing(fadeIn, {
      toValue: valor,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  function alternarView() {
    setOpacity(opacity == 0 ? 1 : 0)
    Animated.timing(fadeIn, {
      toValue: opacity,
      duration: 1000,
      useNativeDriver: true,
    }).start()
  }

  function alternarCores() {
    setCor(cor == 0 ? 1 : 0),
      Animated.sequence([
        Animated.timing(corTexto, {
          toValue: cor,
          duration: 1000,
          useNativeDriver: true,
        }),
        setCorFundo(corFundo == 'black' ? 'white' : 'black'),
        Animated.timing(corDeFundo, {
          toValue: corFundo,
          duration: 1000,
          useNativeDriver: true,
        })
      ]).start()

  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Animações</Text>
      <Animated.View style={{ opacity: fadeIn, backgroundColor: 'salmon', borderRadius: 10 }}>
        <Text style={[styles.itemMenu, { textAlign: 'center' }]}>Olá Mundo</Text>
      </Animated.View>

      <Pressable
        style={styles.btEditar}
        onPress={() => mostrarView(0)}
      ><Text>Opacity 0</Text></Pressable>

      <Pressable
        style={styles.btEditar}
        onPress={() => mostrarView(1)}
      ><Text>Opacity 1</Text></Pressable>

      <Pressable
        style={styles.btEditar}
        onPress={alternarView}
      ><Text>Alternar Opacity</Text></Pressable>

      <View style={{borderRadius: 10}}>
        <Animated.Text style={[{ color: alternaCor, backgroundColor: corFundo, textAlign: 'center' }, styles.itemMenu]}
        >Olá</Animated.Text>
      </View>

      <Pressable
        style={styles.btEditar}
        onPress={alternarCores}
      ><Text>Alternar Cor</Text></Pressable>
    </View>
  );
}
