function verificar() {
  var real = document.getElementById('txtreal')
  var dol = Number(real.value) / 5.30

  res.innerHTML = `<br>Posso ter US$ ${dol.toFixed(2)}`
}