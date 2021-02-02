function tabuada() {
  let res = document.getElementById('resultado')
  let n = Number(document.getElementById('numero').value)
  res.innerHTML = `<h1>Tabuada de ${n}`
  for (c = 1 ; c <= 10 ; c++) {
    res.innerHTML += `${n} x ${c} = <strong>${n * c}</strong><br>`
  }
}


// &#x1F449 - Mão

// &#x1F3C1 - Bandeira