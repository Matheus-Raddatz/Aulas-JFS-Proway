var formulario = document.forms[0]
formulario.addEventListener("submit", function(){
    let insert = `<p>${formulario.a.value}<p>`
    document.querySelector('#valor').innerHTML = insert
})

formulario.addEventListener("keyup", function(){
    formulario.a.value = formulario.a.value.toUpperCase()
})

let div = document.querySelector("#valor")

div.addEventListener("click", function(){
    let p = div.querySelector('p')
    div.innerHTML = div.getInnerHTML() + div.getInnerHTML()
})