function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (txtano.value.length == 0 || txtano.value > ano) {
        window.alert('[ERRO] verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(txtano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-homem.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-homem.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-homem.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //criança
                img.setAttribute('src', 'imagens/bebe-mulher.jpg')
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'imagens/jovem-mulher.jpg')
            } else if (idade < 50) {
                //adulto
                img.setAttribute('src', 'imagens/adulto-mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'imagens/idoso-mulher.jpg')
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}