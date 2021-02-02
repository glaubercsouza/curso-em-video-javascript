function fatorial() {
  let res = document.getElementById('resultado')
  let n = Number(document.getElementById('numero').value)
  if (n < 1 || n > 21) {
    alert('Digite um número entre 1 e 21')
    res.innerHTML = `<p>Preencha os dados acima e aperte o botão.</p>`
  } else {
    res.innerHTML = `<h1>Calculando ${n}!`
  let fat = 1
  for (c = n ; c >= 2 ; c--) {
    res.innerHTML += `${c} x `
    fat *= c
  }
  res.innerHTML += `1 = <strong>${Number(fat).toLocaleString('pt-BR')}</strong>`
  }
}
