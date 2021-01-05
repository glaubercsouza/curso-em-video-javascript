function calcular() {
  var emprestimo = document.getElementById('txtval')
  var juros = document.getElementById('txtjur')
  var parcelas = document.getElementById('txtpar')
  var total = ((Number(emprestimo.value) * Number(juros.value) / 100) + Number(emprestimo.value)) / Number(parcelas.value)

  res.innerHTML = `Vou pagar ${Number(parcelas.value)} parcelas de R$ ${total.toFixed(2)}`
}