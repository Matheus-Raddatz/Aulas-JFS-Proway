import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import styles from '../estilos/estilos'
import CardCompromisso from '../cards/cardCompromisso';

export default function Consultacp({ navigation }) {
    const [compromissos, setCompromissos] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/compromissos')
            .then(data => data.json())
            .then(res => {
                setCompromissos(res)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={compromissos}
                renderItem={({ item }) =>
                    <CardCompromisso
                        compromisso={ item }
                        rota={ navigation }
                    />
                }
            />
            <StatusBar style="auto" />
        </View>
    )
}