function verificar() {
  var país = document.getElementById('txtpais')
  var res = document.getElementById('res')
  var paísB = (país.value.toLowerCase())
  if (paísB == "brasil") {
    res.innerHTML = `<p>Você é <strong>BRASILEIRO!</strong></p>`
  } else {
    res.innerHTML = `<p>Você é <strong>ESTRANGEIRO</strong></p>`
  }
}