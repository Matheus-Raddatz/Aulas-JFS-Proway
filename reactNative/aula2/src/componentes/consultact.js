import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import CardContato from '../cards/cardContato';
import styles from '../estilos/estilos'

export default function Consultact({ navigation }) {
    const [contatos, setContatos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/contatos')
            .then(data => data.json())
            .then(res => {
                setContatos(res)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={contatos}
                renderItem={({ item }) =>
                    <CardContato
                        contato={ item }
                        rota={ navigation }
                    />
                }
            />
            <StatusBar style="auto" />
        </View>
    )
}