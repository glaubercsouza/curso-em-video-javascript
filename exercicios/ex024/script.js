function contar() {
  let res = document.getElementById('resultado')
  res.innerHTML += `<h1>Contagem Regressiva de 10 a 1</h1>`
  
  for (c = 10 ; c > 0 ; c--) {
      res.innerHTML += `${c} &#x1F449 `
  }
  
  /*while (c < 11){
    res.innerHTML += `${c} &#x1F449 `
    c++
  }*/
  
  res.innerHTML += `&#x1F3C1`
}
