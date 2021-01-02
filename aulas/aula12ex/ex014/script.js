function carregar(){
  var msg = document.getElementById('msg')
  var img = document.getElementById('imagem')
  var data = new Date()
  var hora = data.getHours()
  var min = data.getMinutes()
  msg.innerHTML = `Agora são ${hora}:${min} `
  if (hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.background = '#ffd244'
  } else if (hora < 18) {
    img.src = 'tarde.png'
    document.body.style.background = '#6a81a3'
  } else {
    img.src = 'noite.png'
    document.body.style.background = '#3178ac'
  }
}


