import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { FlatList, ScrollView, Text, View } from 'react-native';
import CardLocal from '../cards/cardLocal';
import styles from '../estilos/estilos'

export default function Consultalc({ navigation }) {
    const [locais, setLocais] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/locais')
            .then(data => data.json())
            .then(res => {
                setLocais(res)
            })
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={locais}
                renderItem={({ item }) =>
                    <CardLocal
                        local={ item }
                        rota={ navigation }
                    />
                }
            />
            <StatusBar style="auto" />
        </View>
    )
}