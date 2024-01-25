import { useState } from "react";
import { Text, View, Pressable } from "react-native";
import styles from "../estilos";

export default function Filho(props) {
    const [msgFilho, setMsgFilho] = useState('eu sou seu filho!!!')
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Filho</Text>
            <Text style={styles.title}>Mensagem do Pai: {props.msgPai}</Text>
            <Pressable onPress={() => props.msgFilho(msgFilho)} style={styles.btGravar}>
                <Text>Enviar mensagem ao Pai</Text>
            </Pressable>
        </View>
    )
}