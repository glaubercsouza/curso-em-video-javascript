function contar() {
  let res = document.getElementById('resultado')
  let n = Number(document.getElementById('numero').value)
  res.innerHTML = `<p>Preencha os dados acima e aperte o botão.</p>`
  if (n < 0){
    alert('Digite um número positivo')
  } else {
    res.innerHTML += `<h1>Contando de 0 até ${n}</h1>`
  for (c = 0 ; c <= n ; c++) {
      res.innerHTML += `${c} &#x1F449`
    }
    res.innerHTML += `&#x1F3C1`
  }
}

