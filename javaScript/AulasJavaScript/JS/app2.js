let menu = prompt('Escolha uma opção:\n1) Cadastrar nota\n2) Sair')
switch (parseInt(menu)) {
    case 1:
        cadastraNota()
        break
    case 2:
        console.log('Adeus :(')
    default:
        console.log('Opção inválida')
        break
}

function cadastraNota() {
    let quantidade = prompt('Quantas notas deseja cadastrar?')
    let soma = 0
    let nota = 0
    for (let i = 0; i < parseInt(quantidade); i++) {
        nota = prompt(`Digite a nota ${i + 1}`)
        soma += nota
    }
    console.log(`Nota(s) cadastrada(s) com sucesso! Sua média é: ${soma / parseInt(quantidade)}`)
}
