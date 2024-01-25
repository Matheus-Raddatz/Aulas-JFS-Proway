import { useState } from "react";
import { View, Text } from "react-native";
import styles from "../estilos";
import Filho from "./filho";

export default function Pai() {
    const [msgFilho, setMsgFilho] = useState('')
    const onMsgDoFilho = (msg) => {
        setMsgFilho(msg)
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Pai</Text>
            <Text style={styles.title}>Mensagem do Filho: {msgFilho}</Text>
            <Filho msgPai={'eu sou seu pai!!!'} msgFilho={onMsgDoFilho}/>
        </View>
    )
}