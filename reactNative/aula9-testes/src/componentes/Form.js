import { View, Text, TextInput, Button } from 'react-native'

export default function Form({ navigation }) {
    return (
        <View>
            <Text>Perfil</Text>

            <TextInput
                testID="input-name"
                placeholder="Nome"
                autoCorrect={false}
                value="Jeferson"
            />
            <TextInput
                testID="input-surname"
                placeholder="Sobrenome"
                autoCorrect={false}
                value="Lucas"
            />

            <Button title="Salvar" onPress={() => navigation.navigate('Home')} />
        </View>
    )
}