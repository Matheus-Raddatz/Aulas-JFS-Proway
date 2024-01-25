import { useState } from "react";
import { Pressable, Text, View } from "react-native";
import styles from "../estilos";

export default function CardContato(props) {
    const [expandido, setExpandido] = useState(false);
    const handleToggleExpandir = () => { setExpandido(!expandido) }

    async function editar() {
        let id = await pesquisar()
        const refContato = doc(db, 'contatos', id)
        await updateDoc(refContato, { nome: props.contato.nome, email: props.contato.email, fone: props.contato.fone })
    }

    return (
        <View>
            <Pressable onPress={handleToggleExpandir} style={{ padding: 7 }}>
                <View style={[styles.containerCard, { height: 70 }]}>
                    <Text style={styles.labels}>{props.contato.nome}</Text>
                    {expandido && (
                        <View style={[styles.containerCard, { height: 120 }]}>
                            <Text style={styles.labels2}>{props.contato.email}</Text>
                            <Text style={styles.labels2}>{props.contato.fone}</Text>
                            <View style={styles.viewBtn}>
                                <Pressable
                                    style={styles.btnOK}
                                    onPress={() => navigation.navigate("editarCt")}
                                >
                                    <Text style={styles.labels3}>Editar</Text>
                                </Pressable>
                                <Pressable
                                    style={styles.btnCancel}
                                    onPress={() => navigation.navigate("excluirCt")}
                                >
                                    <Text style={styles.labels3}>Excluir</Text>
                                </Pressable>
                            </View>
                        </View>
                    )}
                </View>
            </Pressable>
        </View>
    )
}