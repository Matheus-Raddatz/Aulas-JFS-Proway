import { Pressable, View, Text } from "react-native";
import styles from "../estilos/estilos";

export default function Home({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Home</Text>
            <Pressable style={styles.itemMenu} onPress={() => navigation.navigate("Cadastro User")}>
                <Text style={styles.textoItemMenu}>Cadastrar Usuários</Text>
            </Pressable>
            <Pressable style={styles.itemMenu} onPress={() => navigation.navigate("Consulta User")}>
                <Text style={styles.textoItemMenu}>Consultar Usuários</Text>
            </Pressable>
        </View>
    )
}