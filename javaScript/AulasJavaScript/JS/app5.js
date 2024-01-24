function funcao(param1, param2){
    console.log("Entrou na função")
    return param1 + param2
}
console.log(`Soma: ${funcao(10,15)}`)
funcao()

const funcaoExpressao = function(){
    console.log('Entrou na expressão')
}
funcaoExpressao()



const funcaoFlexa = () => {
    console.log('Entrou na arrow')
}
funcaoFlexa()



function* funcaoGeradora(){

}
const construcao = new Function('param1', 'param2', `return param1 + param2`)
console.log(construcao(10,15))



obj = {
    nome : "Matheus",
    sobrenome : "Raddatz",
    CPF : "12345678910"
}
function testeObj(objeto){
    console.log(objeto.nome)
}
testeObj(obj)