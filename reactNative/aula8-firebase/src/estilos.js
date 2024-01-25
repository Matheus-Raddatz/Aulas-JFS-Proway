import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'darkgray',
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        backgroundColor: 'silver',
        margin: 7,
        padding: 10,
        borderRadius: 10,
        textAlign: 'center',
        width: 180,
        fontSize: 18
    },
    btGravar: {
        backgroundColor: 'cadetblue',
        margin: 10,
        padding: 10,
        borderRadius: 10,
        alignItems: 'center'
    },
    btEditar: {
        backgroundColor: 'slategray',
        margin: 10,
        padding: 10,
        borderRadius: 10
    },
    containerCard: {
        flex: 1,
        backgroundColor: 'lavender',
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        height: 300,
        borderColor: 'black',
        borderBottomWidth: 1,
        borderRadius: 15
    },
    labels: {
        fontSize: 18,
        fontFamily: 'GOTHIC',
        marginBottom: 20,
        marginTop: 12,
        fontWeight: 'bold'

    },
    labels2: {
        fontSize: 20,
        fontFamily: 'GOTHIC',
        marginBottom: 2,
        marginTop: 2,
        fontWeight: 'bold'
    },
    labels3: {
        fontSize: 16,
        fontFamily: 'GOTHIC',
        marginBottom: 2,
        marginTop: 2,
        fontWeight: 'bold'
    },
    viewBtn: {
        marginTop: 25,
        marginBottom: 25,
        flexDirection: 'row',
        width: 200,
        justifyContent: "space-between"
    },
    btnOK: {
        backgroundColor: 'cornflowerblue',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: 85,
        alignItems: 'center',
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
    },
    btnCancel: {
        backgroundColor: 'red',
        padding: 10,
        borderColor: 'black',
        borderWidth: 1,
        width: 85,
        alignItems: 'center',
        borderTopLeftRadius: 35,
        borderBottomRightRadius: 35,
    }
})
export default styles