$(function () {
    // $(window).resize(function () {
    //     let w = $(window).width()
    //     let h = $(window).height()
    //     let dimensoes = `Largura: <span class="w"> ${w}</span>&nbsp;X Altura: <span class="h"> ${h} </span>`

    //     $('.container').html(dimensoes)

    //     if (w <= 600) {
    //         $('.w, .h').css({
    //             'background': 'black',
    //             'color': 'white'
    //         })
    //     } else {
    //         $('.w').removeAttr('style')
    //     }
    // })
    // $('form').ready(function () {
    //     $('input[name="nome"]').focus()

    // })
    // $('select').on('change', function () {
    //     let result = $(this).val()
    //     let sexo = (result == 'M') ? 'Você é Homem' : 'Você é Mulher'
    //     console.log(sexo);
    // })
    // $('form').on('submit', function () {
    //     let nome = $('#nome').val()
    //     let rmail = $('#email').val()
    //     let sexo = $('#sexo').val()
    //     let estrutura = `
    //         <ul>
    //             <li>Nome: ${nome}</li>
    //             <li>Email: ${email}</li>
    //             <li>Sexo: ${sexo}</li>
    //         `
    //     $('.container').html(estrutura)
    //     return false
    // })

    // $('#cpf').mask('000.000.000-00')

    $('#estado').ready(function () {
        let options = '<option value="">Selecione</option>'
        $.ajax({
            url: 'https://servicodados.ibge.gov.br/api/v1/localidades/estados',
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                for (const key in data) {
                    options += `<option value="${data[key].sigla}">${data[key].nome}</option>`
                }
                $('#estado').html(options)
            }
        })
    })
    $('#estado').on('change', function () {
        let uf = $(this).val()
        let options = '<option value="">Selecione</option>'
        $.ajax({
            url: `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`,
            type: 'GET',
            dataType: 'json',
            success: function (data) {
                for (const key in data) {
                    options += `<option value="${data[key].nome}">${data[key].nome}</option>`
                }
                $('#cidade').html(options)
            }
        })
    })
})