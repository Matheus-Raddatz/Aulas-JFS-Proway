const dias = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado"
]

// for(let index = 0; index < dias.length; index++){
//     console.log(dias[index])
// }

// for(const key in dias){
//     console.log(dias[key])
// }

// dias.forEach(function(dia, index){
//     console.log(`${dia} está na posição ${index}`);
// })

// let pos = 0
// while(pos < dias.length){
//     console.log(dias[pos])
//     pos++
// }

// const quantVoltas = 5
// let voltaAtual = 6
// do {
//     console.log(voltaAtual)
//     voltaAtual++
// } while (voltaAtual <= quantVoltas)

// let data = new Date()
// let valor = document.querySelector("#valor")
// valor.addEventListener('click', function(){
//     console.log(this.getInnerHTML())
// })

// let dia = ''
// for (let index = 0; index < dias.length; index++) {
//     if(index === 3){
//         break
//     }
//     dia += dias[index]+'\n'
// }
// console.log(dia)

let carro = new Object()
carro.modelo = "Fiesta"
carro.ano = 2010
carro.cor = "Verde"
console.log(carro.modelo)