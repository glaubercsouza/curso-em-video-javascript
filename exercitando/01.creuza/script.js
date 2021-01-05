// Creuza - 1 - Idade
function idade() {
  var atual = document.getElementById('txtanoatual')
  var nasc = document.getElementById('txtanonasc')
  var idade = Number(atual.value) - Number(nasc.value)

  res1.innerHTML = `<br>Minha idade é ${idade} anos`
}

// Creuza - 2 - Moedas
function verificar() {
  var real = document.getElementById('txtreal')
  var dol = Number(real.value) / 5.30

  res2.innerHTML = `<br>Posso ter US$ ${dol.toFixed(2)}`
}


// Creuza - 3 - Temperatura
function converter() {
  var fah = document.getElementById('txtfah')
  var cel = (Number(fah.value)-32) / 1.8

  res3.innerHTML = `<br>No Brasil estaria ${cel.toFixed(1)}°C`
}

// Creuza - 4 - Imposto
function calcular() {
  var valor = document.getElementById('txtprod')
  var imposto = (Number(valor.value) * 60) / 100

  res4.innerHTML = `<br> O valor do imposto será de US$ ${imposto.toFixed(2)}`
}

// Creuza - 5 - Juros
function juros() {
  var emprestimo = document.getElementById('txtval')
  var juros = document.getElementById('txtjur')
  var parcelas = document.getElementById('txtpar')
  var total = ((Number(emprestimo.value) * Number(juros.value) / 100) + Number(emprestimo.value)) / Number(parcelas.value)

  res5.innerHTML = `Vou pagar ${Number(parcelas.value)} parcelas de R$ ${total.toFixed(2).replace('.',',')}`
}