function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('ano')
  var res = document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano) {
    alert('[ERRO] Verifique os dados e tente novamente')
  } else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
      genero = 'um homem'
      if (idade >= 0 && idade < 10){
        img.setAttribute('src', 'crianca-m.png')
      }else if (idade < 21){
        img.setAttribute('src', 'jovem-m.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'adulto-m.png')
      } else {
        img.setAttribute('src', 'idoso-m.png')
      }
    } else if (fsex[1].checked) {
      genero = 'uma mulher'
      if (idade >= 0 && idade < 10){
        img.setAttribute('src', 'crianca-f.png')
      }else if (idade < 21){
        img.setAttribute('src', 'jovem-f.png')
      } else if (idade < 50) {
        img.setAttribute('src', 'adulto-f.png')
      } else {
        img.setAttribute('src', 'idoso-f.png')
      }
    }
    res.style.textAlign = 'center'
    res.innerHTML = `Detectamos ${genero} com ${idade} anos!`
    res.appendChild(img)
  }
}