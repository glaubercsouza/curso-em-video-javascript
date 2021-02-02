function contar() {
  let res = document.getElementById('resultado')
  let n1 = Number(document.getElementById('numero1').value)
  let n2 = Number(document.getElementById('numero2').value)
  res.innerHTML = `<p>Preencha os dados acima e aperte o botão.</p>`
  res.innerHTML += `<h1>Contando de ${n1} até ${n2}`
  if (n1 > n2) {
    for (c = n1 ; c >= n2 ; c--) {
      res.innerHTML += `${c} &#x1F449`
    }
  } else {
    for (c = n1 ; c <= n2 ; c++) {
      res.innerHTML += `${c} &#x1F449`
    }
  }
  res.innerHTML += `&#x1F3C1`
}


// &#x1F449 - Mão

// &#x1F3C1 - Bandeira