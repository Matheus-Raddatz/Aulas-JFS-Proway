import { Text, View, Button, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useEffect, useState } from 'react'
import styles from '../estilos'

export default function ConsultaUser() {
    const [users, setUsers] = useState([])
    async function lerDados() {
        var usuarios = await AsyncStorage.getItem('users')
        if (usuarios != null) {
            setUsers(JSON.parse(usuarios))
        }
    }

    useEffect(() => {
        lerDados()
    })

    const Item = ({ user }) => {
        return <Text
            style={{ backgroundColor: 'silver', color: 'blue', padding: 10, margin: 2 }}
        >
            {`${user.nome}  ${user.email}`}
        </Text>
    }

    return (
        <View>
            <Text style={styles.title}>Consulta</Text>
            <FlatList
                data={users}
                renderItem={({ item }) => <Item user={item} />}
            />
        </View>
    )
}