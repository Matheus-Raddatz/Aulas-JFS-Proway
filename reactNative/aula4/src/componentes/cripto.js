export default function Criptografar(texto) {
    var a = [
        ['U', 'R', 'W', 'P', 'F', 'V', 'K', 'M', 'Z', 'J', 'E', 'A', 'Y', 'C', 'N', 'X', 'D', 'Q', 'O', 'T', 'B', 'L', 'S', 'I', 'H', 'G'],
        ['G', 'U', 'V', 'M', 'C', 'Z', 'E', 'W', 'Y', 'J', 'Q', 'K', 'I', 'S', 'L', 'X', 'F', 'A', 'D', 'B', 'N', 'O', 'H', 'T', 'R', 'P'],
        ['D', 'K', 'N', 'P', 'T', 'A', 'Y', 'Z', 'H', 'M', 'C', 'J', 'G', 'V', 'Q', 'B', 'F', 'U', 'W', 'O', 'E', 'R', 'L', 'S', 'X', 'I']]

    const array = texto.toUpperCase().split('')
    var cripto = ''

    console.log(texto)
    console.log(array)

    for (let i = 0; i < array.length; i++) {
        let achou = false
        for (let j = Math.floor(Math.random() * a.length); j < a.length; j++) {

            for (let k = 0; k < a[j].length; k++) {

                if (array[i] === a[j][k]) {

                    cripto += `${j.toString()}${k.toString()}`;
                    achou = true
                    break
                }
            }
            if (achou == true) {break}
        }
    }
    return cripto
}