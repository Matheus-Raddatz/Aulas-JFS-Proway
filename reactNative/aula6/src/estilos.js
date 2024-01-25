import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'cornflowerblue',
        alignItems: 'center',
        justifyContent: 'center'
    },
    itemMenu: {
        margin: 5,
        padding: 10,
        width: 200,
        alignItems: 'center',
        borderRadius: 10
    },
    textoItemMenu: {
        color: 'white'
    },
    input: {
        backgroundColor: 'lavender',
        margin: 7,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    btGravar: {
        backgroundColor: 'paleturquoise',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    title: {
        backgroundColor: 'lightskyblue',
        margin: 5,
        padding: 10,
        borderRadius: 10
    },
    cardTitle: {
        backgroundColor: 'aquamarine',
        margin: 7,
        padding: 10,
        borderRadius: 20,
        alignSelf: 'center'
    },
    cardBody: {
        margin: 7,
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    cardButtonEditar: {
        backgroundColor: 'lightgreen',
        marginBottom: 5,
        width: 70,
        alignItems: 'center',
        borderRadius: 20
    },
    cardButtonExcluir: {
        backgroundColor: 'red',
        width: 70,
        alignItems: 'center',
        borderRadius: 20
    },
    card: {
        flex: 1,
        backgroundColor: 'paleturquoise',
        justifyContent: 'flex-start',
        width: 200,
        borderWidth: 1,
        margin: 10,
        borderRadius: 30
    },
    btEditar: {
        backgroundColor: 'lightblue',
        margin: 10,
        padding: 10,
        borderRadius: 20
    }
})
export default styles