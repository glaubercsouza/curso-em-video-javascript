function adicionar() {
  var numeroadd = document.getElementById('txtadd')
  var numeros = document.getElementById('txtnum')
  num = Number(numeroadd.value)
  if (num < 1 || num > 100) {
    alert('Valor inválido ou já encontrado na lista')
  } else {
    let n = []
    n.push(num)
    var add = document.createElement('option')
    add.text = `Valor ${n} adicionado`
    add.value = `numeros${n}`
    numeros.appendChild(add)
  }
}

function finalizar() {
  if (n.value.length == '0') {
    alert('Adicione valores antes de finalizar')
  }
}
