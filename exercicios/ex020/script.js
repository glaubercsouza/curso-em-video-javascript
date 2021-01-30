function descobrir() {
  let res = document.getElementById('resultado')
  let mes = window.prompt('Digite o mês em extenso (ex: Setembro)')
  let estacao = ``

  switch (mes) {
    case 'Janeiro':
    case 'Fevereiro':
    case 'Março':
    estacao = 'VERÃO'
    break
    case 'Abril':
    case 'Maio':
    case 'Junho':
    estacao = 'OUTONO'
    break
    case 'Julho':
    case 'Agosto':
    case 'Setembro':
    estacao = 'INVERNO'
    break
    case 'Outubro':
    case 'Novembro':
    case 'Dezembro':
    estacao = 'PRIMAVERA'
    break
    default:
    estacao = 'INDEFINIDA'
  }
  res.innerHTML = `<p>No mês de <mark>${mes}</mark>, estamos na estação <mark><strong>${estacao}<strong><mark></p>`
}
