function calcular() {
  var valor = document.getElementById('txtprod')
  var imposto = (Number(valor.value) * 60) / 100

  res.innerHTML = `<br> O valor do imposto será de US$ ${imposto.toFixed(2)}`
}