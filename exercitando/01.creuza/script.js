function idade() {
  var atual = document.getElementById('txtanoatual')
  var nasc = document.getElementById('txtanonasc')
  var idade = Number(atual.value) - Number(nasc.value)

  res.innerHTML = `<br>Minha idade é ${idade} anos`
}