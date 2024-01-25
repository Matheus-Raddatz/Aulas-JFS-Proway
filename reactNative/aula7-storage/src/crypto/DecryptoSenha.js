export default function Descriptografar(cripto) {
    var a = [
        ['U', '3', 'R', 'W', '9', 'P', '2', 'F', '4', 'V', 'K', 'M', 'Z', '1', 'J', 'E', 'A', 'Y',
        '0', 'C', '6', 'N', 'X', '5', '8', 'D', 'Q', 'O', 'T', 'B', 'L', 'S', 'I', 'H', '7', 'G'],

        ['7', 'G', 'U', 'V', 'M', 'C', '4', 'Z', 'E', '5', 'W', '8', 'Y', 'J', 'Q', 'K', '9', 'I',
        '3', 'S', 'L', '1', 'X', 'F', '6', 'A', 'D', 'B', 'N', '2', 'O', 'H', '0', 'T', 'R', 'P'],

        ['D', 'K', '4', 'N', 'P', '2', 'T', 'A', 'Y', '6', 'Z', 'H', 'M', 'C', '1', 'J', 'G', '9',
        'V', '0', 'Q', '7', 'B', 'F', 'U', '8', 'W', 'O', '3', 'E', 'R', 'L', 'S', '5', 'X', 'I']]

    var texto = ''

    for (let i = 0; i < cripto.length; i += 2) {
        const j = parseInt(cripto[i])
        const k = parseInt(cripto[i + 1])
        
        if (j >= 0 && j < a.length && k >= 0 && k < a[j].length) {
            texto += a[j][k]
        } else {
            
        }
    }
    return texto
}
